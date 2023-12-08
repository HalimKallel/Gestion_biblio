import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';
import { Specialite } from '../../specialite/specialite';
import { SpecialiteService } from '../../specialite/specialite.service';
import { Router } from '@angular/router';
import { EditeurService } from '../../editeur/editeur.service';
import { Editeur } from '../../editeur/editeur';
import { Location } from '@angular/common';
import { Auteur } from '../../auteur/auteur';
import { AuteurService } from '../../auteur/auteur.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  livres:Livre=new Livre()
  specialites!:Specialite[];
  maisoneditions!:Editeur[];
  auteurs!:Auteur[];
  isSubmitting = false;

  constructor(private livreser:LivreService, private speserv:SpecialiteService,private autser:AuteurService, private maisedit:EditeurService, router:Router, private location:Location) {}

  ngOnInit(){
    this.loadspecialite();
    this.loadmaisonediteur();
    this.loadauteur();
    }
  loadspecialite(){
    return this.speserv.getAll().subscribe(data=>
    this.specialites=data),
    (error:any)=>console.log(error)
  }

  loadmaisonediteur(){
    return this.maisedit.getAll().subscribe(data=>
    this.maisoneditions=data),
    (error:any)=>console.log(error)
  }
  loadauteur(){
    return this.autser.getAll().subscribe(data=>
    this.auteurs=data),
    (error:any)=>console.log(error)
  }
  ajoutlivre = () => {
    if (this.isSubmitting) {
      return; // Prevent multiple submissions
    }
    if (!this.livres.isbn || !this.livres.titre || !this.livres.annedition || !this.livres.prix || !this.livres.couverture || !this.livres.specialite || !this.livres.maised || !this.livres.auteurs) {
      alert('Please fill in all required fields.');
      return;
    }
    this.isSubmitting = true;

    this.livreser.create(this.livres).subscribe(
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
