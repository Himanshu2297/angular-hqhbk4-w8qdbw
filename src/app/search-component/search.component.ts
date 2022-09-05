import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarSearchService } from '../services/car-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  unlimitedMiles = 'Unlimited Miles';
  searchValues;
  vehicleDetails;
  sortDetails;

  constructor(
    private router: Router,
    private carSearchService: CarSearchService
  ) {}

  ngOnInit() {
    this.searchValues = this.carSearchService.getSearchDetails();
    this.vehicleDetails = this.carSearchService.getVehicleDetails();

    this.sortDetails = this.carSearchService.getSortDetails();
    console.log(this.sortDetails);
    // if (this.sortDetails) {
    //   console.log(
    //     'vehicel details',
    //     this.vehicleDetails.carMockItineraries.CarItineraries
    //   );
    //   // this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
    //   //   return a.fare.perDay - b.fare.perDay;
    //   // });

    //   // this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
    //   //   return a.vehicle.type - b.vehicle.type;
    //   // });
    //   this.vehicleDetails;
    // }
  }

  sortResults() {
    this.router.navigate(['sort']);
    // console.log('hiiii');
  }
}
