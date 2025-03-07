// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'weather-app';
// }


import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';  // For two-way binding
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark as standalone component
  imports: [CommonModule, FormsModule, WeatherComponent, HttpClientModule, FooterComponent, HeaderComponent], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city: string = '';
  weatherData: any = null;
  error: string = '';
  loading: boolean = false;

  API_KEY: string = environment.API_KEY;  // Access API key from environment

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getWeatherData(): void {
    if (!this.city) {
      this.error = 'City cannot be empty';
      return;  // Don't proceed if city is empty
    }

    this.loading = true;
    this.error = '';

    // Build the API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=metric`;
    console.log('Request URL:', url);  // Debugging log for URL
    
    this.http.get(url).subscribe(
      (response: any) => {
        this.weatherData = response;
        this.error = '';
      },
      (err) => {
        console.error('Error:', err);  // Debugging log for errors
        this.error = 'City not found';
        this.weatherData = null;
      },
      () => {
        this.loading = false;
      }
    );
  }

  handleSubmit(): void {
    this.getWeatherData();
  }
}

