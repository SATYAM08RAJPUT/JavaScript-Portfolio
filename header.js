export class Portfolio {
    constructor(data) {
        this.data = data;
    }
    renderHeader() {
        const heaad = `<div class ="position">
        <div id ="header">
        <div class ="left">
        <h2 class ="sat">SATYAM </h2>
        <h2 class="raj"> RAJPUT</h2>
        </div>
        <i style="font-size:35px" class="fa" id="menu-icon">&#xf0c9;</i>
        <div class ="middle"> 
        <li><a href = "#homeid" class="nav-items"> Home </a></li>
        <li><a href = "#aboutid" class="nav-items"> About</a></li>
        <li><a href = "#skillid" class="nav-items"> Skills</a></li>
        <li><a href = "#projectid" class="nav-items"> Project</a></li>
        <li><a href = "#contactid" class="nav-items"> Contact</a></li>
        </div>
        <div class ="right">
        <a href ="https://www.linkedin.com/in/satyam-rajput-16b999301/" target="_blank" v><i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px;"></i></a>
        <a href ="https://github.com/SATYAM08RAJPUT" target="_blank" class ="icons"><i class="fa fa-github" aria-hidden="true" style="font-size:20px;"></i></a>
        </div>
        </div>
        </div>`
        document.getElementById('head').innerHTML = heaad;
        const humberMenu = document.getElementById("menu-icon")
        console.log(humberMenu)
        humberMenu.addEventListener('click', () => {
            const navTag = document.querySelector(".middle")
            //  navTag.style.opacity = "1"
            navTag.classList.toggle("visible-item")
        })
        const navItem = document.querySelectorAll(".nav-items")
        console.log(navItem)
        navItem.forEach((item) => {
            item.addEventListener("click", () => {
                const navTag = document.querySelector(".middle")
                navTag.classList.remove("visible-item")
            })
        })

    }
    init() {
        this.renderHeader()
    }
}
const renderAll = new Portfolio();
renderAll.init()