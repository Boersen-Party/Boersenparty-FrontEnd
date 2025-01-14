import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invalid-popup',
  standalone: true,
  imports: [],
  templateUrl: './invalid-popup.component.html',
  styleUrl: './invalid-popup.component.css'
})
export class InvalidPopupComponent {
  @Input() message: string = '';
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}
