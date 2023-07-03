By Samuel Thongo
#Project SetUp

Steps

- View a list of films currently being shown at the Flatiron Film Theatre.
- Click on a film to view its details, including runtime, showtime, available tickets, and description.
- Buy tickets for a film, with the number of available tickets decreasing after each purchase.
- Prevent purchasing tickets when the showing is sold out.
- Search for a specific film using the search functionality.

#Challenge1 

See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of

   available tickets will need to be derived by subtracting the number of

   `tickets_sold` from the theater's `capacity`. You will need to make a GET

   request to the following endpoint to retrieve the film data:

#Challenge2 

See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list

   by adding the classes `film item` to each `li` element.) There is a

   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —

   feel free to remove that element by editing the HTML file directly, or use

   JavaScript to remove the placeholder element before populating the list. 

#Challenge3 

Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not

   be able to buy a ticket if the showing is sold out (if there are 0 tickets

   available).