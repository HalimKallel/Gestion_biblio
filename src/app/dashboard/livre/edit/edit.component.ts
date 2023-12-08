// edit.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialite } from '../../specialite/specialite';
import { SpecialiteService } from '../../specialite/specialite.service';
import { Editeur } from '../../editeur/editeur';
import { EditeurService } from '../../editeur/editeur.service';
import { Auteur } from '../../auteur/auteur';
import { AuteurService } from '../../auteur/auteur.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() livreId: object;
  display = "none";
  livres: Livre = new Livre();  
  originalLivres: Livre = new Livre();  // Change "originalLivre" to "originalLivres"
  specialites!: Specialite[];
  maisoneditions!: Editeur[];
  auteurs!: Auteur[];

  constructor(
    private livreService: LivreService,
    private speserv: SpecialiteService,
    private maisedit: EditeurService,
    private autserv: AuteurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.livreId = params['livresId'];
      console.log('livresId:', this.livreId);
  
      // Now, fetch data based on this.livreId
      if (this.livreId) {
        this.livreService.find(this.livreId).subscribe(data => {
          console.log('API response:', data);
          this.livres = data;
          // Store the original values
          this.originalLivres = { ...this.livres };
        });
      }
    });
  
    // Load dropdown data
    this.loadSpecialite();
    this.loadMaisonEditeur();
    this.loadAuteur();
  }
  

  loadSpecialite() {
    return this.speserv.getAll().subscribe(
      data => this.specialites = data,
      error => console.log(error)
    );
  }

  loadMaisonEditeur() {
    return this.maisedit.getAll().subscribe(
      data => this.maisoneditions = data,
      error => console.log(error)
    );
  }
  loadAuteur() {
    return this.autserv.getAll().subscribe(
      data => this.auteurs = data,
      error => console.log(error)
    );
  }

  updateLivre() {
    if (
      this.livres.titre !== this.originalLivres.titre ||
      this.livres.annedition !== this.originalLivres.annedition ||
      this.livres.prix !== this.originalLivres.prix ||
      this.livres.qtestock !== this.originalLivres.qtestock ||
      this.livres.specialite !== this.originalLivres.specialite ||
      this.livres.maised !== this.originalLivres.maised ||
      this.livres.auteurs!== this.originalLivres.auteurs
    ) {
      if (confirm('Are you sure you want to update with changes?')) {
        this.livreService.update(this.livres._id, this.livres).subscribe((data) => {
          console.log(data);
          this.closeModal();
          this.router.navigate(['/livres']);
        });
      }
    } else {
      this.livreService.update(this.livres._id, this.livres).subscribe((data) => {
        console.log(data);
        this.closeModal();
        this.router.navigate(['/livres']);
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


