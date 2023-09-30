import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from '@mui/icons-material/Person';

interface CustomerCardProps {
  id: number;
  name: string;
  lastname: string;
  location: string;
}

const CustomerCard = ({ id, name, lastname, location }: CustomerCardProps) => {
  const customerDetailURL = `/customer/${id}`;

  return (
    <Card
      component={Link}
      to={customerDetailURL}
      style={{ textDecoration: "none" }}
      sx={{
        width: "200px",
        minHeight: "20px",
        marginBottom: "16px",
      }}
    >
      <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" style={{ marginBottom: '4px' }}>
        <PersonIcon style={{ marginRight: '8px' }} /> 
          {name} {lastname}
        </Typography>
        <Typography style={{ display: 'flex', alignItems: 'center', paddingTop:"15px" }}>
          <LocationOnIcon style={{ paddingBottom: '25px', color:'#FF2400' }} />
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
