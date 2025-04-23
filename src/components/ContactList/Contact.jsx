import css from "./contact.module.css";
const Contact = ({ DataItem: { name, number, id }, onDeleteToContact }) => {
  return (
    <>
      <div className={css.container}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          className={css.deleteButton}
          onClick={() => onDeleteToContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Contact;
