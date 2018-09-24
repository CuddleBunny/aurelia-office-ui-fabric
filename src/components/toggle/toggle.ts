import { UIFToggleTheme } from './toggle-theme';
import { BaseComponent } from '../base-component';
import { customElement, bindable, inject } from 'aurelia-framework';
import { StyleEngine } from '@aurelia-ux/core';

@customElement('uif-toggle')
@inject(Element, StyleEngine, UIFToggleTheme)
export class UIFToggle implements BaseComponent {
	@bindable public theme: UIFToggleTheme;

	@bindable protected disabled: boolean = false;
	@bindable protected checked: boolean = false;
	@bindable protected onText: string = '';
	@bindable protected offText: string = '';
	@bindable protected label: string | undefined;

	constructor(public element: HTMLElement, private styleEngine: StyleEngine, theme: UIFToggleTheme) {
		this.theme = theme;
	}

	protected toggle(): void {
		this.checked = !this.checked;
	}

	public bind() {
		if(this.theme != null)
			this.themeChanged(this.theme);
	}

	public themeChanged(newValue: any) {
		this.styleEngine.applyTheme(newValue, this.element);
	}
}
