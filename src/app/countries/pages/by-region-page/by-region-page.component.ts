import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent implements OnInit{

  public regionName: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesServie: CountriesService ){}

  ngOnInit(): void {
    this.regionName = this.countriesServie.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesServie.cacheStore.byRegion.region
  }

  searchByRegion( region: Region ):void {

    this.selectedRegion = region;

    this.isLoading = true;
    this.countriesServie.searchRegion(region).subscribe(
      regions => {
        this.regionName = regions;
        this.isLoading = false;
      }
    )

  }
}
