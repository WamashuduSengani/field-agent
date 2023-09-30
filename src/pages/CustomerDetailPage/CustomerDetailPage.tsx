import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CustomerDetailPage = () => {
  const validationSchema = Yup.object().shape({
    customerName: Yup.string().required('Customer name is required'),
    location: Yup.string().required('Location is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  
  });


  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Typography variant="h4">Customer Details</Typography>
      <Formik
        initialValues={{
          customerName: 'John Doe',
          location: 'New York, USA',
          email: 'john.doe@example.com',
          phone: '1234567890',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="customerName"
                type="text"
                as={TextField}
                label="Customer Name"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="customerName" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="location"
                type="text"
                as={TextField}
                label="Location"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="location" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="phone"
                type="text"
                as={TextField}
                label="Phone"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="phone" component="div" />
            </Grid>
          </Grid>
          {/* Add more form fields as needed */}
          <Button type="submit" variant="contained" color="primary">
            Update Customer
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default CustomerDetailPage;
