import { Component } from "react";
import { nanoid } from "nanoid";


const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson'},
    { id: 'id-2', name: 'Hermione Kline'},
    { id: 'id-3', name: 'Eden Clements'},
    { id: 'id-4', name: 'Annie Copeland'},
  ],
  name: '',
};

export class App extends Component {
  state = INITIAL_STATE;
  
  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    if (!name) return;
    const contact = {
      id: nanoid(),
      name,
    };
    this.setState({
      contacts: [...this.state.contacts, contact],
      name: '',
    });
  }
  
  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

    render() {
      const { contacts, name } = this.state;
      return (
        <div>
          <h1>Phone book</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={this.handleChange}
            />
            <button type="submit">Add contact</button>
          </form>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  
  }