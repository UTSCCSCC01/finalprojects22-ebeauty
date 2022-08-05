// import Grid from "@material-ui/core/Grid";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUpGuidePage() {

  const navigate = useNavigate();

  const customerSignUp = () => {
    navigate("/signup");
  }
  const providerSignUp = () => {
    navigate("/signupproviderone")
  }
  return (
    <>
      <Typography align="center" variant="h2" mb={10} mt={10}>
        Welcome to Amorr!
      </Typography>
      <Container>
        <Grid container>
          <Grid item xs={6} textAlign="center" sx={{paddingLeft: "160px"}}>
            <Typography variant="h5">Are you a customer?</Typography>
            <Button
              variant="contained"
              sx={{
                marginBottom: "50px",
                marginTop: "50px",
                backgroundColor: "#e27b7b",
                color: "white",
                ":hover": {
                  bgcolor: "rgb(218, 82, 105)",
                  color: "white",
                },
              }}
              onClick={customerSignUp}
            >
              Sign Up Here
            </Button>
          </Grid>
          <Grid item xs={6} textAlign="center" sx={{paddingRight: "160px"}}>
            <Typography variant="h5">Are you a beauty expert?</Typography>
            <Button
              variant="contained"
              sx={{
                marginBottom: "50px",
                marginTop: "50px",
                backgroundColor: "#e27b7b",
                color: "white",
                ":hover": {
                  bgcolor: "rgb(218, 82, 105)",
                  color: "white",
                },
              }}
              onClick={providerSignUp}
            >
              Sign Up Here
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
