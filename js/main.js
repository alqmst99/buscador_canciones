//app API config
const API= "https://api.lyrics.ovh";

//Grab DOM Elements

const search = document.querySelector('.search')
const content = document.querySelector('.content')
const form = document.querySelector('.formulario')

// Listen form Form Submits
form.addEventListener("submit", event => {
    event.preventDefault()
    const searchTerm = search.value.trim()
if(!searchTerm){
    alert('Debe usted ingresar un artista u tema');
    return
}
searchS(searchTerm) 


})

//filter

async function searchS(search){
  
   const request= await  fetch(`${API}/suggest/${search}`).then(data  => data)
   const responce = await request.json()
   const data= responce.data
   console.log(data)
   songs(data)
   
}

function songs(songs){
   content.innerHTML= `<ul class="list-group">
   ${songs.map(song =>{
    return `<li class="list-group-item ">${song.title} by ${song.artist.name}</li>`
  })}
  </ul>`
}