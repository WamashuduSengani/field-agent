import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [error, setError] = useState(""); 

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const response = await fetch("https://api.mocki.io/v2/3228ffe5", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Redirecting to the Home Page upon successful login
        navigate("/home");
      } else {
        // Handle authentication errors
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during authentication.");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="username"
                  type="text"
                  as={TextField}
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
                <Box p={1}>
                  <ErrorMessage name="username" component="div" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
                <Box p={1}>
                  <ErrorMessage name="password" component="div" />
                </Box>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </Form>
        </Formik>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
