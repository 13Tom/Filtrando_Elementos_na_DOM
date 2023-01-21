const filterElement = document.querySelector("header input");
const cardsElement = document.querySelectorAll(".cards li");
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