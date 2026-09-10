function classifyPassword(password) {

    // ekhane age check kortesi password e uppercase letter ache kina
    const hasUppercase = /[A-Z]/.test(password);

    // ekhane lowercase letter ache kina check kortesi
    const hasLowercase = /[a-z]/.test(password);

    // ekhane kono number ba digit ache kina check kortesi
    const hasDigit = /[0-9]/.test(password);

    // ekhane password e special character ache kina check kortesi
    const hasSpecial = /[!@#$%^&*]/.test(password);

    // sob condition thik thakle ekhane password ta strong return kortesi
    if (
        password.length >= 8 &&
        hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecial
    ) {
        return "Strong";
    }

    // ekhon koyta condition true hoitese seta count korar jonno variable nitesi
    let conditionCount = 0;

    if (hasUppercase) {
        conditionCount++;
    }

    if (hasLowercase) {
        conditionCount++;
    }

    if (hasDigit) {
        conditionCount++;
    }

    if (hasSpecial) {
        conditionCount++;
    }

    // password strong na hole ekhane medium password er condition check kortesi
    if (password.length >= 6 && conditionCount >= 2) {
        return "Medium";
    }

    // ekhane upor er kono condition match na korle weak return kore ditesi
    return "Weak";
}