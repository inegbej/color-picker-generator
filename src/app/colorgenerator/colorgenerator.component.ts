import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorgenerator',
  templateUrl: './colorgenerator.component.html',
  styleUrls: ['./colorgenerator.component.css']
})
export class ColorgeneratorComponent implements OnInit {

  color1 = 'blue';

  constructor() { }

  ngOnInit() {
  }

}
