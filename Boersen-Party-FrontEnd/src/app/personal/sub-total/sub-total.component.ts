import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

}
