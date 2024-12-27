function addOne() {
    var someNum = getInteger('someNum');
    someNum = someNum + 1;
    localStorage.setItem('someNum', someNum);
    displayNum();
}

function subtractOne() {
    var someNum = getInteger('someNum');
    someNum = someNum - 1;
    localStorage.setItem('someNum', someNum);
    displayNum();
}

function getInteger(keyVal){
    // gets value and does some basic validation
    var someInt = localStorage.getItem(keyVal);
    if(someInt == null)
    {
        someInt = 0;
    }
    return Number(someInt);
}

function resetCount(){
    localStorage.setItem('someNum', 0);
    displayNum();
}

function displayNum() {
    document.getElementById("someNum").innerHTML = getInteger('someNum');
}

displayNum();