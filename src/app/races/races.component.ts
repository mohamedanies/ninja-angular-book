import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-races',
  template: `
              <hr/>
              <h2>Races</h2>
              <option selected="false">Rainbow Dash</option>
              <option [selected]="isPonySelected" value="Rainbow Dash">Rainbow Dash</option>
              <hr/>
              <button (click)="refreshRaces()">Refresh the races list</button>
             
              <p>{{ races.length }} races</p>
              
            `,
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  isPonySelected : boolean | number = false || false ;
  races: any = [];
  refreshRaces() {
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
    }
}
