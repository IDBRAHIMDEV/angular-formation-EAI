import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = ""
  @Input() price  = 0
  @Input() content  = ""
  @Input() image  = ""

  constructor() { }

  ngOnInit(): void {
  }

}