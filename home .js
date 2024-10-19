export class Home {
    constructor(data) {
        this.data = data;
    }
    renderHome() {
        const home = `<div id ="homeid">
        <div class ="name">
        <h1>SATYAM <span>RAJPUT</span></h1>
        <div class="firstPara">
        <p>Front-End developer & Web developer</p>
        </div>
        <a href="https://drive.google.com/file/d/1_wsZbh8oMNHYSz_g5Fn9HfBsHIds2KEk/view?usp=sharing"  target="_blank" download class="btn">Download Resume</a>
        </div>
        <img src ="https://cdn3.vectorstock.com/i/1000x1000/30/42/person-using-computer-icon-image-vector-16973042.jpg" class="logoimg">
        </div>
        
        <div class ="homediv">
        <div class ="grid">
        <div class ="firstpara">
        <i style="font-size:65px;color:#00c0ff" class="fa">&#xf013;</i>
        <h3>Deeper Skillset</h3>
        <p>There are different types of web developers, all of whom participate in the coding, maintaining, and analyzing the websites and significant projects worldwide. <br> Frontend Developers must have basic skills that can build highly functional and secure websites.</p>
        </div>
        </div>
        <div class ="grid">
        <div class ="firstpara">
        <i class="fa fa-briefcase" aria-hidden="true" style="font-size:65px;color:#00c0ff"></i>
        <h3>Creative Work</h3>
        <p>Frontend development is where technology meets web design, bringing a site's design to life and turning the project vision into a functioning website that users can interact with. <br>Creative developers blur the lines between a coder and a designer, </p>
        </div>
        </div>
        <div class ="grid">
        <div class ="firstpara">
        <i class="fa fa-diamond" aria-hidden="true" style="font-size:65px;color:#00c0ff"></i>
        <h3>Strong Dedication</h3>
        <p>My greatest skill as a front end developer is my in-depth knowledge of different coding languages. I'm an expert in JavaScript, CSS, and HTML. <br>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. </p>
        </div>
        </div>
        </div>`
        const crethome = document.createElement('div')
        crethome.innerHTML = home;
        const takeNormalId = document.getElementById('head')
        takeNormalId.append(crethome)
    }

    // visibleText(entries){
    // const target  = document.querySelector(".grid");
    // console.log(target)
    // console.log(entries)
    //     entries.map((entry) => {
    //        if(entry.isIntersecting) {
    //         entry.target.classList.add('visible')
    //        } else {
    //         entry.target.classList.remove('visible')
    //     }
    // })
    // }

    init() {
        this.renderHome()
        // this.visibleText(entries)
        // const observer = new IntersectionObserver(this.visibleText)
        // console.log(observer)
        // observer.observe(target)
    }
}
const home = new Home()
home.init()