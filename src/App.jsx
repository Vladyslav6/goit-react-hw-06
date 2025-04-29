import { useEffect, useState } from "react";
import ContactFrom from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction } from "./redux/actions,js";
import { addContact, deleteContact } from "./redux/newContactSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const itemContact = useSelector((state) => state.item.contacts.items);
  const FilterContactNew = useSelector((state) => state.filter.filter);
  console.log(itemContact);
  const dispatch = useDispatch();

  // const [Contacts, SetContacts] = useState(() => {
  //   const ObjectSave = window.localStorage.getItem("setSaveObject");
  //   if (ObjectSave !== null) {
  //     return JSON.parse(ObjectSave);
  //   }
  //   return itemContact;
  // });

  const [FilterItem, SetFilter] = useState("");

  const FilterContact = itemContact.filter((item) =>
    item.name.toLowerCase().includes(FilterContactNew.toLowerCase())
  );

  //
  //
  const handleChangeQuery = (value) => {
    dispatch(changeFilter(value));
  };
  //
  const AddContacts = (newContact) => {
    dispatch(addContact(newContact));
    // console.log(dispatch(addContact()));
    // dispatch({ type: "addContact" });
    // SetContacts((prevContact) => {
    //   return [...prevContact, newContact];
    // });
  };
  const DeleteContact = (onDeleteId) => {
    console.log(onDeleteId);
    dispatch(deleteContact(onDeleteId));
    // SetContacts((prevContact) => {
    //   return prevContact.filter((item) => item.id !== onDeleteId);
    // });
  };
  // useEffect(() => {
  //   window.localStorage.setItem("setSaveObject", JSON.stringify(Contacts));
  // }, [Contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom addToContact={AddContacts} />
        <SearchBox
          handleChangeQuery={handleChangeQuery}
          OnChangeFilter={SetFilter}
        />
        <ContactList
          StateContactItem={FilterContact}
          onDeleteToContact={DeleteContact}
        />
      </div>
    </>
  );
}

export default App;
