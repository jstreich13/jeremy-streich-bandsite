//Targeting container in which shows will exist
const showContainer = document.querySelector(".shows");

//calling API to populate show dates
const showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=0ea3bafa-fb50-4880-b2a4-067c7dd2a2f6'



// getting data from the api
axios
   .get(showsURL)
   .then(response => {

      const showsArray = response.data
      displayingShow(showsArray);
      console.log(showsArray)

   })
   .catch(error => {
      console.log(error)
   });
// };



//functional for loop to cycle through and be created with show data from api
function displayingShow(showsArray) {
   for (i = 0; i < showsArray.length; i++) {

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
      showDate.innerText = new Date(Number(showsArray[i].date)).toDateString();
      showHolder.appendChild(showDate);

      let showVenueLabel = document.createElement("p");
      showVenueLabel.classList.add("shows__venue--label");
      showVenueLabel.innerText = "VENUE"
      showHolder.appendChild(showVenueLabel);

      let showVenue = document.createElement("p");
      showVenue.classList.add("shows__venue");
      showVenue.innerText = showsArray[i].place;
      showHolder.appendChild(showVenue);

      let showLocationLabel = document.createElement("p");
      showLocationLabel.classList.add("shows__location--label");
      showLocationLabel.innerText = "LOCATION"
      showHolder.appendChild(showLocationLabel);

      let showLocation = document.createElement("p");
      showLocation.classList.add("shows__location");
      showLocation.innerText = showsArray[i].location;
      showHolder.appendChild(showLocation);

      let buyTickets = document.createElement("button");
      buyTickets.classList.add("shows__tickets-button");
      buyTickets.innerText = "Buy Tickets"
      showHolder.appendChild(buyTickets);
   }
};
