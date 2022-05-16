

const showContainer = document.querySelector(".shows");

const showBox = {

   container: [
	  {
      date: "DATE",
      dateData: "Mon Sept 06 20221",
      venue: "VENUE",
      venueData: "Ronald Lane",
      location:"LOCATION",
      locationData:"San Francisco, CA",
      button: "Buy Tickets",
	  },
	  {
      date: "DATE",
      dateData: "Tue Sept 21 2021",
      venue: "VENUE",
      venueData: "Pier 3 East",
      location:"LOCATION",
      locationData:"San Francisco, CA",
      button: "Buy Tickets",

	  },
	  {
      date: "DATE",
      dateData: "Fri Oct 15 2021",
      venue: "VENUE",
      venueData: "View Lounge",
      location:"LOCATION",
      locationData:"San Francisco, CA",
      button: "Buy Tickets",
	  },
     {
      date: "DATE",
      dateData: "Sat Nov 06 2021",
      venue: "VENUE",
      venueData: "Hyatt Agency",
      location:"LOCATION",
      locationData:"San Francisco, CA",
      button: "Buy Tickets",
	  },
	  {
      date: "DATE",
      dateData: "Fri Nov 26 2021",
      venue: "VENUE",
      venueData: "Moscow Center",
      location:"LOCATION",
      locationData:"San Francisco, CA",
      button: "Buy Tickets",

	  },
	  {
      date: "DATE",
      dateData: "Wed Dec 15 2021",
      venue: "VENUE",
      venueData: "Press Club",
      location:"LOCATION",
      locationData:"San Francisco, CA",
      button: "Buy Tickets",
	  },
	],
  };


  for (i = 0; i < showBox.container.length; i++) {



   // let commenterAvatar = document.createElement("figure");
	// commenterAvatar.classList.add("commenter__avatar");
	// singleShow.appendChild(commenterAvatar);
  
   
   let singleShow = document.createElement("section");
	singleShow.classList.add("shows__single");
	showContainer.appendChild(singleShow);

   let showHolder = document.createElement("div");
	showHolder.classList.add("shows__holder");
	singleShow.appendChild(showHolder);

	let showDateLabel = document.createElement("p");
	showDateLabel.classList.add("shows__date--label");
	showDateLabel.innerText = showBox.container[i].date;
	showHolder.appendChild(showDateLabel);

	let showDate = document.createElement("p");
	showDate.classList.add("shows__date");
	showDate.innerText = showBox.container[i].dateData;
	showHolder.appendChild(showDate);

   let showVenueLabel = document.createElement("p");
	showVenueLabel.classList.add("shows__venue--label");
	showVenueLabel.innerText = showBox.container[i].venue;
	showHolder.appendChild(showVenueLabel);
  
	let showVenue = document.createElement("p");
	showVenue.classList.add("shows__venue");
	showVenue.innerText = showBox.container[i].venueData;
	showHolder.appendChild(showVenue);
   
   let showLocationLabel = document.createElement("p");
	showLocationLabel.classList.add("shows__location--label");
	showLocationLabel.innerText = showBox.container[i].location;
	showHolder.appendChild(showLocationLabel);

	let showLocation = document.createElement("p");
   showLocation.classList.add("shows__location");
	showLocation.innerText = showBox.container[i].locationData;
	showHolder.appendChild(showLocation);

   let buyTickets = document.createElement("button");
	buyTickets.classList.add("shows__tickets-button");
	buyTickets.innerText = showBox.container[i].button;
	showHolder.appendChild(buyTickets);
  
  }

