const card = document.querySelector('.card')
const search = document.querySelector('.search button')
const weatherBox = document.querySelector('.weather')
const weatherDetail = document.querySelector('.details')
const error404 = document.querySelector('.error')

searchbtn.addEventListener('click', () => {

    const APIKey = "5dbf1c975d93a89f7c30d73392620131";
    const city = document.querySelector('.search input').value

    if(city == '')
        return;

    fetch(` https://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&
        appid=${APIKey}`).then(response => response.json()).then(json => {
     if(json.cod == '404'){
        card.style.height = '80px'
        weatherBox.classList.remove('active')
        weatherDetail.classList.remove('active')
        error404.classList.add('active')
        return
     }
     card.style.height = '80px'
     weatherBox.classList.remove('active')
     weatherDetail.classList.remove('active')
     error404.classList.add('active')
             
        const image = document.querySelector('.weather img')
        const temp = document.querySelector('.weather ,temp')
        const city = document.querySelector('.weather ,city')
        const humidity = document.querySelector('.details ,col')
        const wind = document.querySelector('.details ,col2')

       switch (json.weather[0].main){
          case 'Clear':
              image.src = 'clear.png';
              break;
          case 'Rain':
              image.src = 'rain.png';
              break;
          case 'Drizzle':
              image.src = 'drizzle.png';
              break;
          case 'Clouds':
              image.src = 'clouds.png';
              break;
          case 'Mist':
              image.src = 'mist.png';
              break;
          case 'Snow':
              image.src = 'snow.png';
              break;
           default:
              image.src = 'rain.png';
       }
      
       temp.innerHTML = `${parseInt(json.main.temp)}°C`
       city.innerHTML = `${json.weather[0].city}`
       humidity.innerHTML = `${json.main.humidity}%`
       wind.innerHTML = `${parseInt(json.wind.speed)}km/hr`
    


    })   
   
})
