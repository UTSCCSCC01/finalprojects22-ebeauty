import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Container,
  createTheme,
  Paper,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const products = [
  {
    name: "Amorr Salon",
    desc: "Man's Haircut booked on July 23, 2022",
    price: "$18.99",
  },
  {
    name: "Fresh Massage",
    desc: "Woman's Manicure booked on July 25, 2022",
    price: "$21.99",
  },
  {
    name: "Lily Makeup Shop",
    desc: "Womans Makeup booked on August 5, 2022",
    price: "$45.99",
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

export default function CheckoutReviewPage() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  const handleSubmitOrder = async () => {
    console.log("submit button clicked");
    await fetch("/api/orders/save-order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const addresses = [
    data.address.addressOne,
    data.address.addressTwo,
    data.address.city,
    data.address.postalCode,
    data.address.province,
    data.address.country,
  ];
  const payments = [
    { name: "Card holder", detail: data.payment.nameOnCard },
    { name: "Card number", detail: data.payment.cardNumber },
    { name: "Expiry date", detail: `${data.payment.expiryMonth}/${data.payment.expiryYear}` },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <React.Fragment>
            <Stepper activeStep={2} sx={{ pt: 3, pb: 5 }}>
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
              Order summary
            </Typography>
            <List disablePadding>
              {/* {products.map((product) => (
                <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={product.name} secondary={product.desc} />
                  <Typography variant="body2">{product.price}</Typography>
                </ListItem>
              ))} */}
              <ListItem key={data.orderName} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={data.orderName} secondary={data.orderDesc} />
                <Typography variant="body2">{data.orderPrice}</Typography>
              </ListItem>

              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {data.orderPrice}
                </Typography>
              </ListItem>
            </List>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Service Address
                </Typography>
                <Typography gutterBottom>
                  {data.firstName} {data.lastName}{" "}
                </Typography>
                <Typography gutterBottom>{addresses.join(", ")}</Typography>
              </Grid>
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Payment details
                </Typography>
                <Grid container>
                  {payments.map((payment) => (
                    <React.Fragment key={payment.name}>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{payment.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{payment.detail}</Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <React.Fragment>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  className="checkout"
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  style={{ color: "white" }}
                  onClick={handleSubmitOrder}
                >
                  Order
                </Button>
              </Box>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
