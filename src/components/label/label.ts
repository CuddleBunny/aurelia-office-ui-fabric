import { UxTheme } from '@aurelia-ux/core';
import { BaseComponent } from './../base-component';
import { bindable, customElement } from 'aurelia-framework';

@customElement('uif-label')
export class UIFLabel implements BaseComponent {
	@bindable theme?: UxTheme;

	@bindable protected disabled: boolean = false;
	@bindable protected required: boolean = false;
}
