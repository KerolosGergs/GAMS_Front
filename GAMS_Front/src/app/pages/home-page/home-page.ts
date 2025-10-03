import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
