import { useState } from 'react';

export default function useForm(getFreshModelObject) {
    
    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

/*
This is a custom hook named useForm that is built using the useState hook from React.

When this hook is called, it takes a function getFreshModelObject as a parameter, which returns an object representing the initial state for the form. 
This initial state is then passed as an argument to the useState hook, which creates two state variables: values and errors.

values is the state variable that holds the current values of the form fields. It is initialized to the values returned by getFreshModelObject(). 
Whenever the user enters data into a form field, the handleInputChange function is called, which updates the value of values to include the new value of 
the changed field.

errors is the state variable that holds any validation errors that are encountered during form submission. It is initially set to an empty object.

The setValues and setErrors functions returned by useState can be used to update the values and errors state variables, respectively.

Finally, the handleInputChange function is also returned by the useForm hook. This function is responsible for updating the values state variable whenever 
a form field is changed. It uses object destructuring to extract the name and value properties from the event target, and then uses the spread operator (...) 
to create a new object that includes all the previous values in values plus the new value of the changed field. This new object is then passed to setValues to 
update the state variable.

Overall, this hook provides an easy way to manage the state of a form in a React application, and can be reused across multiple forms.
*/