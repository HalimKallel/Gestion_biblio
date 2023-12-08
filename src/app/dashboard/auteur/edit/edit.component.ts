// edit.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Auteur } from '../auteur';
import { AuteurService } from '../auteur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() auteurId: object;
  display = "none";
  auteurs: Auteur = new Auteur();
  originalAuteur: Auteur = new Auteur();

  constructor(private auteurService: AuteurService, private route: ActivatedRoute, private router: Router) {}

ngOnInit() {
  // Extract auteurId from the route parameters
  this.route.params.subscribe(params => {
    this.auteurId = params['auteursId'];
    console.log('auteurId:', this.auteurId);

    // Now, fetch data based on this.auteurId
    if (this.auteurId) {
      this.auteurService.find(this.auteurId).subscribe(data => {
        console.log('API response:', data);
        this.auteurs = data;
        // Store the original values
        this.originalAuteur = { ...this.auteurs };
      });
    }
  });
}


updateauteur() {
  // Check if the form values have changed
  if (
    this.auteurs.nomauteur !== this.originalAuteur.nomauteur ||
    this.auteurs.email !== this.originalAuteur.email ||
    this.auteurs.numtel !== this.originalAuteur.numtel
  ) {
    // Display an alert about changes
    if (confirm('Are you sure you want to update with changes?')) {
      // User clicked OK, proceed with the update
      this.auteurService.update(this.auteurs._id, this.auteurs).subscribe((data) => {
        console.log(data);
        this.closeModal();
        // Navigate back to the Auteur list after updating
        this.router.navigate(['/auteurs']);
      });
    }
  } else {
    // No changes, proceed with the update without displaying an alert
    this.auteurService.update(this.auteurs._id, this.auteurs).subscribe((data) => {
      console.log(data);
      this.closeModal();
      // Navigate back to the Auteur list after updating
      this.router.navigate(['/auteurs']);
    });
  }
}

  openModal() {
    this.display = "block";
  }

  closeModal() {
    this.display = "none";
  }
}
