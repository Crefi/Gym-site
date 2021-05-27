let theme = localStorage.getItem("theme")
if(theme==null){
    setTheme("blue")
}else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName("theme-dot")
for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode 
        setTheme(mode)
        })
}
    function setTheme(mode){
        if(mode == "light"){
            document.getElementById("theme-style").href = "light.css"
        }
        if(mode == "blue"){
            document.getElementById("theme-style").href = "default.css"
        }
        if(mode == "green"){
            document.getElementById("theme-style").href = "green.css"
        }
        if(mode == "purple"){
            document.getElementById("theme-style").href = "purple.css"
        }
        localStorage.setItem("theme",mode)
    }

    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }