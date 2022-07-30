import {
  Box,
  Button,
  Container,
  createTheme,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import "../css/ServiceMenuPage.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const services = [
  {
    name: "Amorr Salon",
    price: 18.99,
  },
  {
    name: "Fresh Massage",
    price: 21.99,
  },
  {
    name: "Lily Makeup Shop",
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
  const location = useLocation();
  const providerName = location.state;

  const onClickButton = () => {
    navigate("/checkout-address", { state: { service: selectedService, dateTime: dateTime } });
  };

  const onClickCheckbox = (e) => {
    const selectedServiceName = e.target.value;
    services.forEach((service) => {
      if (service.name === selectedServiceName) {
        const date = dateTime.getDate();
        const month = dateTime.getMonth();
        const year = dateTime.getFullYear();
        const hour = dateTime.getHours();
        const minutes = dateTime.getMinutes();

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        service.desc = `Scheduled at ${hour}:${minutes} on ${months[month + 1]} ${date}, ${year}`;

        setSelectedService({ name: service.name, price: service.price, desc: service.desc });
      }
    });
  };

  const [selectedService, setSelectedService] = useState({});
  const [dateTime, setDateTime] = useState(new Date());
  //
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container md={6}>
          <Typography variant="h2">{providerName}</Typography>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Grid
              container
              component="main"
              // maxWidth="md"
              sx={{ mb: 4 }}
              spacing={20}
              justifyContent={"center"}
            >
              <Grid item>
                <Typography variant="h6" gutterBottom align="center">
                  Available Services
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup>
                    {services.map((service) => (
                      <FormControlLabel
                        className="formControlLabelStyle"
                        value={service.name}
                        control={<Radio onClick={onClickCheckbox} />}
                        label={`${service.name} - $${service.price}`}
                        labelPlacement="start"
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item>
                <Typography variant="h6" gutterBottom align="center">
                  Select Date and Time
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Appointment Date and Time"
                    value={dateTime}
                    onChange={(newValue) => {
                      setDateTime(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
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
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ServiceMenuPage;
