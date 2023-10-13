interface ParamProps {
    day: number;
    month: number;
    year: number;
}

export function checkForEmptyInputs({ day, month, year}: ParamProps ) {
    const invalidInputs_1: string[] = [''];
    let validityStatus_1 = true;

    if (day === null || day === undefined || day == 0) {
        invalidInputs_1.push('day');
        const dayWarn = document.getElementById('dayWarn') as HTMLSpanElement;
        dayWarn.textContent = 'This field is required';
        validityStatus_1 = false;
    }

    if (month === null || month === undefined || month == 0) {
        invalidInputs_1.push('month');
        const dayWarn = document.getElementById('monthWarn') as HTMLSpanElement;
        dayWarn.textContent = 'This field is required';
        validityStatus_1 = false;
    }

    if (year === null || year === undefined || year == 0) {
        invalidInputs_1.push('year');
        const dayWarn = document.getElementById('yearWarn') as HTMLSpanElement;
        dayWarn.textContent = 'This field is required';
        validityStatus_1 = false;
    }
   
    return {validityStatus_1, invalidInputs_1};
  }

export function validateInputsLimits({ day, month, year}: ParamProps) {
    let validityStatus_2 = true;
    const invalidInputs_2: string[] = [''];

    if (day > 31) {
        invalidInputs_2.push('day');
        const dayWarn = document.getElementById('dayWarn') as HTMLSpanElement;
        dayWarn.textContent = 'Must be a valid day';
        validityStatus_2 = false;
    }
    
    if (month > 12) {
        invalidInputs_2.push('month');
        const dayWarn = document.getElementById('monthWarn') as HTMLSpanElement;
        dayWarn.textContent = 'Must be a valid month';
        validityStatus_2 = false;
    }

    if (year > new Date().getFullYear()) {
        invalidInputs_2.push('year');
        const dayWarn = document.getElementById('yearWarn') as HTMLSpanElement;
        dayWarn.textContent = 'Must be in the past';
        validityStatus_2 = false;
    }

    return { validityStatus_2, invalidInputs_2 };
}

export function validateDate({ day, month, year}: ParamProps) {
    let validityStatus_3 = true;
    const invalidInputs_3: string[] = ['day', 'month', 'year'];

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day > 31) {
            invalidInputs_3.push('day');
            const dayWarn = document.getElementById('dayWarn') as HTMLSpanElement;
            dayWarn.textContent = 'Must be a valid date';
            validityStatus_3 = false;
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) {
            invalidInputs_3.push('day');
            const dayWarn = document.getElementById('dayWarn') as HTMLSpanElement;
            dayWarn.textContent = 'Must be a valid date';
            validityStatus_3 = false;
        }
    } else if (month == 2 && (year%4 == 0)) {
        if (day > 29) {
            invalidInputs_3.push('day');
            const dayWarn = document.getElementById('dayWarn') as HTMLSpanElement;
            dayWarn.textContent = 'Must be a valid date';
            validityStatus_3 = false;
        }
    } else if (month == 2 && (year%4 != 0)) {
        if (day > 28) {
            invalidInputs_3.push('day');
            const dayWarn = document.getElementById('dayWarn') as HTMLSpanElement;
            dayWarn.textContent = 'Must be a valid date';
            validityStatus_3 = false;
        }
    } 

    return { validityStatus_3, invalidInputs_3};
}
  
export function calculateAge({day, month, year}: ParamProps) {
    const today = new Date();
    
    let years = today.getFullYear() - year;
    let months;
    let days;

    if (month == today.getMonth() + 1) {
        if ( day > today.getDate()) {
            years -= 1;
            months = today.getMonth();
            days = today.getDate();
        } else if ( day < today.getMonth()) {
            months = 0;
            days = today.getDate() - day;
        } else if (day == today.getDate()) {
            months = 0;
            days = 0;
        }
    } else if (month < today.getMonth() + 1) {
        months = (today.getMonth()) - month;
        
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
           // months with 31 days
           days = 31 - day;
           days = days + today.getDate();
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            // months with 30 days
           days = 30 - day;
           days = days + today.getDate();
        } else if (month == 2 && (year%4 == 0)) {
            // february of a leap year
           days = 29 - day;
           days = days + today.getDate();
        } else if (month == 2 && (year%4 != 0)) {
           // february of a non-leap year
           days = 28 - day;
           days = days + today.getDate();
        } 
    } else if (month > today.getMonth() + 1) {
        years -= 1;
        months = today.getMonth();
        days = today.getDate();
    }

    const yearsSpanElem = document.getElementById('ageYears') as HTMLSpanElement;
    const monthsSpanElem = document.getElementById('ageMonths') as HTMLSpanElement;
    const daysSpanElem = document.getElementById('ageDays') as HTMLSpanElement;

    yearsSpanElem.textContent = `${years}`;
    monthsSpanElem.textContent = `${months}`;
    daysSpanElem.textContent = `${days}`;
}