// we are goignt o make an event listener it will trigger when the DOM is loaded aka upoin  visistni gthe webpage
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""

    for (let song of songs){
        let songID = song.id
        html += `<li>${song.title} - ${song.artist} - <a href="/details.html?id=${song._id}">Details</a></li>`


    }
    document.querySelector("#list_of_songs").innerHTML = html
 })



















