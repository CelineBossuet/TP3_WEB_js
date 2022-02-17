window.onload=function(){
    function liste(i){
        var list = getDefinition(i)
        var contents =document.getElementById("contents")
        while(contents.firstChild!=null){
            contents.removeChild(contents.firstChild)
        }
        affiche(contents, list)

    }

    function affiche(elem, list){
        var dl = document.createElement("dl")

        // title
        var dt = document.createElement("dt")
        var text = document.createTextNode(list["title"])
        dt.appendChild(text)
        dl.append(dt)
        
        // items
        var items = list["items"]
        var dd = document.createElement("dd")
        var ul = document.createElement("ul")
        for (var i = 0; i < items.length; i++){
            var li = document.createElement("li")
            if (typeof items[i] == "string" ){
                var item = document.createTextNode(items[i])
                li.appendChild(item)
                ul.append(li)
            }
            else{
                ul.append(li)
                affiche(li, items[i])
            }
        }
        dd.append(ul)
        dl.append(dd)
        elem.appendChild(dl)
        return elem
    }


    document.getElementsByTagName("input")[0].addEventListener("click", () => liste(1), false)
    document.getElementsByTagName("input")[1].addEventListener("click", () => liste(2), false)
    document.getElementsByTagName("input")[2].addEventListener("click", () => liste(3), false)
    document.getElementsByTagName("input")[3].addEventListener("click", () => liste(4), false)
    document.getElementsByTagName("input")[4].addEventListener("click", () => liste(5), false)


}