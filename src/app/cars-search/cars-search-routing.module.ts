import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsSearchComponent } from './cars-search.component';
import { SearchComponent } from '../search-component/search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CarsSearchComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsSearchRoutingModule {}
