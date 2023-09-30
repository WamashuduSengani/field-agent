import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CustomerCreationPage from "./pages/CustomerCreationPage/CustomerCreationPage";
import CustomerDetailPage from "./pages/CustomerDetailPage/CustomerDetailPage";
import HomePage from "./pages/HomePage/ HomePage";
import MapPage from "./pages/MapPage/ MapPage";
import Sidebar from "./components/Sidebar/SideBar";
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient();

// Create a function to check if the user is authenticated
const isAuthenticated = () => {
  const token = queryClient.getQueryData("authenticationToken");
  return !!token;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Sidebar />
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/create-customer"
          element={
            isAuthenticated() ? (
              <CustomerCreationPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/customer/:id"
          element={
            isAuthenticated() ? (
              <CustomerDetailPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/map"
          element={isAuthenticated() ? <MapPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
