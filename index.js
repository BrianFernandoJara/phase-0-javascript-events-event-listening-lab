function addingEventListener() {
    const theButton = document.getElementById("button");

    function alertDropDown(){
        alert("This was an alert WOAH")
    }
    theButton.addEventListener("click",alertDropDown)
}

addingEventListener();