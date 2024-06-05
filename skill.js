export class Skill{
    constructor(data){
        this.data = data;
    }
    renderSkill(){
        const skill = `
        <div class ="skill" id = "skillid">
        <p class="mainheading">Skills</p>
        <h1 class ="headfirst">I Work Hard to Improve My Skills <br> Regularly</h1>
        </div>
        <div class ="skillgrid">
        <div class ="skilladd">
        <div class = "adskil">
        <div>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" class="skilimg">
        <h3>HTML</h3>
        </div>
        <div>
        <img src ="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" class="skilimg">
        <h3>CSS</h3>
        </div>
        <div>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" class="skilimg">
        <h3>JavaScript</h3>
        </div>
        <div>
        <img src ="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" class="skilimg">
        <h3>React</h3>
        </div>
        <div>
        <img src ="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" class="skilimg">
        <h3>GitHub</h3>
        </div>
        <div>
        <img src ="https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-json-file-document-icon-png-image_897441.jpg" class="skilimg">
        <h3>JSON</h3>
        </div>
        <div>
        <img src ="https://e7.pngegg.com/pngimages/834/715/png-clipart-computer-icons-api-text-logo.png" class="skilimg">
        <h3>API</h3>
        </div>
        <div>
        <img src ="https://raw.githubusercontent.com/github/explore/8be26d91eb231fec0b8856359979ac09f27173fd/topics/ajax/ajax.png" class="skilimg">
        <h3>AJAX</h3>
        </div>
        </div>
        </div>
        </div>`
        const creteSkill = document.createElement("div")
        creteSkill.innerHTML = skill;
        const takeid = document.getElementById("head")
        takeid.append(creteSkill)
    }
    init(){
        this.renderSkill()
    }
}
const skilcheck = new Skill()
skilcheck.init()