import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-screen',
  templateUrl: './create-screen.component.html',
  styleUrls: ['./create-screen.component.css']
})
export class CreateScreenComponent implements OnInit {

  constructor() { }
  display = false;

  ngOnInit(): any {
  }

  showCreate() {
    this.display = true;
  }

}
