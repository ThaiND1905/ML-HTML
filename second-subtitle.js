function toggle(obj1,obj2) {
    var obj2 = document.getElementById(obj2);
    var obj1=document.getElementById(obj1);
    if (obj1.style.display == "block") obj1.style.display = "none";
    else {obj1.style.display = "block";
    obj2.style.display = "none";}
}