import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../services/communication.service';

@Injectable()
export class EventService{
     // TODO change this to our API
  // apiUrl = 'http://localhost:8089/api/v1/'
  apiUrl = 'http://coachingapp-env.eba-hiygmvzw.us-east-2.elasticbeanstalk.com/api/v1/'

  constructor(private http: HttpClient, private communicationService: CommunicationService) {
  }

  getEvents() {
    const events = this.http.get(this.apiUrl + 'events')
    events.subscribe(events => this.communicationService.teamSubjectEvent(events))
    return events
  }
  addEvent(body : any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(this.apiUrl + 'teams', body, httpOptions).subscribe(teams => this.getEvents())
  }
  getEventsByTeamId(id: number) {
    // Placeholder for broken api
    // return this.dummyTeams.filter((team: any) => team.coach_id === id);
    return this.http.get<any>(this.apiUrl + `teams/${id}`)
  }
}