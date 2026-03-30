# Registration Form

### Built With

- JavaScript
- HTML

### What I learned

How to store and set data in the local storage object

### Useful Resources

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Reflections

How did event.preventDefault() help in handling form submission?

It helped to prevent the Page from reloading once the form was submitted.

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

I used both validation forms to ensure that if HTML validation is by passed at least I have JavaScript set up to a have validation for 'serverside'.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
I set the username as the key and the username entered as the valued stored. Saving other data could create security issues.

Describe a challenge you faced in implementing the real-time validation and how you solved it.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

Initially it was difficult on deciding how to check two input fields against each other. I created a validation message for each input so that the user would get a message for each input that way the error was clear.
