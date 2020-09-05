
// NEEDS TO BE REDONE


const accounts = [

    {
        username: "ciprian",
        password: "parola123"
    },
    {
        username: "andrei",
        password: "parola"
    },
    {
        username: "123",
        password: "123"
    }

];

// Checking if the account exists   

    
function checkInfo(){
    event.preventDefault()                                                              // prevents url changing
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(variabilaGlobala)
    console.log(username)
    for(let i = 0; i < accounts.length; i++){                                           // looping through the array "accounts"
        if(username == accounts[i].username && password == accounts[i].password){
            //window.location.replace("loading.html");                                    // redirect to loading screen
            return username;
            
        }
    }  
        alert("Username or password is incorrect. Please try again.");                  // error message
}


export {checkInfo};