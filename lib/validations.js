/**
 * Created by Michal on 27.08.2016.
 */
(function() {
    "use strict";

    const validations = {
        login: {
            isEmail: true,
        },
        password: {
            minLength: 6,
            isValidPassword: function (values, value) {
                return true;
            }
        }
    };

    export default validations;
})();