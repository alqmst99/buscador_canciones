const s = document.querySelector('.song')



content.addEventListener("click", event => {
    if (event.target.tagName == "BUTTON") {
        const element = event.target;
        const title = element.getAttribute("data-title")
        const artist = element.getAttribute("data-artist")
        const album = element.getAttribute("data-album")
        const pr = element.getAttribute("data-pr")
        const ln = element.getAttribute("data-ln")
        getLyrics(title, artist, album, pr, ln)
    }
})

//Get Lyrics

async function getLyrics(title, artist, album, pr, ln) {
    //Se utiliza el servidor monk ya que produccion no sirve, aun no se encuentran los lyrics, puede ser que hubo cambios en la api madre "deezer"
    const API = "https://api.lyrics.ovh"
    const request = await fetch(`${API}/v1/${artist}/${title}`)
    const responce = await request.json()
    const data = responce

    console.log(artist, title, album, data, pr, ln)

    ShowSong(artist, title, album, data, pr, ln)

}
//Show Lyrics

function ShowSong(artist, title, album, data, preview, ln) {
   console.log(data)
   s.innerHTML = `
   <div>
   <h1 class="modal-title fs-1 text-center ">${artist}  </h1><br>
    <img class="rounded mx-auto d-block img-fluid" src="${album}" alt="${title}">
   
  <div class="d-flex row justify-content-between align-items-center ">
  <div class="d-flex justify-content-center">
   <audio class="recording" controls autoplay loop ><source class="recording" src="${preview} " type="audio/mp3"></audio>
 
  </div>
  <div class="title d-flex justify-content-center">
  <h2> ${title}</h2><br>

  
  </div>
  <div class="title d-flex justify-content-center">
  <button class="btn btn-outline-success"><a href="${ln}"> Link del tema completo</a></button>
  </div>
  </div>
  
</div>

     
`
}