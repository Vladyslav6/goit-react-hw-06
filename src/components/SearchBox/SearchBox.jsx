import css from "./SearchBox.module.css";
const SearchBox = ({ handleChangeQuery }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.inputSearch}
        type="text"
        onChange={(e) => handleChangeQuery(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
