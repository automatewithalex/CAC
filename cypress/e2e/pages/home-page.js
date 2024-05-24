class HomePage {
  constructor() {
    this.url = 'https://www.automatewithalex.com/';
    this.firstNameInput = '[name="first-name"]';
    this.lastNameInput = '[name="last-name"]';
    this.emailInput = '[name="email"]';
    this.messageTextArea = 'textarea';
    this.submitButton = '[data-testid="buttonElement"]';
    this.feedbackMessage = '#feedback-message';
    this.firstNameTooltip = '#first-name-tooltip';
    this.lastNameTooltip = '#last-name-tooltip';
    this.emailTooltip = '#email-tooltip';
    this.messageTooltip = '#message-tooltip';
  }

  navigateTo() {
    cy.visit(this.url);
  }

  typeFirstName(value) {
    cy.get(this.firstNameInput).type(value);
  }

  typeLastName(value) {
    cy.get(this.lastNameInput).type(value);
  }

  typeEmail(value) {
    cy.get(this.emailInput).type(value);
  }

  typeMessage(value) {
    cy.get(this.messageTextArea).type(value);
  }

  submitContactForm() {
    cy.get(this.submitButton).click();
  }

  clearFirstName() {
    cy.get(this.firstNameInput).clear();
  }

  clearLastName() {
    cy.get(this.lastNameInput).clear();
  }

  clearEmail() {
    cy.get(this.emailInput).clear();
  }

  clearMessage() {
    cy.get(this.messageTextArea).clear();
  }

  getFeedbackMessage() {
    return cy.get(this.feedbackMessage).invoke('text');
  }

  getFirstNameTooltip() {
    return cy.get(this.firstNameTooltip).invoke('text');
  }

  getLastNameTooltip() {
    return cy.get(this.lastNameTooltip).invoke('text');
  }

  getEmailTooltip() {
    return cy.get(this.emailTooltip).invoke('text');
  }

  getMessageTooltip() {
    return cy.get(this.messageTooltip).invoke('text');
  }

}

export const homePage = new HomePage();