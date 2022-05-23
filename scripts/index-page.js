let form = document.querySelector("form");

//declaring commentsSection container
const commentsSection = document.querySelector(".comments__list");
//linking API to website with axios
const commentsURL = 'https://project-1-api.herokuapp.com/comments?api_key=%3Cyour_api_key_here'
function getComment() {
	axios
		.get(commentsURL)
		.then(response => {
			const comments = response.data;
			comments.sort((a, b) => b.timestamp - a.timestamp);
			displayingComments(comments);
			console.log(response);
		})
		.catch(error => {
			console.log(error)
		});
};
//functional for loop to cycle through and be created with comment data from api
function displayingComments(commentsList) {


	for (let i = 0; i < commentsList.length; i++) {

		let oneCommentContainer = document.createElement("li");
		oneCommentContainer.classList.add("comments__single");
		commentsSection.appendChild(oneCommentContainer);

		let commenterAvatar = document.createElement("figure");
		commenterAvatar.classList.add("commenter__avatar");
		oneCommentContainer.appendChild(commenterAvatar);

		let commentHolder = document.createElement("div");
		commentHolder.classList.add("comments__holder");
		oneCommentContainer.appendChild(commentHolder);

		let userName = document.createElement("p");
		userName.classList.add("commenter-name");
		userName.innerText = commentsList[i].name;
		commentHolder.appendChild(userName);

		let datePosted = document.createElement("p");
		datePosted.classList.add("date--text");
		const date = commentsList[i].timestamp;
		const commentDate = new Date(date * 1).toDateString();

		console.log(date)
		datePosted.innerText = commentDate;
		commentHolder.appendChild(datePosted);

		let commentCopy = document.createElement("p");
		commentCopy.classList.add("comments__copy")
		commentCopy.innerText = commentsList[i].comment;
		commentHolder.appendChild(commentCopy);
	}

}


function postingComments(newComment) {
	axios.post(commentsURL, newComment)
		.then((response) => {
			form.reset();
			getComment();
			console.log(comments);
		})
		.catch(error => {
			console.log(error);
		});
};

getComment();

// activation of form for commenter submissiong


form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	let newComment = {
		name: ev.target.name.value,
		comment: ev.target.comments.value,

	}

	commentsSection.innerHTML = null;
	postingComments(newComment);


});
