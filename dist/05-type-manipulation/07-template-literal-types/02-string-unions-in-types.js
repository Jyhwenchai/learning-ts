"use strict";
const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});
person.on("firstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
});
person.on("firstNameChanged", () => { });
