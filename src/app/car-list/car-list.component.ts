import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarSearchService } from '../services/car-search.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
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
