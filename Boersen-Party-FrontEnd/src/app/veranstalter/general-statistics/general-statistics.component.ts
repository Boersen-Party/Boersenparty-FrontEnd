import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PartyServiceService } from '../../services/party-service.service';
import { PartyStats } from '../../_model/partystats';
import { Chart, registerables } from 'chart.js';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css'],
  standalone: true
})
export class GeneralStatisticsComponent {

  /*
  constructor(private partyService: PartyServiceService) {
    // partyStats will be automatically reactive
    this.partyStats = this.partyService.partyStats; // Directly using the signal here

  }

  */
}