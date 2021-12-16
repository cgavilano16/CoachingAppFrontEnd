import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachViewComponent } from './components/coach-view/coach-view.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerViewComponent } from './components/player-view/player-view.component';
import { TeamViewComponent } from './components/team-view/team-view.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coach/:coachId', component: CoachViewComponent},
  {path: 'team/:teamId', component: TeamViewComponent },
  {path: 'player/:playerId', component: PlayerViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
