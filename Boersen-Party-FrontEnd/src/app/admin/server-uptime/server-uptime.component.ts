import { Component } from '@angular/core';

@Component({
  selector: 'app-server-uptime',
  standalone: true,
  imports: [],
  templateUrl: './server-uptime.component.html',
  styleUrl: './server-uptime.component.css'
})
export class ServerUptimeComponent {
  availabilityPercentage: number = 83; // Beispielwert für die Verfügbarkeit
  unavailablePercentage: number = 100 - this.availabilityPercentage; // Ausfall-Anteil berechnen
}
