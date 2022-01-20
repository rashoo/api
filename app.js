window.addEventListener('load', ()=> {
    let lon;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

   if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
           lon = position.coords.longitude;
           lat = position.coords.latitude;

           const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5aaddbec0652ea97371e31e7142bd8ba`;
           fetch(api)
               .then(response =>{
                   return response.json();
               })
               .then(data => {
                   console.log(data);

                   const {temp} = data.main;
                   const {description} = data.weather[0];

                   temperatureDegree.textContent = temp;
                   temperatureDescription.textContent = description;
                   locationTimezone.textContent = data.name;


               });


       });
   } else {
       h1.textContent("allow location access")
   }
});



