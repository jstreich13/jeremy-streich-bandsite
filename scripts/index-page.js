
const commentsContainer = document.querySelector(".comments__list");
console.log(commentsContainer); 

const user = {
	
	avatar: "./Assets/Images/Mohan-muruge.jpg",
	comment: [
	  {
		name: "Connor Walton",
		date: "02/17/2021",
		content:
		  "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

	  },
	  {
		name: "Emilie Beach",
		date: "01/09/2021",
		content:
		  "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",

	  },
	  {
		name: "Miles Acosta",
		date: "12/20/2020",
		content:
		  "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",

	  },
	],
  };


  for (i = 0; i < user.comment.length; i++) {

	let oneCommentContainer = document.createElement("section");
	oneCommentContainer.classList.add("comments__single");
	commentsContainer.appendChild(oneCommentContainer);
  
	let commenterAvatar = document.createElement("figure");
	commenterAvatar.classList.add("commenter__avatar");
	oneCommentContainer.appendChild(commenterAvatar);
  
  ////===Attempting to add the images for each commenter breaks the flow of the rest of the appendChilds
//     let commenterAvatar = document.createElement("figure");
//     commenterAvatar.setAttribute("id", "myFigure");
//     document.oneCommentContainer.appendChild(commenterAvatar);

// 	let commenterAvatarHolder = document.createElement("img");
//    commenterAvatarHolder("src", "./Assets/Images/Mohan-muruge.jpg");
//    commenterAvatarHolder("width", "300");
//    commenterAvatarHolder("width", "200");
//    commenterAvatarHolder("alt", "an image");
// 	document.commenterAvatar.appendChild(commenterAvatarHolder);

	let commentHolder = document.createElement("div");
	commentHolder.classList.add("comment__copy");
	oneCommentContainer.appendChild(commentHolder);
  
	let userName = document.createElement("p");
	userName.classList.add("text--demi");
	userName.innerText = user.comment[i].name;
	commentHolder.appendChild(userName);
  

	let datePosted = document.createElement("p");
	datePosted.classList.add("date--text");
	datePosted.innerText = user.comment[i].date;
	commentHolder.appendChild(datePosted);

	let commentCopy = document.createElement("p");
	commentCopy.innerText = user.comment[i].content;
	commentHolder.appendChild(commentCopy);
  
  }



// const commentSection = document.querySelector(".comments");
// // const testContainer = document.createElement('div');
// // commentSection.appendChild(testContainer);

// let commenterId = document.createElement('img');
// commenterId.setAttribute('src', '../Assets/Images/Mohan-muruge.jpg') 
// commenterId.setAttribute('alt','commenter')
// commenterId.classList.add('comments__avatar')
// commentSection.appendChild(commenterId)

// let commenterName = document.createElement("label");
// commenterName.setAttribute("for",commenterName);
// commenterName.innerHTML = "Name";
// commenterName.classList.add('comments__name-label')
// commenterId.appendChild(commenterName)

// let commenterNameEntry = document.createElement("input");
// commenterNameEntry.setAttribute("type", "text");
// commenterNameEntry.setAttribute("name", "commenterNameEntry");
// commenterNameEntry.setAttribute("placeholder", "Enter your name");
// commenterNameEntry.classList.add('comments__name-input')
// commenterName.appendChild(commenterNameEntry)    

// let commentEntryLabel = document.createElement("label");
// commentEntryLabel.setAttribute("for","commentEntryLabel");
// commentEntryLabel.innerHTML = "Comment";
// commentEntryLabel.classList.add('comments__entry-label')
// commenterNameEntry.appendChild(commentEntryLabel)

// let commentEntry = document.createElement("input");
// commentEntry.setAttribute("type", "text");
// commentEntry.setAttribute("name", "commentEntry");
// commentEntry.setAttribute("placeholder", "Add a new comment");
// commentEntry.classList.add('comments__entry-input')
// commentEntryLabel.appendChild(commentEntry);

// let commentButton = document.createElement("input");
//     commentButton.setAttribute("type", "submit");
//     commentButton.setAttribute("value", "Submit");
//     commentButton.classList.add('comments__button')
// 	commentEntryLabel.appendChild(commentButton)





// function showError(input, message) {
// 	return showMessage(input, message, false);
// }

// function showSuccess(input) {
// 	return showMessage(input, "", true);
// }

// function hasValue(input, message) {
// 	if (input.value.trim() === "") {
// 		return showError(input, message);
// 	}
// 	return showSuccess(input);
// }

// const nameNeeded = "Please enter your name";

// form.addEventListener("submit", function (event) {
// 	// stop form submission
// 	event.preventDefault();

// 	// validate the form
// 	let nameWorks = hasValue(form.elements["name"], nameNeeded);

// }

// const heroTitle = document.createElement('h1');
// heroTitle.innerText = 'Week 4 Review: DOM';
// heroTitle.classList.add('hero__title')

// console.log(heroTitle)

// let heroImage = document.createElement('img');
// heroImage.setAttribute('src', '/assets/images/toronto.jpg')
// heroImage.setAttribute('alt', 'Skyline of Toronto')
// heroImage.classList.add('hero__image');

// console.log(heroImage)

// let hero = document.createElement('section');
// hero.classList.add('hero');

// hero.appendChild(heroTitle);
// hero.appendChild(heroImage);

// document.body.appendChild(hero)