// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-weather',
//   standalone: true,
//   imports: [],
//   templateUrl: './weather.component.html',
//   styleUrl: './weather.component.css'
// })
// export class WeatherComponent {

// }


import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,  // Make it standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() data: any; // Accepting weather data from parent component
}

