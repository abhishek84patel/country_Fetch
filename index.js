const input = document.getElementById("zip");
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        data();
    }
});

function data() {
    fetch(`https://api.postalpincode.in/pincode/${input.value}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
        .then((responseJson) => {
            let result = responseJson[0].PostOffice[0];
            console.log(result);
            country.value = result.Country;

            state.value = result.State;
            city.value = result.District;

        })
        .catch((error) => {
            console.log(error)
        });
}
