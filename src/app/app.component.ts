import { Component } from '@angular/core';

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
  
}
