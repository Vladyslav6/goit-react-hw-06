import css from "./SearchBox.module.css";
const SearchBox = ({ value, OnChangeFilter }) => {
  return (
    <>
      <div className={css.SearchBlock}>
        <p>Find contact by name</p>
        <input
          className={css.inputSearch}
          type="text"
          value={value}
          onChange={(e) => OnChangeFilter(e.target.value)}
        ></input>
      </div>
    </>
  );
};
export default SearchBox;
