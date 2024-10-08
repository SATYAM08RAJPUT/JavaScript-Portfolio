export class Project {
    constructor(data) {
        this.data = data
    }
    renderProject() {
        const projectDeatils = `<div id ="projectid">
        <p class="mainheading2">Projects</p>
        <h1 class ="headfirst2">LATEST PROJECTS</h1>
        </div>
        <div class="project-grid">
        <div class="projectinfo">
        <img src="https://i.pinimg.com/736x/29/21/d5/2921d58d48a1bb847bf24ee3761ce055.jpg" />
        </div>
        <div class="projectinfo">
        <div class="second-Grid">
        <h4>Chisfis Clone</h4>
        <p>Welcome to Chisfis, It is uses for Online booking, Listing, Real Estate, and booking systems.This is made in React Project.
        </p>   
        <button><a href ="https://chisfis-cloneeeeeee.netlify.app/" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/Chisfis" target="_blank">Project Source</a></button>
        </div>
        </div>
         <div class="projectinfo">
        <img src="https://cdn.techjockey.com/blog/wp-content/uploads/2023/10/01133720/foundit-dashboard-showing-jobs-for-digital-marketing-1-1024x536.png" />
        </div>
        <div class="projectinfo">
        <div class="second-Grid">
        <h4>Job Finder</h4>
        <p>Welcome to Job Finde, It is use find the job based on Location, Salary & Experience. 
        </p>   
        <button><a href ="https://search-board.netlify.app/" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/Job-finder" target="_blank">Project Source</a></button>
        </div>
        </div>
        <div class="projectinfo">
        <img src="https://shots.codepen.io/username/pen/KgxmXv-800.jpg?version=1534621050" />
        </div>
        <div class="projectinfo">
        <div class="second-Grid">
        <h4>Authentication form</h4>
        <p>This is an authentication form that we have created with the help of React. Lot of implementation features are included in it..
        </p>   
        <button><a href ="https://user-registration-axsoft.netlify.app/" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/React-Authentication-App" target="_blank">Project Source</a></button>
        </div>
        </div>
        <div class="projectinfo">
        <img src="https://s3.envato.com/files/411516436/theme-banner.__large_preview.png" />
        </div>
        <div class="projectinfo">
        <div class="third-grid">
        <h4>Krinky Portfolio</h4>
        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
        </p>   
        <button><a href ="https://satyam-taskportfolio.netlify.app/" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/Task-Portfolio" target="_blank">Project Source</a></button>
        </div>
        </div>
        <div class="projectinfo">
        <img src="https://www.taskade.com/blog/wp-content/uploads/2022/10/kanban-example.png" />
        </div>
        <div class="projectinfo">
        <div class="second-Grid">
        <h4>Kanban App</h4>
        <p>Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location
        </p>   
        <button><a href ="https://kanban-app-satyam.netlify.app" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/Drag-Drop-Project" target="_blank">Project Source</a></button>
        </div>
        </div>
        <div class="projectinfo">
        <img src="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw="" />
        </div>
        <div class="projectinfo">
        <div class="third-grid">
        <h4>Job Search App</h4>
        <p>What's trending on Indeed With Indeed, you can search millions of jobs online to find the next step in your career.
        </p>   
        <button><a href ="https://jobfind-satyam.netlify.app/" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/Test" target="_blank">Project Source</a></button>
        </div>
        </div>
        <div class="projectinfo">
        <img src="https://th.bing.com/th/id/OIP.lHSUaeFAhus8u7heBGysCgHaDa?w=296&h=161&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </div>
        <div class="projectinfo">
        <div class="second-Grid">
        <h4>Google News Clone</h4>
        <p>Google Images is a search engine owned by Google that allows users search the World Wide Web for images
        </p>   
        <button><a href ="https://googlenews-satyam.netlify.app/" target="_blank">Live Project</a></button>
        <button><a href ="https://github.com/SATYAM08RAJPUT/Google-News" target="_blank">Project Source</a></button>
        </div>
        </div>  
    </div>

        </div>`
        const cretProject = document.createElement('div')
        cretProject.innerHTML = projectDeatils
        const takeNormalId = document.getElementById('head')
        takeNormalId.append(cretProject)
    }
    visibleText(entries) {
        console.log(entries)
        entries.map((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            } else {
                entry.target.classList.remove('visible')
            }
        })
    }
    init() {
        this.renderProject();
        const target = document.querySelector(".mainheading2");
        console.log(target)
        const target2 = document.querySelector(".headfirst2")
        console.log(target2)
        const observer = new IntersectionObserver(this.visibleText)
        console.log(observer)
        observer.observe(target)
        observer.observe(target2)
    }
}


const crteProject = new Project();
crteProject.init();