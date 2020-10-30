import { NodeComponent } from './accordion/node/node.component';
import { AccordionComponent } from './accordion/accordion.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [
		CommonModule,
		IonicModule
	],
	declarations: [
		AccordionComponent,
		NodeComponent
	],
	exports: [
		AccordionComponent,
		NodeComponent
	],
})
export class ComponentsModule {}
