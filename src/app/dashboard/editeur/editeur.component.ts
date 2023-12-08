import { Component, OnInit } from '@angular/core';
import { Editeur } from './editeur';
import { EditeurService } from './editeur.service';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent implements OnInit{
  editeurs:Editeur[];
  editeurId:object;

  constructor(private editService:EditeurService){}
  ngOnInit(): void { 
    this.editService.getAll().subscribe((data: Editeur[])=>{
    this.editeurs = data;
    console.log(this.editeurs); 
    })
    }
    
    deleteEditeur(_id:object){
      this.editService.delete(_id).subscribe(res => {
      this.editeurs = this.editeurs.filter(item => item._id !== _id);
      console.log('Post deleted successfully!');
      })
    }
}
