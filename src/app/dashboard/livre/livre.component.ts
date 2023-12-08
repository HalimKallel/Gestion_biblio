import { Component, OnInit } from '@angular/core';
import { Livre } from './livre';
import { LivreService } from './livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit{
  livres: Livre[];
  constructor(public livreService: LivreService) { }

  ngOnInit():void{
    this.livreService.getAll().subscribe((data:Livre[])=>{this.livres=data;
    console.log(this.livres);
    })
  }
  deleteLivre(_id:object){
    this.livreService.delete(_id).subscribe(res => {
    this.livres = this.livres.filter(item => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
    
}