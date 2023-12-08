import { Component, Input, OnInit } from '@angular/core';
import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edited',
  templateUrl: './edited.component.html',
  styleUrls: ['./edited.component.css']
})
export class EditedComponent implements OnInit{
  @Input() editeurId: object;
  display = "none";
  editeurs: Editeur = new Editeur();
  originalEditeur: Editeur = new Editeur();

  constructor(private editeurService: EditeurService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    // Extract editeurId from the route parameters
    this.route.params.subscribe(params => {
      this.editeurId = params['editeursId'];
      console.log('editeursId:', this.editeurId);

      // Now, fetch data based on this.editeurId
      if (this.editeurId) {
        this.editeurService.find(this.editeurId).subscribe(data => {
          console.log('API response:', data);
          this.editeurs = data;
          // Store the original values
          this.originalEditeur = { ...this.editeurs };
        });
      }
    });
  }

  updateEditeur() {
    // Check if the form values have changed
    if (
      this.editeurs.maisonedit !== this.originalEditeur.maisonedit ||
      this.editeurs.siteweb !== this.originalEditeur.siteweb ||
      this.editeurs.email !== this.originalEditeur.email
    ) {
      // Display an alert about changes
      if (confirm('Are you sure you want to update with changes?')) {
        // User clicked OK, proceed with the update
        this.editeurService.update(this.editeurs._id, this.editeurs).subscribe((data) => {
          console.log(data);
          this.closeModal();
          // Navigate back to the Editeur list after updating
          this.router.navigate(['/editeurs']);
        });
      }
    } else {
      // No changes, proceed with the update without displaying an alert
      this.editeurService.update(this.editeurs._id, this.editeurs).subscribe((data) => {
        console.log(data);
        this.closeModal();
        // Navigate back to the Editeur list after updating
        this.router.navigate(['/editeurs']);
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

