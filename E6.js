function change()
{
    var box=document.getElementById("box");
    var bg=document.getElementById("bg").value;
    var text=document.getElementById("text").value;
    var size=document.getElementById("size").value;
    var width=document.getElementById("width").value;
    var height=document.getElementById("height").value;
    var range=document.getElementById("range").value;

    box.style.background= bg;
    box.style.color= text;
    box.style.width= width+ "px";
    box.style.height= height+ "px";
    box.style.fontSize= size+ "px";
    box.style.borderRadius= range+ "px";
}