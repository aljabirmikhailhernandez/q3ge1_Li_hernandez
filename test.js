var n1 = prompt("First input: "); var n2 = prompt("Second Input: ");

document.write
(
    "You have entered: <br>" + "First Input: " + n1 + "<br>" + "Second Input: " + n2 + "<br><br>"
);

document.write("Operators <br><br>");
document.write("i. Arithmetic: <br>");
var sum = parseInt(n1) + parseInt(n2);
document.write(n1 + " + " + n2 + " = " + sum + "<br><br>");
document.write("ii. Comparison: <br>");
if (n1 == n2)
{
    document.write(n1 + " & " + n2 + " are equal!" + "<br><br>");
}
else if (n1 > n2)
{
    document.write(n1 + " is greater than " + n2 + "!" + "<br><br>");
}
else
{
    document.write(n1 + " is less than " + n2 + "!" + "<br><br>");
}
document.write("iii. Logical: <br>");
var x = n1 || n2;
document.write(x + "<br><br>");
document.write("iv. Assignment <br>");

var z = parseInt(n1); var y = parseInt(n2); document.write(z+=y);