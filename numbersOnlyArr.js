var numbersOnly = [1,"apple", -3, "orange", 0.5];
var newArray = []; var x = 0;

for(var i = 0; i < numbersOnly.length; i++)
{
    if(typeof numbersOnly[i] === "number")
        {
            newArray[x] = numbersOnly[i];
            x++;
        }
}
console.log(newArray);