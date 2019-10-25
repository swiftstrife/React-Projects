import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class StreamForm extends React.Component {

    renderError(meta) {
        if (meta.touched && meta.error) {
            return (
                <div className="ui negative message">{meta.error}</div>
            );
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.touched 
                                && formProps.meta.error 
                                ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input 
                    onChange={formProps.input.onChange}
                    value={formProps.input.value}
                />
                {this.renderError(formProps.meta)} 
            </div>             
        );
    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );  
    }
    
}

const formValidate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title.';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description.';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamForm',
    validate: formValidate,
    touchOnChange: true
})(StreamForm);

export default formWrapped;