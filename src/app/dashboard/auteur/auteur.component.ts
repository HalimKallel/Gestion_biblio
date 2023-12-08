import { Component, OnInit } from '@angular/core';
import { Auteur } from './auteur';
import { AuteurService } from './auteur.service';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit{

  auteurs:Auteur[];
  auteurId:object;
  constructor (private auteurService:AuteurService) {}

  ngOnInit(): void { 
    this.auteurService.getAll().subscribe((data: Auteur[])=>{
    this.auteurs = data;
    console.log(this.auteurs); 
    })
    }
    
    deleteAuteur(_id:object){
      this.auteurService.delete(_id).subscribe(res => {
      this.auteurs = this.auteurs.filter(item => item._id !== _id);
      console.log('Post deleted successfully!');
      })
    }
}
