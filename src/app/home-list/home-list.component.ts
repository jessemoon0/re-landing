import { Component, OnInit } from '@angular/core';
import {IHome} from './IHome';
import {HOME_DATA} from './home-data';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  homes: Array<IHome> = HOME_DATA;

  ngOnInit() {
  }

}
