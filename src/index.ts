import { FrameworkConfiguration } from 'aurelia-framework';
import { UIFLabel } from './components/label/label';
import { UIFToggle } from './components/toggle/toggle';
import { UIFDesignProcessor } from './core/uif-design-processor';
import { UIFDesign } from './core/uif-design';

export function configure(config: FrameworkConfiguration): void {
	config.globalResources([
		UIFLabel,
		UIFToggle
	]);

	const dp: UIFDesignProcessor = config.container.get(UIFDesignProcessor);
	const design: UIFDesign = config.container.get(UIFDesign);

	dp.setDesignVariables(design);
	dp.setDesignWatches(design);
}
