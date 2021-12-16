import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../communication.service';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  // TODO change this to our API
  // apiUrl = 'http://localhost:8089/api/v1/'
  apiUrl = 'http://coachingapp-env.eba-hiygmvzw.us-east-2.elasticbeanstalk.com/api/v1/'

  constructor(private http: HttpClient, private communicationService: CommunicationService) {
  }

  getCoaches() {
    const coaches = this.http.get(this.apiUrl + 'coaches')
    coaches.subscribe(coaches => this.communicationService.coachSubjectEvent(coaches))
    return coaches
  }
  addCoach(body : any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(this.apiUrl + 'coaches', body, httpOptions).subscribe(coach => this.getCoaches());
  }
  getCoachById(coachId: number) {
    return this.http.get(this.apiUrl + `coaches/${coachId}`)
  }
}
