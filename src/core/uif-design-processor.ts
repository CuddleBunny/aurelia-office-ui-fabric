import { UIFDesign } from './uif-design';
import { inject, ObserverLocator } from 'aurelia-framework';
import { GlobalStyleEngine } from '@aurelia-ux/core';

@inject(ObserverLocator, GlobalStyleEngine)
export class UIFDesignProcessor {
	constructor(
		private observerLocator: ObserverLocator,
		private globalStyleEngine: GlobalStyleEngine
	) {}

	public setDesignVariables(design: UIFDesign) {
		this.globalStyleEngine.addOrUpdateGlobalStyle(
			`aurelia-ux design styles`,
			this.buildInnerHTML(design),
			':root'
		);
	}

	public setDesignWatches(design: UIFDesign) {
		for (const key in design) {
			if(key == 'type') continue;

			if (design.hasOwnProperty(key)) {
				this.observerLocator.getObserver(design, key).subscribe(() => {
					this.globalStyleEngine.addOrUpdateGlobalStyle(
						`aurelia-ux design styles`,
						this.buildInnerHTML(design),
						':root'
					);
				});
			}
		}
	}

	protected buildInnerHTML(design: UIFDesign) {
		let designInnerHtml = '';

		for (const key in design) {
			if(key == 'type') continue;

			if (design.hasOwnProperty(key)) {
				designInnerHtml += `  --ux-design--${kebabCase(key)}: ${
					(design as any)[key]
				};\r\n`;
			}
		}

		return designInnerHtml;
	}
}

function kebabCase(value: string) {
	value = value.charAt(0).toLowerCase() + value.slice(1);
	return value.replace(/([A-Z])/g, match => `-${match[0].toLowerCase()}`);
}
