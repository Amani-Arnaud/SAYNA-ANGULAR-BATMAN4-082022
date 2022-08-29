import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.scss']
})
export class BarNavComponent implements OnInit {

  home = "HOME";
  game = "GAME";
  eshop = "E-SHOP";
  myAccount = "MON COMPTE";
  constructor() { }

  sayMessage() {
    alert(this.home);
  }

  ngOnInit(): void {
  }

}
