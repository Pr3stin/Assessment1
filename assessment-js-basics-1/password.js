let password = "Codeisfun123";

// checks for length of password. Must be between 10 & 32 characters. //

if (password.length > 10 && password.length < 32){
    console.log("success");
} else {
    console.log("fail");
}

// checks for number in password. must contain at least one. //

function containsNumber(str) {
    return /\d/.test(str);
}
if (containsNumber(password) == true){
    console.log("success");
} else {
    console.log(`fail ${XPathExpression}`)
}

// checks for space in password. cannot contain whitespace. //

function containsSpace(str) {
    return /\s/.test(str);
}
if (containsSpace(password) == false){
    console.log("success");
} else {
    console.log("fail");
}

// checks if password contains special characters. must contain one. Mine does not so mine should fail. //

function containsSpecialCharacter(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
if (containsSpecialCharacter(password) == true){
    console.log("success");
} else {
    console.log("fail");
}



