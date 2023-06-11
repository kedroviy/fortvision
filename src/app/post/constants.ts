export const FORM_FIELD = {
    TITLE: 'title',
    BODY: 'body',
    TIMESTAMP: 'timestamp',
    REACTIONS: 'reactions',
    USER_ID: 'userId',
    COMMENTS: 'comments',
}

export const validationMessagesMap = new Map([
    ['title', {
        message: '', // <== message for user
        firstLetter: 'Enter first letter like uppercase',
        required: 'Please fill title field.',
        minlength: 'The title field must be longer than 3 characters.'
    }],
    ['body', {
        message: '',
        required: 'Please enter text'
    }],
]);

export const regExp = /[A-Z]/;