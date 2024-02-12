const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const today_day = document.getElementById("today_day");
const today_date = document.getElementById("today_date");



async function getInfo(event) {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please Write the name before search`;
        datahide.classList.add('data_hide');
    } else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=71ddae108055bc5a442a0cf3220ec7b8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

           datahide.classList.remove('data_hide');


        } catch (error) {

            city_name.innerText = `Please enter city name properly`;
            datahide.classList.add('data_hide');


        }

    }

};



function time() {
    let date = new Date();
    let d = date.getDay();
    let arrD = ["sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
    let arrM = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let da = date.getDate();
    let mon = date.getMonth();



    today_day.innerHTML = arrD[d];
    today_date.innerHTML = da + " " + arrM[mon];

}


submitBtn.addEventListener("click", getInfo);
submitBtn.addEventListener("click",time);