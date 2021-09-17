//function to increment likes when clicked
var i = 0;
function buttonClick() {
    console.log("we hit line 4")
    i++;
    document.getElementById("number").innerHTML = i + " " + "like(s)";
}
