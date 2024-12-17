import { Component } from '@angular/core';

@Component({
  selector: 'app-error-logs',
  standalone: true,
  imports: [],
  templateUrl: './error-logs.component.html',
  styleUrl: './error-logs.component.css'
})

export class ErrorLogsComponent {
  handleButtonClick(logType: string): void {
    console.log(`${logType} clicked`);
    // Füge hier die Logik hinzu, um die Logs anzuzeigen oder Daten zu laden
  }
}
