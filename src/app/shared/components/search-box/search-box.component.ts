import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer = new Subject<string>;
  //  Subject es un tipo especial de obserbable (crear obsrvable manualmente)
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500),
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  // Destruir componente
  ngOnDestroy(): void {
    console.log('Destriudo!');
    this.debouncerSuscription?.unsubscribe();
  }

  // Metodo al dar enter
  enterValue( value: string ):void {
    this.onValue.emit( value );
  }

  // Debounce
  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }

}
