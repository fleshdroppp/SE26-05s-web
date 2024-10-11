document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById("reviews_form")
        .addEventListener("submit", (event) => {

            event.preventDefault()

            const name = document.getElementById("name").value
            const email = document.getElementById("email").value
            const rating = document.getElementById("rating").value
            const reviewText = document.getElementById("review").value

            const reviewToSave = {
                name: name,
                email: email,
                rating: rating,
                text: reviewText
            }

            addReview(reviewToSave)

            saveToLocalStorage(reviewToSave)

            document.getElementsByClassName("main_reviews_page_form")[0].reset()

        });

        (function() {
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            for (const review of reviews) {
                addReview(review)
            }
        })();
})


function addReview(reviewToAdd) {
    const reviewBlock = document.createElement('div')
    reviewBlock.classList.add("main_reviews_list_item")

    reviewBlock.innerHTML = `
                    <h4 class="name">${name} (${reviewToAdd.email})</h4>
                    <p class="rating"><b>Оценка: ${reviewToAdd.rating}/5</b></p>
                    <p class="review_text">${reviewToAdd.text}</p>
            `;

    document.getElementsByClassName('main_reviews_list')[0].appendChild(reviewBlock)
}

function saveToLocalStorage(reviewToSave) {
    console.log(localStorage.getItem('reviews') || [])
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewToSave)
    localStorage.setItem("reviews", JSON.stringify(reviews))
}