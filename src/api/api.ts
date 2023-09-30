import axios from 'axios';
import { Customer } from '../types/common';

const API_URL = 'https://mocki.io/v1/dc103a28-f26d-4b4d-9b75-f99e14102676';


  export const fetchCustomers = async (): Promise<Customer[]> => {
    try {
      const response = await axios.get(API_URL);
      console.log("data", response.data.users)
      return response.data.users as Customer[];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };


  
  
  
  
  

  
  
  
  
  
  
