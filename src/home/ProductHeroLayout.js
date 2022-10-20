import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import vid1 from "../asset/vid1.mp4";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "100vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

function ProductHeroLayout(props) {
  const { children, setLoading } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -2,
          }}
        >
          <video muted loop autoPlay onLoadedData={() => setLoading(false)}>
            <source src={vid1} type="video/mp4" />
          </video>
        </Box>
      </Container>
    </ProductHeroLayoutRoot>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
};

export default ProductHeroLayout;
