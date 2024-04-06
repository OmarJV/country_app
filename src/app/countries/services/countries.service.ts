import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  // Persistencia al cambiar de pantallas
  public cacheStore: CacheStore = {
    byCapital:    { term: '', countries: []},
    byCountries:  { term: '', countries: []},
    byRegion:     { region: '', countries: []},
  }

  constructor(private httpClient: HttpClient ) {
    this.loadFromLocalStorage();
  }

    // Almacenamiento el localStorage ()
  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
  }

  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }


  private getCountriesRequest( url:string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError( ( ) => of([])),
      delay(600),
    );
  }


  searchAlphaCode( code: string ): Observable<Country | null > {
    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.httpClient.get< Country[] >(url)
    .pipe(
      map( countries => countries.length > 0? countries[0] : null ),
      catchError( () => of(null))
    );

  }


  searchCapital( capital: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ capital }`;

    return this.getCountriesRequest(url)  // Persisntencia al cambiar de pantallas
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term: capital, countries: countries}),
      tap( () => this.saveToLocalStorage() ),
    )
    // return this.httpClient.get<Country[] >( url )
    // .pipe(
    //   catchError( error => of([]))

    //   // catchError( error => {
    //   //   console.log(error.error);
    //   //   // Rrtorna un arreglo vacio
    //   //   return of( [] )
    //   // })
    // );
  }

  searchCountry( country: string): Observable< Country[] > {
    const url = `${this.apiUrl}/name/${country}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term: country, countries: countries}),
      tap( () => this.saveToLocalStorage() ),
    );
  }

  searchRegion( region: Region): Observable< Country[] > {
    const url = `${this.apiUrl}/region/${region} `
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region: region, countries: countries}),
      tap( () => this.saveToLocalStorage() ),
    );
  }

}

