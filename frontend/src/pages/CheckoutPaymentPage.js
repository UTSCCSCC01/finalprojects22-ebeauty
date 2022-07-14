import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Container,
  createTheme,
  Input,
  MenuItem,
  Paper,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

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

export default function CheckoutPaymentPage() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;

  const months = [
    {
      value: "Jan",
      label: "01",
    },
    {
      value: "Feb",
      label: "02",
    },
    {
      value: "Mar",
      label: "03",
    },
    {
      value: "Apr",
      label: "04",
    },
    {
      value: "May",
      label: "05",
    },
    {
      value: "Jun",
      label: "06",
    },
    {
      value: "Jul",
      label: "07",
    },
    {
      value: "Aug",
      label: "08",
    },
    {
      value: "Sep",
      label: "09",
    },
    {
      value: "Oct",
      label: "10",
    },
    {
      value: "Nov",
      label: "11",
    },
    {
      value: "Dec",
      label: "12",
    },
  ];

  const years = [
    {
      value: "22",
      label: "22",
    },
    {
      value: "23",
      label: "23",
    },
    {
      value: "24",
      label: "24",
    },
    {
      value: "25",
      label: "25",
    },
    {
      value: "26",
      label: "26",
    },
    {
      value: "27",
      label: "27",
    },
    {
      value: "28",
      label: "28",
    },
    {
      value: "29",
      label: "29",
    },
    {
      value: "30",
      label: "30",
    }
  ];

  const resetInput = () => {
    setNameOnCard("");
    setCardNumber("");
    setCvv("");
    setExpiryMonth("");
    setExpiryYear("");
  };

  function handleChange(e) {
    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
    if (onlyNums.length < 16) {
        this.setState({ value: onlyNums });
    } else if (onlyNums.length === 16) {
        const number = onlyNums.replace(
            /(\d{4})(\d{4})(\d{4})(\d{4})/,
            '$1 $2 $3 $4'
        );
        this.setState({ value: number });
    }
}

  const handleNext = (e) => {
    e.preventDefault();

    // input validation
    if (/\d/.test(nameOnCard) || isNaN(cardNumber)) return resetInput();

    const payment = {nameOnCard, cardNumber, expiryMonth, expiryYear, cvv}

    data.payment = payment;

    navigate("/checkout-review", {state: {data: data}});
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <React.Fragment>
            <Stepper activeStep={1} sx={{ pt: 3, pb: 5 }}>
              <Step>
                <StepLabel>Mailing Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payment details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Review your order</StepLabel>
              </Step>
            </Stepper>
            <Typography variant="h6" gutterBottom>
              Payment method
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cardName"
                  label="Name on card"
                  fullWidth
                  autoComplete="cc-name"
                  variant="standard"
                  onChange={(e) => setNameOnCard(e.target.value)}
                  value={nameOnCard}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cardNumber"
                  label="Card number"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  onChange={(e) => setCardNumber(e.target.value)}
                  value={cardNumber}
                  inputProps={{ maxLength: 16 }}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  required
                  select
                  id="expMonth"
                  label="Month"
                  fullWidth
                  autoComplete="cc-exp-month"
                  variant="standard"
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  value={expiryMonth}
                >
                  {months.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  required
                  select
                  id="expYear"
                  label="Year"
                  fullWidth
                  autoComplete="cc-exp-year"
                  variant="standard"
                  onChange={(e) => setExpiryYear(e.target.value)}
                  value={expiryYear}
                >
                  {years.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cvv"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                  variant="standard"
                  onChange={(e) => setCvv(e.target.value)}
                  value={cvv}
                  inputProps={{ maxLength: 3 }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                  label="Remember credit card details for next time"
                />
              </Grid> */}
            </Grid>
            <React.Fragment>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  className="checkout"
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  style={{ color: "white" }}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Box>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
