for (var x=0; x<=10; x++)
{
    if (x===0){
        document.write(x + " is an even number" + "<br>")
    }
    else if (x % 2 === 0)
    {
        document.write(x + " is an even number" + "<br>")
    }
    else
     {
        document.write(x + " is an odd number" + "<br>")
    }
}
function dowhile()
{
    const myNum = document.getElementById("input").value;
    let i = 1;
    if (parseInt(myNum) < 5)
    {
    document.getElementById("wrong").innerHTML ="<b>Error</b>: Number must at least be 5";
    return;
}  
    else if (parseInt(myNum) > 20)
    {
    document.getElementById("wrong").innerHTML ="<b>Error</b>: Number cannot be more than 20";
    return;
}    
    else if (!Number.isInteger(parseInt(myNum)))
    {
    document.getElementById("wrong").innerHTML ="<b>Error</b>: Invalid input. Please try again.";
    return;
}    
    do
{
  document.getElementById("test").innerHTML += "Your number is " + i +"<br>";
i++;
}
while (i <= myNum);
}

let subject = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
var output = "[";
subject.forEach((subjects, index) => {
if(index == subject.length - 1)
output += subjects + "]";
else
output += subjects + ", ";
});
document.getElementById("subj").innerHTML = output;