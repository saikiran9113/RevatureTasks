function isValidEmail(email) {
    const atIndex = email.indexOf('@');
    if (atIndex <= 0 || atIndex === email.length - 1) {
        return false;
    }
    const dotIndex = email.indexOf('.', atIndex);
    if (dotIndex === -1 || dotIndex === email.length - 1) {
        return false;
    }
    return true;
}
const email1 = "example@example.com";
const email2 = "invalid@email";
console.log(email1 + " is valid: " + isValidEmail(email1)); 
console.log(email2 + " is valid: " + isValidEmail(email2));