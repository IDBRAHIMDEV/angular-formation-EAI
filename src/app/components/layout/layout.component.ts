import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "image of Eurafric"

  imageUrl = "https://www.eurafric-information.com/sites/default/files/2022-02/RP_Banner.png"

}
