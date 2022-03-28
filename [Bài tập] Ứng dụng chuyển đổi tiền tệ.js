



function convert() {
 let a = document.getElementById("amount-el").value
 let b = document.getElementById("From-Currency").value
 let c = document.getElementById("To-Currency").value

 let result = 1*a/b*c;
 document.getElementById("result-el").innerHTML = result;
}





