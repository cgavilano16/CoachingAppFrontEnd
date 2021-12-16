import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoachService } from 'src/app/services/coach/coach.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { TeamService } from 'src/app/services/team/team.service';
@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {


  constructor(private teamService: TeamService, private coachService: CoachService, private communicationService : CommunicationService) { }
  teamForm = new FormGroup({
    name: new FormControl('', Validators.required),
    sport: new FormControl('', Validators.required),
    coach: new FormControl('', Validators.required),
  })
  coaches: any[] = [];
  ngOnInit(): void {
    this.communicationService.coachSubject.subscribe(coaches => {
      this.coaches = coaches.map(function(item: any) { return { label: item.name, value: item} })
    })
    this.loadCoachNames();
  }

  loadCoachNames() {
    this.coachService.getCoaches();
  }

  onSubmit() {
    if (this.teamForm.valid) {
      this.teamService.addTeam({
        "name": this.teamForm.controls.name.value,
        "sport": this.teamForm.controls.sport.value,
        "coach": this.teamForm.controls.coach.value,
      })
      // Reset form
      this.teamForm.reset();
    }
  }
}
