// function clickMe(){


// }
// alert("hello")
// let file= "https://restcountries.com/v3.1/all";
// // fetch(url)
// // // let file = "fetch_info.txt"
// //  fetch ("https://restcountries.com/v3.1/all")
// // .then(x => x.json())
// // .then(y => console.log(y[0]));
// console.log("end")
// // "https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly"
const button = document.querySelector("button");

(function auto(){
    if (navigator.geolocation) {
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        button.innerText = "Your browser not support";
    }
}());
const country0=document.getElementById("country");
const state=document.getElementById("state");
const code=document.getElementById("code");


function onSuccess(position) {
    button.innerText = "Detecting your location...";
    let { latitude, longitude } = position.coords;
    console.log(latitude, longitude)
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5c8b826494f84dd8992f59b6dc73ca8c`)
        .then(response => response.json()).then(response => {
            let allDetails = response.results[0].components;
            console.table(allDetails);
            let { county, postcode, country } = allDetails;
            // button.innerText = ` ${postcode}, ${country}`;
            console.log(country)
            country0.innerText=`${country}`
            state.innerText=`${county}`
            code.innerText=`${postcode}`
        }).catch(() => {
            button.innerText = "Something went wrong";
        });
}

function onError(error) {
    if (error.code == 1) {
        button.innerText = "You denied the request";
    } else if (error.code == 2) {
        button.innerText = "Location is unavailable";
    } else {
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}