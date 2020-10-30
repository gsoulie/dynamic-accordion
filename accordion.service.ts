import { INode, IRow, ITempNode } from './../interfaces/models.interface';
import { ToolsService } from './../../services/tools.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  nodeArray: ITempNode[] = [];
  finalArray: INode[] = [];
  constructor(private tools: ToolsService) { }

  /**
   * Parcours du tableau initial
   * @param myArray 
   */
  mainStep(myArray: any[]) {
    myArray.forEach((row: IRow) => {
      this.stepOne(row);
    });
    this.nodeArray.sort(this.tools.predicateBy('parent'));  // trier le tableau par path
    return this.stepTwo();
  }

  /**
   * Créer un tableau intermédiaire qui contient des couples {parent; leaf}
   * @param row 
   */
  stepOne(row: IRow) {
    let splitted = row.label.split('|');  // découpage du label
    const size = splitted.length;
    
    // la ligne contient plus de 2 niveaux de path ?
    if (size > 1) {
      // Oui
      const leaf = splitted[size - 1];
      const parent = splitted[size - 2];
      const newNode: ITempNode = {parent, leaf, count: row.count};
      if (!this.nodeExists(newNode)) { this.nodeArray.push(newNode); }
      splitted.pop(); // suppression de la feuille pour faire une récursion sur le reste du path
      row.label = splitted.join('|');
      this.stepOne(row);
    } else {
      // Non, un seul niveau ?
      if (size > 0) {
        // Oui, on est en présence d'une racine
        const leaf = splitted[0];
        const parent = 'root';
        const newNode: ITempNode = {parent, leaf, count: row.count};
        if (!this.nodeExists(newNode)) { this.nodeArray.push(newNode); }
      }
    }
  }

  /**
   * Tester si le couple {parent; leaf} existe déjà dans le tableau intermédiaire
   * @param node 
   */
  nodeExists(node: ITempNode): boolean {
    const index = this.nodeArray.find((elt: ITempNode) => elt.parent === node.parent && elt.leaf === node.leaf);
    return index ? true : false;
  }

  /**
   * Générer les racines avec enfants vides puis
   * boucler sur les racines pour chercher les enfants
   */
  stepTwo(): any[] {
    // générer les racines avec des enfants vides
    const root = this.nodeArray.filter((elt: ITempNode) => elt.parent === 'root'); // chercher les noeuds 'root'
    root.forEach((r: ITempNode) => {
      // créer les noeuds racines
      const rootNode: INode = {parent: r.leaf, toggle: false, checked: false, count: r.count, children: []};
      this.finalArray.push(rootNode);

      // supprimer les racines du tableau de noeud
      const index = this.nodeArray.findIndex((elt: ITempNode) => elt.parent === 'root' && elt.leaf === r.leaf);
      if (index >= 0) {
        this.nodeArray.splice(index, 1);
      }
    });

    // boucler sur les racines et ajouter les enfants pour chaque sous-niveaux
    this.finalArray.forEach((parent: INode) => {
      this.listChildren(parent);
    });
    return this.finalArray;
  }

  /**
   * Lister les enfants d'un parent et les pousser dans la propriété children
   * @param parent: {parent; children}
   */
  listChildren(parent: INode) {
    const children = this.nodeArray.filter((elt: ITempNode) => elt.parent === parent.parent);

    children.forEach((child: ITempNode) => {
      const newChild: INode = {parent: child.leaf, toggle: false, checked: false, count: child.count, children: []};
      parent.children.push(newChild); // ajouter l'enfant dans son parent
      this.listChildren(newChild);  // récursion sur l'enfant pour chercher ses petits-enfants etc...
    });
  }
}
