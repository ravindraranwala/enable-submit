import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

class UsersNew extends Component {
  constructor(props) {
    super(props);
    this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
  }


  onSubmit(values) {
    console.log(values);
  }

  isSubmitEnabled() {
   // Access field values here and validate them
   const firstName = this.props.firstName;
   const lastName = this.props.lastName;
   if(firstName && lastName){
      return true;
   }
   return false;
 }

  render() {
    const { handleSubmit } = this.props;
    const isEnabled = this.isSubmitEnabled();


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="text" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isEnabled}>Submit</button>
      </form>
    );
  }
}


UsersNew = reduxForm({
  form: 'UserNewForm'
})(
  UsersNew
);

// Decorate with connect to read form values
const selector = formValueSelector('UserNewForm') // <-- same as form name
UsersNew = connect(state => {
  // can select values individually
  // const firstNameValue = selector(state, 'firstName')
  // console.log(titleValue);
  // const lastNameValue = selector(state, 'lastName')
  // or together as a group
  const {firstName, lastName} = selector(state, 'firstName', 'lastName')
  return {
    firstName,
    lastName,
  }
})(UsersNew)


export default UsersNew;
