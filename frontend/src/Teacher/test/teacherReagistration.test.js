import TeacherRegistration from "../teacherRegistration";
import {getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom';

let container = null;

describe ('Testing registration that contain a form ', () => {
    beforeEach (() => {
        container = render(<TeacherRegistration/>).container;
    })

    it('should render the form title', () =>{
        expect(getByTestId(container, 'title-field-new-registration')).toBeTruthy();
        expect(getByTestId(container, 'title-field-new-registration').textContent).toBe('TEACHER REGISTRATION');
    });
    it('Should render the form tag', () => {
        expect(getByTestId(container, 'form-tag-new-registration')).toBeTruthy();
    });
    it('should render Input Field first name', () =>{
        expect(getByTestId(container, 'first-name-field')).toBeTruthy();
    });
    it('should render Input Field last name', () =>{
        expect(getByTestId(container, 'last-name-field')).toBeTruthy();
    });
    it('should render Dropdown select gender', () =>{
        expect(getByTestId(container, 'gender-select-field')).toBeTruthy();
    });
    it('should render Input Field payment type', () =>{
        expect(getByTestId(container, 'contact-number-field')).toBeTruthy();
    });

    it('should render payment submit button', () =>{
        expect(getByTestId(container, 'submit-button')).toBeTruthy();
    });

});
