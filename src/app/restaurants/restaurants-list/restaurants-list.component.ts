import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../restaurants.model';
import { FilterService } from 'src/app/filter-restaurants/filter.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css'],
})

export class RestaurantsListComponent implements OnInit {
  images = [
    "../../../assets/img/hamburger.jpg",
    "../../../assets/img/italiano.jpg",
    "../../../assets/img/kebab.jpg","../../../assets/img/panini.jpg","../../../assets/img/pizza.jpg"];
  @Input() restaurant: Restaurant;
    constructor( public filterService: FilterService) {
  }

  ngOnInit() {
  }
  randomImage() : string{
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

}
