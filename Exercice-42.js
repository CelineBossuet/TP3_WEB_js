window.onload=function(){
    function liste(i){
        var list = getDefinition(i)
        affiche(list)

    }

    function affiche(list){
        var elem  = document.getElementById("contents")

        // title
        var title = document.createElement("h1")
        var text = document.createTextNode(list["title"])
        title.appendChild(text)
        elem.appendChild(title)   
        
        // items
        var items = list["items"]
        console.log(items.length)
        for (i = 0; i < items.length; i++){
            console.log(typeof items[i])

            if (typeof items[i] == "string"){
                console.log("int")
                var item = document.createTextNode(items[i])
                elem.appendChild(item)
            }
            else{
                console.log("autre")
                affiche(items[i])
            }
        }
    }


    document.getElementsByTagName("input")[0].addEventListener("click", () => liste(1), false)
    document.getElementsByTagName("input")[1].addEventListener("click", () => liste(2), false)
    document.getElementsByTagName("input")[2].addEventListener("click", () => liste(3), false)
    document.getElementsByTagName("input")[3].addEventListener("click", () => liste(4), false)
    document.getElementsByTagName("input")[4].addEventListener("click", () => liste(5), false)


}