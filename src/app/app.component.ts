import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:any[];

  constructor(){

    this.goals=
    [
"watch finding nemo","buy cookies","get new phone case"
    ]
  }
}
