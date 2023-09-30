import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { Customer } from '../../types/common'; // Import your Customer type
import { fetchCustomers } from '../../api/api'; // Import the fetchCustomers function

const defaultMapProps = {
  center: [51.505, -0.09],
  zoom: 5,
};

const MapPage = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    // Fetch customer data when the component mounts
    fetchCustomers()
      .then((customerList) => {
        setCustomers(customerList);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4">Map</Typography>
      <Box height="500px" mt={2}>
        <MapContainer
          {...defaultMapProps}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {customers.map((customer) => (
            <Marker
              key={customer.id}
              position={customer.location}
            >
              <Popup>
                <div>
                  <strong>{customer.name} {customer.lastname}</strong>
                  <br />
                  Location: {customer.location}
                  <br />
                  Phone: {customer.phone}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Container>
  );
};

export default MapPage;
