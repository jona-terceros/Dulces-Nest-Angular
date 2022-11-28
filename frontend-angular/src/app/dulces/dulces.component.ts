import { Component, OnInit } from '@angular/core';
import {Dulce} from "../Dulce";
import {DulceService} from "../dulce.service";

@Component({
  selector: 'app-dulces',
  templateUrl: './dulces.component.html',
  styleUrls: ['./dulces.component.scss']
})
export class DulcesComponent implements OnInit {
  dulces: Dulce[]=[];
  constructor(private dulceservice: DulceService) { }

  ngOnInit(): void {
    this.getDulces();
  }
  getDulces(): void{
    this.dulceservice.getDulces()
      .subscribe(dulces => this.dulces = dulces);
  }
  add(nombre : string, marca : string, sabor : string, cantidad : string): void{
    let dulce= {} as Dulce;
    dulce.nombre=nombre.trim();
    dulce.marca=marca.trim();
    dulce.sabor=sabor.trim();
    dulce.cantidad=+(cantidad.trim());
    let nom =dulce.nombre.trim();
    if(!nom){return}
    this.dulceservice.addDulce(dulce)
      .subscribe(dulce => {
        this.dulces.push(dulce);
      });
  }
  delete(dulce: Dulce): void{
    this.dulces = this.dulces.filter(v => v !== dulce);
    this.dulceservice.deleteDulces(dulce.id).subscribe();
  }

}
