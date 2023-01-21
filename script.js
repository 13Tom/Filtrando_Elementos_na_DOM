// get filter element
const filterElement = document.querySelector("header input");
// get cards elements
const cardsElement = document.querySelectorAll(".cards li");

// add input event for the filter element
filterElement.addEventListener("input", filterCards)


// filter function
function filterCards(){
    if(filterElement.value != ''){
        for(let card of cardsElement){
            let title = card.querySelector("h2")
            title =  title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)){   
                card.style.display ="none"
           }
        } 
          
    } else{            
        for(let card of cardsElement){
            card.style.display = "block"
        }
    }
}