const lyr = document.querySelector('.lyric')



content.addEventListener("click", event => {
    if (event.target.tagName == "BUTTON") {
        const element = event.target;
        const title = element.getAttribute("data-title")
        const artist = element.getAttribute("data-artist")
        const album = element.getAttribute("data-album")
        const pr = element.getAttribute("data-pr")
        getLyrics(title, artist, album, pr)
    }
})

//Get Lyrics

async function getLyrics(title, artist, album, pr) {
    //Se utiliza el servidor monk ya que produccion no sirve, aun no se encuentran los lyrics, puede ser que hubo cambios en la api madre "dozzer"
    const API = "https://api.lyrics.ovh"
    const request = await fetch(`${API}/v1/${artist}/${title}`)
    const responce = await request.json()
    const lyric = responce.link

    console.log(artist, title, album, lyric, pr)

    ShowSong(artist, title, album, lyric, pr)

}
//Show Lyrics

function ShowSong(artist, title, album, lyric, preview) {
    console.log(lyric)
   content.innerHTML = `

      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"> ${title} by ${artist}  </h1>
        <audio controls>
        <source src="${preview} " type="audio/mp3">
            Tu navegador no soporta audio HTML5.
    </audio>
      </div>
      <div class="modal-body">
       <p>${lyric} </p>
      </div>
       
        <figure>
        <img src="${album}" alt="${title}" srcset="">

      </div>
    </div>

`
}