import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

function OutboxMessage(props) {
  const readMessage = props.message.read;
  const timeSendMessage = props.message.time;

  return (
    <div>
      <div>
        <div>{props.content}</div>
        <div>
          {dayjs(timeSendMessage).format("HH:mm")}
        </div>
        <div>
          {readMessage === true ? (
            <div>
              <span className="material-icons">done_all</span>
            </div>
          ) : (
            <div>
              <span className="material-icons">check</span>
            </div>
          )}
        </div>
        <div>
          <span className="material-icons">clear</span>
        </div>
      </div>
    </div>
  );
}

OutboxMessage.propTypes = {
  message: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default OutboxMessage;