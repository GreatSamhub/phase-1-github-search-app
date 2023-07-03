function filmDetails(film) {
    const filmTitle = document.createElement('h3');
    const filmRunTime = document.createElement('span');
    const filmShowTime = document.createElement('p');
    const filmAvailableTickets = document.createElement('span');
    const filmDescription = document.createElement('p');
    const filmPoster = document.createElement('img');
    const buyTicketButton = document.createElement('button');
  
    filmTitle.textContent = film.title;
    filmRunTime.textContent = `Runtime: ${film.runtime} minutes`;
    filmAvailableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
    filmShowTime.textContent = `Showtime: ${film.showtime}`;
    filmDescription.textContent = film.description;
    filmPoster.src = film.poster;
    buyTicketButton.textContent = 'Buy Ticket';
  
    buyTicketButton.addEventListener('click', () => {
      buyTicket(film);
    });
  
    const filmContainer = document.createElement('div');
    filmContainer.classList.add('filmContainer');
  
    filmContainer.appendChild(filmTitle);
    filmContainer.appendChild(filmRunTime);
    filmContainer.appendChild(filmShowTime);
    filmContainer.appendChild(filmAvailableTickets);
    filmContainer.appendChild(filmDescription);
    filmContainer.appendChild(filmPoster);
    filmContainer.appendChild(buyTicketButton);
  
    return filmContainer;
  }
  
  function buyTicket(film) {
    if (film.tickets_sold < film.capacity) {
      film.tickets_sold++;
      const filmAvailableTickets = document.querySelector('.filmContainer span');
      filmAvailableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
  
      // Send a POST request to update the server with the ticket purchase
      fetch(`http://localhost:3000/films/${film.id}/buyTicket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filmId: film.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Ticket purchased:', data);
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    } else {
      alert('Showing is sold out!');
    }
  }
  
  function coverFilm() {
    const filmHeader = document.querySelector('h2');
    filmHeader.textContent = 'Flatiron Film Theatre';
  
    return fetch('http://localhost:3000/films/1')
      .then((res) => res.json())
      .then((film) => {
        const filmContainer = document.createElement('div');
        filmContainer.classList.add('filmContainer');
  
        const filmElements = filmDetails(film);
        filmContainer.appendChild(filmElements);
  
        const filmDetailsContainer = document.getElementById('film-details');
        filmDetailsContainer.appendChild(filmContainer);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  
  function allFilms() {
    const menu = document.querySelector('ul#film-list');
    fetch('http://localhost:3000/films')
      .then((res) => res.json())
      .then((films) => {
        films.forEach((film) => {
          const li = document.createElement('li');
          li.textContent = film.title;
          menu.appendChild(li);
        });
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    allFilms();
    coverFilm();
  });