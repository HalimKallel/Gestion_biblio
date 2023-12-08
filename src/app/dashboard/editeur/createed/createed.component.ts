import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-createed',
  templateUrl: './createed.component.html',
  styleUrls: ['./createed.component.css']
})
export class CreateedComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('editeurForm') editeurForm!: NgForm;
  display = "none";
  editeurs: Editeur = new Editeur();
  isSubmitting = false;

  constructor(private editService: EditeurService, private router: Router, private location:Location) {}

  ngOnInit() {}

  ajoutediteur = () => {
    if (this.isSubmitting) {
      return; // Prevent multiple submissions
    }
    if (!this.editeurs.maisonedit || !this.editeurs.siteweb || !this.editeurs.email) {
      alert('Please fill in all required fields.');
      return;
    }
    this.isSubmitting = true;

    this.editService.create(this.editeurs).subscribe(
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
