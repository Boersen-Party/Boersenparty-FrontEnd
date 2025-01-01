import { Component } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent {
  logout() {
    // Logik für den Logout (z.B. lokale Daten löschen und auf die Login-Seite navigieren)
    console.log('Logout ausgeführt');
    // Beispiel für Navigation: window.location.href = '/login';
  }
}
