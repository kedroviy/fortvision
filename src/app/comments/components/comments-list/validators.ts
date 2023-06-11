import { FormControl, ValidationErrors } from '@angular/forms';

import { regExp } from '../../constants';
import { validationMessagesMap } from '../../constants';

export const firstLetterValidation = (formControl: FormControl): ValidationErrors => {
    const valueArray = formControl.value.split('');
    
    if (formControl.value?.length && !regExp.test(valueArray[0])) {
        return { message: validationMessagesMap.get('body')!.firstLetter }
    }

    return null as any;
};

export const minLengthValidation = (formControl: FormControl): ValidationErrors => {
    
    if (formControl.value?.length < 4) {
        return { message: validationMessagesMap.get('body')!.minlength }
    }

    return null as any;
};