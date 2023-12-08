import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  @Input() livreId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";

  livres:Livre=new Livre();
  constructor(private livserv:LivreService){}

  ngOnInit(){
    this.livserv.find(this.livreId).subscribe(data => {
    this.livres = data;
    });
  }

    openModal() {
      this.display = "block";
      }
    closeModal() {
      this.display = "none";
      }

}
