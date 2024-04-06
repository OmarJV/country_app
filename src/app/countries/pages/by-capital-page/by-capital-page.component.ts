import { Component, OnInit, } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent implements OnInit {

  public countries:   Country[] = [];
  public isLoading:   boolean = false;
  public initialValue: string = '';

  constructor( private countriesServie: CountriesService ){}

  ngOnInit(): void {
    this.countries    = this.countriesServie.cacheStore.byCapital.countries
    this.initialValue = this.countriesServie.cacheStore.byCapital.term
  }

  searchByCapital(term: string ): void {

    this.isLoading = true;

    this.countriesServie.searchCapital( term ).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    );

    // console.log( 'Desde By capítal Page');

  }

}
