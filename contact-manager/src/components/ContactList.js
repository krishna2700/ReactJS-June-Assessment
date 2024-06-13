import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getContacts,
  deleteContact,
  searchContacts,
} from "../services/contactService";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

const ContactList = () => {
  const [contacts, setContacts] = useState(getContacts());
  const [searchEmail, setSearchEmail] = useState("");

  useEffect(() => {
    setContacts(getContacts());
  }, []);

  const handleDelete = (id) => {
    deleteContact(id);
    setContacts(getContacts());
  };

  const handleSearch = (e) => {
    setSearchEmail(e.target.value);
    if (e.target.value === "") {
      setContacts(getContacts());
    } else {
      setContacts(searchContacts(e.target.value));
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Contact List
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          label="Search by email"
          variant="outlined"
          value={searchEmail}
          onChange={handleSearch}
          style={{ marginRight: "20px", flexGrow: 1 }}
        />
        <Button variant="contained" color="primary" component={Link} to="/add">
          Add Contact
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(contact.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/contact/${contact.id}`}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ContactList;
