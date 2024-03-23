import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent {

  public regionName: Country[] = [];

  constructor( private countriesServie: CountriesService ){}

  searchByRegion( region: string ):void {
    this.countriesServie.searchRegion(region).subscribe(
      regions => {
        this.regionName = regions;
      }
    )

  }
}
