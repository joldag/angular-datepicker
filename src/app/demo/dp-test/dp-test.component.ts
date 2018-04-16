import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dp-dp-test',
  templateUrl: './dp-test.component.html',
  styleUrls: ['./dp-test.component.css']
})
export class DpTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public onLeftNav(payload) {
    console.log('onLeftNav', payload);
  }

  public onRightNav(payload) {
    console.log('onRightNav', payload);
  }


}


