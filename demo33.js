class obj {
    constructor (avatar,fname,lname,email){
        this.email = email;
        this.avatar = avatar;
        this.fname = fname;
        this.lname = lname;
    }
} 



var v = 1;
var url = "https://reqres.in/api/users?page=" ;
function LoadMoreCall(){
    v = v+1;
    console.log(url+v)
    sendRequest(url+v)
}

function UIfunction(details,main){
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        if(details.avatar){
            
             logo = document.createElement('img')
            logo.setAttribute('class','img')
            logo.src = details.avatar
        }       
        else{
             imgh3 = document.createElement('h1') 
            imgh3.setAttribute('class','imgh3')
            imgh3.textContent=details.fname[0]+" "+details.lname[0]
        }

        main.appendChild(container)

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

    

        const imdiv = document.createElement('div')
        imdiv.setAttribute('class','imdiv')

        const h2 = document.createElement('h2')
        h2.textContent = details.fname+" "+details.lname

        const p = document.createElement('p')
        p.textContent = details.email

        container.appendChild(card)
        if(details.avatar){
            imdiv.appendChild(logo)
        }
        else{
            imdiv.appendChild(imgh3)
    
        }
        card.appendChild(imdiv)
        card.appendChild(h2)
        card.appendChild(p) 
}

function sendRequest(v){
    const severReq = new XMLHttpRequest();
    severReq.open("GET",v,true);

    severReq.onload = function() {
        var data = JSON.parse(this.response)

        const app = document.getElementById('root')

   
        if (severReq.status >= 200 && severReq.status < 400) {
            var dObj = data["data"];
            
            console.log(dObj)
            if(dObj.length !== 0){
                console.log(dObj[1].first_name);
                for( var i=0;i<dObj.length;i++ ){
                    
                    //dObj[i].avatar = null;
                    
                    var dataObj = new obj(dObj[i].avatar, dObj[i].first_name, dObj[i].last_name, dObj[i].email);
                    
                    UIfunction(dataObj,app);
                }
            }
            else{
                document.getElementById('button').style.visibility = "hidden";   
            }
        }
        else {
            console.log('error')
        }
    }
    severReq.send();
}

sendRequest(url+"1");

