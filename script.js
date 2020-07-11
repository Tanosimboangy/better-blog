const postTitle = document.getElementById('postTitle');
const postContent = document.querySelector('.form-control[name="postContent"]');
const postAuthor = document.querySelector('.form-control[name="postAuthor"]');
const postImage = document.querySelector('.form-control[name="postImg"]');

const postList = document.getElementById('post-list');
// console.log(newPost);

const button = document.querySelector(".btn-primary");
const form = document.querySelector("form");

button.addEventListener('click',  ($event) => {
    $event.preventDefault();

    const newPost = `
    <div class="card">
        <img class="card-img-top" src="${postImage.value}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${postTitle.value} <small> by ${postAuthor.value} </small> </h5>
            <p class="card-text">${postContent.value}</p>
            <button type="button" class="btn btn-sm btn-light btn-delete">
            Delete entry</button>
        </div>
        <div  class="card-footer text-muted">
            10/07/2020
        </div>
    </div>
`;


    postList.insertAdjacentHTML('afterbegin', newPost);
    form.reset();
})

const showForm = document.getElementById('show-form');
// showForm.addEventListener ('click' = () => {
//     showForm.textContent = "";
// }); 


// const postList = document.getElementById('post-list');
// const card = document.createElement('div');
// card.classList.add('card');
// const newImage = document.createElement('img');
// newImage.classList.add('card-img-top');
// newImage.alt = "Card image cap";
// newImage.src = 'https://picsum.photos/500/200';
// const newCardBody = document.createElement('div');
// newCardBody.classList.add('card-body');
// const newCardTitle = document.createElement('h5');
// newCardTitle.classList.add('card-title');
// const newCardText = document.createElement('p');
// newCardText.classList.add('card-text');
// newCardBody.appendChild(newCardTitle);
// newCardBody.appendChild(newCardText);
// card.appendChild(newImage);
// card.appendChild(newCardBody);
// postList.appendChild(card);

// console.log(postList);
 
