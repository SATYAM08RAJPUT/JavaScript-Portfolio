export class Contact{
    constructor(data){
        this.data = data
    }
    renderContact(){
        const contactDeatils = `<div id ="contactid">
        <p class="mainheading">Contact</p>
        <h1 class ="headfirst">I Want to Hear from You</h1>
        </div>
        <div class ="contactgrid">
        <div class ="conGrid">

        <div class ="location">
        <i class="fa fa-phone" aria-hidden="true" style="font-size:30px;color: #fff;"></i>
        </div>
        <div class ="location">
        <i class="fa fa-envelope" aria-hidden="true" style="font-size:30px;color: #fff;"></i>
        </div>
        <div class ="location">
        <i class="fa fa-map-marker" aria-hidden="true" style="font-size:30px;color: #fff;"></i>
        </div>
 
        </div>
        <div class = "conGrid">
        <h3>Phone</h3>
        <p>8954884738</p>
        <h3>Email</h3>
        <p>satyamrajput081998@gmail.com</p>
        <h3>Address</h3>
        <p>UP, BIJNOR</p>
        </div>
        <div class = "conGrid">
        <div class ="wrapper">
        <input type ="text"  id = "name" placeholder ="Your Name" required>
        <input type ="email" id = "email" placeholder ="Your Email"  required>
        <input type ="text" id = "phone" placeholder ="Your Phone"  required>
        <input type ="text" id = "subject" placeholder ="Subject" required>
        <textarea id="message" placeholder ="Write Your Message here"></textarea>
        </div>
        <button class ="submitbtn">Submit Now</button>
        </div>
        </div>`
        const cretProject = document.createElement('div')
        cretProject.innerHTML = contactDeatils
        const takeNormalId = document.getElementById('head')
        takeNormalId.append(cretProject);
        const submitbtn = document.querySelector('.submitbtn');
        submitbtn.addEventListener('click', (event) => {
            event.preventDefault()
            this.sendEmail()
        })
    }
    sendEmail(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "satyamrajput081998@gmail.com",
            Password : "B9CCE002BB88F834DA5995625619821C7DDF",
            To : 'sra537434@gmail.com',
            From : document.getElementById('email').value,
            Subject : "This is the subject",
            Body : "Name:-" + document.getElementById("name").value +
            "<br> Email:" + document.getElementById('email').value +
            "<br> Phone:" + document.getElementById('phone').value +
            "<br> Subject:" + document.getElementById('subject').value +
            "<br> Message:" + document.getElementById('message').value
        }).then(
          message => alert("message sent Succesfully")
        );
    }
    init(){
        this.renderContact();
    }
}
const contectmade= new Contact();
contectmade.init()