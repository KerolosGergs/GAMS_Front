import { Component } from '@angular/core';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  standalone: true,
  imports: [ContactUsComponent]
})
export class AboutUsComponent {}
