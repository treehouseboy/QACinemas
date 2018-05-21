function printPrice(){

 var ticketPrice = [8, 6, 6, 4];
 var ticketTypeQuantity = [document.getElementById("standard").value, 
 						   document.getElementById("oap").value, 
 						   document.getElementById("student").value, 
 						   document.getElementById("child").value];
 var totalPrice = 0;
 if(document.getElementById("weekday").value == "Wednesday"){
 for(var i = 0; i < ticketPrice.length; i++) {
 ticketPrice[i] -= 2;
 }
 }
 for(var i = 0; i < ticketPrice.length; i++){
 totalPrice += (ticketPrice[i] * ticketTypeQuantity[i]);
 }
 
 var sentence = "£" + totalPrice;
 
 document.getElementById("inserts").innerHTML=sentence;
 
}
