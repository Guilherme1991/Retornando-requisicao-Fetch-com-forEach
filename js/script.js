let btn = document.querySelector('button')
let elemento = document.querySelector('#elemento')

btn.addEventListener('click', element=>{
    element.preventDefault()

    fetch('https://reqres.in/api/users?page=2')

    .then(ev=>ev.json())
    
    .then(ev=>{
     //Evento de callback!
     console.log(ev.data)
     ev.data.forEach(r=>{
           let item = document.createElement('li')
           item.innerHTML='<li><img src="'+r.avatar+'"></li><h2>Name: '+r.first_name+'</h2><h3>E-Mail: '+r.email+'</h3>';

           elemento.appendChild(item)
     })
    })
})