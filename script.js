// const postList = document.getElementById('post-list');
// const button = document.querySelector(".btn-primary");
// const form = document.querySelector("form");
 
// const card = document.getElementsByClassName('card');
// const warning = document.getElementsByClassName('invalid-feedback');

// button.addEventListener('click', ($event) => {
//     $event.preventDefault();
//     const postImage = form.postImg.value;
//     const postTitle = form.postTitle.value;
//     const postAuthor = form.postAuthor.value;
//     const postContent = form.postContent.value;
//     const errorMessage = document.querySelector('#error-message');
//     const today = new Date();// get a timestamp
//     //create the html
//     const createNewPost = `
//     <div class="card">
//         <img class="card-img-top" src="${postImage.value}" alt="Card image cap">
//         <div class="card-body">
//             <h5 class="card-title">${postTitle.value} <small> by ${postAuthor.value} </small> </h5>
//             <p class="card-text">${postContent.value}</p>
//             <button type="button" class="btn btn-sm btn-light btn-delete">
//             Delete entry</button>
//         </div>
//         <div  class="card-footer text-muted">
//         ${today.toLocaleDateString()}
//         </div>
//     </div>
// `;
//     if (postContent.value.split(" ").length > 20) {
//         postContent.classList.add('is-invalid');
//         warning.classList.add('invalid-feedback');
//         errorMessage.classList.remove('hidden');
//     } else {
//         const newPost = createNewPost(form);
// 		postList.insertAdjacentHTML('afterbegin', newPost);
// 		postContent.classList.remove('is-invalid');
// 		textAreaErrorMessage.classList.add('hidden');
//     }
//     postList.insertAdjacentHTML('afterbegin', createNewPost);
//     form.reset();
// });
 
// const postContent = form.postContent;
// 	if (nbrOfWords < 20) {
// 		postContent.classList.add('is-invalid');
// 	} else {
// 		// FORM IS CORRECT : CREATE THE HTML, AND APPEND IT
// 		const newPost = createNewPost(form);
// 		postList.insertAdjacentHTML('afterbegin', newPost);
// 		postContent.classList.remove('is-invalid');
// 		textAreaErrorMessage.classList.add('hidden');
// 	}


// const formCard = document.getElementById("form-card");
// const showForm = document.getElementById('show-form');
// showForm.addEventListener('click',  () => {
//     if (formCard.classList.contains('hidden')) {
//         formCard.classList.remove('hidden');
//         showForm.textContent = "Hide form";
//     } else {
//         formCard.classList.add('hidden');
//         showForm.textContent = "Add a post";
//     }
// });

// formElement.addEventListener('submit', handleSubmit);
// // 4. handle delete post
// const handleDelete = (e) => {
// 	// if you click with something that have a btn-delete class, I want you to do this :
// 	if (e.target.classList.contains('btn-delete')) {
// 		const deleteBtn = e.target;
// 		// delete the closet element with the .card class
// 		deleteBtn.closest('.card').remove();
// 	}
// };
// showFormBtn.addEventListener('click', toggleForm);
// // event delegation
// document.addEventListener('click', handleDelete);





























const showFormBtn = document.querySelector('#show-form');
const formCard = document.querySelector('#form-card');
const postList = document.querySelector('#post-list');
const formElement = document.querySelector('#post-form');
const textAreaErrorMessage = document.querySelector('#error-message');
const deleteBtns = document.querySelectorAll('.btn-delete');
// 1. hide / show form
const toggleForm = () => {
	if (formCard.classList.contains('hidden')) {
		formCard.classList.remove('hidden');
		showFormBtn.textContent = 'Hide form';
	} else {
		formCard.classList.add('hidden');
		showFormBtn.textContent = 'Add a post';
	}
};
const createNewPost = (form) => {
	//prepare the variable
	const imgSrc = form.postImg.value;
	const postTitle = form.postTitle.value;
	const postAuthor = form.postAuthor.value;
	const postContent = form.postContent.value;
	const today = new Date(); // get a timestamp
	//create the html
	return `
        <div class="card">
            <img class="card-img-top" src="${imgSrc}" alt="beautiful random image"/>
            <div class="card-body">
                <h5 class="card-title">${postTitle} <small>${postAuthor}</small></h5>
                <p class="card-text">${postContent}</p>
                <button type="button" class="btn btn-sm btn-light btn-delete">
                    Delete entry
                </button>
            </div>
            <div class="card-footer text-muted">
                ${today.toLocaleDateString()}
            </div>
        </div>
    `;
};
// 2. handle new post
const handleSubmit = (e) => {
	e.preventDefault();
	// only specific to submit event, the form element is accessible with event.target
	const form = e.target;
	const postContent = form.postContent;
	const nbrOfWords = postContent.value.split(' ').length;
	if (nbrOfWords < 20) {
		postContent.classList.add('is-invalid');
		textAreaErrorMessage.classList.remove('hidden');
	} else {
		// FORM IS CORRECT : CREATE THE HTML, AND APPEND IT
		const newPost = createNewPost(form);
		postList.insertAdjacentHTML('afterbegin', newPost);
		postContent.classList.remove('is-invalid');
		textAreaErrorMessage.classList.add('hidden');
	}
	form.reset();
};
formElement.addEventListener('submit', handleSubmit);
// 4. handle delete post
const handleDelete = (e) => {
	// if you click with something that have a btn-delete class, I want you to do this :
	if (e.target.classList.contains('btn-delete')) {
		const deleteBtn = e.target;
		// delete the closet element with the .card class
		deleteBtn.closest('.card').remove();
	}
};
showFormBtn.addEventListener('click', toggleForm);
// event delegation
document.addEventListener('click', handleDelete);