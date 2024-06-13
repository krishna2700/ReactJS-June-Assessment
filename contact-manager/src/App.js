import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddContact from "./components/AddContact";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
      <Route path="/add" element={<AddContact />} />
    </Routes>
  </Router>
);

export default App;
