fetch('https://restcountries.com/v3/all')
.then(response => response.json())
.then(data => show(data));

function show(data){
    let val = '';
    for (let r of data) {
        console.log(r.flag);
          val += "<div class = 'col-lg-4'> <div class = 'card' style = 'margin: 1.5%;'> <div class = 'card-header text-white' style = 'background-color: #000000;'> <div class = 'row'> <div class = 'col-sm-12'> <h1 class = 'h3 m-3 text-center'>" + r.name.common + "</h1> </div> </div> </div>"
          + "<div class = 'card-body text-white' style = 'background-image: linear-gradient(to right, #fefbd8, #36486b);'> <div class = 'row'> <div class='col-sm-12'> <img class = 'img-fluid img-responsive center-block d-block mx-auto myclass' src = " + r.flags[0] + " height = '200' width = '300'> <br> </div>"
          + "<div class='col-sm-12 text-center'> <p>Capital: " + r.capital + "</p> </div>"
          + "<div class='col-sm-12 text-center'> <p>Region: " + r.region + "</p> </div>"
          + "<div class='col-sm-12 text-center'> <p>Country Code: " + r.cca2 + "</p> </div>"
          + "<div class='col-sm-12 text-center'> <button type='button' class = 'btn btn-outline-light' value = " + r.capital + ">Click for Weather</button> </div> </div> </div> </div> </div>";
        }
    document.getElementById("main").innerHTML = val;

    var button = document.getElementsByTagName('button');
    for (let i=0; i<button.length; i++)
    button[i].addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + button[i].value + '&appid=90c4d9326391749b17184930a68bb41f')
    .then(res => res.json())
    .then(data => { 
      var description = data['weather']['0']['description'];
      var temperature = data['main']['temp'];
      var windspeed = data['wind']['speed'];

      alert('Temperature: ' + temperature + ' Conditions: ' + description + ' Wind Speed: ' + windspeed + 'km/hr');

  })
  .catch(err => alert('The selected city is not present in the Weather API'))
})
}