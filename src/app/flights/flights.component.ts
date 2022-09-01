import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent {
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

  // accreditation form group
  sortValueFormGroup: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sortValueFormGroup = this.formBuilder.group({
      sortMethod: new FormControl('105'),
    });
    const sortMethodControls = <FormArray>(
      this.sortValueFormGroup.controls['productMethods']
    );
    // creating radio button control for each item.
    for (let i = 0, length = this.sortValues.length; i < length; i++) {
      sortMethodControls.push(new FormControl(false));
    }
  }

  getvalueById(id) {
    return this.sortValues.find((p) => p.sortId == id);
  }

  onSubmit() {
    console.log(this.sortValueFormGroup);
  }
}
