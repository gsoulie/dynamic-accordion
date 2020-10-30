import { INode } from './../../../shared/interfaces/models.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {}
  toggle(item: INode, event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    item.toggle = !item.toggle;
  }

  checkItem(item: INode, event) {
    item.checked = event.target.checked;
    // cocher tous les enfants du noeud
    this.checkAllChildren(item, event.target.checked);
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }

  /**
   * Parcourir les enfants d'un noeud et affecter la valeur checked
   * @param item : noeud
   * @param checkState : état de la coche
   */
  checkAllChildren(item: INode, checkState: boolean) {
    item.children.forEach(child => {
      child.checked = checkState;
      this.checkAllChildren(child, checkState);
    });
  }

}
