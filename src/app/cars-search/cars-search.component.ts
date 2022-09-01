import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent implements OnInit {
  carsSearchForm: FormGroup;
  submitted = false;
  ageList: any = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.carsSearchForm = this.formBuilder.group({
      pickUpLocation: ['', Validators.required],
      pickUpDate: ['', Validators.required],
      dropOffDate: ['', Validators.required],
      pickUpTime: ['', Validators.required],
      dropOffTime: ['', Validators.required],
      ageOfDriver: ['', Validators.required],
    });
  }

  get formControls() {
    return this.carsSearchForm.controls;
  }

  searchCars() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.carsSearchForm.invalid) {
    //   return;
    // }

    console.log('frm', this.carsSearchForm.value);

    this.router.navigate(['search']);
  }
}
