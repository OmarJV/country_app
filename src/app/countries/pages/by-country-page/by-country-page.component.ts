import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countryName: Country[] = [];

  constructor( private countryService: CountriesService){}

  searchByCountry( country:string ): void {
    this.countryService.searchCountry( country ).subscribe(
        object => {
          this.countryName = object;
        }
    )

    console.log('COUNTRY');

  }

}
