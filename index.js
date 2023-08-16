const input = document.getElementById("zip");
const country = document.getElementById("country");
const state = document.getElementById("state");


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        data();
    }
});
function data() {
    try {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${input.value}&key=5c8b826494f84dd8992f59b6dc73ca8c`)
            .then(res => { return res.json(); })
            .then(data => {

                let result = data.results[2].components;
                console.log(result);
                country.value = result.country;

                state.value = result.state;




            }




            );

    } catch (e) {
        console.log("error")
    }

}
