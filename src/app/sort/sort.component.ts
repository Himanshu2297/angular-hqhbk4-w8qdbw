import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarSearchService } from '../services/car-search.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  sortValues = [
    {
      sortId: '104',
      sortValueBy: 'Price: Lowest',
    },
    {
      sortId: '105',
      sortValueBy: 'Price: Highest',
    },
    {
      sortId: '106',
      sortValueBy: 'Rental Company: A to Z',
    },
    {
      sortId: '107',
      sortValueBy: 'Rental Company: Z to A',
    },
    {
      sortId: '108',
      sortValueBy: 'Car Type: A to Z',
    },
    {
      sortId: '109',
      sortValueBy: 'Car Type: Z to A',
    },
  ];

  // form group
  sortValueFormGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private carSearchService: CarSearchService
  ) {}

  ngOnInit() {
    this.sortValueFormGroup = this.formBuilder.group({
      sortMethod: new FormControl('105'),
    });
  }

  getvalueById(id) {
    return this.sortValues.find((p) => p.sortId == id);
  }

  onSubmit() {
    console.log(this.sortValueFormGroup);
  }

  backButton() {
    this.carSearchService.setSortDetails(this.sortValueFormGroup.value);
    console.log(this.sortValueFormGroup.value);
  }
}
