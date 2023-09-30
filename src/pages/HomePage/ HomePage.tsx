import React, { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, Box } from "@mui/material";
import { fetchCustomers } from "../../api/api";
import { Customer } from "../../types/common";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";

const HomePage = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [showFilteredCustomers, setShowFilteredCustomers] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Customer[]>([]);
  console.log("Recently viewed", recentlyViewed);

  useEffect(() => {
    fetchCustomers()
      .then((customerList) => {
        setCustomers(customerList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (searchTerm: string) => {
    // Filtering customers based on the search term
    const filtered: Customer[] = customers.filter((customer) =>
      `${customer.name} ${customer.location}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
    setShowFilteredCustomers(true);
  };

  const handleCustomerView = (customerId: number) => {
    // Finding the customer by ID
    const customer = customers.find((customer) => customer.id === customerId);
    if (customer) {
      // Updating the recently viewed list (limit to 5 items)
      setRecentlyViewed((prevRecentlyViewed) => {
        const updatedList = [customer, ...prevRecentlyViewed.slice(0, 4)]; // Keeping up to 5 items
        return updatedList;
      });
    }
  };

  return (
    <Container sx={{ textAlign: "center", mt: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Customer List
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {(showFilteredCustomers ? filteredCustomers : customers).map(
          (customer) => (
            <ListItem
              key={customer.id}
              button
              sx={{
                width: "200px",
                height: "300px",
                margin: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleCustomerView(customer.id)}
            >
              <CustomerCard
                id={customer.id}
                name={customer.name}
                lastname={customer.lastname}
                location={customer.location}
              />
            </ListItem>
          )
        )}
      </List>
      <Box sx={{ marginY: 2 }}>
        <RecentlyViewed recentlyViewed={recentlyViewed} />
      </Box>
    </Container>
  );
};

export default HomePage;
