const postTitle = document.getElementById('postTitle');
const postContent = document.querySelector('.form-control[name="postContent"]');

const postAuthor = document.querySelector('.form-control[name="postAuthor"]');
const postImage = document.querySelector('.form-control[name="postImg"]');
const postList = document.getElementById('post-list');

const button = document.querySelector(".btn-primary");
const form = document.querySelector("form");

const today = new Date();
const cardFooter = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

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
        ${cardFooter}
        </div>
    </div>
`;

    postList.insertAdjacentHTML('afterbegin', newPost);
    form.reset();
});

const formCard = document.getElementById("form-card");
const showForm = document.getElementById('show-form');

showForm.addEventListener('click',  () => {
    console.log(showForm)
    if (showForm.textContent === "Hide form") {
        formCard.style.display = 'none';
        showForm.textContent = "Add a post";
    } else  {
        formCard.style.display = 'block';
        showForm.textContent = "Hide form";
    } 

});
