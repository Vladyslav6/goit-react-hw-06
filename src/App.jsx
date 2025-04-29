import ContactFrom from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/ContactSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const itemContact = useSelector((state) => state.item.contacts.items);
  const FilterContactNew = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const FilterContact = itemContact.filter((item) =>
    item.name.toLowerCase().includes(FilterContactNew.toLowerCase())
  );

  const handleChangeQuery = (value) => {
    dispatch(changeFilter(value));
  };
  const AddContacts = (newContact) => {
    dispatch(addContact(newContact));
  };
  const DeleteContact = (onDeleteId) => {
    dispatch(deleteContact(onDeleteId));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom addToContact={AddContacts} />
        <SearchBox handleChangeQuery={handleChangeQuery} />
        <ContactList
          StateContactItem={FilterContact}
          onDeleteToContact={DeleteContact}
        />
      </div>
    </>
  );
}

export default App;
