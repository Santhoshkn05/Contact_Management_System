import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts } from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">
        Contact Management System
      </h2>

      <ContactForm refreshContacts={loadContacts} />

      <ContactList
        contacts={contacts}
        refreshContacts={loadContacts}
      />
    </div>
  );
}

export default App;
