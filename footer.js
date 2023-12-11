export class Footer{
    constructor(data){
        this.data = data
    }
    renderFooter(){
        const footer = `<div class ="footer">
        <p>Developed with love by <h3>SATYAM RAJPUT </h3> © 2023</p>
        </div>`
        const cretFooter = document.createElement('div')
        cretFooter.innerHTML = footer;
        const takeNormalId = document.getElementById('head')
        takeNormalId.append(cretFooter)
    }
    init(){
        this.renderFooter()
    }
}
const footer = new Footer()
footer.init()