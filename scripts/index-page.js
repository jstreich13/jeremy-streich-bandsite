//declaring commentsSection container
const commentsSection = document.querySelector(".comments__list");
//linking API to website with axios
const commentsURL = 'https://project-1-api.herokuapp.com/comments?api_key=%3Cyour_api_key_here'
axios
	.get(commentsURL).then((response) => {
		console.log(response);


		//for loop to cycle through and be created with data from api
		for (let i = 0; i < response.data.length; i++) {

			let oneCommentContainer = document.createElement("section");
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
			userName.innerText = response.data[i].name;
			commentHolder.appendChild(userName);


			let datePosted = document.createElement("p");
			datePosted.classList.add("date--text");
			datePosted.innerText = response.data[i].timestamp;
			commentHolder.appendChild(datePosted);

			let commentCopy = document.createElement("p");
			commentCopy.classList.add("comments__copy")
			commentCopy.innerText = response.data[i].comment;
			commentHolder.appendChild(commentCopy);

		}

	})
	.catch(error => {
		console.log(error);
	});



// activation of form for commenter submissiong

let form = document.querySelector("form")
form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	let newUserName = ev.target.name.value;
	let newCommentCopy = ev.target.comments.value;
	let today = new Date();
	let todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	let newComment = {
		name: newUserName,
		date: todaysDate,
		content: newCommentCopy,
		image: "",
	}
	response.data.unshift(newComment);
	commentCreation();
	form.reset();
});

//declaring function which appends the user's input to the page
function commentCreation() {


	///===confused as to why the container is being created before submission, 
	//and why submission is not working
	commentsSection.innerHTML = null;

	let oneCommentContainer = document.createElement("section");
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
	userName.innerText = response.data[i].name;
	commentHolder.appendChild(userName);

	let datePosted = document.createElement("p");
	datePosted.classList.add("date--text");
	datePosted.innerText = response.data[i].timestamp;
	commentHolder.appendChild(datePosted);

	let commentCopy = document.createElement("p");
	commentCopy.classList.add("comments__copy")
	commentCopy.innerText = response.data[i].comment;
	commentHolder.appendChild(commentCopy);

}


commentCreation();


//posting data from comments to API


const headers = {
	"Content-Type": "application/json"
}

const data = {
	"name": "name.value"
	"timestamp": "fullDate"
	"comment": "comments.value"
}


axios.post(commendAPI, data, headers)
	.then(response => {
		console.log(response.data);
	}).catch(error => {
		console.log(error);
	});

