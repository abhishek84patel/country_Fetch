const input = document.getElementById("zip");
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");
const err = document.querySelector(".err");



input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        data();
    }
});

function data() {
    fetch(`https://api.postalpincode.in/pincode/${input.value}`)
        .then((res) => res.json())
        .then((res) => {
            let result = res[0].PostOffice[0];
            country.value = result.Country;
            state.value = result.State;
            city.value = result.District;

        }).catch((error) => {
          
            err.classList.add("block");
            setTimeout(() => err.classList.remove("block"), 5000)
        }
        );
}
