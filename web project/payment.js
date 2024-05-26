function cards(){
    var Cvv=document.getElementById("cvv").value;
    var number=document.getElementById("cardnumber").value;
    if(number.length < 16  )
{

    alert("Please Enter the 16 digit number written on the card")

}
else if(number.length> 16){
    alert("Please Enter the 16 digit number written on the card")
}
else if(Cvv.length<3 || Cvv.length > 3)
{
    alert("Please Enter 3 digits Cvv number on the back of your cards")
}
else{
    alert("Thank you for Entering the details")
}
}

