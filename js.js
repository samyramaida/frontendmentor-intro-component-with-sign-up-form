function checknameempty(form) { 
    if (form.name.value == null ||  
        form.name.value == undefined || 
        form.name.value.length == 0 &&
        form.lastname.value == null ||
        form.lastname.value == undefined ||
        form.lastname.value.length == 0 &&
        form.usermail.value == null ||
        form.usermail.value == undefined ||
        form.usermail.value.length == 0 &&
        form.password.value == null ||
        form.password.value == undefined ||
        form.password.value.length == 0
        ) { 
        
        alert("ERROR! Check if there is any empty field.\n"); 
        return false; 
    } else { 
        alert("Your response has been recorded\n"); 
        return true; 
        
    } 
} 
