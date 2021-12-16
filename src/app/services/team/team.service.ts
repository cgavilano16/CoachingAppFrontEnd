import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../communication.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  // TODO change this to our API
  // apiUrl = 'http://localhost:8089/api/v1/'
  apiUrl = 'http://coachingapp-env.eba-hiygmvzw.us-east-2.elasticbeanstalk.com/api/v1/'

  constructor(private http: HttpClient, private communicationService: CommunicationService) {
  }

  getTeams() {
    const teams = this.http.get(this.apiUrl + 'teams')
    teams.subscribe(teams => this.communicationService.teamSubjectEvent(teams))
    return teams
  }
  addTeam(body : any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(this.apiUrl + 'teams', body, httpOptions).subscribe(teams => this.getTeams())
  }

  getTeamsByCoachId(id: number) {
    // Placeholder for broken api
    // return this.dummyTeams.filter((team: any) => team.coach_id === id);
    return this.http.get<any>(this.apiUrl + `teams/coach/${id}`)
  }
  getTeamsByPlayerId(id: number) {
    // Placeholder for broken api
    // return this.dummyTeams.filter((team: any) => team.players.some((player: any) => player.id === id));
    return this.http.get<any>(this.apiUrl + `teams/player/${id}`)
  }

  getTeamById(id: number) {
    // // Placeholder for broken api
    // return this.dummyTeams.filter((team: any) => team.id === id)[0];
    return this.http.get<any>(this.apiUrl + `teams/${id}`)
  }



}
