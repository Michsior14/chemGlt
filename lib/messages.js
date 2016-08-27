/**
 * Created by Michal on 27.08.2016.
 */

(function () {
    'use strict'

    const errorMessages = {
        loginError: {
            isEmail: "Provide valid email"
        },
        passwordError: {
            minLength: "Password requires min. 6 characters",
            isValidPassword: "Password not valid"
        }
    };

    export default errorMessages;
})();