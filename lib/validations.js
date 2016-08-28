/**
 * Created by Michal on 27.08.2016.
 */

export function validateSignIn (values, props) {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors;
}

export function validateSignUp (values, props) {
    const errors = {};
    
    if (!values.firstname) {
        errors.firstname = 'Required'
    }

    if (!values.lastname) {
        errors.lastname = 'Required'
    }
    

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }

    return errors;
}

