import { Component } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  imports: [AppRoutingModule]
})
export class AppComponent {}
