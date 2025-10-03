import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  imports: [CommonModule,FormsModule],
  standalone: true
})
export class ContactUsComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;
  submit() {
    this.submitted = true;
    // Demo: just reset after submit
    setTimeout(() => {
      this.name = '';
      this.email = '';
      this.message = '';
      this.submitted = false;
    }, 2000);
  }
}
