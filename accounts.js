// Small accounts database

const accounts = [

    {
        username: "Ciprian",
        password: "parola123"
    },
    {
        username: "Andrei",
        password: "parola"
    },
    {
        username: "123",
        password: "123"
    },
    {
        username: "Serban",
        password: "parola321"
    }

];

// Checking if the account exists   


function checkInfo(){
    event.preventDefault()                                                              // prevents url changing
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    for(let i = 0; i < accounts.length; i++){                                           // looping through the array "accounts"
        if(username == accounts[i].username && password == accounts[i].password){
            localStorage.setItem(1, accounts[i].username);
            window.location.replace("loading.html");                                    // redirect to loading screen
            return;
            
        }
    }  
        alert("Username or password is incorrect. Please try again.");                  // error message
}