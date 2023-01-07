import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "react-credit-cards";
import InputMask from "react-input-mask";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import "react-credit-cards/es/styles-compiled.css";
//import "./styles.css";

const currencies = [
  {
    value: "full",
    label: "Full Amount",
  },
  {
    value: "custom",
    label: "Custom Amount",
  },
];

export default function PaymentForm() {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [amountType, setAmountType] = useState("");
  const [amount, setAmount] = useState("");
  const balance = 5000;
  const handleInputFocus = ({ target }) => {
    setFocused(target.id);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <Card
        locale={{
          valid: "Expire",
        }}
        placeholders={{
          name: "Your name",
        }}
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={console.log}
      />
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 2,
        }}
        xs={12}
        md={6}
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Typography>
            Your application is the first step to your new future. You'll need
            about{" "}
            <Typography component="span" variant="h5">
              30 seconds
            </Typography>{" "}
            to complete your portion. Relax,{" "}
            <Typography component="span" variant="h5">
              no payment
            </Typography>{" "}
            or{" "}
            <Typography component="span" variant="h5">
              commitment
            </Typography>{" "}
            will be required during the application process.
          </Typography>
        </Box>
        <Box
          component="form"
          Validate
          //  onSubmit={handleSubmit}
          sx={{ mt: 3, p: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Select"
                helperText="Please select your amount type"
              >
                {currencies.map((option) => (
                  <MenuItem
                    onClick={() => {
                      console.log(option.value);
                      setAmountType(option.value);
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="Amount"
                label="Amount"
                name="Amount"
                autoComplete="family-name"
                type="number"
                defaultValue={amountType === "full" ? balance : amount}
                disabled={amountType ? false : true}
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="9999 9999 9999 9999"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                disabled={false}
                maskChar=" "
              >
                {() => (
                  <TextField
                    id="number"
                    fullWidth
                    label="Número"
                    onFocusCapture={handleInputFocus}
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                fullWidth
                label="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocusCapture={handleInputFocus}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputMask
                mask="99/99"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                disabled={false}
                maskChar=" "
              >
                {() => (
                  <TextField
                    id="expiry"
                    fullWidth
                    label="Validade"
                    onFocusCapture={handleInputFocus}
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputMask
                mask="999"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                disabled={false}
                maskChar=" "
              >
                {() => (
                  <TextField
                    id="cvc"
                    fullWidth
                    label="CVC"
                    onFocusCapture={handleInputFocus}
                  />
                )}
              </InputMask>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            //onClick={navigateToHome}
          >
            submit
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
