import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countryName: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countryService: CountriesService){}

  ngOnInit(): void {
    this.countryName  = this.countryService.cacheStore.byCountries.countries
    this.initialValue = this.countryService.cacheStore.byCountries.term
  }

  searchByCountry( country:string ): void {
    this.isLoading = true;
    this.countryService.searchCountry( country ).subscribe(
        object => {
          this.countryName = object;
          this.isLoading = false;
        }
    )

    console.log('Desde COUNTRY page');

  }

}
