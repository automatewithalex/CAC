import { homePage } from "../pages/home-page";

describe('Contact Form', () => {

    it('Submitting a valid contact form', () =>{
        homePage.navigateTo('https://www.automatewithalex.com/');
        homePage.typeFirstName('John');
        homePage.typeLastName('Doe');
        homePage.typeEmail('john.doe@example.com');
        homePage.typeMessage('I am interested in learning more about your services.');
        homePage.submitContactForm();
        homePage.getFeedbackMessage().should('eq', 'Thanks for submitting!');
    });

    it('Attempt to submit contact form with missing information', () =>{
        homePage.navigateTo('https://www.automatewithalex.com/');
        homePage.typeFirstName('John');
        homePage.typeLastName('Doe');
        homePage.typeMessage('Please contact me as soon as possible.');
        homePage.submitContactForm();
        homePage.getEmailTooltip().should('eq', 'Please fill out this field.');
    });

    it('Submitting contact form with an invalid email address', () =>{
        homePage.navigateTo('https://www.automatewithalex.com/');
        homePage.typeFirstName('Alice');
        homePage.typeLastName('Smith');
        homePage.typeEmail('alice.smith');
        homePage.typeMessage('I have a question about your pricing.');
        homePage.submitContactForm();
        homePage.getEmailTooltip().should('eq', 'Please enter a valid email address.');
    });

    it('Submit contact form without a message', () =>{
        homePage.navigateTo('https://www.automatewithalex.com/');
        homePage.typeFirstName('Bob');
        homePage.typeLastName('Martin');
        homePage.typeEmail('bob.martin@example.com');
        homePage.submitContactForm();
        homePage.getEmailTooltip().should('eq', 'Please enter a valid email address.');
        homePage.getMessageTooltip().should('eq', 'Please fill out this field.');
    });

});