import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarsSearchRoutingModule } from './cars-search-routing.module';
import { CarsSearchComponent } from './cars-search.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search-component/search.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SortComponent } from '../sort/sort.component';

@NgModule({
  declarations: [CarsSearchComponent, SearchComponent, SortComponent],
  providers: [],
  imports: [
    CarsSearchRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarsSearchModule {}
