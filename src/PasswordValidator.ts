import { StringValidator } from "./StringValidator";

export class PasswordValidator implements StringValidator {
    isAcceptable(s: string) {
        if (s.length < 8) {
            return false;
        }

        let i = 0;
        let character = '';
        let containsNumber = false;
        let containsUpperCase = false;
        let containsLowerCase = false;
        while (i < s.length) {
            character = s.charAt(i);
            if (!isNaN(Number(character))) {
                containsNumber = true;
            }
            if (character == character.toUpperCase()) {
                containsUpperCase = true;
            }
            if (character == character.toLowerCase()) {
                containsLowerCase = true;
            }
            if (containsLowerCase && containsUpperCase && containsNumber) {
                return true;
            }
            i++;
        }
        return containsLowerCase && containsUpperCase && containsNumber;
    }


}