function signin(){
    var pass=document.getElementById("password").value;
    if(pass.length < 8)
    {
        alert("Please Enter Minimum of 8 words passwords");
    }
    else if(pass.length> 16)
    {
        alert("Pleae Enter Password less than 16")
    }
    else{
        alert("Thank you for entring the details")
    }

}
