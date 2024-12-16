import { Component } from '@angular/core';
import {ServerUptimeComponent} from "./server-uptime/server-uptime.component";
import {ServerResponseTimeComponent} from "./server-response-time/server-response-time.component";
import {ServerResourceUsageComponent} from "./server-resource-usage/server-resource-usage.component";
import {ErrorLogsComponent} from "./error-logs/error-logs.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ServerUptimeComponent, ServerResponseTimeComponent, ServerResourceUsageComponent, ErrorLogsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
