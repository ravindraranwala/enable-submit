import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  isSubmitEnabled() {
   // Access field values here and validate them
   const title = this.props.titleValue;
   const content = this.props.contentValue;
   if(title && content){
      return true;
   }
   return false;
 }

  render() {
    const { handleSubmit } = this.props;
    console.log("rendering form ...");
    // console.log(this.props.titleValue);
    const isEnabled = this.isSubmitEnabled();
    console.log(isEnabled);


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      <button type="submit" className="btn btn-primary" disabled={!isEnabled}>Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content:'asdf'}
  const errors = {};

  // Validate the inputs from 'values'

// If errors is empty, the form is fine to submit
// If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

PostsNew = reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  PostsNew
);

// Decorate with connect to read form values
const selector = formValueSelector('PostsNewForm') // <-- same as form name
PostsNew = connect(state => {
  // can select values individually
  const titleValue = selector(state, 'title')
  // console.log(titleValue);
  const contentValue = selector(state, 'content')
  // or together as a group
  // const {firstName, lastName} = selector(state, 'firstName', 'lastName')
  return {
    titleValue,
    contentValue,
  }
})(PostsNew)


export default PostsNew;
