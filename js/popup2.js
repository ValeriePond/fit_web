function popup(){
    var btn = document.getElementById("popup_order").value;
    if(btn == "popup_order"){
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"});
        //document.body.style.overflow = "hidden";
    }
    document.getElementById('popup_order').addEventListener('click', popup)
}

function close_popup(){
    $(".popup").animate({opacity: "0"});
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
    //document.getElementById("username").value = "";
    //document.getElementById("pass").value = "";
}