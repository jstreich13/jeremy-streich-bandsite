//Targeting container in which shows will exist
const showContainer = document.querySelector(".shows");

//calling API to populate show dates
const showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=%3Cyour_api_key_here'
axios
function getShow() {
   .get(showsURL)
      .then(response => {
         console.log(response);
         const dateArray = response.data;
         displayingShow(dateArray);
      }


         })
         .catch (error => {
   console.log(error)
});


function displayingShow(showsList) {
   const dateArray = response.data;
   for (i = 0; i < dateArray.length; i++) {


      let singleShow = document.createElement("li");
      singleShow.classList.add("shows__single");
      showContainer.appendChild(singleShow);

      let showHolder = document.createElement("div");
      showHolder.classList.add("shows__holder");
      singleShow.appendChild(showHolder);

      let showDateLabel = document.createElement("p");
      showDateLabel.classList.add("shows__date--label");
      showDateLabel.innerText = "DATE"
      showHolder.appendChild(showDateLabel);

      let showDate = document.createElement("p");
      showDate.classList.add("shows__date");
      const date = showsList[i].date;
      const showDate = new Date(date * 1).toDateString();
      showDate.innerText = date;

      showHolder.appendChild(showDate);

      let showVenueLabel = document.createElement("p");
      showVenueLabel.classList.add("shows__venue--label");
      showVenueLabel.innerText = "VENUE"
      showHolder.appendChild(showVenueLabel);

      let showVenue = document.createElement("p");
      showVenue.classList.add("shows__venue");
      showVenue.innerText = showsList[i].place;
      showHolder.appendChild(showVenue);

      let showLocationLabel = document.createElement("p");
      showLocationLabel.classList.add("shows__location--label");
      showLocationLabel.innerText = "LOCATION"
      showHolder.appendChild(showLocationLabel);

      let showLocation = document.createElement("p");
      showLocation.classList.add("shows__location");
      showLocation.innerText = showsList[i].location;
      showHolder.appendChild(showLocation);

      let buyTickets = document.createElement("button");
      buyTickets.classList.add("shows__tickets-button");
      buyTickets.innerText = "Buy Tickets"
      showHolder.appendChild(buyTickets);

   }
};



