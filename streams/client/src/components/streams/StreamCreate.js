import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

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

    onSubmit(formValues) {
        console.log(formValues);

    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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

export default reduxForm({
    form: 'streamCreate',
    validate: formValidate,
    touchOnChange: true
})(StreamCreate);