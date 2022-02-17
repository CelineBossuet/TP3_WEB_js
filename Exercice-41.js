
window.onload=function(){


    function lifo_push(){
        //fonction permettant d'ajouter à lifo en 1ere position la text saisie dans newItem
        let elem = document.createElement("li")
        let text = document.createTextNode(document.getElementById("newItem").value) //on récupère le texte saisi
        if(document.getElementById("newItem").value==""){//si le text est vide on lance une erreur
            throw new Error("can't push non existant text")
        }else{
            elem.appendChild(text) //sinon on mets text dans un <li> qu'ensuite on ajoute dans lifo 
            document.getElementById("lifo").prepend(elem)
            document.getElementById("newItem").value='' //on efface le texte écrit
        }
    }

    function lifo_pop(){
        //fonction permettant d'effacer le premier élément de lifo et renvoit une erreur si il en a pas
        let liste = document.getElementById("lifo")
        if(liste.firstElementChild != null){ //si il y a au moins un element on supprime le premier
            liste.removeChild(liste.firstElementChild)
        }else{//sinon on lance une erreur
            throw new Error("can't pop non-existant child")
        }
    }

    function lifo_peek(){
        //fonction qui réécrit le premier texte de lifo dans peek-area
        try{
            let liste = document.getElementById("lifo")
            let area = document.getElementById("peek-area")
            console.log(liste.firstElementChild.textContent)
            area.textContent=liste.firstElementChild.textContent
        }catch(e){ //si lifo n'a pas d'enfants renvoit une erreur
            throw new Error("can't peek non-existant child")
        }
    }


    function onKeyUp(event){
        //fonction permettant de bloquer la toucher entré dans la zone de saisie du texte
        if(event.keyCode== 13){
            event.preventDefault()
        } 
    }
    //management des event listeners
    document.getElementById("newItem").nextSibling.addEventListener("click", lifo_push, false)
    document.getElementsByTagName("input")[2].addEventListener("click", lifo_pop, false)
    document.getElementsByTagName("input")[3].addEventListener("click", lifo_peek, false)  
    document.getElementById("newItem").addEventListener("keypress",onKeyUp);
}

