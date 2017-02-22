
var shoppingCart = [];
var list = new Array();

 function displayShoppingCart(){
            var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");            
            while(orderedProductsTblBody.rows.length>0) {
                orderedProductsTblBody.deleteRow(0);
            }
                   
            
            var cart_total_price=0;    
			
       for(var i = 0, len = localStorage.length; i < len; ++i){
                var row=orderedProductsTblBody.insertRow();                
                var cellName = row.insertCell(0);               
                var cellPrice = row.insertCell(1);
                cellPrice.align="right";                
                cellName.innerHTML = localStorage.key(i);                
                cellPrice.innerHTML = localStorage.getItem(localStorage.key(i));
                cart_total_price+=localStorage.getItem(localStorage.key(i))
            }
            
            document.getElementById("cart_total").innerHTML=cart_total_price;
        }            
		
function add_to_card(name, price){
           
         localStorage.setItem(name, price);
           
        }  
		
		
		
		
		
		  



window.onload = function() {
  var table = createTable(goods);
  
  }

function delete_from_cart(name, price) {

}

function createTable(data) {
 
  return table;
}