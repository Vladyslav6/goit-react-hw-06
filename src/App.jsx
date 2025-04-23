import { useEffect, useState } from "react";
import ContactFrom from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";

function App() {
  const [Contacts, SetContacts] = useState(() => {
    const ObjectSave = window.localStorage.getItem("setSaveObject");
    if (ObjectSave !== null) {
      return JSON.parse(ObjectSave);
    }
    return ContactHomeWork;
  });

  const [FilterItem, SetFilter] = useState("");

  const FilterContact = Contacts.filter((item) =>
    item.name.toLowerCase().includes(FilterItem.toLowerCase())
  );
  const AddContacts = (newContact) => {
    SetContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const DeleteContact = (onDeleteId) => {
    SetContacts((prevContact) => {
      return prevContact.filter((item) => item.id !== onDeleteId);
    });
  };
  useEffect(() => {
    window.localStorage.setItem("setSaveObject", JSON.stringify(Contacts));
  }, [Contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom addToContact={AddContacts} />
        <SearchBox value={FilterItem} OnChangeFilter={SetFilter} />
        <ContactList
          StateContactItem={FilterContact}
          onDeleteToContact={DeleteContact}
        />
      </div>
    </>
  );
}

export default App;
