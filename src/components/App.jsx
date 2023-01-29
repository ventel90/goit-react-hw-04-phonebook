import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled'
import ContactForm from './ContactForm/ContactForm';
import Filter from './FilterContacts/FilterContacts';
import ContactList from './ContactList/ContactList'

export const App = () => {
 const [contacts, setContacts] = useState([
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
 ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsStorage) {
      setContacts(contactsStorage);
    }
},[])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      const contact = {
        id: 'id-' + nanoid(),
        name: data.name,
        number: data.number,
      };
      setContacts([contact, ...contacts]);
    }
  };
 

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };

  const normalizeFilter = filter.toLowerCase();
      const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
);
  
return (
    <Container>
      <h1>PhoneBook</h1>,
      <ContactForm onSubmit={addContact} />,
      <Filter value={filter} onChange={changeFilter} />,<h1>Contacts</h1>
      ,
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />,
    </Container>
  );
}
















// export class OldApp extends Component {
//   state = {
//     contacts:
//       InitialContacts,
//     name: '',
//     filter: '',
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   addContact = data => {
//     if (this.state.contacts.some(contact => contact.name === data.name)) {
//       alert(`${data.name} is already in contacts.`);
//     } else {
//       const contact = {
//         id: 'id-' + nanoid(),
//         name: data.name,
//         number: data.number,
//       };
//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
//   };

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   componentDidMount() {
//     const contactsStorage = localStorage.getItem('contacts');
//     if (contactsStorage !== null) {
//       const parsedContacts = JSON.parse(contactsStorage);
//       this.setState({ contacts: parsedContacts });
//     }
//   };

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     const normalizeFilter = this.state.filter.toLowerCase();
//     const filterContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );

//     return (
//       <Container>
//         <h1>PhoneBook</h1>,
//         <ContactForm onSubmit={this.addContact} />,
//         <Filter value={filter} onChange={this.changeFilter} />,<h1>Contacts</h1>
//         ,
//         <ContactList
//           contacts={filterContacts}
//           onDeleteContact={this.deleteContact}
//         />
//         ,
//       </Container>
//     );
//   }
// }
