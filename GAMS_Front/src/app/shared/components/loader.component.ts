import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../core/services/loader.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, NgIf],
  template: `
    <div class="loader-overlay" *ngIf="loaderService.loading$ | async">
      <div class="loader"></div>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}
