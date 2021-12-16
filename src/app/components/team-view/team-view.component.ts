import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CoachService } from 'src/app/services/coach/coach.service';
import { PlayerService } from 'src/app/services/player/player.service';
import { TeamService } from 'src/app/services/team/team.service';


@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private teamService: TeamService, private coachService: CoachService, private playerService: PlayerService) { }

  teamId: number = NaN;
  team: any = {};
  coach: any = {};

  ngOnInit(): void {
    this.route.params.subscribe(param => this.teamId = param.teamId);
    if (!isNaN(this.teamId)) {
      this.teamService.getTeamById(+this.teamId).subscribe(team => {
        this.team = team;
        this.coachService.getCoachById(+this.team.coach.id).subscribe(coach => this.coach = coach);
      });
      // this.playerService.getPlayersByTeamId(+this.teamId).subscribe(players => this.team.players = players );
    }
  }
  cols: any[] = [
    { field: 'name',  header: 'Name' },
    { field2: 'cost',  header: 'Cost' },
    { field3: 'date',  header: 'Date' }
  ]
}
