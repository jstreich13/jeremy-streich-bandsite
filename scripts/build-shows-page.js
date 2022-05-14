const showSection = document.querySelector(".shows")

let showList = ['show1', 'show2', 'show3', 'show4', 'show5','show6']

let showDates = document.createElement('ul');
showDates.classList.add('show__dates');

showSection.appendChild(showDates);

for(let i = 0; i < showList.length; i++){
   let showDatesItem = document.createElement('li');
   showDatesItem.classList.add("show__dates-item");
   showDatesItem.innerText = showList[i]
   showDates.appendChild(showDatesItem)
}


let shows = document.createElement('div');
shows.classList.add('shows');


shows.appendChild(showList)

document.main.appendChild(shows)




// BEM elements: Header, shows,



// <!-- <section class="shows">
//                 <h1 class="shows__title">Shows</h1>
//                 <div class="shows__info">
//                     <p class="shows__info--detail-headings">DATE</p>
//                     <p class="shows__info-details">Mon Sept 06 2021</p>
//                     <p class="shows__info--detail-headings">VENUE</p>
//                     <p class="shows__info-details">Ronald Lane</p>
//                     <p class="shows__info--detail-headings">LOCATION</p>
//                     <p class="shows__info-details">San Francisco, CA</p>
//                     <a class="shows__ticket-button" href="">BUY TICKETS</a>
//                 </div>

// ```html
// <nav class="nav">
//     <ul class="nav__list">
//         <li class="nav__list-item">
//             Home
//         </li>
//         <li class="nav__list-item">
//             About
//         </li>
//         <li class="nav__list-item">
//             Contact
//         </li>
//     </ul>
// </nav>


