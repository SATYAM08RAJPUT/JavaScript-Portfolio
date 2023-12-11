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
        <h1>My skills</h1>
        <p>Hello I am Web Developer. My skills are...</p>
        </div>
        <div class ="skilladd">
        <div class = "adskil">
        <div>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" class="skilimg">
        <h3>HTML</h3>
        </div>
        <div>
        <img src ="https://camo.githubusercontent.com/119b29ca4b9d31cf3969a94eb57fcfbbea0879b493c09c89dc6d4b7fb9e0dc37/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667" class="skilimg">
        <h3>CSS</h3>
        </div>
        <div>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" class="skilimg">
        <h3>JavaScript</h3>
        </div>
        <div>
        <img src ="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" class="skilimg">
        <h3>GitHub</h3>
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