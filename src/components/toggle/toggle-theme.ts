import { UxTheme } from '@aurelia-ux/core';

export class UIFToggleTheme implements UxTheme {
	public themeKey: string = 'toggle';

	// TODO - default with css instead of here?
	public pillUncheckedBackgroundColor?: string;
	public pillCheckedBackgroundColor?: string;
	public pillCheckedHoveredBackgroundColor?: string;
	public pillCheckedDisabledBackgroundColor?: string;
	public thumbBackgroundColor?: string;
	public thumbCheckedBackgroundColor?: string;
	public thumbDisabledBackgroundColor?: string;
	public thumbCheckedDisabledBackgroundColor?: string;
	public pillBorderColor?: string;
	public pillBorderHoveredColor?: string;
	public pillBorderDisabledColor?: string;
	public textDisabledColor?: string;
}
