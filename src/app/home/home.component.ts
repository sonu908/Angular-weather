import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weather: any = []
  name: any;
  pre: any = 'http://openweathermap.org/img/wn/'
  post: any = '.png'
  //
  country: any = ''
  city: any = ''
  sky_status: any = ''
  desc: any = ''
  icon: any = ''
  temp: any = 0
  feels_like: any = 0
  temp_min: any = 0
  temp_max: any = 0
  pressure: any
  humidity: any
  wind: any
  space: any = '    '
  //Celsius = (Kelvin – 273.15)
  temperature$: any
  background: any = 'https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?cs=tinysrgb&w=1260&h=750&dpr=1'
  constructor(public api: ApiService) {
  }
  ngOnInit(): void {
  }



  weatherdata() {
    this.api.getweather(this.name).subscribe((data: any) => {
      this.weather = data

      // console.log(this.weather);
      // console.log(this.city);

      //
      this.country = this.weather.sys.country
      this.city = this.weather.name
      this.sky_status = this.weather.weather[0].main
      this.desc = this.weather.weather[0].description
      this.icon = this.weather.weather[0].icon
      this.temp = Math.floor(this.weather.main.temp - 273.15)
      this.feels_like = Math.floor(this.weather.main.feels_like - 273.15)
      this.temp_min = Math.floor(this.weather.main.temp_min - 273.15)
      this.temp_max = Math.floor(this.weather.main.temp_max - 273.15)
      this.pressure = this.weather.main.pressure
      this.humidity = this.weather.main.humidity
      this.wind = this.weather.wind.speed

      this.temperature$ = this.temp

// this.temperature$='30'

      // console.log(this.temperature$, 'home temp');


      if (this.temperature$ < 10) {
        this.background = 'https://wallpapercave.com/wp/wp2012488.jpg'; //good one (antartica)
      }
      else if (this.temperature$ < 25) {
        this.background = 'https://wallpapercave.com/wp/wp4155376.jpg'; //mist
      }
      else if (this.temperature$ >= 35) {
        this.background = 'https://i.redd.it/3kvm865cb8211.jpg'; // hot wall here
      }
      else { // base
        this.background = 'https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    })
  }



}
