```javascript
// ========================================
// CRAZYCARS MOTORS
// Interactive Login Experience
// ========================================


const form =
    document.getElementById("loginForm");

const username =
    document.getElementById("username");

const password =
    document.getElementById("password");

const button =
    document.getElementById("loginBtn");

const message =
    document.getElementById("message");

const card =
    document.getElementById("card");

const floatingCars =
    document.getElementById("floatingCars");

const forgot =
    document.getElementById("forgot");


// ========================================
// FUNNY GARAGE MESSAGES
// ========================================

const messages = [

    "Checking tire pressure... 🛞",

    "The mechanic is pretending to work. 🔧",

    "Scanning for excessive horsepower... 🏎️",

    "Your password has entered the garage. 👀",

    "Interesting password. Very... aerodynamic.",

    "The engine approves. Probably.",

    "Please remain seated. Your car is judging you.",

    "Running diagnostic... found 0 problems. Suspicious.",

    "Your login is faster than a V8. 💨",

    "Checking whether you're actually a driver...",

    "The garage raccoon is investigating. 🦝",

    "Please don't rev the keyboard.",

    "Warning: excessive coolness detected. 😎"

];


// ========================================
// EYES FOLLOW MOUSE
// ========================================

document.addEventListener(
    "mousemove",
    (event) => {

        const eyes =
            document.querySelectorAll(
                ".mechanic-face .eye"
            );


        eyes.forEach((eye) => {

            const rect =
                eye.getBoundingClientRect();


            const eyeX =
                rect.left +
                rect.width / 2;


            const eyeY =
                rect.top +
                rect.height / 2;


            const angle =
                Math.atan2(
                    event.clientY - eyeY,
                    event.clientX - eyeX
                );


            const distance = 4;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            eye.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }
);


// ========================================
// CARD 3D TILT
// ========================================

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5) * 7;


        const y =
            (event.clientY /
                window.innerHeight -
                0.5) * 7;


        card.style.transform =
            `
            perspective(900px)
            rotateY(${x}deg)
            rotateX(${-y}deg)
            translateY(-3px)
            `;

    }
);


// ========================================
// PASSWORD INTERACTION
// ========================================

password.addEventListener(
    "input",
    () => {

        if (password.value.length === 0) {

            message.textContent =
                "The engine is running. Your move. 🏎️";

            return;
        }


        const random =
            messages[
                Math.floor(
                    Math.random() *
                    messages.length
                )
            ];


        message.textContent = random;


        // Password length affects the face
        const face =
            document.querySelector(
                ".mechanic-face"
            );


        if (password.value.length < 5) {

            face.style.background =
                "#f5ead4";

        } else if (password.value.length < 10) {

            face.style.background =
                "#e5c68e";

        } else {

            face.style.background =
                "#c79a5a";
        }

    }
);


// ========================================
// USERNAME INTERACTION
// ========================================

username.addEventListener(
    "input",
    () => {

        const value =
            username.value.toLowerCase();


        if (
            value.includes("speed") ||
            value.includes("racer") ||
            value.includes("race")
        ) {

            message.textContent =
                "Easy there, Speed Racer. 🏁";

        } else if (
            value.includes("batman")
        ) {

            message.textContent =
                "Sir, this is CrazyCars. Not Wayne Motors. 🦇";

        } else if (
            value.includes("elon")
        ) {

            message.textContent =
                "Nice try, space cowboy. 🚀";

        }

    }
);


// ========================================
// ESCAPING LOGIN BUTTON
// ========================================

let escapeCount = 0;


button.addEventListener(
    "mouseover",
    () => {

        const emptyUsername =
            username.value.trim() === "";


        const emptyPassword =
            password.value.trim() === "";


        if (
            emptyUsername ||
            emptyPassword
        ) {

            escapeCount++;


            if (escapeCount >= 2) {

                const x =
                    Math.random() *
                    100 -
                    50;


                const y =
                    Math.random() *
                    30 -
                    15;


                button.style.transform =
                    `
                    translate(${x}px, ${y}px)
                    `;


                message.textContent =
                    "Fill in the driver details first! 🏎️💨";

            }

        }

    }
);


// ========================================
// RESET BUTTON
// ========================================

username.addEventListener(
    "input",
    resetButton
);

password.addEventListener(
    "input",
    resetButton
);


function resetButton() {

    button.style.transform = "";

    escapeCount = 0;

}


// ========================================
// LOGIN
// ========================================

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const user =
            username.value.trim();


        const pass =
            password.value.trim();


        // Empty fields
        if (
            user === "" ||
            pass === ""
        ) {

            card.classList.remove("shake");

            void card.offsetWidth;

            card.classList.add("shake");


            message.textContent =
                "You forgot something, chief. 😂";


            return;

        }


        // ====================================
        // SUCCESS
        // ====================================

        button.innerHTML =
            `
            GARAGE UNLOCKED
            <span>✓</span>
            `;


        button.style.background =
            `
            linear-gradient(
                135deg,
                #a8bd82,
                #718b57
            )
            `;


        message.textContent =
            `
            Welcome back, ${user}.
            Your garage is ready. 🏎️
            `;


        message.classList.add("success");


        createConfetti();


        createCelebrationCars();


        // Change face to happy
        const mouth =
            document.querySelector(".mouth");


        mouth.style.borderBottom =
            "none";


        mouth.style.borderTop =
            "3px solid #24140d";


        // Stop button escaping
        button.onmouseover = null;

    }
);


// ========================================
// FORGOT PASSWORD
// ========================================

forgot.addEventListener(
    "click",
    (event) => {

        event.preventDefault();


        const responses = [

            "Your password is hiding behind the spare tire. 🛞",

            "Have you checked under the driver's seat?",

            "The password has gone for a test drive. 🚗",

            "Password recovery requires 3 liters of premium fuel.",

            "Try remembering it. Revolutionary technology. 😂"

        ];


        message.textContent =
            responses[
                Math.floor(
                    Math.random() *
                    responses.length
                )
            ];

    }
);


// ========================================
// FLOATING CARS
// ========================================

const cars = [
    "🏎️",
    "🚗",
    "🚘",
    "🚙",
    "🏁"
];


function createFloatingCar() {

    const car =
        document.createElement("div");


    car.className =
        "floating-car";


    car.textContent =
        cars[
            Math.floor(
                Math.random() *
                cars.length
            )
        ];


    car.style.top =
        Math.random() * 80 +
        10 +
        "vh";


    car.style.fontSize =
        20 +
        Math.random() * 30 +
        "px";


    car.style.animationDuration =
        8 +
        Math.random() * 8 +
        "s";


    floatingCars.appendChild(car);


    setTimeout(
        () => car.remove(),
        17000
    );

}


// New car every few seconds
setInterval(
    createFloatingCar,
    2500
);


// Start with a few
for (let i = 0; i < 3; i++) {

    setTimeout(
        createFloatingCar,
        i * 1200
    );

}


// ========================================
// CONFETTI
// ========================================

function createConfetti() {

    const colors = [

        "#c79a5a",
        "#e5c68e",
        "#f5ead4",
        "#70472e",
        "#8fbf76"

    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() *
            100 +
            "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            1.5 +
            Math.random() *
            2 +
            "s";


        piece.style.animationDelay =
            Math.random() *
            0.5 +
            "s";


        piece.style.width =
            4 +
            Math.random() *
            9 +
            "px";


        piece.style.height =
            4 +
            Math.random() *
            9 +
            "px";


        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";


        document.body.appendChild(piece);


        setTimeout(
            () => piece.remove(),
            4000
        );

    }

}


// ========================================
// CELEBRATION CARS
// ========================================

function createCelebrationCars() {

    for (let i = 0; i < 8; i++) {

        setTimeout(
            () => {

                const car =
                    document.createElement("div");


                car.className =
                    "floating-car";


                car.textContent =
                    cars[
                        Math.floor(
                            Math.random() *
                            cars.length
                        )
                    ];


                car.style.top =
                    Math.random() *
                    80 +
                    "vh";


                car.style.opacity =
                    "0.35";


                car.style.fontSize =
                    "40px";


                car.style.animationDuration =
                    "3s";


                floatingCars.appendChild(car);


                setTimeout(
                    () => car.remove(),
                    3500
                );

            },
            i * 250
        );

    }

}


// ========================================
// RANDOM GARAGE STATUS
// ========================================

setInterval(
    () => {

        if (
            message.classList.contains(
                "success"
            )
        ) {
            return;
        }


        if (
            document.activeElement !==
                username &&
            document.activeElement !==
                password
        ) {

            if (Math.random() > 0.55) {

                message.textContent =
                    messages[
                        Math.floor(
                            Math.random() *
                            messages.length
                        )
                    ];

            }

        }

    },
    5000
);
```
