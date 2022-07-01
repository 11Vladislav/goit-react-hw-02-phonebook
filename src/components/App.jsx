import { Component } from "react";
import { nanoid } from "nanoid";


const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: ''
};

export class App extends Component {
  state = INITIAL_STATE;
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name === '' || number === '') {
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number
    };
    this.setState({
      contacts: [...this.state.contacts, contact],
      name: '',
      number: ''
    });
  }
    render() {
      const { contacts, name, number } = this.state;
      return (
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Number:
              <input
                type="text"
                name="number"
                value={number}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add</button>
          </form>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  
  }