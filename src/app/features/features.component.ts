import { Component, OnInit } from '@angular/core';
import {FEATURES_DATA} from './feature-data';
import {IFeature} from './IFeature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Array<IFeature> = FEATURES_DATA;

  constructor() { }

  ngOnInit() {
  }

}
