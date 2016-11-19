//Initialise global variables counting how many beers are in the cart
var lager = 0;
var ale = 0;
var ipa = 0;
var stout = 0;

//Define addBeer function which takes one parameter called input
function addBeer(input){
    
    //Define input as id
    var id = input;
    
    //Check what kind of beer was selected
    if(id === "1") {
        //Get the quantity from the dropdown
        var qty = document.getElementById("lager_qty").value;
        //Set selection to the type of beer selected
        var selection = "Lager";
        //Add the quantity selected to the current quantity
        lager += Number(qty);
    } else if(id === "2") {
        var qty = document.getElementById("ale_qty").value;
        var selection = "Ale"; 
        ale += Number(qty);
    } else if(id === "3") {
        var qty = document.getElementById("ipa_qty").value;
        var selection = "IPA";
        ipa += Number(qty);
    } else if(id === "4") {
        var qty = document.getElementById("stout_qty").value;
        var selection = "Stout";
        stout += Number(qty);
    }
    
    //Get the parent element that we want to write our cart items into 
    var parent = document.getElementById("cart_items");
    //Get the text from the parent element
    var inTxt = parent.innerHTML.toString();
    
    //If no beers have been added yet
    if(inTxt.trim().substr(0,7) === "No item"){
        
        //Reset the innerHTML of parent to the below.
        parent.innerHTML ="<i>Drag &amp; drop one of the bottles from the left here to add them to your order!</i>";
        //Create a new unordered list
        var ulNode = document.createElement("UL");
        //Set the id of the unordered list to cart_list
        ulNode.setAttribute("id", "cart _list");
        //Remove the default list-style-type
        ulNode.style.listStyleType="none";
        //Append the UL to parent
        parent.appendChild(ulNode);
        
        //Create empty LIs for all beers
        for (i = 1; i < 5; i++) {
            
            //Create a new LI node 
            var liNode = document.createElement("LI");
            //Give the new LI node an id with the last character matching the beer's id
            liNode.setAttribute("id", "cart_list_item_"+i);
            //Append LI node to the UL
            ulNode.appendChild(liNode);
        } 
        
        //Get the current beer's LI and update it with text 
        document.getElementById("cart_list_item_"+id).innerHTML=eval(selection.toLowerCase())+"x "+selection+"(s)<span style='float:right;'>€ "+(Number(eval(selection.toLowerCase()))*6.50).toFixed(2)+"</span>";
        
        
    //If some beers have already been added continue here
    } else {
        //Get the current beer's LI and update it with text
        document.getElementById("cart_list_item_"+id).innerHTML=eval(selection.toLowerCase())+"x "+selection+"(s)<span style='float:right;'>€ "+(Number(eval(selection.toLowerCase()))*6.50).toFixed(2)+"</span>";
    }
    
    //Calculate the total for all beers ordered
    var total = ((lager*6.50)+(ale*6.50)+(ipa*6.50)+(stout*6.50)).toFixed(2);
    //Update the total at the bottom
    document.getElementById("total_price").innerHTML = "Total: € "+total
    +"<br />"
    +"<button style='float:right;'>To Checkout</button>"
    +"<br />";
    
}

function dragStart(event) {
    //When dragging started get the text from the item you dragged
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    //Prevents default i.e. makes it droppable
    event.preventDefault();
}

function drop(event) {
    //Prevents default i.e. makes it droppable
    event.preventDefault();
    //Get the text from the dragged object (e.g. thumb1, thumb2, etc.)
    var data = event.dataTransfer.getData("Text");
    //Replace "thumb" to leave us with just an id of 1, 2, 3 or 4
    var id = data.replace("thumb","");
    //Call addBeer function passing the id as parameter
    addBeer(id);
    
}