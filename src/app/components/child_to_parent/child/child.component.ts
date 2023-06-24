import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Output() dataEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.dataEvent.emit({ message: 'Merhaba' });
  }

}
