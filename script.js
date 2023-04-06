let page = {
    getElement(){
        this.nav1 = document.getElementById("nav-1")
        this.nav2 = document.getElementById("nav-2")
        this.computer = document.getElementsByClassName("computer")
        this.painting = document.getElementsByClassName("painting")
    },

    switchPage(active,disabled){
        active.style.color = "black"
        disabled.style.color = "#9e9e9e"

        active.style.fontWeight = "bold"
        disabled.style.fontWeight = "normal"

        if(active.id == "nav-1"){
            this.computer[0].style.display = "flex"
            this.painting[0].style.display = "none"
        }else{
            this.computer[0].style.display = "none"
            this.painting[0].style.display = "flex"
        }
    },

    addEvent(){
        this.getElement();
        this.nav1.addEventListener("click",()=>{
            this.switchPage(this.nav1,this.nav2)
        },false)
    
        this.nav2.addEventListener("click",()=>{
            this.switchPage(this.nav2,this.nav1)
        },false)
    }
}

window.onload=()=>{
    page.addEvent();
}
