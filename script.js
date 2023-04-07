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

let yuque = {
    getElement(){
        this.box1 = document.getElementsByClassName("github")
        this.box2 = document.getElementsByClassName("docs");
        this.box3 = document.getElementsByClassName("yuque");
        this.text = document.getElementsByClassName("yuquetext");
    },
    addEvent(){
        this.getElement();
        this.box3[0].addEventListener("mouseover",()=>{
            this.box1[0].style.width = "12rem"
            this.box2[0].className = "docs plus"
            this.box3[0].style.height = "12rem"
            this.box3[0].style.width = "18rem"
            this.text[0].className = "yuquetext text"
        },true)
        this.box3[0].addEventListener("mouseout",()=>{
            this.box1[0].style.width = "15rem"
            this.box2[0].className = "docs"
            this.box3[0].style.height = "6rem"
            this.box3[0].style.width = "15rem"
            this.text[0].className = "yuquetext"
        },false)
    }
}

window.onload=()=>{
    page.addEvent();
    yuque.addEvent();
    console.log(yuque)
}
