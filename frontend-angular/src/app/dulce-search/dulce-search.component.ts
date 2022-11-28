import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Dulce} from "../Dulce";
import {DulceService} from "../dulce.service";

@Component({
  selector: 'app-dulce-search',
  templateUrl: './dulce-search.component.html',
  styleUrls: ['./dulce-search.component.scss']
})
export class DulceSearchComponent implements OnInit {

  dulces$!: Observable<Dulce[]>;
  private searchTerms = new Subject<string>();
  constructor(private dulceService: DulceService){}

  search(id: string): void{
    this.searchTerms.next(id);
  }

  ngOnInit(): void {
    this.dulces$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((id: string)=> this.dulceService.searchDulces(id))
    )
  }
}
