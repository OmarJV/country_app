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
  public isLoading: boolean = false;

  constructor( private countriesServie: CountriesService ){}

  searchByRegion( region: string ):void {
    this.isLoading = true;
    this.countriesServie.searchRegion(region).subscribe(
      regions => {
        this.regionName = regions;
        this.isLoading = false;
      }
    )

  }
}
