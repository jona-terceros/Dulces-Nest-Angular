import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DulceService} from "../dulce.service";
import {Dulce} from "../Dulce";
import { Location } from '@angular/common';

@Component({
  selector: 'app-dulce-detail',
  templateUrl: './dulces-detail.component.html',
  styleUrls: ['./dulces-detail.component.scss']
})
export class DulcesDetailComponent implements OnInit {
  dulce: Dulce | undefined;
  constructor(
    private route: ActivatedRoute,
    private dulceService: DulceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDulce()
  }
  getDulce(): void {
      const id= parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.dulceService.getDulce(id)
      .subscribe(dulce=>this.dulce = dulce);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    if (this.dulce) {
      this.dulceService.updateDulces(this.dulce.id,this.dulce)
        .subscribe(() => this.goBack());
    }
  }
}
