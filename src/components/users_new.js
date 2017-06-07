import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { saveUser } from '../actions';

class UsersNew extends Component {
  constructor(props) {
    super(props);
    this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
  }


  onSubmit(values) {
    // this === component
    this.props.saveUser(values, () => {
      this.props.history.push('/');
    });
    // this.props.reset();
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

 renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const isEnabled = this.isSubmitEnabled();


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="firstName" component={this.renderField} type="text" className="curvedBorder" label="First Name" />
          <Field name="lastName" component={this.renderField} type="text" className="curvedBorder" label="Last Name" />
          <Field name="age" component={this.renderField} type="text" className="curvedBorder" label="Age" />
          <button type="submit" className="btn btn-primary" disabled={!isEnabled}>Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content:'asdf'}
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.firstName) {
    errors.firstName = "Enter a firstName!";
  }
  if (!values.lastName) {
    errors.lastName = 'Enter lastName';
  }

// If errors is empty, the form is fine to submit
// If errors has *any* properties, redux form assumes form is invalid
  return errors;
}


UsersNew = reduxForm({
  validate,
  form: 'UserNewForm'
})(
  connect(null, { saveUser })(UsersNew)
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
