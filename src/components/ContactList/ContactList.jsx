import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";

const ContactList = ({ StateContactItem, onDeleteToContact }) => {
  // const itemContact = useSelector((state) => state.item.contacts.items);
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

// const ContactList = ({ StateContactItem, onDeleteToContact }) => {
//   const itemContact = useSelector((state) => state.item.contacts.items);
//   return (
//     <>
//       <ul className={css.listItem}>
//         {StateContactItem.map((item) => (
//           <li key={item.id}>
//             <Contact DataItem={item} onDeleteToContact={onDeleteToContact} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default ContactList;
