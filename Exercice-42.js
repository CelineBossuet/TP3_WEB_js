window.onload=function(){
    function liste(i){
        var list = getDefinition(i)
        var contents =document.getElementById("contents")
        while(contents.firstChild!=null){
            contents.removeChild(contents.firstChild)
        }
        affiche(list)

    }

    function affiche(list){
        console.log("Je rentre")
        var elem  = document.getElementById("contents")
        var dl = document.createElement("dl")

        // title
        var dt = document.createElement("dt")
        var text = document.createTextNode(list["title"])
        console.log("Mon titre : "+list["title"])
        dt.appendChild(text)
        dl.append(dt)
        
        // items
        var items = list["items"]
        var dd = document.createElement("dd")
        
        for (i = 0; i < items.length; i++){
            var li = document.createElement("li")
            if (typeof items[i] == "string" ){
                console.log("j'ajoute "+items[i])
                var item = document.createTextNode(items[i])
                li.appendChild(item)
            }
            else{
                console.log(items[i])
                affiche(items[i])
            }
            dd.append(li)
        }
        dl.append(dd)
        elem.appendChild(dl)
        //console.log(elem)
    }


    document.getElementsByTagName("input")[0].addEventListener("click", () => liste(1), false)
    document.getElementsByTagName("input")[1].addEventListener("click", () => liste(2), false)
    document.getElementsByTagName("input")[2].addEventListener("click", () => liste(3), false)
    document.getElementsByTagName("input")[3].addEventListener("click", () => liste(4), false)
    document.getElementsByTagName("input")[4].addEventListener("click", () => liste(5), false)


}