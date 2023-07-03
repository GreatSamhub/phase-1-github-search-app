function filmDetails(film){
    const filmTitle = document.createElement('h3')
    const filmRunTime = document.createElement('span')
    const filmShowTime = document.createElement('p')
    const filmAvailableTickets = document.createElement('span')
    const filmDescription = document.createElement('p')
    const filmPoster = document.createElement('img')
   

    filmTitle.textContent = film.title
    filmRunTime.textContent = `Runtime: ${film.runtime} minutes`
    filmAvailableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`
    filmShowTime.textContent = `Showtime: ${film.showtime}`
    filmDescription.textContent = film.description
    filmPoster.src = film.poster 

    return {
        filmTitle,
        filmRunTime,
        filmShowTime,
        filmAvailableTickets,
        filmDescription,
        filmPoster
      }
}       


function coverFilm(){
    const filmHeader = document.querySelector('h2')
    filmHeader.textContent = 'Flatiron Film Theatre'

    return fetch('http://localhost:3000/films/1')
    .then((res) => res.json())
    .then((film) => {
        const filmElements = filmDetails(film)

        const firstFilm = document.querySelector('form')
        const filmContainer = document.createElement('div')
        filmContainer.classList.add('filmContainer')
        
        for (const key in filmElements){
            filmContainer.appendChild(filmElements[key])
        }
        firstFilm.appendChild(filmContainer)
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    })
}
coverFilm()

function allFilms(){
   const menu = document.querySelector('ul#film-list')
   fetch('http://localhost:3000/films')
        .then((res) => res.json())
        .then((films) => {
            films.forEach((film) => {
                const li = document.createElement('li')
                li.textContent = film.title
                menu.appendChild(li)
            })
        })
        .catch((error) => {
            console.error('An error occurred:', error)
        })   
}
document.addEventListener('DOMContentLoaded', allFilms)