
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

// function commentCreation() {

  for (i = 0; i < user.comment.length; i++) {

	let oneCommentContainer = document.createElement("section");
	oneCommentContainer.classList.add("comments__single");
	commentsContainer.appendChild(oneCommentContainer);
  
	let commenterAvatar = document.createElement("figure");
	commenterAvatar.classList.add("commenter__avatar");
	oneCommentContainer.appendChild(commenterAvatar);

	let commentHolder = document.createElement("div");
	commentHolder.classList.add("comments__holder");
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
	commentCopy.classList.add("comments__copy")
	commentCopy.innerText = user.comment[i].content;
	commentHolder.appendChild(commentCopy);
	
  }



  //===== I've commented this section out and will have it fixed for Sprint 3. When active, this
  //===== section and the naming of the function causes all of the above to disappear. Will troubleshoot this week.

// let form = document.querySelector("form")
// form.addEventListener("submit", (ev) => {
// 	ev.preventDefault();
// 	let newUserName = ev.target.name.value
// 	let newCommentCopy = ev.target.content.value
// 	let today = new Date();
// 	let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// 	let newComment = {
// 		name: newUserName,
// 		date: todaysDate,
// 		content: newCommentCopy,
// 		image: "",
// }

// user.unshift(newComment);
// commentsWrapper.innterHTML = null;
// commentCreation();
// form.reset();
// )};
