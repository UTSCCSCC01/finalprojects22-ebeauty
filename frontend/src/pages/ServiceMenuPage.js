import {
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../css/ServiceMenuPage.css";
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Amorr Salon",
    desc: "Man's Haircut booked on July 23, 2022",
    price: 18.99,
  },
  {
    name: "Fresh Massage",
    desc: "Woman's Manicure booked on July 25, 2022",
    price: 21.99,
  },
  {
    name: "Lily Makeup Shop",
    desc: "Womans Makeup booked on August 5, 2022",
    price: 45.99,
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#e27b7b",
    },
    secondary: {
      main: "#e27b7b",
    },
  },
});

const ServiceMenuPage = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/checkout-address", { state: selectedService });
  };

  const onClickCheckbox = (e) => {
    const selectedServiceName = e.target.value;
    services.forEach((service) => {
      if (service.name === selectedServiceName) {
        setSelectedService({ name: service.name, price: service.price, desc: service.desc });
      }
    });
  };

  const [selectedService, setSelectedService] = useState({});

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Available Services
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup defaultValue="female">
                  {services.map((service) => (
                    <FormControlLabel
                      className="formControlLabelStyle"
                      value={service.name}
                      control={<Radio onClick={onClickCheckbox}/>}
                      label={`${service.name} - $${service.price}`}
                      labelPlacement="start"
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              {/* Checkbox version for multiple selections */}
              {/* <Typography variant="h6" gutterBottom>
                Available Services
              </Typography>
              <FormControl component="fieldset">
                <FormGroup defaultValue="female">
                  {services.map((service) => (
                    <FormControlLabel
                      className="formControlLabelStyle"
                      value={service.name}
                      control={<Checkbox onClick={onClickCheckbox}/>}
                      label={`${service.name} - $${service.price}`}
                      labelPlacement="start"
                    />
                  ))}
                </FormGroup>
              </FormControl> */}
            </React.Fragment>

            <React.Fragment>
              <React.Fragment>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    className="checkout"
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    style={{ color: "white" }}
                    onClick={onClickButton}
                  >
                    Checkout
                  </Button>
                </Box>
              </React.Fragment>
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ServiceMenuPage;
