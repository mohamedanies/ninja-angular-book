import { Component } from '@angular/core';
import { RaceService } from '../services/race.service';
@Component({
  selector: 'ns-root',
  template: `<h1 id="fh">PonyRacer</h1>
             <hr/>
             <h2>Number Of Users :  {{numberOfUsers}} </h2> 
             <h2> Information : </h2>
             <p [style.color]="foreground"> Account type: {{ Info.account[0]}} </p>
             <p> Country : {{ Info.country }} </p>
             <p> State : {{ Info?.state }} </p>
             <input type="text" #name>
             <button (click)="name.focus()">Focus the input</button>
             <ns-races > </ns-races>
             <hr/>
             <ns-ponies></ns-ponies>
             <hr/>
             <h1> Services DI </h1>
             <p>{{ list() }}</p>
             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfUsers = 200;
  foreground : string = "red";
  Info : any = { 
    account:['free','paid'],
    country:'egypt',
    state:'active'
  }

  // add a constructor with RaceService
constructor(private raceService: RaceService) {}
list() {
return this.raceService.list()[0].name;
}
  
}
