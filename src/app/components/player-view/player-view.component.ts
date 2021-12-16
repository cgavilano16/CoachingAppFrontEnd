import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlayerService } from 'src/app/services/player/player.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private teamService: TeamService, private playerService: PlayerService) { }

  playerId: number = NaN;
  player: any = {};
  teams: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(param => this.playerId = param.playerId);

    if (!isNaN(this.playerId)) {
      this.playerService.getPlayerById(+this.playerId).subscribe(player => {
        this.player = player
        this.teamService.getTeamsByPlayerId(+this.playerId).subscribe(teams => this.player.teams = teams);
      })
    }
  }

  cols: any[] = [
    { field: 'name',  header: 'Name' },
  ]


}
