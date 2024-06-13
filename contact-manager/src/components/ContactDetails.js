import React from "react";
import { Link, useParams } from "react-router-dom";
import { getContactById } from "../services/contactService";
import { Box, Typography, Paper, Button } from "@mui/material";

const ContactDetails = () => {
  const { id } = useParams();
  const contact = getContactById(parseInt(id));

  if (!contact) {
    return <Typography variant="h6">Contact not found</Typography>;
  }

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
          Contact Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Name:</strong> {contact.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {contact.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Phone:</strong> {contact.phone}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Address:</strong> {contact.address}
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" component={Link} to="/">
            Back to list
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactDetails;
