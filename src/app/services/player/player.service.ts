import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../communication.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // TODO change this to our API
  // apiUrl = 'http://localhost:8089/api/v1/'
  apiUrl = 'http://coachingapp-env.eba-hiygmvzw.us-east-2.elasticbeanstalk.com/api/v1/'

  constructor(private http: HttpClient, private communicationService: CommunicationService) {
  }

  getPlayers() {
    const players = this.http.get(this.apiUrl + 'players')
    players.subscribe(players => this.communicationService.playerSubjectEvent(players))
    return players
  }
  getPlayerById(id: number) {
    return this.http.get<any>(this.apiUrl + `players/${id}`);
    // return this.dummyPlayers.filter(player => player.id === id)[0];
  }
  addPlayer(body : any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post(this.apiUrl + 'players', body, httpOptions).subscribe(players => this.getPlayers())
  }
  getPlayersByTeamId(id: number) {
    return this.http.get(this.apiUrl + `players/team/${id}`)
  }
  // dummyPlayers: any[] = [
  //   {
  //     "id": 0,
  //     "name": "Jimmy",
  //     "age": 18,
  //     "sport": "Soccer",
  //     "position": "goalie",
  //     "number": 0,
  //     "primaryContact": 11111111,
  //     "primaryPhone": 123456789,
  //     "team_id": 0
  //   },
  //   {
  //     "id": 1,
  //     "name": "Ron",
  //     "age": 19,
  //     "sport": "Soccer",
  //     "position": "kicker",
  //     "number": 1,
  //     "primaryContact": 11111111,
  //     "primaryPhone": 123456789,
  //     "team_id": 0
  //   },
  //   {
  //     "id": 2,
  //     "name": "Tim",
  //     "age": 20,
  //     "sport": "Basketball",
  //     "position": "defense",
  //     "number": 0,
  //     "primaryContact": 11111111,
  //     "primaryPhone": 123456789,
  //     "team_id": 1
  //   },
  //   {
  //     "id": 3,
  //     "name": "Bob",
  //     "age": 20,
  //     "sport": "Basketball",
  //     "position": "offense",
  //     "number": 1,
  //     "primaryContact": 11111111,
  //     "primaryPhone": 123456789,
  //     "team_id": 1
  //   }
  // ]
}
