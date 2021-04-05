import { Component } from 'react';

class Form extends Component {
   state = {
      name: '',
      nick: '',
   };

   handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmitManual(this.state);
      this.reset();
   };
   reset = () => {
      this.setState({ name: '', nick: '' });
   };
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               <span>Имя</span>
               <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
               />
            </label>
            <label>
               <span>Ник</span>
               <input
                  type="text"
                  name="nick"
                  value={this.state.nick}
                  onChange={this.handleChange}
               />
            </label>
            <button type="submit">Отправить</button>
         </form>
      );
   }
}

export default Form;
