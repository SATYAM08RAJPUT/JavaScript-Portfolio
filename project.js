export class Project{
    constructor(data){
        this.data = data
    }
    renderProject(){
        const projectDeatils = `<div id ="projectid">
        <p class="mainheading">Projects</p>
        <h1 class ="headfirst">A Passionate Developer Who Loves <br>to Code</h1>
        </div>
        <div class ="projectgrid">
        <div class = "progrid">
        <img src ="https://www.taskade.com/blog/wp-content/uploads/2022/10/kanban-example.png">
        <p>Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location</p>
        <button class ="projectbtn"><a href ="https://github.com/SATYAM08RAJPUT/Drag-Drop-Project" target="_blank">Source</a></button>
        <button class ="projectbtn"><a href ="https://kanban-app-satyam.netlify.app" target="_blank">Live</a></button>
        </div>
        <div  class = "progrid">
        <img src ="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw=">
        <p>What's trending on Indeed With Indeed, you can search millions of jobs online to find the next step in your career.</p>
        <button class ="projectbtn"><a href ="https://github.com/SATYAM08RAJPUT/Test" target="_blank">Source</a></button>
        <button class ="projectbtn"><a href ="https://jobfind-satyam.netlify.app/" target="_blank">Live</a></button>
        </div>
        <div  class = "progrid">
        <img src ="https://th.bing.com/th/id/OIP.lHSUaeFAhus8u7heBGysCgHaDa?w=296&h=161&c=7&r=0&o=5&dpr=1.3&pid=1.7">
        <p>Google Images is a search engine owned by Google that allows users search the World Wide Web for images.</p>
        <button class ="projectbtn"><a href ="https://github.com/SATYAM08RAJPUT/Google-News" target="_blank" >Source</a></button>
        <button class ="projectbtn"><a href ="https://googlenews-satyam.netlify.app/" target="_blank">Live</a></button>
        </div>
        </div>`
        const cretProject = document.createElement('div')
        cretProject.innerHTML = projectDeatils
        const takeNormalId = document.getElementById('head')
        takeNormalId.append(cretProject)
    }
    init(){
        this.renderProject();
    }
    }


const crteProject = new Project();
crteProject.init();