function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
function greetingMorning(name) {
    console.log('Good Morning', name);
}
function greetingEvening(name) {
    console.log('Good Evening', name);
}
function greetingAfternoon(name) {
    console.log('Good Afternoon', name);
}
welcomeMessage('Tom cruise', greetingMorning);
welcomeMessage('Sakib Khan', greetingEvening);
welcomeMessage('Bappa Raj', greetingAfternoon);