import { Component } from '@angular/core';
@Component({
selector: 'ns-ponies',
template: `<h1> PoniesComponent Started</h1>
          <div >
          <ul >
              <li *ngFor="let pony of ponies; index as i; even as isEven" [style.color]="isEven ? 'green'
              : 'black'">
                index : {{i}} & Name :{{ pony.name }}  & isEven: {{ isEven}} so colerd green
              </li>
          </ul>

          <button (click)="refreshPonies()">Refresh</button>
          </div>  
                
          `
})
export class PoniesComponent {
  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];  
  refreshPonies(){
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
  }
 
}