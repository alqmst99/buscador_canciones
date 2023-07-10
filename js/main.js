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
   content.innerHTML= `<ul class="list-group songs">
   ${songs.map(song =>{
    return `<li class="list-group-item result "> <span>${song.title} by ${song.artist.name}</span>
    <button class="btn btn-info show " data-title = "${song.title}" data-artist="${song.artist.name}" data-album="${song.album.cover}" data-pr="${song.preview} " > Show Lyric </button> </li>
    `
  }).join("") }
  </ul>`
}