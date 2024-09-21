const form = document.getElementById("input");



function reverseString(str){
    return str.split("").reverse().join("");
}
function test(){
    const value = form.value
    const reversal = reverseString(value)
    
    if (value === reversal){
        alert("it is a palidrome")

    }else{
        alert("its not a palidrome")
    }
    input.value = ""
    
}