
window.onload=function(){


    function lifo_push(){
        let elem = document.createElement("li")
        let text = document.createTextNode(document.getElementById("newItem").value)
        elem.appendChild(text)
        document.getElementById("lifo").prepend(elem)
        document.getElementById("newItem").value=''

    }

    function lifo_pop(){
        let liste = document.getElementById("lifo")
        if(liste.firstElementChild != null){
            liste.removeChild(liste.firstElementChild)
        }else{
            throw new Error("can't pop non-existant child")
        }
    }

    function lifo_peek(){
        try{
            let liste = document.getElementById("lifo")
            let area = document.getElementById("peek-area")
            console.log(liste.firstElementChild.textContent)
            area.textContent=liste.firstElementChild.textContent
        }catch(e){
            throw e
        }
    }

    document.getElementById("newItem").nextSibling.addEventListener("click", lifo_push, false)
    document.getElementsByTagName("input")[2].addEventListener("click", lifo_pop, false)
    document.getElementsByTagName("input")[3].addEventListener("click", lifo_peek, false)

    function onKeyUp(event){
        if(event.keyCode== 13){
            event.preventDefault()
        }
        
    }
    document.getElementById("newItem").addEventListener("keypress",onKeyUp);
}

