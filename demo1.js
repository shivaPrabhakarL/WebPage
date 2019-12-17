//document.getElementById("root").innerHTML="hello";

var severReq = new XMLHttpRequest();
severReq.open("GET","https://reqres.in/api/users?page=1",true);

severReq.onload = function() {
    var data = JSON.parse(this.response)

    const app = document.getElementById('root')

   
    if (severReq.status >= 200 && severReq.status < 400) {
      data["data"].forEach(m => {

        const logo = document.createElement('img')
        logo.src = m.avatar
    
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
    
        
        app.appendChild(container)
        

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = m.first_name+" "+m.last_name

        const p = document.createElement('p')
        p.textContent = m.email

        container.appendChild(card)
        card.appendChild(logo)
        card.appendChild(h1)
        card.appendChild(p)
        console.log(m.email);
      })
    } else {
      console.log('error')
    }
}
severReq.send();



