window.onload=function(){
    function liste(i){
        var list = getDefinition(i)
        var contents =document.getElementById("contents")
        //si contents possède des enfants tous les enfants qu'il possède pour ne pas afficher le résultat du bouton d'avant
        while(contents.firstChild!=null){ 
            contents.removeChild(contents.firstChild)
        }
        affiche(contents, list) //appel de la fonction qui va ajouter récursivement les éléments dans contents

    }

    function affiche(elem, list){
        //fonction permettant d'ajouter dans elem la suite d'éléments de list
        var dl = document.createElement("dl")

        // title
        var dt = document.createElement("dt")
        var title = document.createTextNode(list["title"]) //on récupère le titre dans un Text Node
        dt.appendChild(title)
        dl.append(dt)
        
        // items
        var items = list["items"] //on récupère tous les items
        var dd = document.createElement("dd")
        var ul = document.createElement("ul")
        for (var i = 0; i < items.length; i++){
            var li = document.createElement("li") 
            if (typeof items[i] == "string" ){ //si c'est un string on l'ajoute directement à notre liste li 
                var item = document.createTextNode(items[i])
                li.appendChild(item)
                ul.append(li)
            }
            else{//sinon récursif
                ul.append(li)
                affiche(li, items[i]) //on doit ajouter dans li la suite des items
            }
        }

        //à la fin on ajoute tout à elem 
        dd.append(ul)
        dl.append(dd)
        elem.appendChild(dl)
        return elem
    }

//permet de s'occuper de l'event manager de tous les boutons
    document.getElementsByTagName("input")[0].addEventListener("change", () => liste(1), false)
    document.getElementsByTagName("input")[1].addEventListener("change", () => liste(2), false)
    document.getElementsByTagName("input")[2].addEventListener("change", () => liste(3), false)
    document.getElementsByTagName("input")[3].addEventListener("change", () => liste(4), false)
    document.getElementsByTagName("input")[4].addEventListener("change", () => liste(5), false)


}