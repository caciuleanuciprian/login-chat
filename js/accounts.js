const accounts = [

    {
        username: "ciprian",
        password: "parola123"
    },
    {
        username: "andrei",
        password: "parola"
    }

];

// Not working

function checkInfo(){
    event.preventDefault()
    const username = document.getElementById(username).value;
    const password = document.getElementById(password).value;
    for(let i = 0; i < accounts.length; i++){
        if(username == accounts[i].username && password == accounts[i].password){
            window.location.replace("http://www.google.com");
        }else{
            console.log("nu merge");
        }
    }
}