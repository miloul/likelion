var itemList = []
// var itemList = new Array();

var addBtn = document.querySelector("#add")
addBtn.addEventListener("click", addList);

function addList() {
    var item = document.querySelector("#item").value;
    if(item!=null){
    itemList.push(item);
    document.querySelector("#item").value = "";
    }
    console.log(itemList);

    showList();
}

function showList() {
    var list = "<ul>";
    for(var i=0; i<itemList.length; i++){
        list += "<li>"+itemList[i]+"<span class='close' id="+i+"></span></li>";
    }
    list += "</ul>"

    document.querySelector("#itemList").innerHTML=list;

    var remove = document.querySelectorAll(".close");

    for(var i=0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id=this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}
