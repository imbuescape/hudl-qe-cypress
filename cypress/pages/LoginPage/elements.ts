export const LOGIN_ELEMENTS = {    
    SELECT_LOGIN: '[data-qa-id="login-select"]',
    SELECT_HUDL: '[data-qa-id="login-hudl"]',
    EMAIL_INPUT: 'input[name="username"]',
    PASSWORD_INPUT: '#password', 
    BTN_CONTINUE: 'button[type="submit"]',
    BTN_SECONDARY_CONTINUE: 'button[name="action"]',
    LOGIN_ERROR: '[data-error-code="wrong-email-credentials"]',
    PASSWORD_ERROR: '#error-element-password',
    EMAIL_PASSWORD_ERROR: '.ulp-input-error-message',
    MALFORMED_EMAIL_ERROR: '#error-cs-email-invalid'

} as const;