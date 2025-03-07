import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



//   import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [HttpClientModule]
// })
//   .catch(err => console.error(err));
