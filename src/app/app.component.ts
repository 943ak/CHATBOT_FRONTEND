import { Component } from '@angular/core';
import { LandingpageComponent } from "./landingpage/landingpage.component";

@Component({
  selector: 'app-root',
  imports: [LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LLM';
}
