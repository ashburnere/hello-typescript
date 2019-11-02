import { ZipCodeValidator } from "./ZipCodeValidator";
import { StringValidator } from "./StringValidator";
import { PasswordValidator } from "./PasswordValidator";

let validators: Map<string, StringValidator> = new Map();
let values: Array<string> = ["12345", "Hallo123", "1234Ab", "1234", "Password"];
validators.set("zip code", new ZipCodeValidator());
validators.set("password", new PasswordValidator());

console.log('Validating values: ' + values + ' ...')
values.forEach(value => {
    console.log("Validating value: " + value);

    for (const [key, validator] of validators) {
        console.log('# Is valid ' + key + ': ' + validator.isAcceptable(value));
    }
}); 


