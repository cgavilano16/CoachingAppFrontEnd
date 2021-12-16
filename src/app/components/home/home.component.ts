import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { TeamService } from 'src/app/services/team/team.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService, private communicationService: CommunicationService) { }
  teams: any[] = [];
  cols: any[] = [];

  ngOnInit(): void {
    // sets up subscriber
    this.communicationService.teamSubject.subscribe(teams => this.teams = teams)
    this.setupTeamTable();
  }

  setupTeamTable() {
    // sends an update to teamSubject which is picked up from earlier subscriber
    this.teamService.getTeams();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'sport', header: 'Sport' },
      { field: 'coach', subfield: 'name', header: 'Coach' },
    ];
  }

}
