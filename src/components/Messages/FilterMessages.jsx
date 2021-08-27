import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DarkThemesFromChat.module.css";
import { setFilterMessages, setSearchForm } from '../../redux/ducks/messages';

function FilterMessages(props) {
  const filter = useSelector((state) => state.messages.filter);
  const searchForm = useSelector((state) => state.messages.searchForm);
  const dispatch = useDispatch();
  const handelMessagesFilter = (event) => {
    dispatch(setFilterMessages(event.target.value));
  };
  const handelSearchForm = () => {
    dispatch(setSearchForm());
  };
  const handelMessageSearchClear = () => {
    dispatch(setFilterMessages(""));
  };

  return (
    <div className={styles.messageSearch}>
      <button className={styles.messageSearchIcon}>
        <span className="material-icons" onClick={handelSearchForm}>
          search
        </span>
      </button>
      {searchForm ? (
        <input type="text" value={filter} onChange={handelMessagesFilter} />
      ) : (
        ""
      )}
      {filter.length !== 0 && (
        <button className={styles.messageClearIcon}>
          <span className="material-icons" onClick={handelMessageSearchClear}>
            clear
          </span>
        </button>
      )}
    </div>
  );
}

export default FilterMessages;