var lager = 0;
var ale = 0;
var ipa = 0;
var stout = 0;

function addBeer(input){
    
    var id = input;
    if(id === "1") {
            var selection = "Lager";
            lager++;
        } else if(id === "2") {
            var selection = "Ale"; 
            ale++;
        } else if(id === "3") {
            var selection = "IPA";
            ipa++;
        } else if(id === "4") {
            var selection = "Stout";
            stout++;
        }
    console.log(id);
    console.log(selection);
    
    var parent = document.getElementById("cart_items");
    var inTxt = parent.innerHTML.toString();
    
    //If no beers have been added yet
    if(inTxt.trim().substr(0,7) === "No item"){
        
        //Reset the innerHTML of parent to the below.
        parent.innerHTML ="<i>Drag &amp; drop one of the bottles from the left here to add them to your order!</i>";
        //Create a new unordered list
        var ulNode = document.createElement("UL");
        //Set the id of the unordered list to cart_list
        ulNode.setAttribute("id", "cart _list");
        ulNode.style.listStyleType="none";
        //Append the UL to parent
        parent.appendChild(ulNode);
        
        //Create empty LIs for all beers
        for (i = 1; i < 5; i++) {
            
            var liNode = document.createElement("LI");
            liNode.setAttribute("id", "cart_list_item_"+i);
            ulNode.appendChild(liNode);
        } 
        
        
        document.getElementById("cart_list_item_"+id).innerHTML=eval(selection.toLowerCase())+"x "+selection+"(s)";
        
        
    //If some beers have already been added continue here
    } else {
        document.getElementById("cart_list_item_"+id).innerHTML=eval(selection.toLowerCase())+"x "+selection+"(s)";
    }
    
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    var id = data.replace("thumb","");
    
    addBeer(id);
    
}