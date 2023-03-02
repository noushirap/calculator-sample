function Bclear(){
    document.getElementById("screen").value=""
}
function Bclick(val){
    document.getElementById("screen").value= document.getElementById("screen").value+val
}
function Eclick(){
    var text=document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result
}
function back(){
    var bsp = document.getElementById("Sbtn").value;
    document.getElementById("screen").value=bsp.substring(0,bsp.length -1);
}