import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-races',
  template: `
              <hr/>
              
              <option selected="false">Rainbow Dash</option>
              <option [selected]="isPonySelected" value="Rainbow Dash">Rainbow Dash</option>
              <hr/>
              <button (click)="refreshRaces()">Refresh the races list</button>
             
              <p>{{ races.length }} races</p>
              <hr/>
              <h1>Structural Dirctives</h1>
              <div *ngIf="races.length > 0; else empty"><h2>Races</h2></div>
              <ng-template #empty><h2>No races.</h2></ng-template>
              <ul>
                  <li *ngFor="let race of races; index as i">{{ i}}- {{ race.name }}</li>
              </ul>
              <hr/>
              <div [ngSwitch]="messageCount">
              <p *ngSwitchCase="0">You have no message</p>
              <p *ngSwitchCase="1">You have a message</p>
              <p *ngSwitchDefault>Default messages</p>
              </div>
              <hr/>
              <h1>Template Dirctives</h1>
              <div [ngStyle]="{fontWeight: fontWeight, color: color, fontSize : fontSize}">I've got style</div>
              <div [ngStyle]="{'font-weight': fontWeight, color: color, 'font-size' : fontSize}">I've got the same style</div>
              <button [ngClass]="'btn btn-success'">Click Me!</button>
              `,
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  isPonySelected : boolean | number = false || 0 ;
  races: any = [];
  refreshRaces() {
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
    }
    messageCount : number = 1;
    fontWeight : string = 'bold';
    color : string = 'green';
    fontSize : string = '30px';
    
}
