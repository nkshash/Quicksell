import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle ,faCheckCircle,faUser,faCircle,faExclamationCircle,faWindowClose } from '@fortawesome/free-solid-svg-icons';
import '../cssstyle/Ticket.css';
const getIconForStatus = (status) => {
  switch (status) {
    case 'Todo':
      return <FontAwesomeIcon icon={faDotCircle } style={{ color: 'grey' }} />;
    case 'In progress':
      return <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />;
      default:
      return <FontAwesomeIcon icon={faWindowClose} style={{ color: 'red' }} />;
   
  }};

const Ticket = ({ ticket, user }) => {
  return (
    <div className="profile-card">
      
      
      
      <div className="profile-info">
      
        <div className="user-id">{ticket.id}</div>
        <div className="user-id">{user.name}</div>
        <div className="ticket-title">{getIconForStatus(ticket.status)} {ticket.title}</div>
      
        <div style={{ display: 'inline-block' }}>
  
  <div className="ticket-title3" style={{fontSize:"small",color:"grey"}}>
    <FontAwesomeIcon icon={faExclamationCircle}  />
        &nbsp;{ticket.tag[0]}
  </div>
</div>
      </div>
      <div className="profile-picture">
      <FontAwesomeIcon icon={faUser} style={{fontSize: "20px"}} />
      <div className={`availability ${user.available ? 'available' : 'unavailable'}`}>
    <FontAwesomeIcon icon={user.available ? faCircle : faCircle} />
  </div>
      </div>
    </div>
  );
};

export default Ticket;
