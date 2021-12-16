import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoachService } from 'src/app/services/coach/coach.service';

@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.css']
})
export class CoachFormComponent implements OnInit {

  constructor(private coachService : CoachService) { }
  coachForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    preferredSport: new FormControl('', Validators.required),
    teams: new FormControl('')
  })
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.coachForm.valid) {
      this.coachService.addCoach({
        "name": this.coachForm.controls.name.value,
        "age": this.coachForm.controls.age.value,
        "preferredSport": this.coachForm.controls.preferredSport.value,
        // TODO add team logic
        // "teams": this.coachForm.controls.teams.value,
        "teams": [],
      })
      // Reset form
      this.coachForm.reset();
    }
  }
}
