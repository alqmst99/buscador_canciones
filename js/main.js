//app API config
const API= "https://api.lyrics.ovh";

//Grab DOM Elements

const search = document.querySelector('.search')
const content = document.querySelector('.content')
const form = document.querySelector('.formulario')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

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
   const data= responce
   console.log(data)
   songs(data)
   
}

function songs(songs){
   content.innerHTML= `<ul class="list-group songs">
   ${songs.data.map(song =>{
    return `<li class="list-group-item result "> <span>${song.title} by ${song.artist.name}</span>
    <button class="btn btn-info show " data-title = "${song.title}" data-artist="${song.artist.name}" data-album="${song.album.cover_big}" data-pr="${song.preview} " data-ln="${song.link} " data-bs-toggle="modal" data-bs-target="#exampleModal" > Show </button> </li>
    `
  }).join("") }
  </ul>


  `

}
//devido a las limitaciones de la api utilizada solo se puede crear hasta aqui, no se puede ir a siguiente, ni previo, no se puede ver los liricos 
//por lo anteriormente dicho de que la api no es original sino que deriva de la API de Deezer, la cual tuvo modificaciones, tambien hay que agregar que deezer mantiene bloqueos con cors para ocupar las funcionalides de su api.
//en la API de lyrics.ovh no tuvo el mantenimiento para mantener las consultas. 



