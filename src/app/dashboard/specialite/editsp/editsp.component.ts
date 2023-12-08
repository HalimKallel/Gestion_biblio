// editsp.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Specialite } from '../specialite';
import { SpecialiteService } from '../specialite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editsp',
  templateUrl: './editsp.component.html',
  styleUrls: ['./editsp.component.css']
})
export class EditspComponent implements OnInit {

  @Input() specialiteId: object;
  display = "none";
  specialites: Specialite = new Specialite();
  originalSpecialite: Specialite = new Specialite();

  constructor(private specService: SpecialiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Extract specialiteId from the route parameters
    this.route.params.subscribe(params => {
      this.specialiteId = params['specialitesId'];
      console.log('specialitesId:', this.specialiteId);

      // Now, fetch data based on this.specialiteId
      if (this.specialiteId) {
        this.specService.find(this.specialiteId).subscribe(data => {
          console.log('API response:', data);
          this.specialites = data;
          // Store the original values
          this.originalSpecialite = { ...this.specialites };
        });
      }
    });
  }

  updatespecialite() {
    // Check if the form values have changed
    if (this.specialites.nomspecialite !== this.originalSpecialite.nomspecialite) {
      // Display an alert about changes
      if (confirm('Are you sure you want to update with changes?')) {
        // User clicked OK, proceed with the update
        this.specService.update(this.specialites._id, this.specialites).subscribe((data) => {
          console.log(data);
          this.closeModal();
          // Navigate back to the Specialite list after updating
          this.router.navigate(['/specialites']);
        });
      }
    } else {
      // No changes, proceed with the update without displaying an alert
      this.specService.update(this.specialites._id, this.specialites).subscribe((data) => {
        console.log(data);
        this.closeModal();
        // Navigate back to the Specialite list after updating
        this.router.navigate(['/specialites']);
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
