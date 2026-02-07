export const LOGIN_ELEMENTS = {    
    selectLogin: '[data-qa-id="login-select"]',
    selectHudl: '[data-qa-id="login-hudl"]',
    emailInput: 'input[name="username"]',
    passwordInput: '#password', 
    continueButton: 'button[type="submit"]',
    continueButtonSecondary: 'button[name="action"]',
    loginError: '[data-error-code="wrong-email-credentials"]',
    PASSWORD_ERROR: '#error-element-password',
    EMAIL_PASSWORD_ERROR: '.ulp-input-error-message',
    MALFORMED_EMAIL_ERROR: '#error-cs-email-invalid'

} as const;