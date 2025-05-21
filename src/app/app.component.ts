import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApodService, NasaImage} from './apod.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nasa-apod-ng';
  vm$: Observable<NasaImage | null>;

  constructor(private apodService: ApodService) {
    this.vm$ = this.apodService.getApod();   
  }
}
