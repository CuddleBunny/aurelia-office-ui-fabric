import { UxTheme } from '@aurelia-ux/core';
import { customElement, processContent, ViewCompiler, ViewResources, BehaviorInstruction, inject, bindable } from 'aurelia-framework';
import { BaseComponent } from '../base-component';

@customElement('uif-link')
@inject(Element)
@processContent((_compiler: ViewCompiler, _resources: ViewResources, element: Element, _instruction: BehaviorInstruction) => {
	const template = document.createElement('template');
	template.setAttribute('replace-part', 'content');

	let child;
	while (child = element.firstChild) {
		element.removeChild(child);
		template.content.appendChild(child);
	}

	element.appendChild(template);

	return true;
})
export class UIFLink implements BaseComponent {
	theme?: UxTheme;

	@bindable protected disabled: boolean = false;

	@bindable href?: string;
}
