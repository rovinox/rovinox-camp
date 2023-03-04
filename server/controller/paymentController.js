const Student = require("../model/student");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_API_KEY);

const payment = async (req, res, next) => {
  const { cvc, expiry, number, amount, name, zipCode, email } = req.body;
  console.log("email", email);
  let monthAndYear = expiry.split("/");

  var param = {};
  param.card = {
    number,
    exp_month: `${monthAndYear[0]}`,
    exp_year: `${monthAndYear[1]}`,
    cvc,
    name,
    // "address_city": null,
    // "address_country": null,
    // "address_line1": null,
    // "address_line1_check": null,
    // "address_line2": null,
    // "address_state": null,
    address_zip: zipCode,
  };
  console.log("exp", {
    exp_month: `${monthAndYear[0]}`,
    exp_year: `${monthAndYear[1]}`,
  });
  const cardInfo = {};

  stripe.tokens.create(param, function (err, token) {
    if (err) {
      console.log("err: " + err);
      res.status(500).json({ message: err });
    }
    if (token) {
      console.log("success: tt " + JSON.stringify(token, null, 2));
      var param = {
        amount: amount * 100,
        currency: "usd",
        description: "Payment to Rovinox",
        source: token.id,
      };

      stripe.charges.create(param, async function (err, charge) {
        if (err) {
          console.log("err: " + err);
          res.status(500).json({ message: err });
        }
        if (charge) {
          console.log("success: charge" + JSON.stringify(charge, null, 2));
          cardInfo.receiptURL = charge.receipt_url;
          try {
            if (amount) {
              const foundUser = await Student.findOne({ email });
              console.log("foundUser: ", foundUser);

              let newBalance = foundUser.balance - amount;
              foundUser["newBalance"] = newBalance;
              if (foundUser) {
                cardInfo.firstName = foundUser.firstName;
                const foundUser2 = await Student.findOneAndUpdate(
                  { email },
                  { balance: newBalance }
                );
                foundUser2.save();
              }
              res.locals.cardInfo = cardInfo;
            }
            next();
            // console.log(result);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
        } else {
          console.log("Something wrong");
        }
      });
    } else {
      console.log("Something wrong");
    }
  });
};

module.exports = { payment };
