let hCount = 0;
let count = 0;
let homeCount = document.getElementById("count-number");
let guestCount = document.getElementById("guest-number");
let saveElement = document.getElementById("save-el");
console.log(homeCount)
console.log(guestCount)

function incrementByOne()
{
    hCount = hCount+1;
    homeCount.innerText = hCount;
}
function incrementByTwo()
{
    hCount = hCount+2;
    homeCount.innerText = hCount;
}
function incrementByThree()
{
    hCount = hCount+3;
    homeCount.innerText = hCount;
}
function guestIncrementOne()
{
    count = count+1;
    guestCount.innerText = count;
}
function guestIncrementTwo()
{
    count = count+2;
    guestCount.innerText = count;
}
function guestIncrementThree()
{
    count = count+3;
    guestCount.innerText = count;
}
function saveBtn()
{
let contentVariable = "Your home score is " + hCount + " " + "Your guest count is " + count;
saveElement.textContent += contentVariable;
homeCount .innerText = 0;
guestCount.innerText = 0;
hCount = 0;
count = 0;
console.log(contentVariable) 
}