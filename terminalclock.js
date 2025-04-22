function dateMethods() {
    let currentDate = new Date();

    // Get the current time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Add leading zeros if necessary (for better formatting)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the content of the #clock div with the current time
    document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds;
}

// Display "Loading..." first and change after 4 seconds
window.onload = () => {
    const clockElement = document.getElementById('clock');
    clockElement.innerText = "Loading...";

    // After 4 seconds, remove "Loading..." and start the clock
    setTimeout(() => {
        setInterval(dateMethods, 1000);
    }, 4000);
}


// function dateMethods() {
//     let currentDate = new Date();
    
//     // Get the current time
//     let hours = currentDate.getHours();
//     let minutes = currentDate.getMinutes();
//     let seconds = currentDate.getSeconds();

//     // Add leading zeros if necessary (for better formatting)
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     // Update the content of the #clock div with the current time
//     document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds;

//     // Change background color every 5 seconds
//     if (currentDate.getSeconds() % 5 === 0) {
//         document.body.style.background = `linear-gradient(45deg, rgba(${randomColor()}, 1), rgba(${randomColor()}, 1))`;
//     }
// }

// // Function to generate a random color
// function randomColor() {
//     return Math.floor(Math.random() * 256);
// }

// // Update the clock every 1 second
// setInterval(dateMethods, 1000);




// function dateMethods() {
//     let currentDate = new Date();
    
//     console.clear();
//     console.log(currentDate.getHours() + ":"+ currentDate.getMinutes() + 
//     ":" + currentDate.getSeconds());
// }
// setInterval(dateMethods, 1000);


// 