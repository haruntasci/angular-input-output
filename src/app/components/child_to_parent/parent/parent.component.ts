import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  childEvent(obj: any) {
    console.log(obj);
  }
}
