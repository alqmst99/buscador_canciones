//app API config
const API= "https://api.lyrics.ovh";

//Grab DOM Elements

const search = document.getElementsByClassName("search");
const content= docuemt.getElementsByClassName("content");
const form= docuemt.getElementsByClassName("formulario");

// Listen form Form Submits
form.addEventsListener("submit", event=> {
    event.preventDefault();
    const searchTerm = search.value.trim();
    console.log(searchTerm);
});