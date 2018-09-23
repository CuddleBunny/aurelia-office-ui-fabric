import { BaseComponent } from '../base-component';
import { customElement, bindable } from 'aurelia-framework';

@customElement('uif-toggle')
export class UIFToggle extends BaseComponent {
	@bindable protected disabled: boolean = false;
	@bindable protected checked: boolean = false;
	@bindable protected onText: string = '';
	@bindable protected offText: string = '';
	@bindable protected label: string | undefined;

	protected toggle(): void {
		this.checked = !this.checked;
	}
}
