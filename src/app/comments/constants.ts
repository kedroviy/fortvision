export const validationMessagesMap = new Map([
    ['body', {
        message: '', // <== message for user
        firstLetter: 'Enter first letter like uppercase',
        required: 'Please fill title field.',
        minlength: 'The title field must be longer than 3 characters.'
    }],
]);

export const regExp = /[A-Z]/;
 