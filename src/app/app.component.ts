import { Component } from '@angular/core';
import { DataTableComponent  } from './data-table/data-table.component';
import { MySliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MySliderComponent, DataTableComponent],
  templateUrl: `./app.component.html`
})
export class AppComponent { }