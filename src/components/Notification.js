import React from "react";

function Notification({ show }) {
  return (
    <div className={show ? "show" : "notification-container"}>
      <p>You have already entered this letter.</p>
    </div>
  );
}

export default Notification;
