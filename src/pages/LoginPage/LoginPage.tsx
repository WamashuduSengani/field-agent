import React from "react";
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
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
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
      </Box>
    </Container>
  );
};

export default LoginPage;
