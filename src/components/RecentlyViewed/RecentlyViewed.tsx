import React from "react";
import { Typography, List, ListItem } from "@mui/material";
import { Customer } from "../../types/common";
import CustomerCard from "../../components/CustomerCard/CustomerCard";

interface RecentlyViewedProps {
  recentlyViewed: Customer[];
}

const RecentlyViewed = ({ recentlyViewed }: RecentlyViewedProps) => {
  return (
    <>
      <Typography variant="h6" color="black">
        Recently Viewed
      </Typography>
      <List>
        {recentlyViewed.map((customer) => (
          <ListItem key={customer.id}>
            <CustomerCard
              id={customer.id}
              name={customer.name}
              lastname={customer.lastname}
              location={customer.location}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default RecentlyViewed;
