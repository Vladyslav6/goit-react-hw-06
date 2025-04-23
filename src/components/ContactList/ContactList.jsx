import Contact from "./Contact";
import css from "./ContactList.module.css";
const ContactList = ({ StateContactItem, onDeleteToContact }) => {
  return (
    <>
      <ul className={css.listItem}>
        {StateContactItem.map((item) => (
          <li key={item.id}>
            <Contact DataItem={item} onDeleteToContact={onDeleteToContact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
