var li_elements = document.querySelectorAll(".list-left ul li");
var item_elements = document.querySelectorAll(".item");
for(var i = 0; i < li_elements.length; i++){
    li_elements[i].addEventListener("click", function(){
        li_elements.forEach(function(li){
        li.classList.remove("active");
        
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item){
        item.style.display = "none";
    });
    

    if(li_value == "auberon"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "avallach"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "bran"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "caranthir"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "cerys"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "ciri"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "crach"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "eredin"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "eskel"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "fringilla"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "espejo"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "geralt"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "hjalmar"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "imlerith"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "jaskier"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "keira"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "lambert"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "letho"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "philippa"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "priscilla"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "radovid"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "dijkstra"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "thaler"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "triss"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "roche"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "ves"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "vesemir"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "yennefer"){
        document.querySelector("." + li_value).style.display = "block";
    }else if(li_value == "zoltan"){
        document.querySelector("." + li_value).style.display = "block";
    }else{
        console.log("");
    }
    });
}


//Efecto de Scroll reveal
/*
ScrollReveal().reveal(".scroll", {
    reset: true,
    delay: 500
});
*/