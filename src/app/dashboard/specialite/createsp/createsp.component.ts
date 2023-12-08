import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpecialiteService } from '../specialite.service';
import { Specialite } from '../specialite';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-createsp',
  templateUrl: './createsp.component.html',
  styleUrls: ['./createsp.component.css']
})
export class CreatespComponent implements OnInit{
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  isSubmitting = false;

  specialites:Specialite=new Specialite();
  constructor(private specService:SpecialiteService, router:Router, private location:Location){}

ngOnInit(){

}

ajoutspecialite = () => {
  if (this.isSubmitting) {
    return; // Prevent multiple submissions
  }
  if (!this.specialites.nomspecialite) {
    alert('Please fill in all required fields.');
    return;
  }
  this.isSubmitting = true;

  this.specService.create(this.specialites).subscribe(
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
