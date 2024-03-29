window.addEventListener("load", function () {
    let likeStateArray = document.querySelectorAll(".likeSpan");
    likeStateArray.forEach(element => {
        if (element.textContent == "Unlike") {
            const like_container = element.parentNode;
            like_container.classList.add("like_status");
        }
    });

    document.addEventListener('click', async function (event) {
        if (event.target.closest('.like_container') || event.target.matches('.like_container span')) {
            let likeContainer = event.target.closest('.like_container');
            const articleId = likeContainer.getAttribute('id');

            const currentLikeSpan = likeContainer.querySelector(".likeSpan");
            const likeState = currentLikeSpan.textContent;

            const likeNumberSpan = likeContainer.querySelector(".likeNumber");
            let likeNumber = likeNumberSpan.textContent;
            likeNumber = parseInt(likeNumber, 10);

            if (likeState == "Like") {
                const response = await fetch(`../addLike?articleId=${articleId}`);
                const json = await response.json();
                currentLikeSpan.innerHTML = "Unlike";
                const number = likeNumber + 1;
                likeNumberSpan.innerHTML = "";
                likeNumberSpan.innerHTML = number;

                // Change the color and background color if click like
                likeContainer.classList.add("like_status")
            }
            else if (likeState == "Unlike") {
                const response = await fetch(`../cancelLike?articleId=${articleId}`);
                const json = await response.json();
                currentLikeSpan.innerHTML = "Like";
                const number = likeNumber - 1;
                likeNumberSpan.innerHTML = "";
                likeNumberSpan.innerHTML = number;

                // Change the color and background color if click like
                likeContainer.classList.remove("like_status");
            }
        }
    })

    // const likeContainerArray = document.querySelectorAll(".like_container");

})