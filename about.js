export class About{
    constructor(data){
        this.data = data
    }
    renderAbout(){
        const about = `<div id ="aboutid">
        <p class="mainheading">About Me</p>
        <h1 class ="headfirst">A Passionate Developer Who Loves <br>to Code</h1>
        <div class ="about">
        <div class ="gridabout">
        <img src ="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </div>
        <div class ="gridaboutsecond">
        <p>
        I'm Satyam Rajput, a highly skilled web developer with expertise in:<br><br>
        🌐 JavaScript <br>
        ⚛️ React<br>
        🔄 Redux<br>
        🎨 HTML5<br>
        🖌️ CSS3<br>
        🌐 AJAX<br>
        📋 JSON<br>
        🔌 APIs<br>
        </p>
        <div class ="infosection">
        <div class = "info">
        <h5 class ='nameinfo'>Name</h5>
        <p>SATYAM RAJPUT</p>
        <h5 class ='nameinfo'>Email</h5>
        <p>satyamrajput081998@gmail.com</p>
        <h5 class ='nameinfo'>Phone</h5>
        <p>8954884738</p>
        </div>
        <div class = "info">
        <h5 class ='nameinfo'>Address</h5>
        <p>Bijnor(U.P)</p>
        <h5 class ='nameinfo'>Degree</h5>
        <p>Bachelor's</p>
        <h5 class ='nameinfo'>Full time Job</h5>
        <p>Available</p>
        </div>
        </div>
        </div>
        </div>
        </div>>`
        const cretabout = document.createElement('div')
        cretabout.innerHTML = about;
        const takeNormalId = document.getElementById('head')
        takeNormalId.append(cretabout)
    }

    visibleText(entries){
        console.log(entries)
        entries.map((entry) => {
            console.log(entry)
           if(entry.isIntersecting) {
            entry.target.classList.add('visible')
           } else {
            entry.target.classList.remove('visible')
        }
    })
    }
 
    init(){
        this.renderAbout()
        const target  = document.querySelector(".mainheading");
        console.log(target)
        const target2 = document.querySelector(".headfirst")
        console.log(target2)
        const observer = new IntersectionObserver(this.visibleText)
        console.log(observer)
        observer.observe(target)
        observer.observe(target2)
    }
}
const about = new About()
about.init()