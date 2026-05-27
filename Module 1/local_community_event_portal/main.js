console.log("Welcome to the Community Portal");


// =========================
// BASIC EVENT INFO
// =========================

const eventName = "Music Festival";

const eventDate = "10 June 2026";

let availableSeats = 50;


console.log(
    `Event: ${eventName} | Date: ${eventDate} | Available Seats: ${availableSeats}`
);

availableSeats--;

console.log(
    `Seat registered successfully. Remaining Seats: ${availableSeats}`
);


// =========================
// EVENTS ARRAY
// =========================

const events = [

    {
        name: "Music Festival",
        category: "Music",
        seats: 20,
        date: "2026-06-10"
    },

    {
        name: "Food Fair",
        category: "Food",
        seats: 10,
        date: "2026-07-15"
    },

    {
        name: "Book Reading",
        category: "Education",
        seats: 15,
        date: "2026-08-01"
    }

];


// =========================
// DISPLAY VALID EVENTS
// =========================

events.forEach(event => {

    const today = new Date();

    const currentEventDate =
        new Date(event.date);

    if (
        currentEventDate > today &&
        event.seats > 0
    ) {

        console.log(
            `${event.name} is available with ${event.seats} seats`
        );

    }

    else {

        console.log(
            `${event.name} is unavailable`
        );

    }

});


// =========================
// REGISTER USER
// =========================

function registerUser(eventName) {

    try {

        const event =
            events.find(
                e => e.name === eventName
            );

        if (!event) {

            throw new Error(
                "Event not found"
            );

        }

        if (event.seats <= 0) {

            throw new Error(
                "No seats available"
            );

        }

        event.seats--;

        console.log(
            `Registration successful for ${event.name}`
        );

    }

    catch (error) {

        console.log(
            "Registration Error: " +
            error.message
        );

    }

}


// =========================
// ADD EVENT FUNCTION
// =========================

function addEvent(

    name = "Unknown Event",

    category = "General",

    seats = 0,

    date = "2026-01-01"

) {

    events.push({

        name,

        category,

        seats,

        date

    });

    console.log(
        `${name} added successfully`
    );

}


// =========================
// FILTER EVENTS
// =========================

function filterEventsByCategory(

    category,

    callback

) {

    const clonedEvents =
        [...events];

    const filteredEvents =

        clonedEvents.filter(

            event =>
                event.category === category

        );

    callback(filteredEvents);

}


// =========================
// CALLBACK FUNCTION
// =========================

filterEventsByCategory(

    "Music",

    filteredEvents => {

        console.log(
            "Filtered Events:",
            filteredEvents
        );

    }

);


// =========================
// CLOSURE EXAMPLE
// =========================

function registrationTracker(category) {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            `${category} registrations: ${totalRegistrations}`
        );

    };

}


const musicRegistration =
    registrationTracker("Music");


musicRegistration();
musicRegistration();
musicRegistration();


// =========================
// ADD NEW EVENTS
// =========================

addEvent(
    "Dance Workshop",
    "Music",
    25,
    "2026-09-10"
);

addEvent(
    "Cooking Fair",
    "Food",
    30,
    "2026-10-15"
);


// =========================
// FORM FUNCTIONS
// =========================

function validatePhone() {

    const phone =
        document.getElementById(
            "phone"
        ).value;

    if (phone.length !== 10) {

        document.getElementById(
            "phoneMessage"
        ).innerHTML =

            "Invalid phone number";

    }

    else {

        document.getElementById(
            "phoneMessage"
        ).innerHTML =

            "Valid phone number";

    }

}


function showFee() {

    const fee =
        document.getElementById(
            "eventType"
        ).value;

    document.getElementById(
        "eventFee"
    ).innerHTML =

        `Event Fee: ₹${fee}`;

}


function showConfirmation() {

    document.getElementById(
        "feedbackConfirmation"
    ).innerHTML =

        "Feedback submitted successfully!";

}


function enlargeImage(image) {

    image.style.width = "600px";

}


function countCharacters() {

    const text =
        document.getElementById(
            "feedback"
        ).value;

    document.getElementById(
        "charCount"
    ).innerHTML = text.length;

}


function videoReady() {

    document.getElementById(
        "videoMessage"
    ).innerHTML =

        "Video ready to play";

}


// =========================
// BEFORE UNLOAD
// =========================

window.onbeforeunload = function () {

    return "Your form is not completed. Are you sure you want to leave?";

};


// =========================
// LOCAL STORAGE
// =========================

function savePreference() {

    const selectedEvent =

        document.getElementById(
            "preferredEvent"
        ).value;

    localStorage.setItem(
        "preferredEvent",
        selectedEvent
    );

    sessionStorage.setItem(
        "sessionEvent",
        selectedEvent
    );

}


// =========================
// CLEAR STORAGE
// =========================

function clearPreferences() {

    localStorage.clear();

    sessionStorage.clear();

    document.getElementById(
        "preferredEvent"
    ).value = "";

    alert(
        "Preferences Cleared"
    );

}


// =========================
// GEOLOCATION
// =========================

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            showPosition,

            showError

        );

    }

    else {

        document.getElementById(
            "locationResult"
        ).innerHTML =

            "Geolocation is not supported.";

    }

}


function showPosition(position) {

    document.getElementById(
        "locationResult"
    ).innerHTML =

        `Latitude: ${position.coords.latitude}
         <br>
         Longitude: ${position.coords.longitude}`;

}


function showError(error) {

    switch (error.code) {

        case error.PERMISSION_DENIED:

            document.getElementById(
                "locationResult"
            ).innerHTML =

                "User denied Geolocation.";

            break;

        case error.TIMEOUT:

            document.getElementById(
                "locationResult"
            ).innerHTML =

                "Location request timed out.";

            break;

        default:

            document.getElementById(
                "locationResult"
            ).innerHTML =

                "Unknown error occurred.";

    }

}


// =========================
// OBJECTS & PROTOTYPES
// =========================

function Event(

    name,

    category,

    seats,

    date

) {

    this.name = name;

    this.category = category;

    this.seats = seats;

    this.date = date;

}


Event.prototype.checkAvailability =
    function () {

        if (this.seats > 0) {

            console.log(
                `${this.name} has ${this.seats} seats available`
            );

        }

        else {

            console.log(
                `${this.name} is fully booked`
            );

        }

    };


const event1 = new Event(
    "Coding Workshop",
    "Technology",
    30,
    "2026-08-15"
);

event1.checkAvailability();


// =========================
// OBJECT ENTRIES
// =========================

console.log("Event Details:");

Object.entries(event1).forEach(

    ([key, value]) => {

        console.log(
            `${key}: ${value}`
        );

    }

);


// =========================
// ARRAY METHODS
// =========================

events.push({

    name: "Baking Workshop",

    category: "Music",

    seats: 18,

    date: "2026-10-12"

});


events.push({

    name: "Art Camp",

    category: "Education",

    seats: 22,

    date: "2026-11-05"

});


const musicEvents =
    [...events].filter(

        event =>
            event.category === "Music"

    );


console.log("Music Events:");

musicEvents.forEach(event => {

    console.log(
        event.name
    );

});


const formattedCards =

    events.map(

        event =>
            `Workshop on ${event.name}`

    );


console.log(
    "Formatted Event Cards:"
);

formattedCards.forEach(card => {

    console.log(card);

});


// =========================
// DOM ELEMENTS
// =========================

const eventContainer =
    document.querySelector(
        "#eventContainer"
    );

const categoryFilter =
    document.querySelector(
        "#categoryFilter"
    );

const searchInput =
    document.querySelector(
        "#searchInput"
    );


// =========================
// DISPLAY EVENTS
// =========================

function displayEvents(

    filteredEvents = events

) {

    eventContainer.innerHTML = "";


    filteredEvents.forEach(event => {

        const {

            name,

            category,

            date

        } = event;


        const card =
            document.createElement("div");

        card.style.border =
            "2px solid black";

        card.style.padding =
            "15px";

        card.style.width =
            "300px";

        card.style.borderRadius =
            "10px";

        card.style.backgroundColor =
            "#f5f5f5";


        const title =
            document.createElement("h2");

        title.textContent = name;


        const categoryText =
            document.createElement("p");

        categoryText.textContent =
            `Category: ${category}`;


        const dateText =
            document.createElement("p");

        dateText.textContent =
            `Date: ${date}`;


        const seatsText =
            document.createElement("p");

        seatsText.textContent =
            `Available Seats: ${event.seats}`;


        // REGISTER BUTTON

        const registerButton =
            document.createElement("button");

        registerButton.textContent =
            "Register";


        registerButton.onclick =
            function () {

                if (event.seats > 0) {

                    event.seats--;

                    seatsText.textContent =
                        `Available Seats: ${event.seats}`;

                    alert(
                        `Registered for ${event.name}`
                    );

                }

                else {

                    alert(
                        `${event.name} is full`
                    );

                }

            };


        // CANCEL BUTTON

        const cancelButton =
            document.createElement("button");

        cancelButton.textContent =
            "Cancel";


        cancelButton.onclick =
            function () {

                event.seats++;

                seatsText.textContent =
                    `Available Seats: ${event.seats}`;

                alert(
                    `Registration cancelled for ${event.name}`
                );

            };


        card.appendChild(title);

        card.appendChild(categoryText);

        card.appendChild(dateText);

        card.appendChild(seatsText);

        card.appendChild(registerButton);

        card.appendChild(cancelButton);

        eventContainer.appendChild(card);

    });

}


// =========================
// FILTER EVENTS
// =========================

categoryFilter.onchange =
    function () {

        const selectedCategory =
            categoryFilter.value;

        if (
            selectedCategory === "All"
        ) {

            displayEvents(events);

        }

        else {

            const filteredEvents =
                [...events].filter(

                    event =>
                        event.category === selectedCategory

                );

            displayEvents(
                filteredEvents
            );

        }

    };


// =========================
// SEARCH EVENTS
// =========================

searchInput.addEventListener(

    "keyup",

    function () {

        const searchText =
            searchInput.value
                .toLowerCase();


        const searchedEvents =

            [...events].filter(

                event =>

                    event.name
                        .toLowerCase()
                        .includes(searchText)

            );


        displayEvents(
            searchedEvents
        );

    }

);


// INITIAL DISPLAY

displayEvents();


// =========================
// ASYNC JS
// =========================

const loadingMessage =
    document.createElement("h2");

loadingMessage.textContent =
    "Loading events...";

loadingMessage.style.color =
    "blue";

document.body.appendChild(
    loadingMessage
);


// FETCH USING .then()

fetch(
    "https://jsonplaceholder.typicode.com/users"
)

.then(response => {

    return response.json();

})

.then(data => {

    console.log(
        "Fetched Data using .then():",
        data
    );

})

.catch(error => {

    console.log(
        "Fetch Error:",
        error
    );

});


// FETCH USING async/await

async function fetchEvents() {

    try {

        loadingMessage.style.display =
            "block";


        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );


        const data =
            await response.json();


        console.log(
            "Fetched Data using async/await:",
            data
        );


        loadingMessage.style.display =
            "none";

    }

    catch (error) {

        console.log(
            "Async/Await Error:",
            error
        );

    }

}


fetchEvents();


// =========================
// MODERN JS FEATURES
// =========================

function createEvent(

    name = "Unknown Event",

    category = "General",

    seats = 0,

    date = "2026-01-01"

) {

    return {

        name,

        category,

        seats,

        date

    };

}


const defaultEvent =
    createEvent();


console.log(
    "Default Event:",
    defaultEvent
);


const sampleEvent = {

    name: "Tech Conference",

    category: "Technology",

    seats: 100,

    date: "2026-12-20"

};


const {

    name,

    category,

    seats,

    date

} = sampleEvent;


console.log(
    `Event Name: ${name}`
);

console.log(
    `Category: ${category}`
);

console.log(
    `Seats: ${seats}`
);

console.log(
    `Date: ${date}`
);


const clonedEvents =
    [...events];


console.log(
    "Cloned Events:",
    clonedEvents
);


const filteredMusicEvents =

    [...events].filter(

        event =>
            event.category === "Music"

    );


console.log(
    "Filtered Music Events:"
);

filteredMusicEvents.forEach(event => {

    console.log(
        event.name
    );

});


const totalSeats =

    events.reduce(

        (total, event) =>

            total + event.seats,

        0

    );


console.log(
    `Total Available Seats: ${totalSeats}`
);


// =========================
// WORKING WITH FORMS
// =========================

const registrationForm =
    document.querySelectorAll("form")[0];


const nameError =
    document.createElement("p");

const emailError =
    document.createElement("p");

const eventError =
    document.createElement("p");


nameError.style.color = "red";
emailError.style.color = "red";
eventError.style.color = "red";


registrationForm.appendChild(nameError);
registrationForm.appendChild(emailError);
registrationForm.appendChild(eventError);


// =========================
// FORM SUBMIT
// =========================

registrationForm.addEventListener(

    "submit",

    function (event) {

        event.preventDefault();


        nameError.innerHTML = "";
        emailError.innerHTML = "";
        eventError.innerHTML = "";


        const fullName =
            registrationForm.elements[0].value;

        const email =
            registrationForm.elements[1].value;

        const selectedEvent =
            registrationForm.elements[3].value;


        let isValid = true;


        if (fullName.trim() === "") {

            nameError.innerHTML =
                "Name is required";

            isValid = false;

        }


        if (!email.includes("@")) {

            emailError.innerHTML =
                "Enter valid email";

            isValid = false;

        }


        if (selectedEvent === "") {

            eventError.innerHTML =
                "Select an event";

            isValid = false;

        }


        if (!isValid) {

            return;

        }


        const userData = {

            name: fullName,

            email: email,

            event: selectedEvent

        };


        document.getElementById(
            "confirmationMessage"
        ).innerHTML =

            "Submitting registration...";


        console.log(
            "Payload Sent:",
            userData
        );


        setTimeout(() => {

            fetch(

                "https://jsonplaceholder.typicode.com/posts",

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify(userData)

                }

            )

            .then(response => {

                console.log(
                    "Response:",
                    response
                );

                return response.json();

            })

            .then(data => {

                console.log(
                    "Server Data:",
                    data
                );

                document.getElementById(
                    "confirmationMessage"
                ).innerHTML =

                    `Successfully registered for ${selectedEvent}`;

                registrationForm.reset();

            })

            .catch(error => {

                console.error(
                    "Fetch Error:",
                    error
                );

                document.getElementById(
                    "confirmationMessage"
                ).innerHTML =

                    "Registration failed";

            });

        }, 2000);

    }

);


// =========================
// jQuery
// =========================

$(document).ready(function () {

    console.log(
        "jQuery Loaded Successfully"
    );


    $("#registerBtn").click(function () {

        alert(
            "Register Button Clicked"
        );

    });


    $("#hideEventsBtn").click(function () {

        $(".eventCard").fadeOut(2000);

    });


    $("#showEventsBtn").click(function () {

        $(".eventCard").fadeIn(2000);

    });

});


// =========================
// DEBUGGING
// =========================

console.log(
    "Application Started Successfully"
);

console.log(
    "Current Events:",
    events
);

console.log(
    "Debugging Setup Complete"
);