document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {

                document.getElementsByClassName("loader")[0].style.display = "none";
                document.getElementsByClassName("main_reviews_page")[0].style.display = "flex";

                console.log(data)

                let filteredData;
                if (Math.random() > 0.5) {
                    filteredData = data.filter(comment => comment.id > 100);
                } else {
                    filteredData = data.filter(comment => comment.id <= 200);
                }

                filteredData.slice(0, 10).forEach(item => {
                    const reviewFromJsonPlaceHolder = {
                        name: randomName(randomIntFromInterval(3, 6)),
                        email: item.email,
                        rating: randomIntFromInterval(1, 5),
                        text: item.body
                    }
                    addReview(reviewFromJsonPlaceHolder)
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                document.getElementById("loader").textContent = "⚠ Что-то пошло не так";
            });
    }, 1000)
})

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomName(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}