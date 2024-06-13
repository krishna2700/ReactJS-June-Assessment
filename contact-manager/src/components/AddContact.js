import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../services/contactService";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    navigate("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
    >
      <Paper
        elevation={3}
        style={{ padding: "20px", maxWidth: "500px", width: "100%" }}
      >
        <Typography variant="h4" gutterBottom>
          Add Contact
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={contact.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={contact.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={contact.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={contact.address}
            onChange={handleChange}
            required
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
            <Button variant="contained" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddContact;
