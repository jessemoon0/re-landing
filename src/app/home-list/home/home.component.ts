import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Input() homeImg: string;
  @Input() homeTitle: string;
  @Input() country: string;
  @Input() rooms: number;
  @Input() sqMeters: number;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
