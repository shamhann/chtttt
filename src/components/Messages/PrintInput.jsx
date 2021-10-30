import React from "react";
import styles from "./messages.module.css";
import { getMessageText } from "../../redux/ducks/messages";
import { useDispatch, useSelector } from "react-redux";

function PrintInput() {
  const messageText = useSelector((state) => state.messages.messageText);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getMessageText(e.target.value));
  };
  return (
    <div className={styles["input-field"]}>
      <input
        type="text"
        placeholder="Сообщение..."
        value={messageText}
        onChange={handleChange}
      />
    </div>
  );
}

export default PrintInput;
