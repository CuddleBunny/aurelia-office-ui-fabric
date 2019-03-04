import { UIFTextFieldTheme } from './text-field-theme';
import { BaseComponent } from '../base-component';
import { customElement, bindable, inject } from 'aurelia-framework';
import { StyleEngine } from '@aurelia-ux/core';

@customElement('uif-toggle')
@inject(Element, StyleEngine, UIFTextFieldTheme)
export class UIFToggle implements BaseComponent {
	@bindable public theme: UIFTextFieldTheme;

	@bindable protected disabled: boolean = false;
	@bindable protected label: string | undefined;

	constructor(public element: HTMLElement, private styleEngine: StyleEngine, theme: UIFTextFieldTheme) {
		this.theme = theme;
	}

	// TODO: Share between components?
	public bind() {
		if(this.theme != null)
			this.themeChanged(this.theme);
	}

	public themeChanged(newValue: any) {
		this.styleEngine.applyTheme(newValue, this.element);
	}
}
