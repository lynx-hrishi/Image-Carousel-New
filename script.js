const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const slides = document.querySelectorAll('.image-slider');
const container = document.getElementById("mainDiv");
const headDiv = document.getElementById("head-anm");
const descDiv = document.getElementById("desc-anm");
const headMainDiv = document.getElementById("header");

// Text Contents
const header = document.getElementById("head");
const describe = document.getElementById("describe");

document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0 ,0 ,0 ,0.2)), url(new.jpeg)";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

var rightChange = false;
var leftChange = false;

let counter = 0;

slides.forEach(
    (slide, index) =>{
        slide.style.left = `${index * 100}%`;
    }
)

// Function to temporarily hide text elements
const hideText = () => {
    header.classList.add("hidden");
    describe.classList.add("hidden");
};

// Function to show text elements after animation
const showText = () => {
    header.classList.remove("hidden");
    describe.classList.remove("hidden");
};

function textDataForLeft(counter) {
    // Reset animation by removing and re-adding it
    const resetAnimation = (element, animation) => {
        element.style.animation = "none"; // Remove animation
        element.offsetHeight; // Trigger reflow (forces DOM to recognize the change)
        element.style.animation = animation; // Reapply animation
    };

    // Set the text and animation based on the counter value
    const setTextAndAnimate = (headerText, describeText, animation) => {
        header.textContent = headerText;
        // describe.innerHTML = describeText;
        resetAnimation(descDiv, animation); // Apply animation to descDiv
    };

    // Handle different counter values
    if (counter === 0) {
        setTextAndAnimate(
            "Princess of Beauty",
            "With such beauty and such cuteness....<br><br>No one can deny that you are the correct meaning of Beautiful and Cute🫠",
            "fadeInRight 0.3s ease-out"
        );
    } else if (counter === 1) {
        setTextAndAnimate(
            "Cuteness Overloaded",
            "Whenever I look at your face, I just Think...... <br><br> How can someone be so cute🫠",
            "fadeInRight 0.3s ease-out"
        );
    } else if (counter === 2) {
        setTextAndAnimate(
            "Queen of my heart❤️",
            "I'm not even playing cards,... <br><br>but somehow I managed to pull a Queen😙",
            "fadeInRight 0.3s ease-out"
        );
    } else if (counter === 3) {
        setTextAndAnimate(
            "Your's Smile",
            "People might say you look pretty even while crying.... <br><br>Because people die when you smile🤭",
            "fadeInRight 0.3s ease-out"
        );
    } else if (counter === 4) {
        setTextAndAnimate(
            "Make You Mine",
            "I know I fight with you a lot and make you feel irritated....<br><br>But I want you as mine forever😌",
            "fadeInRight 0.3s ease-out"
        );
    } else if (counter === 5) {
        setTextAndAnimate(
            "My Sweetheart",
            "You're so sweet you feel like an Angel....<br><br>Talking to you makes me feel like I'm in heaven😇",
            "fadeInRight 0.3s ease-out"
        );
    }
}

function textData(counter) {
    // Reset animation by removing and re-adding it
    const resetAnimation = (element, animation) => {
        element.style.animation = "none"; // Remove animation
        element.offsetHeight; // Trigger reflow (forces DOM to recognize the change)
        element.style.animation = animation; // Reapply animation
    };

    if (counter === 0) {
        header.textContent = "Princess of Beauty";
        describe.innerHTML = "With such beauty and such cuteness....<br><br>No one can deny that you are the correct meaning of Beautiful and Cute🫠";
        resetAnimation(headDiv, "fadeInLeft 0.3s ease-out");
    } else if (counter === 1) {
        header.textContent = "Cuteness Overloaded";
        describe.innerHTML = "Whenever I look at your face, I just Think...... <br><br> How can someone be so cute🫠";
        resetAnimation(headDiv, "fadeInLeft 0.3s ease-out");
    } else if (counter === 2) {
        header.textContent = "Queen of my heart❤️";
        describe.innerHTML = "I'm not even playing cards,... <br><br>but somehow I managed to pull a Queen😙";
        resetAnimation(headDiv, "fadeInLeft 0.3s ease-out"); // Apply animation to `header`
    } else if (counter === 3) {
        header.textContent = "Your's Smile";
        describe.innerHTML = "People might say you look pretty even while crying.... <br><br>Because people die when you smile🤭";
        resetAnimation(headDiv, "fadeInLeft 0.3s ease-out");
    } else if (counter === 4) {
        header.textContent = "Make You Mine";
        describe.innerHTML = "I know I fight with you a lot and make you feel irritated....<br><br>But I want you as mine forever😌";
        resetAnimation(headDiv, "fadeInLeft 0.3s ease-out");
    } else if (counter === 5) {
        header.textContent = "My Sweetheart";
        describe.innerHTML = "You're so sweet you feel like an Angel....<br><br>Talking to you makes me feel like I'm in heaven😇";
        resetAnimation(headDiv, "fadeInLeft 0.3s ease-out");
    }
}

rightBtn.addEventListener("click", ()=> {
    if (counter >= 5){
        counter = -1;
        rightChange = true;
    }

    counter++
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 94}%)`;
            container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0 ,0 ,0 ,0.2)), url('${counter}.jpeg')`;
            container.style.backgroundSize = "cover";
            container.style.backgroundPosition = "center";
        }
    )
    console.log(counter)

    if(rightChange == true){
        container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0 ,0 ,0 ,0.2)), url(6.jpeg)";
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        rightChange = false
    }

    // setTimeout(textData, 400, counter);
    // setTimeout(textDataForLeft, 600, counter);

    hideText(); // Hide text
    setTimeout(() => {
        textData(counter);
        showText(); // Show text after data update
    }, 400);

    setTimeout(() => {
        textDataForLeft(counter);
    }, 600);
})

leftBtn.addEventListener("click", ()=> {
    if (counter < 1 ){
        counter = 6;
        leftChange = true;
    }
    counter--;
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 94}%)`;
            container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0 ,0 ,0 ,0.2)), url('${counter}.jpeg')`;
            container.style.backgroundSize = "cover";
            container.style.backgroundPosition = "center";

            if(counter == 0){
                container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0 ,0 ,0 ,0.2)), url(6.jpeg)`;
                container.style.backgroundSize = "cover";
                container.style.backgroundPosition = "center";
                leftChange = false;
            }
        }
    )
    console.log(counter);
    // setTimeout(textData, 400, counter);
    // setTimeout(textDataForLeft, 600, counter);

    hideText(); // Hide text
    setTimeout(() => {
        textData(counter);
        showText(); // Show text after data update
    }, 400);

    setTimeout(() => {
        textDataForLeft(counter);
        // showText()
    }, 600);
})



