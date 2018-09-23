import { FrameworkConfiguration } from 'aurelia-framework';
import { UIFLabel } from './components/label/label';
import { UIFToggle } from './components/toggle/toggle';

export function configure(config: FrameworkConfiguration): void {
	config.globalResources([
		UIFLabel,
		UIFToggle
	]);
}
