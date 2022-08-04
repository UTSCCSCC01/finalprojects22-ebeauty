import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import StarIcon from '@mui/icons-material/StarBorder';
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { color } from "@mui/system";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 Private Messages",
      "1 GB of Storage",
      "Help Center Access",
      "24/7 Email Support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "contained",
  },
  {
    title: "Standard",
    price: "15",
    description: [
      "Unlimited Private Messages",
      "10 GB of Storage",
      "Priority Help Center Access",
      "Priority Email Support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Corporate",
    price: "30",
    description: [
      "50 Experts Included",
      "100 GB of Storage",
      "Custom Ad Posting",
      "5 Free Service Delivery",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
          Are you a beauty expert?
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Join Amorr today to expand your business!
        </Typography>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="md" component="main">
        <Box mb={10}>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center", color: "white" }}
                    sx={{
                      backgroundColor: "#e27b7b",
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography component="h2" variant="h3" color="text.primary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      sx={{ backgroundColor: "#e27b7b", color: "white", ':hover': {
                        bgcolor: 'rgb(218, 82, 105)',
                        color: 'white',
                      } }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
