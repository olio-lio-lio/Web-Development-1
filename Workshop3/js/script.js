const buttons = document.querySelectorAll("button");

buttons[0].onclick = function () {
    alert("You clicked me!");
};

buttons[1].onclick = showTable;

function showTable() {
    const animal = "Tiger";
    const habitat = "Forest";
    const diet = "Carnivore";

    const table = `
    <table>
        <tr>
            <th>Animal</th>
            <th>Habitat</th>
            <th>Diet</th>
        </tr>
        <tr>
            <td>${animal}</td>
            <td>${habitat}</td>
            <td>${diet}</td>
        </tr>
    </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = table;
}

// Exercise 2

const exercise2 = document.querySelector("#exercise2");

exercise2.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});

const exercise1 = document.querySelector("#exercise1");

exercise1.addEventListener("click", function () {
    exercise1.style.color = "red";
    exercise1.innerHTML = "Bye bye mouse!";
});

// Exercise 3

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");

feedback.addEventListener("focus", function () {
    status.innerHTML = "You are typing...";
});
feedback.addEventListener("blur", function () {
    status.innerHTML = "";
});
const charcount = document.querySelector("#charcount");

    feedback.addEventListener("input", function () {
    if (feedback.value.length > 200) {
        feedback.value = feedback.value.substring(0, 200);
    }

    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value;
});


const preview = document.querySelector("#preview");

const feedbackForm = document.querySelector("#feedbackForm");
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

const length = feedback.value.length;

if (length < 10) {
    status.innerHTML = "Feedback must be at least 10 characters.";
}
else if (length > 200) {
    status.innerHTML = "Feedback must not be more than 200 characters.";
}
else {
    status.innerHTML = "Thank you for your feedback!";
    feedback.value = "";
}
});

const keyinfo = document.querySelector("#keyinfo");
const keybox = document.querySelector("#keybox");
let keyPressCount = 0;

document.addEventListener("keydown", function (event) {
    keyPressCount++;
    console.log(event);

    keyinfo.innerHTML = "Key: " + event.key + " | Code: " + event.code + " | Presses: " + keyPressCount + " | Shift: " + event.shiftKey + " | Ctrl: " + event.ctrlKey + " | Alt: " + event.altKey;
    keybox.innerHTML = event.key;

    console.log("Shift:", event.shiftKey, "Ctrl:", event.ctrlKey, "Alt:", event.altKey);
});


navigator.geolocation.getCurrentPosition(
    function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        const url = `https://www.google.com/maps?q=${lat},${lon}`;
        // window.location.href = url;
    },
    function (error) {
        console.log("Could not get the location:", error.message);
    }
);