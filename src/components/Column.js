import React from "react";
import Ticket from "./Ticket";
import "../cssstyle/Column.css";

const priorityMapping = {
  "4": "Urgent",
  "3": "High",
  "2": "Medium",
  "1": "Low",
  "0": "No priority",
};
const userMapping = {
  "usr-1": "Anoop Sharma",
  "usr-2": "Yogesh",
  "usr-3": "Shankar Kumar",
  "usr-4": "Ramesh",
  "usr-5": "Suresh",
};

const Column = ({ title, tickets, users }) => {
  if (userMapping[title]) {
    title = userMapping[title];
  } else {
    title = priorityMapping[title] || title;
  }

  return (
    <div className="boardColumn">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
         <Ticket key={ticket.id} ticket={ticket} user={users.find((user) => user.id === ticket.userId)} />
      ))}
    </div>
  );
};

export default Column;



