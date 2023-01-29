import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Wrapper,
  Label,
  Input,
  Btn
} from './ContactForm.styled';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    };
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="">
          Name:{' '}
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label htmlFor="">
          Phone:{' '}
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </Wrapper>

      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}

// class ContactForm extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//     };
    
  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  //   };
    
  // handleSubmit = event => {
  //       event.preventDefault();
  //     this.props.onSubmit(this.state);
  //     this.onReset();
  //   }

  //   onReset = () => {
  //     this.setState({name: '', number: ''})
  // }

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Wrapper>
//           <Label htmlFor="">
//             Name: {' '}
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//         </Wrapper>
//         <Wrapper>
//           <Label htmlFor="">
//             Phone: {' '}
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//         </Wrapper>

//         <Btn type="submit">Add contact</Btn>
//       </Form>
//     );
//   }
// }

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
