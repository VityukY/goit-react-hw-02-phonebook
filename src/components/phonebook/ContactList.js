const ContactList = ({ ContactList, onClick }) => {
   /*return */
   return (
      <ul className="phonebook__list">
         {ContactList.map(contact => (
            <li key={contact.id} className="pnonebook__listItem">
               <p>
                  {contact.name} : {contact.number}
               </p>
               <button type="button" onClick={() => onClick(contact.id)}>
                  Delete contact
               </button>
            </li>
         ))}
      </ul>
   );
};
export default ContactList;
