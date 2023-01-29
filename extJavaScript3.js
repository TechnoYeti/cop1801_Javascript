function servicecost()
{
 var cost =
 document.getElementById("cost").value;
 var rate =
 document.getElementById("rate").value;

if (parseFloat(cost) < 5.00)
    {
    alert("Number must at least be 5.00");
    return;
} 
    else if (parseFloat(cost) > 500.00)
    {
    alert("Number cannot be more than 500.00");
    return;
}    
    else if (!Number.isInteger(parseInt(cost)))
    {
    alert("Invalid input. Please try again.");
    return;
}   
else if (rate ==0){
    alert ("Please select service rating");
    
}  
else
{
 document.getElementById("test").innerHTML = "Your cost of service is " + cost;
}
  var total = (rate *cost);
total = Math.round(total * 100) / 100;
total = total.toFixed(2);
document.getElementById("tipcost").style.display = "block";
document.getElementById("tip").innerHTML = "The tip for your meal is: " + total;
var grade =(rate);
if (parseFloat (rate)==.2){
    grade="Great"}
    else if (parseFloat (rate)==.15){
    grade="Ok"}
    else if (parseFloat (rate)==.10){
    grade="Poor";}
alert(`The cost of your meal is: ${cost}. You rated the service as ${grade}, therefore giving you a tip recommendation of ${total}`);
}
document.getElementById("calculate").onclick = function() 
{
    servicecost();
}