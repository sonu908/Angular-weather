import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  celsius: number = 0;
  kelvin: number = 0
  fahren: number = 0
  constructor(public api: ApiService) {

  }
  ngOnInit(): void {
  }

  convert() {




    this.kelvin = this.celsius + 273
    this.fahren = this.celsius * 9 / 5 + 32


  }


}
