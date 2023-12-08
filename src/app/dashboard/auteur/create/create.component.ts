import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Auteur } from '../auteur';
import { AuteurService } from '../auteur.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  isSubmitting = false;
  auteurs:Auteur = new Auteur();
  constructor(private auteurService:AuteurService, router:Router,private location:Location) {}
  
  ngOnInit(){

    }

    ajoutauteur = () => {
      if (this.isSubmitting) {
        return; // Prevent multiple submissions
      }
      if (!this.auteurs.nomauteur || !this.auteurs.email || !this.auteurs.numtel) {
        alert('Please fill in all required fields.');
        return;
      }
      this.isSubmitting = true;
  
      this.auteurService.create(this.auteurs).subscribe(
        (data) => {
          console.log(data);
          this.closeModal();
          alert('Editeur created successfully!');
          this.location.back();
        },
      );
    };

  openModal() {
    this.display = "block";
  }
  
  closeModal() {
    this.display = "none";
  }
}
