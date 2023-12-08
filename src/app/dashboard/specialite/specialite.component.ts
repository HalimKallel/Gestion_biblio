import { Component, OnInit } from '@angular/core';
import { Specialite } from './specialite';
import { SpecialiteService } from './specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit{
  specialites:Specialite[];

  constructor(private specService:SpecialiteService){}
  ngOnInit(): void { 
    this.specService.getAll().subscribe((data: Specialite[])=>{
    this.specialites = data;
    console.log(this.specialites); 
    })
    }
    
    deleteSpecialite(_id:object){
      this.specService.delete(_id).subscribe(res => {
      this.specialites = this.specialites.filter(item => item._id !== _id);
      console.log('Post deleted successfully!');
      })
    }
}
