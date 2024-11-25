function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const CharName = /^[A-Za-z\s]+$/; 
    const messageformat = /^[A-Za-z0-9\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    
  
    if (!CharName.test(name)) 
    {
        alert("Name must only contain alphabetic characters");
        return false; // do not submit
    }

    else if (!emailRegex.test(email))
    {
        alert("email must contain @gmail.com");
        return false; // do not submit
    }
    
    if (!messageformat.test(message)) 
    {
        alert("message must contain alphabetic and numerical characters");
        return false; // do not submit
    }

    else if (name === "" || email === "" || message === "") 
    {
        alert("Please fill out all fields.");
        return false; // do not submit
    }

    alert("Form is filled successfully.");
    return true; // submit
}
