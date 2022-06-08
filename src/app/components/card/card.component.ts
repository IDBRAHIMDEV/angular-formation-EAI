import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id = ""
  @Input() title = ""
  @Input() price  = 0
  @Input() content  = ""
  @Input() image  = ""


  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }  

  deleteCard() {
    this.delete.emit({id: this.id, })
  }

}
