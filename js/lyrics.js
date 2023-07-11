const lyr = document.querySelector('.lyric')



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
    //Se utiliza el servidor monk ya que produccion no sirve, aun no se encuentran los lyrics, puede ser que hubo cambios en la api madre "dozzer"
    const API = "https://api.lyrics.ovh"
    const request = await fetch(`${API}/v1/${artist}/${title}`)
    const responce = await request.json()
    const lyric = responce.lyrics

    console.log(artist, title, album, lyric, pr, ln)

    ShowSong(artist, title, album, lyric, pr, ln)

}
//Show Lyrics

function ShowSong(artist, title, album, lyric, preview, ln) {
    console.log(lyric)
   lyr.innerHTML = `
   <div>
   <h1 class="modal-title fs-1 text-center "> ${title} by ${artist}  </h1><br>
    <img class="rounded mx-auto d-block img-fluid" src="${album}" alt="${title}">
   
  <div class="d-flex row justify-content-between align-items-center ">
  <div class="d-flex justify-content-center">
   <audio controls ><source src="${preview} " type="audio/mp3"></audio>
 
  </div>

  <button class="btn btn-outline-success"><a href="${ln}"> Link del tema completo</a></button>
  </div>
  
</div>

     
`
}