import { BaseComponent } from './../base-component';
import { bindable, customElement } from 'aurelia-framework';

@customElement('uif-label')
export class UIFLabel extends BaseComponent {
	@bindable protected disabled: boolean = false;
	@bindable protected required: boolean = false;
}
