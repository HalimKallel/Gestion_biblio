export class Livre {
    _id:object;
    isbn: number;
    titre: String;
    annedition: number;
    prix: number;
    qtestock: number;
    couverture: String;
    specialite: { _id: string, nomspecialite: string };
    maised: { _id: string, maisonedit: string };
    auteurs: { nomauteur: string }[];
}
