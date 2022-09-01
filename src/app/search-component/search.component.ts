import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarSearchService } from '../services/car-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // styleUrls: ['./cars-search.component.css'],
})
export class SearchComponent implements OnInit {
  unlimitedMiles = 'Unlimited Miles';
  searchValues;
  vehicleDetails;
  constructor(
    private router: Router,
    private carSearchService: CarSearchService
  ) {}

  ngOnInit() {
    this.searchValues = this.carSearchService.getSearchDetails();
    this.vehicleDetails = this.carSearchService.getVehicleDetails();
  }

  sortResults() {
    this.router.navigate(['flights']);
    // console.log('hiiii');
  }
}
