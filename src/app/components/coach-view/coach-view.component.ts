import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CoachService } from 'src/app/services/coach/coach.service';
import { TeamService } from 'src/app/services/team/team.service';


@Component({
  selector: 'app-coach-view',
  templateUrl: './coach-view.component.html',
  styleUrls: ['./coach-view.component.css']
})
export class CoachViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private coachService: CoachService, private teamService: TeamService) { }

  coachId: number = NaN;
  coach: any = {};

  ngOnInit(): void {
    this.route.params.subscribe(param => this.coachId = param.coachId);
    if (!isNaN(this.coachId)) {
      this.coachService.getCoachById(this.coachId).subscribe(coach => {
        this.coach = coach
        this.teamService.getTeamsByCoachId(+this.coachId).subscribe(teams => this.coach.teams = teams);
      });
    }
  }
  cols: any[] = [
    { field: 'name',  header: 'Name' },
  ]



}
