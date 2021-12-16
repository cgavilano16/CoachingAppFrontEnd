import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from 'src/app/services/communication.service';
import { PlayerService } from 'src/app/services/player/player.service';
import { TeamService } from 'src/app/services/team/team.service';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  constructor(private playerService: PlayerService, private teamService: TeamService, private communcationService: CommunicationService) { }
  playerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    sport: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    team: new FormControl('', Validators.required),
  })
  teams: any = [];
  ngOnInit(): void {
    this.communcationService.teamSubject.subscribe(teams => {
      this.teams = teams.map(function(item: any) { return { label: item.name, value: item } })
    });

  this.loadTeamNames();
  }

  loadTeamNames() {
    this.teamService.getTeams();
  }

  onSubmit() {
    if (this.playerForm.valid) {
      this.playerService.addPlayer({
        "name": this.playerForm.controls.name.value,
        "age": this.playerForm.controls.age.value,
        "sport": this.playerForm.controls.sport.value,
        "position": this.playerForm.controls.position.value,
        "number": this.playerForm.controls.number.value,
        "phoneNumber": this.playerForm.controls.phoneNumber.value,
        "team": this.playerForm.controls.team.value,
      });
      // Reset form
      this.playerForm.reset();
    }
  }

}
