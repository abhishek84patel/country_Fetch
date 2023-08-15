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
const country0 = document.getElementById("country");
const state0 = document.getElementById("state");
const code = document.getElementById("code");
const selectDrop = document.querySelector('#countries');



let output = "<option label='Choose a country' selected disabled></option>";

(function fetcth() {
    fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=all&key=5c8b826494f84dd8992f59b6dc73ca8c`
    )
        .then(response => response.json())
        .then(response => {



            response.results.forEach(element => {
                // console.log(element.components.country)
                output += ` <option value="${element.components.country}">${element.components.country}</option>`;
            });
            selectDrop.innerHTML = output;
            console.log(response.results);
            // let allDetails = response.results[0].components;
            // let { county, postcode, country } = allDetails;
            // code.innerText = ` ${postcode}, ${country}`;
            // console.log(allDetails, county);
            // console.log(allDetails.country)

            // country0.innerText = `${country}`;
            // state.innerText = `${county}`;
            // code.innerText = `${postcode}`;
        })
        .catch(() => {
            code.innerText = "Something went wrong";
        });
})();

(function ChekCurrentLoction() {
    if (navigator.geolocation) {

        // console.log(navigator.geolocation.getCurrentPosition)
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Your browser not support");
    }
})();

function onSuccess(position) {
    let { latitude, longitude } = position.coords;

    fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5c8b826494f84dd8992f59b6dc73ca8c`
    )
        .then(response => response.json())
        .then(response => {




            response.results.forEach(element => {
                // console.log(element.components.country)

            });
            selectDrop.innerHTML = output;
            console.log(response.results);
            let allDetails = response.results[0].components;
            let { state_district
                , postcode, country } = allDetails;
            // code.innerText = ` ${postcode}, ${country}`;
            // console.log(allDetails, county);
            // console.log(allDetails.country)

            country0.innerText = `${country}`;
            state0.innerText = `${state_district
                }`;
            code.innerText = `${postcode}`;
        })
        .catch(() => {
            code.innerText = "Something went wrong";
        });
}

function onError(error) {
    if (error.code == 1) {
        button.innerText = "You denied the request";
    } else if (error.code == 2) {
        code.innerText = "Location is unavailable";
    } else {
        code.innerText = "Something went wrong";
    }

}
