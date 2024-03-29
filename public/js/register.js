window.addEventListener("load", function () {

    const toastMessage = document.getElementById("toastMessage");
    if (toastMessage == null) {
        // console.log("null");
    } else {
        if (toastMessage.innerText == "Inconsistent password input!"
            || toastMessage.innerText == "Already has the username, please try another!") {
            toastMessage.style.color = "red";
        }
    }

    let input = document.getElementById("textUsername");
    input.oninput = async function () {
        const testUsername = input.value;
        const response = await fetch(`./testUsername?username=${testUsername}`);
        const message = await response.json();
        if (message === "same") {
            const warning = document.createElement("p");
            warning.innerHTML = "The username already exists!";
            const warningArea = document.querySelector(".warningUsernameArea");
            warningArea.innerHTML = '';
            warningArea.appendChild(warning);
        }
        else if (message === "unique") {
            const warning = document.createElement("p");
            warning.innerHTML = "The username is unique.";
            warning.style.color = "black";
            const warningArea = document.querySelector(".warningUsernameArea");
            warningArea.innerHTML = '';
            warningArea.appendChild(warning);
        }
    }

    let inputConfirmPassword = document.getElementById("textConfirmPassword");
    inputConfirmPassword.oninput = async function () {
        const confirmPassword = inputConfirmPassword.value;

        const inputPassword = document.getElementById("textPassword");
        const password = inputPassword.value;

        if (confirmPassword !== password) {
            const warning = document.createElement("p");
            warning.innerHTML = "Entered passwords differ!";
            const warningArea = document.querySelector(".warningLegalPasswordArea");
            warningArea.innerHTML = '';
            warningArea.appendChild(warning);
        }
        else if (confirmPassword == password) {
            const warningArea = document.querySelector(".warningLegalPasswordArea");
            warningArea.innerHTML = '';

        }
    }


    // Add image showing avatar
    const avatar = document.querySelectorAll(".avatar");
    const selectAvatar = document.querySelector(".selectAvatar");
    const avatarImage = document.getElementById("avatarImage");
    let avatarSrc = "";

    selectAvatar.addEventListener("change", function () {
        avatar.forEach(element => {
            if (selectAvatar.value == "/images/cat.png") {
                avatarSrc = "/images/cat.png";
            } else if (selectAvatar.value == "/images/bird.png") {
                avatarSrc = "/images/bird.png";
            } else if (selectAvatar.value == "/images/deer.png") {
                avatarSrc = "/images/deer.png";
            }

        });

        avatarImage.src = avatarSrc;
    })

});