import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public teamSubject = new Subject<any>();
  public coachSubject = new Subject<any>();
  public playerSubject = new Subject<any>();
  public equipmentSubject = new Subject<any>();
  public eventSubject = new Subject<any>();

  constructor() { }

  teamSubjectEvent(team: any) {
    this.teamSubject.next(team);
  }

  coachSubjectEvent(coach: any) {
    this.coachSubject.next(coach);
  }
  playerSubjectEvent(player: any) {
    this.playerSubject.next(player);
  }
  equipmentSubjectEvent(equipment: any) {
    this.equipmentSubject.next(equipment);
  }
  eventSubjectEvent(event: any) {
    this.eventSubject.next(event);
  }
}
