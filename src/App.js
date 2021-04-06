/*import PropTypes from 'prop-types';*/
import { Component } from 'react';
import ContactList from './components/phonebook/ContactList';
import Filter from './components/phonebook/Filter';
import Form from './components/phonebook/addForm';
import shortid from 'shortid';
import './components/phonebook/styles.css';

class App extends Component {
   state = {
      contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
   };

   getfiltredContacts = () => {
      const normalizeFilter = this.state.filter.toLowerCase();
      return this.state.contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter),
      );
   };
   updateContacts = ({ name, number }) => {
      if (this.checkDuplicates(name)) {
         alert(`${name} уже в списке`);
         return;
      }
      const newContact = {
         name,
         number,
         id: shortid.generate(),
      };
      this.setState(prevState => ({
         contacts: [newContact, ...prevState.contacts],
      }));
   };
   checkDuplicates = name => {
      const currentContactsName = this.state.contacts.map(
         contact => contact.name,
      );
      return currentContactsName.includes(name);
   };
   changeFilter = e => {
      this.setState({ filter: e.currentTarget.value });
   };
   deleteContact = id => {
      this.setState(prevState => ({
         contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
   };

   render() {
      return (
         <div className="phonebook">
            <h1 className="phonebook__titel"> Phonebook</h1>
            <Form onSubmit={this.updateContacts} />
            <h2> Contacts List</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
               ContactList={this.getfiltredContacts()}
               onClick={this.deleteContact}
            />
         </div>
      );
   }
}
export default App;
