import { DefaultPalette } from './uif-palette';

export class UIFDesign {
	public type: string = 'uif';

	// Base Slots
	bodyBackgroundColor: string = DefaultPalette.white;
	bodyStandoutBackgroundColor: string = DefaultPalette.white;
	bodyFrameBackgroundColor: string = DefaultPalette.white;
	bodyFrameDividerColor: string = DefaultPalette.neutralLight;
	bodyTextColor: string = DefaultPalette.neutralPrimary;
	bodyTextCheckedColor: string = DefaultPalette.black;
	bodySubtextColor: string = DefaultPalette.neutralSecondary;
	bodyDividerColor: string = DefaultPalette.neutralLight;

	actionLinkColor: string = DefaultPalette.neutralPrimary;
	actionLinkHoveredColor: string = DefaultPalette.neutralDark;
	linkColor: string = DefaultPalette.themePrimary;
	linkHoveredColor: string = DefaultPalette.themeDarker;

	disabledBackgroundColor: string = DefaultPalette.neutralLighter;
	disabledTextColor: string = DefaultPalette.neutralTertiary;
	disabledBodyTextColor: string = DefaultPalette.neutralTertiaryAlt;
	disabledSubtextColor: string = DefaultPalette.neutralQuaternaryAlt;

	focusBorderColor: string = DefaultPalette.black;
	variantBorderColor: string = DefaultPalette.neutralLight;
	variantBorderHoveredColor: string = DefaultPalette.neutralTertiary;
	defaultStateBackgroundColor: string = DefaultPalette.neutralLight;

	errorTextColor: string = DefaultPalette.redDark;
	warningTextColor: string = DefaultPalette.neutralPrimary;
	errorBackgroundColor: string = 'rgba(232,17,35,.2)';
	blockingBackgroundColor: string = 'rgba(234,67,0,.2)';
	warningBackgroundColor: string = 'rgba(255,185,0,.2)';
	warningHighlightColor: string = DefaultPalette.yellow;
	successBackgroundColor: string = 'rgba(186,216,10,.2)';

	// Input Controls
	inputBorderColor: string = DefaultPalette.neutralTertiary;
	smallInputBorderColor: string = DefaultPalette.neutralSecondary;
	inputBorderHoveredColor: string = DefaultPalette.neutralDark;
	inputBackgroundColor: string = DefaultPalette.white;
	inputBackgroundCheckedColor: string = DefaultPalette.themePrimary;
	inputBackgroundCheckedHoveredColor: string = DefaultPalette.themeDarkAlt;
	inputForegroundCheckedColor: string = DefaultPalette.white;
	inputFocusBorderAltColor: string = DefaultPalette.themePrimary;
	inputPlaceholderTextColor: string = DefaultPalette.neutralSecondary;

	// TODO : Do these need to be here? Should they belong to the components themselves?

	// // Buttons
	// buttonBackgroundColor: string = DefaultPalette.neutralLight;
	// buttonBackgroundHoveredColor: string = DefaultPalette.neutralQuaternaryAlt;
	// buttonBackgroundCheckedColor: string = DefaultPalette.neutralTertiaryAlt;
	// buttonBackgroundCheckedHoveredColor: string = DefaultPalette.neutralLight;
	// buttonBackgroundPressedColor: string = DefaultPalette.neutralQuaternary;
	// buttonBackgroundDisabledColor: string = DefaultPalette.neutralLight;
	// buttonBorderColor: string = 'transparent';
	// buttonTextColor: string = DefaultPalette.neutralPrimary;
	// buttonTextHoveredColor: string = DefaultPalette.neutralDark;
	// buttonTextCheckedColor: string = DefaultPalette.neutralDark;
	// buttonTextCheckedHoveredColor: string = DefaultPalette.black;
	// buttonTextPressedColor: string = DefaultPalette.neutralDark;
	// buttonBorderDisabledColor: string = DefaultPalette.neutralSecondaryAlt;
	// buttonTextDisabledColor: string = DefaultPalette.neutralTertiary;
	// primaryButtonBackgroundColor: string = DefaultPalette.themePrimary;
	// primaryButtonBackgroundHoveredColor: string = DefaultPalette.themeDarkAlt;
	// primaryButtonBackgroundPressedColor: string = DefaultPalette.themeDark;
	// primaryButtonBorderColor: string = 'transparent';
	// primaryButtonTextColor: string = DefaultPalette.white;
	// primarybuttonTextHoveredColor: string = DefaultPalette.white;
	// primaryButtonTextPressedColor: string = DefaultPalette.white;

	// // Menus
	// menuBackgroundColor: string = DefaultPalette.white;
	// menuDividerColor: string = DefaultPalette.neutralTertiaryAlt;
	// menuIconColor: string = DefaultPalette.themePrimary;
	// menuHeaderColor: string = DefaultPalette.themePrimary;
	// menuItemBackgroundHoveredColor: string = DefaultPalette.neutralLighter;
	// menuItemBackgroundPressedColor: string = DefaultPalette.neutralLight;
	// menuItemTextColor: string = DefaultPalette.neutralPrimary;
	// menuItemTextHoveredColor: string = DefaultPalette.neutralDark;

	// // Lists
	// listBackgroundColor: string = DefaultPalette.white;
	// listTextColor: string = DefaultPalette.neutralPrimary;
	// listItemBackgroundHoveredColor: string = DefaultPalette.neutralLighterAlt;
	// listItemBackgroundCheckedColor: string = DefaultPalette.neutralLight;
	// listItemBackgroundCheckedHoveredColor: string = DefaultPalette.neutralQuaternary;
	// listHeaderBackgroundHoveredColor: string = DefaultPalette.neutralLighter;
	// listHeaderBackgroundPressedColor: string = DefaultPalette.neutralLight;
}
