export class Portfolio{
    constructor(data){
        this.data = data;
    }
    renderHeader(){
        const heaad = `<div class ="position"><div id ="header">
        <div class ="left"><h2 class ="sat">SATYAM </h2>
        <h2 class="raj"> RAJPUT</h2>
        </div>
        <div class ="middle"> 
        <li><a href = "#homeid"> Home </a></li>
        <li><a href = "#aboutid"> About</a></li>
        <li><a href = "#skillid"> Skill's</a></li>
        <li><a href = "#projectid"> Project</a></li>
        <li><a href = "#contactid"> Contact</a></li>
        </div>
        <div class ="right">
        <div>|</div>
        <a href ="https://www.linkedin.com/in/satyam-rajput-0457a11b4/" target="_blank" v><i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px;"></i></a>
        <a href ="https://github.com/SATYAM08RAJPUT" target="_blank" class ="icons"><i class="fa fa-github" aria-hidden="true" style="font-size:20px;"></i></a>
        </div>
        </div>
        </div>`
        document.getElementById('head').innerHTML = heaad
        
    }
    init(){
        this.renderHeader()
    }
}
const renderAll = new Portfolio();
renderAll.init()