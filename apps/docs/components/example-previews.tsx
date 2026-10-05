"use client";

import { lazy, Suspense } from "react";

const examples = {
  "base-accordion-basic": lazy(
    () => import("../examples/base-accordion-basic"),
  ),
  "base-accordion-borders": lazy(
    () => import("../examples/base-accordion-borders"),
  ),
  "base-accordion-card": lazy(() => import("../examples/base-accordion-card")),
  "base-accordion-demo": lazy(() => import("../examples/base-accordion-demo")),
  "base-accordion-disabled": lazy(
    () => import("../examples/base-accordion-disabled"),
  ),
  "base-accordion-multiple": lazy(
    () => import("../examples/base-accordion-multiple"),
  ),
  "base-accordion-rtl": lazy(() => import("../examples/base-accordion-rtl")),
  "base-alert-action": lazy(() => import("../examples/base-alert-action")),
  "base-alert-basic": lazy(() => import("../examples/base-alert-basic")),
  "base-alert-colors": lazy(() => import("../examples/base-alert-colors")),
  "base-alert-demo": lazy(() => import("../examples/base-alert-demo")),
  "base-alert-destructive": lazy(
    () => import("../examples/base-alert-destructive"),
  ),
  "base-alert-dialog-basic": lazy(
    () => import("../examples/base-alert-dialog-basic"),
  ),
  "base-alert-dialog-demo": lazy(
    () => import("../examples/base-alert-dialog-demo"),
  ),
  "base-alert-dialog-destructive": lazy(
    () => import("../examples/base-alert-dialog-destructive"),
  ),
  "base-alert-dialog-media": lazy(
    () => import("../examples/base-alert-dialog-media"),
  ),
  "base-alert-dialog-rtl": lazy(
    () => import("../examples/base-alert-dialog-rtl"),
  ),
  "base-alert-dialog-small-media": lazy(
    () => import("../examples/base-alert-dialog-small-media"),
  ),
  "base-alert-dialog-small": lazy(
    () => import("../examples/base-alert-dialog-small"),
  ),
  "base-alert-rtl": lazy(() => import("../examples/base-alert-rtl")),
  "base-aspect-ratio-demo": lazy(
    () => import("../examples/base-aspect-ratio-demo"),
  ),
  "base-aspect-ratio-portrait": lazy(
    () => import("../examples/base-aspect-ratio-portrait"),
  ),
  "base-aspect-ratio-rtl": lazy(
    () => import("../examples/base-aspect-ratio-rtl"),
  ),
  "base-aspect-ratio-square": lazy(
    () => import("../examples/base-aspect-ratio-square"),
  ),
  "base-attachment-demo": lazy(
    () => import("../examples/base-attachment-demo"),
  ),
  "base-attachment-group": lazy(
    () => import("../examples/base-attachment-group"),
  ),
  "base-attachment-image": lazy(
    () => import("../examples/base-attachment-image"),
  ),
  "base-attachment-sizes": lazy(
    () => import("../examples/base-attachment-sizes"),
  ),
  "base-attachment-states": lazy(
    () => import("../examples/base-attachment-states"),
  ),
  "base-attachment-trigger": lazy(
    () => import("../examples/base-attachment-trigger"),
  ),
  "base-avatar-badge-icon": lazy(
    () => import("../examples/base-avatar-badge-icon"),
  ),
  "base-avatar-badge": lazy(() => import("../examples/base-avatar-badge")),
  "base-avatar-basic": lazy(() => import("../examples/base-avatar-basic")),
  "base-avatar-demo": lazy(() => import("../examples/base-avatar-demo")),
  "base-avatar-dropdown": lazy(
    () => import("../examples/base-avatar-dropdown"),
  ),
  "base-avatar-group-count-icon": lazy(
    () => import("../examples/base-avatar-group-count-icon"),
  ),
  "base-avatar-group-count": lazy(
    () => import("../examples/base-avatar-group-count"),
  ),
  "base-avatar-group": lazy(() => import("../examples/base-avatar-group")),
  "base-avatar-rtl": lazy(() => import("../examples/base-avatar-rtl")),
  "base-avatar-size": lazy(() => import("../examples/base-avatar-size")),
  "base-badge-colors": lazy(() => import("../examples/base-badge-colors")),
  "base-badge-demo": lazy(() => import("../examples/base-badge-demo")),
  "base-badge-icon": lazy(() => import("../examples/base-badge-icon")),
  "base-badge-link": lazy(() => import("../examples/base-badge-link")),
  "base-badge-rtl": lazy(() => import("../examples/base-badge-rtl")),
  "base-badge-spinner": lazy(() => import("../examples/base-badge-spinner")),
  "base-badge-variants": lazy(() => import("../examples/base-badge-variants")),
  "base-breadcrumb-basic": lazy(
    () => import("../examples/base-breadcrumb-basic"),
  ),
  "base-breadcrumb-demo": lazy(
    () => import("../examples/base-breadcrumb-demo"),
  ),
  "base-breadcrumb-dropdown": lazy(
    () => import("../examples/base-breadcrumb-dropdown"),
  ),
  "base-breadcrumb-ellipsis": lazy(
    () => import("../examples/base-breadcrumb-ellipsis"),
  ),
  "base-breadcrumb-link": lazy(
    () => import("../examples/base-breadcrumb-link"),
  ),
  "base-breadcrumb-rtl": lazy(() => import("../examples/base-breadcrumb-rtl")),
  "base-breadcrumb-separator": lazy(
    () => import("../examples/base-breadcrumb-separator"),
  ),
  "base-bubble-alignment": lazy(
    () => import("../examples/base-bubble-alignment"),
  ),
  "base-bubble-collapsible": lazy(
    () => import("../examples/base-bubble-collapsible"),
  ),
  "base-bubble-demo": lazy(() => import("../examples/base-bubble-demo")),
  "base-bubble-group-demo": lazy(
    () => import("../examples/base-bubble-group-demo"),
  ),
  "base-bubble-link-button": lazy(
    () => import("../examples/base-bubble-link-button"),
  ),
  "base-bubble-popover": lazy(() => import("../examples/base-bubble-popover")),
  "base-bubble-reactions": lazy(
    () => import("../examples/base-bubble-reactions"),
  ),
  "base-bubble-tooltip": lazy(() => import("../examples/base-bubble-tooltip")),
  "base-bubble-variants": lazy(
    () => import("../examples/base-bubble-variants"),
  ),
  "base-button-default": lazy(() => import("../examples/base-button-default")),
  "base-button-demo": lazy(() => import("../examples/base-button-demo")),
  "base-button-destructive": lazy(
    () => import("../examples/base-button-destructive"),
  ),
  "base-button-ghost": lazy(() => import("../examples/base-button-ghost")),
  "base-button-group-demo": lazy(
    () => import("../examples/base-button-group-demo"),
  ),
  "base-button-group-dropdown": lazy(
    () => import("../examples/base-button-group-dropdown"),
  ),
  "base-button-group-input-group": lazy(
    () => import("../examples/base-button-group-input-group"),
  ),
  "base-button-group-input": lazy(
    () => import("../examples/base-button-group-input"),
  ),
  "base-button-group-nested": lazy(
    () => import("../examples/base-button-group-nested"),
  ),
  "base-button-group-orientation": lazy(
    () => import("../examples/base-button-group-orientation"),
  ),
  "base-button-group-popover": lazy(
    () => import("../examples/base-button-group-popover"),
  ),
  "base-button-group-rtl": lazy(
    () => import("../examples/base-button-group-rtl"),
  ),
  "base-button-group-select": lazy(
    () => import("../examples/base-button-group-select"),
  ),
  "base-button-group-separator": lazy(
    () => import("../examples/base-button-group-separator"),
  ),
  "base-button-group-size": lazy(
    () => import("../examples/base-button-group-size"),
  ),
  "base-button-group-split": lazy(
    () => import("../examples/base-button-group-split"),
  ),
  "base-button-icon": lazy(() => import("../examples/base-button-icon")),
  "base-button-link": lazy(() => import("../examples/base-button-link")),
  "base-button-outline": lazy(() => import("../examples/base-button-outline")),
  "base-button-render": lazy(() => import("../examples/base-button-render")),
  "base-button-rounded": lazy(() => import("../examples/base-button-rounded")),
  "base-button-rtl": lazy(() => import("../examples/base-button-rtl")),
  "base-button-secondary": lazy(
    () => import("../examples/base-button-secondary"),
  ),
  "base-button-size": lazy(() => import("../examples/base-button-size")),
  "base-button-spinner": lazy(() => import("../examples/base-button-spinner")),
  "base-button-with-icon": lazy(
    () => import("../examples/base-button-with-icon"),
  ),
  "base-calendar-basic": lazy(() => import("../examples/base-calendar-basic")),
  "base-calendar-booked-dates": lazy(
    () => import("../examples/base-calendar-booked-dates"),
  ),
  "base-calendar-caption": lazy(
    () => import("../examples/base-calendar-caption"),
  ),
  "base-calendar-custom-days": lazy(
    () => import("../examples/base-calendar-custom-days"),
  ),
  "base-calendar-demo": lazy(() => import("../examples/base-calendar-demo")),
  "base-calendar-hijri": lazy(() => import("../examples/base-calendar-hijri")),
  "base-calendar-presets": lazy(
    () => import("../examples/base-calendar-presets"),
  ),
  "base-calendar-range": lazy(() => import("../examples/base-calendar-range")),
  "base-calendar-rtl": lazy(() => import("../examples/base-calendar-rtl")),
  "base-calendar-time": lazy(() => import("../examples/base-calendar-time")),
  "base-calendar-week-numbers": lazy(
    () => import("../examples/base-calendar-week-numbers"),
  ),
  "base-card-demo": lazy(() => import("../examples/base-card-demo")),
  "base-card-edge-to-edge": lazy(
    () => import("../examples/base-card-edge-to-edge"),
  ),
  "base-card-image": lazy(() => import("../examples/base-card-image")),
  "base-card-rtl": lazy(() => import("../examples/base-card-rtl")),
  "base-card-small": lazy(() => import("../examples/base-card-small")),
  "base-card-spacing": lazy(() => import("../examples/base-card-spacing")),
  "base-carousel-api": lazy(() => import("../examples/base-carousel-api")),
  "base-carousel-demo": lazy(() => import("../examples/base-carousel-demo")),
  "base-carousel-orientation": lazy(
    () => import("../examples/base-carousel-orientation"),
  ),
  "base-carousel-plugin": lazy(
    () => import("../examples/base-carousel-plugin"),
  ),
  "base-carousel-rtl": lazy(() => import("../examples/base-carousel-rtl")),
  "base-carousel-size": lazy(() => import("../examples/base-carousel-size")),
  "base-carousel-spacing": lazy(
    () => import("../examples/base-carousel-spacing"),
  ),
  "base-chart-demo": lazy(() => import("../examples/base-chart-demo")),
  "base-chart-example-axis": lazy(
    () => import("../examples/base-chart-example-axis"),
  ),
  "base-chart-example-grid": lazy(
    () => import("../examples/base-chart-example-grid"),
  ),
  "base-chart-example-legend": lazy(
    () => import("../examples/base-chart-example-legend"),
  ),
  "base-chart-example-tooltip": lazy(
    () => import("../examples/base-chart-example-tooltip"),
  ),
  "base-chart-example": lazy(() => import("../examples/base-chart-example")),
  "base-chart-rtl": lazy(() => import("../examples/base-chart-rtl")),
  "base-chart-tooltip": lazy(() => import("../examples/base-chart-tooltip")),
  "base-checkbox-basic": lazy(() => import("../examples/base-checkbox-basic")),
  "base-checkbox-demo": lazy(() => import("../examples/base-checkbox-demo")),
  "base-checkbox-description": lazy(
    () => import("../examples/base-checkbox-description"),
  ),
  "base-checkbox-disabled": lazy(
    () => import("../examples/base-checkbox-disabled"),
  ),
  "base-checkbox-group": lazy(() => import("../examples/base-checkbox-group")),
  "base-checkbox-invalid": lazy(
    () => import("../examples/base-checkbox-invalid"),
  ),
  "base-checkbox-rtl": lazy(() => import("../examples/base-checkbox-rtl")),
  "base-checkbox-table": lazy(() => import("../examples/base-checkbox-table")),
  "base-collapsible-basic": lazy(
    () => import("../examples/base-collapsible-basic"),
  ),
  "base-collapsible-demo": lazy(
    () => import("../examples/base-collapsible-demo"),
  ),
  "base-collapsible-file-tree": lazy(
    () => import("../examples/base-collapsible-file-tree"),
  ),
  "base-collapsible-rtl": lazy(
    () => import("../examples/base-collapsible-rtl"),
  ),
  "base-collapsible-settings": lazy(
    () => import("../examples/base-collapsible-settings"),
  ),
  "base-combobox-auto-highlight": lazy(
    () => import("../examples/base-combobox-auto-highlight"),
  ),
  "base-combobox-basic": lazy(() => import("../examples/base-combobox-basic")),
  "base-combobox-clear": lazy(() => import("../examples/base-combobox-clear")),
  "base-combobox-custom": lazy(
    () => import("../examples/base-combobox-custom"),
  ),
  "base-combobox-demo": lazy(() => import("../examples/base-combobox-demo")),
  "base-combobox-disabled": lazy(
    () => import("../examples/base-combobox-disabled"),
  ),
  "base-combobox-groups": lazy(
    () => import("../examples/base-combobox-groups"),
  ),
  "base-combobox-input-group": lazy(
    () => import("../examples/base-combobox-input-group"),
  ),
  "base-combobox-invalid": lazy(
    () => import("../examples/base-combobox-invalid"),
  ),
  "base-combobox-multiple": lazy(
    () => import("../examples/base-combobox-multiple"),
  ),
  "base-combobox-popup": lazy(() => import("../examples/base-combobox-popup")),
  "base-combobox-rtl": lazy(() => import("../examples/base-combobox-rtl")),
  "base-command-basic": lazy(() => import("../examples/base-command-basic")),
  "base-command-demo": lazy(() => import("../examples/base-command-demo")),
  "base-command-groups": lazy(() => import("../examples/base-command-groups")),
  "base-command-rtl": lazy(() => import("../examples/base-command-rtl")),
  "base-command-scrollable": lazy(
    () => import("../examples/base-command-scrollable"),
  ),
  "base-command-shortcuts": lazy(
    () => import("../examples/base-command-shortcuts"),
  ),
  "base-context-menu-basic": lazy(
    () => import("../examples/base-context-menu-basic"),
  ),
  "base-context-menu-checkboxes": lazy(
    () => import("../examples/base-context-menu-checkboxes"),
  ),
  "base-context-menu-demo": lazy(
    () => import("../examples/base-context-menu-demo"),
  ),
  "base-context-menu-destructive": lazy(
    () => import("../examples/base-context-menu-destructive"),
  ),
  "base-context-menu-groups": lazy(
    () => import("../examples/base-context-menu-groups"),
  ),
  "base-context-menu-icons": lazy(
    () => import("../examples/base-context-menu-icons"),
  ),
  "base-context-menu-radio": lazy(
    () => import("../examples/base-context-menu-radio"),
  ),
  "base-context-menu-rtl": lazy(
    () => import("../examples/base-context-menu-rtl"),
  ),
  "base-context-menu-shortcuts": lazy(
    () => import("../examples/base-context-menu-shortcuts"),
  ),
  "base-context-menu-sides": lazy(
    () => import("../examples/base-context-menu-sides"),
  ),
  "base-context-menu-submenu": lazy(
    () => import("../examples/base-context-menu-submenu"),
  ),
  "base-data-table-demo": lazy(
    () => import("../examples/base-data-table-demo"),
  ),
  "base-data-table-rtl": lazy(() => import("../examples/base-data-table-rtl")),
  "base-date-picker-basic": lazy(
    () => import("../examples/base-date-picker-basic"),
  ),
  "base-date-picker-demo": lazy(
    () => import("../examples/base-date-picker-demo"),
  ),
  "base-date-picker-dob": lazy(
    () => import("../examples/base-date-picker-dob"),
  ),
  "base-date-picker-input": lazy(
    () => import("../examples/base-date-picker-input"),
  ),
  "base-date-picker-natural-language": lazy(
    () => import("../examples/base-date-picker-natural-language"),
  ),
  "base-date-picker-range": lazy(
    () => import("../examples/base-date-picker-range"),
  ),
  "base-date-picker-rtl": lazy(
    () => import("../examples/base-date-picker-rtl"),
  ),
  "base-date-picker-time": lazy(
    () => import("../examples/base-date-picker-time"),
  ),
  "base-dialog-close-button": lazy(
    () => import("../examples/base-dialog-close-button"),
  ),
  "base-dialog-demo": lazy(() => import("../examples/base-dialog-demo")),
  "base-dialog-no-close-button": lazy(
    () => import("../examples/base-dialog-no-close-button"),
  ),
  "base-dialog-rtl": lazy(() => import("../examples/base-dialog-rtl")),
  "base-dialog-scrollable-content": lazy(
    () => import("../examples/base-dialog-scrollable-content"),
  ),
  "base-dialog-sticky-footer": lazy(
    () => import("../examples/base-dialog-sticky-footer"),
  ),
  "base-drawer-demo": lazy(() => import("../examples/base-drawer-demo")),
  "base-drawer-dialog": lazy(() => import("../examples/base-drawer-dialog")),
  "base-drawer-nested": lazy(() => import("../examples/base-drawer-nested")),
  "base-drawer-non-modal": lazy(
    () => import("../examples/base-drawer-non-modal"),
  ),
  "base-drawer-sides": lazy(() => import("../examples/base-drawer-sides")),
  "base-drawer-snap-points": lazy(
    () => import("../examples/base-drawer-snap-points"),
  ),
  "base-drawer-swipe-handle": lazy(
    () => import("../examples/base-drawer-swipe-handle"),
  ),
  "base-dropdown-menu-avatar": lazy(
    () => import("../examples/base-dropdown-menu-avatar"),
  ),
  "base-dropdown-menu-basic": lazy(
    () => import("../examples/base-dropdown-menu-basic"),
  ),
  "base-dropdown-menu-checkboxes-icons": lazy(
    () => import("../examples/base-dropdown-menu-checkboxes-icons"),
  ),
  "base-dropdown-menu-checkboxes": lazy(
    () => import("../examples/base-dropdown-menu-checkboxes"),
  ),
  "base-dropdown-menu-complex": lazy(
    () => import("../examples/base-dropdown-menu-complex"),
  ),
  "base-dropdown-menu-demo": lazy(
    () => import("../examples/base-dropdown-menu-demo"),
  ),
  "base-dropdown-menu-destructive": lazy(
    () => import("../examples/base-dropdown-menu-destructive"),
  ),
  "base-dropdown-menu-icons": lazy(
    () => import("../examples/base-dropdown-menu-icons"),
  ),
  "base-dropdown-menu-radio-group": lazy(
    () => import("../examples/base-dropdown-menu-radio-group"),
  ),
  "base-dropdown-menu-radio-icons": lazy(
    () => import("../examples/base-dropdown-menu-radio-icons"),
  ),
  "base-dropdown-menu-rtl": lazy(
    () => import("../examples/base-dropdown-menu-rtl"),
  ),
  "base-dropdown-menu-shortcuts": lazy(
    () => import("../examples/base-dropdown-menu-shortcuts"),
  ),
  "base-dropdown-menu-submenu": lazy(
    () => import("../examples/base-dropdown-menu-submenu"),
  ),
  "base-empty-avatar-group": lazy(
    () => import("../examples/base-empty-avatar-group"),
  ),
  "base-empty-avatar": lazy(() => import("../examples/base-empty-avatar")),
  "base-empty-background": lazy(
    () => import("../examples/base-empty-background"),
  ),
  "base-empty-demo": lazy(() => import("../examples/base-empty-demo")),
  "base-empty-input-group": lazy(
    () => import("../examples/base-empty-input-group"),
  ),
  "base-empty-outline": lazy(() => import("../examples/base-empty-outline")),
  "base-empty-rtl": lazy(() => import("../examples/base-empty-rtl")),
  "base-field-checkbox": lazy(() => import("../examples/base-field-checkbox")),
  "base-field-choice-card": lazy(
    () => import("../examples/base-field-choice-card"),
  ),
  "base-field-demo": lazy(() => import("../examples/base-field-demo")),
  "base-field-fieldset": lazy(() => import("../examples/base-field-fieldset")),
  "base-field-group": lazy(() => import("../examples/base-field-group")),
  "base-field-input": lazy(() => import("../examples/base-field-input")),
  "base-field-radio": lazy(() => import("../examples/base-field-radio")),
  "base-field-responsive": lazy(
    () => import("../examples/base-field-responsive"),
  ),
  "base-field-rtl": lazy(() => import("../examples/base-field-rtl")),
  "base-field-select": lazy(() => import("../examples/base-field-select")),
  "base-field-slider": lazy(() => import("../examples/base-field-slider")),
  "base-field-switch": lazy(() => import("../examples/base-field-switch")),
  "base-field-textarea": lazy(() => import("../examples/base-field-textarea")),
  "base-hover-card-demo": lazy(
    () => import("../examples/base-hover-card-demo"),
  ),
  "base-hover-card-rtl": lazy(() => import("../examples/base-hover-card-rtl")),
  "base-hover-card-sides": lazy(
    () => import("../examples/base-hover-card-sides"),
  ),
  "base-input-badge": lazy(() => import("../examples/base-input-badge")),
  "base-input-basic": lazy(() => import("../examples/base-input-basic")),
  "base-input-button-group": lazy(
    () => import("../examples/base-input-button-group"),
  ),
  "base-input-demo": lazy(() => import("../examples/base-input-demo")),
  "base-input-disabled": lazy(() => import("../examples/base-input-disabled")),
  "base-input-field": lazy(() => import("../examples/base-input-field")),
  "base-input-fieldgroup": lazy(
    () => import("../examples/base-input-fieldgroup"),
  ),
  "base-input-file": lazy(() => import("../examples/base-input-file")),
  "base-input-form": lazy(() => import("../examples/base-input-form")),
  "base-input-grid": lazy(() => import("../examples/base-input-grid")),
  "base-input-group-block-end": lazy(
    () => import("../examples/base-input-group-block-end"),
  ),
  "base-input-group-block-start": lazy(
    () => import("../examples/base-input-group-block-start"),
  ),
  "base-input-group-button": lazy(
    () => import("../examples/base-input-group-button"),
  ),
  "base-input-group-custom": lazy(
    () => import("../examples/base-input-group-custom"),
  ),
  "base-input-group-demo": lazy(
    () => import("../examples/base-input-group-demo"),
  ),
  "base-input-group-dropdown": lazy(
    () => import("../examples/base-input-group-dropdown"),
  ),
  "base-input-group-icon": lazy(
    () => import("../examples/base-input-group-icon"),
  ),
  "base-input-group-inline-end": lazy(
    () => import("../examples/base-input-group-inline-end"),
  ),
  "base-input-group-inline-start": lazy(
    () => import("../examples/base-input-group-inline-start"),
  ),
  "base-input-group-kbd": lazy(
    () => import("../examples/base-input-group-kbd"),
  ),
  "base-input-group-rtl": lazy(
    () => import("../examples/base-input-group-rtl"),
  ),
  "base-input-group-spinner": lazy(
    () => import("../examples/base-input-group-spinner"),
  ),
  "base-input-group-text": lazy(
    () => import("../examples/base-input-group-text"),
  ),
  "base-input-group-textarea": lazy(
    () => import("../examples/base-input-group-textarea"),
  ),
  "base-input-inline": lazy(() => import("../examples/base-input-inline")),
  "base-input-input-group": lazy(
    () => import("../examples/base-input-input-group"),
  ),
  "base-input-invalid": lazy(() => import("../examples/base-input-invalid")),
  "base-input-otp-alphanumeric": lazy(
    () => import("../examples/base-input-otp-alphanumeric"),
  ),
  "base-input-otp-controlled": lazy(
    () => import("../examples/base-input-otp-controlled"),
  ),
  "base-input-otp-demo": lazy(() => import("../examples/base-input-otp-demo")),
  "base-input-otp-disabled": lazy(
    () => import("../examples/base-input-otp-disabled"),
  ),
  "base-input-otp-form": lazy(() => import("../examples/base-input-otp-form")),
  "base-input-otp-four-digits": lazy(
    () => import("../examples/base-input-otp-four-digits"),
  ),
  "base-input-otp-invalid": lazy(
    () => import("../examples/base-input-otp-invalid"),
  ),
  "base-input-otp-pattern": lazy(
    () => import("../examples/base-input-otp-pattern"),
  ),
  "base-input-otp-rtl": lazy(() => import("../examples/base-input-otp-rtl")),
  "base-input-otp-separator": lazy(
    () => import("../examples/base-input-otp-separator"),
  ),
  "base-input-required": lazy(() => import("../examples/base-input-required")),
  "base-input-rtl": lazy(() => import("../examples/base-input-rtl")),
  "base-item-avatar": lazy(() => import("../examples/base-item-avatar")),
  "base-item-demo": lazy(() => import("../examples/base-item-demo")),
  "base-item-dropdown": lazy(() => import("../examples/base-item-dropdown")),
  "base-item-group": lazy(() => import("../examples/base-item-group")),
  "base-item-header": lazy(() => import("../examples/base-item-header")),
  "base-item-icon": lazy(() => import("../examples/base-item-icon")),
  "base-item-image": lazy(() => import("../examples/base-item-image")),
  "base-item-link": lazy(() => import("../examples/base-item-link")),
  "base-item-rtl": lazy(() => import("../examples/base-item-rtl")),
  "base-item-size": lazy(() => import("../examples/base-item-size")),
  "base-item-variant": lazy(() => import("../examples/base-item-variant")),
  "base-kbd-button": lazy(() => import("../examples/base-kbd-button")),
  "base-kbd-demo": lazy(() => import("../examples/base-kbd-demo")),
  "base-kbd-group": lazy(() => import("../examples/base-kbd-group")),
  "base-kbd-input-group": lazy(
    () => import("../examples/base-kbd-input-group"),
  ),
  "base-kbd-rtl": lazy(() => import("../examples/base-kbd-rtl")),
  "base-kbd-tooltip": lazy(() => import("../examples/base-kbd-tooltip")),
  "base-label-demo": lazy(() => import("../examples/base-label-demo")),
  "base-label-rtl": lazy(() => import("../examples/base-label-rtl")),
  "base-marker-border": lazy(() => import("../examples/base-marker-border")),
  "base-marker-demo": lazy(() => import("../examples/base-marker-demo")),
  "base-marker-icon": lazy(() => import("../examples/base-marker-icon")),
  "base-marker-link-button": lazy(
    () => import("../examples/base-marker-link-button"),
  ),
  "base-marker-separator": lazy(
    () => import("../examples/base-marker-separator"),
  ),
  "base-marker-shimmer": lazy(() => import("../examples/base-marker-shimmer")),
  "base-marker-status": lazy(() => import("../examples/base-marker-status")),
  "base-marker-variants": lazy(
    () => import("../examples/base-marker-variants"),
  ),
  "base-menubar-checkbox": lazy(
    () => import("../examples/base-menubar-checkbox"),
  ),
  "base-menubar-demo": lazy(() => import("../examples/base-menubar-demo")),
  "base-menubar-icons": lazy(() => import("../examples/base-menubar-icons")),
  "base-menubar-radio": lazy(() => import("../examples/base-menubar-radio")),
  "base-menubar-rtl": lazy(() => import("../examples/base-menubar-rtl")),
  "base-menubar-submenu": lazy(
    () => import("../examples/base-menubar-submenu"),
  ),
  "base-message-actions": lazy(
    () => import("../examples/base-message-actions"),
  ),
  "base-message-attachment": lazy(
    () => import("../examples/base-message-attachment"),
  ),
  "base-message-avatar": lazy(() => import("../examples/base-message-avatar")),
  "base-message-demo": lazy(() => import("../examples/base-message-demo")),
  "base-message-group": lazy(() => import("../examples/base-message-group")),
  "base-message-header-footer": lazy(
    () => import("../examples/base-message-header-footer"),
  ),
  "base-message-scroller-anchoring": lazy(
    () => import("../examples/base-message-scroller-anchoring"),
  ),
  "base-message-scroller-animation": lazy(
    () => import("../examples/base-message-scroller-animation"),
  ),
  "base-message-scroller-commands": lazy(
    () => import("../examples/base-message-scroller-commands"),
  ),
  "base-message-scroller-demo": lazy(
    () => import("../examples/base-message-scroller-demo"),
  ),
  "base-message-scroller-group-chat": lazy(
    () => import("../examples/base-message-scroller-group-chat"),
  ),
  "base-message-scroller-load-history": lazy(
    () => import("../examples/base-message-scroller-load-history"),
  ),
  "base-message-scroller-opening-position": lazy(
    () => import("../examples/base-message-scroller-opening-position"),
  ),
  "base-message-scroller-previous-context": lazy(
    () => import("../examples/base-message-scroller-previous-context"),
  ),
  "base-message-scroller-scrollable": lazy(
    () => import("../examples/base-message-scroller-scrollable"),
  ),
  "base-message-scroller-streaming": lazy(
    () => import("../examples/base-message-scroller-streaming"),
  ),
  "base-message-scroller-visibility": lazy(
    () => import("../examples/base-message-scroller-visibility"),
  ),
  "base-navigation-menu-demo": lazy(
    () => import("../examples/base-navigation-menu-demo"),
  ),
  "base-navigation-menu-rtl": lazy(
    () => import("../examples/base-navigation-menu-rtl"),
  ),
  "base-pagination-demo": lazy(
    () => import("../examples/base-pagination-demo"),
  ),
  "base-pagination-icons-only": lazy(
    () => import("../examples/base-pagination-icons-only"),
  ),
  "base-pagination-rtl": lazy(() => import("../examples/base-pagination-rtl")),
  "base-pagination-simple": lazy(
    () => import("../examples/base-pagination-simple"),
  ),
  "base-popover-alignments": lazy(
    () => import("../examples/base-popover-alignments"),
  ),
  "base-popover-basic": lazy(() => import("../examples/base-popover-basic")),
  "base-popover-demo": lazy(() => import("../examples/base-popover-demo")),
  "base-popover-form": lazy(() => import("../examples/base-popover-form")),
  "base-popover-rtl": lazy(() => import("../examples/base-popover-rtl")),
  "base-progress-controlled": lazy(
    () => import("../examples/base-progress-controlled"),
  ),
  "base-progress-demo": lazy(() => import("../examples/base-progress-demo")),
  "base-progress-label": lazy(() => import("../examples/base-progress-label")),
  "base-progress-rtl": lazy(() => import("../examples/base-progress-rtl")),
  "base-questionnaire-animated": lazy(
    () => import("../examples/base-questionnaire-animated"),
  ),
  "base-questionnaire-card": lazy(
    () => import("../examples/base-questionnaire-card"),
  ),
  "base-questionnaire-conditional": lazy(
    () => import("../examples/base-questionnaire-conditional"),
  ),
  "base-questionnaire-controlled": lazy(
    () => import("../examples/base-questionnaire-controlled"),
  ),
  "base-questionnaire-demo": lazy(
    () => import("../examples/base-questionnaire-demo"),
  ),
  "base-questionnaire-dialog": lazy(
    () => import("../examples/base-questionnaire-dialog"),
  ),
  "base-questionnaire-freeform": lazy(
    () => import("../examples/base-questionnaire-freeform"),
  ),
  "base-questionnaire-multiple": lazy(
    () => import("../examples/base-questionnaire-multiple"),
  ),
  "base-questionnaire-navigation-state": lazy(
    () => import("../examples/base-questionnaire-navigation-state"),
  ),
  "base-questionnaire-progress": lazy(
    () => import("../examples/base-questionnaire-progress"),
  ),
  "base-questionnaire-resume": lazy(
    () => import("../examples/base-questionnaire-resume"),
  ),
  "base-questionnaire-shortcuts": lazy(
    () => import("../examples/base-questionnaire-shortcuts"),
  ),
  "base-questionnaire-skip": lazy(
    () => import("../examples/base-questionnaire-skip"),
  ),
  "base-questionnaire-validation": lazy(
    () => import("../examples/base-questionnaire-validation"),
  ),
  "base-radio-group-choice-card": lazy(
    () => import("../examples/base-radio-group-choice-card"),
  ),
  "base-radio-group-demo": lazy(
    () => import("../examples/base-radio-group-demo"),
  ),
  "base-radio-group-description": lazy(
    () => import("../examples/base-radio-group-description"),
  ),
  "base-radio-group-disabled": lazy(
    () => import("../examples/base-radio-group-disabled"),
  ),
  "base-radio-group-fieldset": lazy(
    () => import("../examples/base-radio-group-fieldset"),
  ),
  "base-radio-group-invalid": lazy(
    () => import("../examples/base-radio-group-invalid"),
  ),
  "base-radio-group-rtl": lazy(
    () => import("../examples/base-radio-group-rtl"),
  ),
  "base-resizable-demo": lazy(() => import("../examples/base-resizable-demo")),
  "base-resizable-handle": lazy(
    () => import("../examples/base-resizable-handle"),
  ),
  "base-resizable-rtl": lazy(() => import("../examples/base-resizable-rtl")),
  "base-resizable-vertical": lazy(
    () => import("../examples/base-resizable-vertical"),
  ),
  "base-scroll-area-demo": lazy(
    () => import("../examples/base-scroll-area-demo"),
  ),
  "base-scroll-area-horizontal-demo": lazy(
    () => import("../examples/base-scroll-area-horizontal-demo"),
  ),
  "base-scroll-area-rtl": lazy(
    () => import("../examples/base-scroll-area-rtl"),
  ),
  "base-select-align-item": lazy(
    () => import("../examples/base-select-align-item"),
  ),
  "base-select-demo": lazy(() => import("../examples/base-select-demo")),
  "base-select-disabled": lazy(
    () => import("../examples/base-select-disabled"),
  ),
  "base-select-groups": lazy(() => import("../examples/base-select-groups")),
  "base-select-invalid": lazy(() => import("../examples/base-select-invalid")),
  "base-select-rtl": lazy(() => import("../examples/base-select-rtl")),
  "base-select-scrollable": lazy(
    () => import("../examples/base-select-scrollable"),
  ),
  "base-separator-demo": lazy(() => import("../examples/base-separator-demo")),
  "base-separator-list": lazy(() => import("../examples/base-separator-list")),
  "base-separator-menu": lazy(() => import("../examples/base-separator-menu")),
  "base-separator-rtl": lazy(() => import("../examples/base-separator-rtl")),
  "base-separator-vertical": lazy(
    () => import("../examples/base-separator-vertical"),
  ),
  "base-sheet-demo": lazy(() => import("../examples/base-sheet-demo")),
  "base-sheet-no-close-button": lazy(
    () => import("../examples/base-sheet-no-close-button"),
  ),
  "base-sheet-rtl": lazy(() => import("../examples/base-sheet-rtl")),
  "base-sheet-side": lazy(() => import("../examples/base-sheet-side")),
  "base-sidebar-demo": lazy(() => import("../examples/base-sidebar-demo")),
  "base-skeleton-avatar": lazy(
    () => import("../examples/base-skeleton-avatar"),
  ),
  "base-skeleton-card": lazy(() => import("../examples/base-skeleton-card")),
  "base-skeleton-demo": lazy(() => import("../examples/base-skeleton-demo")),
  "base-skeleton-form": lazy(() => import("../examples/base-skeleton-form")),
  "base-skeleton-rtl": lazy(() => import("../examples/base-skeleton-rtl")),
  "base-skeleton-table": lazy(() => import("../examples/base-skeleton-table")),
  "base-skeleton-text": lazy(() => import("../examples/base-skeleton-text")),
  "base-slider-controlled": lazy(
    () => import("../examples/base-slider-controlled"),
  ),
  "base-slider-demo": lazy(() => import("../examples/base-slider-demo")),
  "base-slider-disabled": lazy(
    () => import("../examples/base-slider-disabled"),
  ),
  "base-slider-multiple": lazy(
    () => import("../examples/base-slider-multiple"),
  ),
  "base-slider-range": lazy(() => import("../examples/base-slider-range")),
  "base-slider-rtl": lazy(() => import("../examples/base-slider-rtl")),
  "base-slider-vertical": lazy(
    () => import("../examples/base-slider-vertical"),
  ),
  "base-spinner-badge": lazy(() => import("../examples/base-spinner-badge")),
  "base-spinner-button": lazy(() => import("../examples/base-spinner-button")),
  "base-spinner-custom": lazy(() => import("../examples/base-spinner-custom")),
  "base-spinner-demo": lazy(() => import("../examples/base-spinner-demo")),
  "base-spinner-empty": lazy(() => import("../examples/base-spinner-empty")),
  "base-spinner-input-group": lazy(
    () => import("../examples/base-spinner-input-group"),
  ),
  "base-spinner-rtl": lazy(() => import("../examples/base-spinner-rtl")),
  "base-spinner-size": lazy(() => import("../examples/base-spinner-size")),
  "base-switch-choice-card": lazy(
    () => import("../examples/base-switch-choice-card"),
  ),
  "base-switch-demo": lazy(() => import("../examples/base-switch-demo")),
  "base-switch-description": lazy(
    () => import("../examples/base-switch-description"),
  ),
  "base-switch-disabled": lazy(
    () => import("../examples/base-switch-disabled"),
  ),
  "base-switch-invalid": lazy(() => import("../examples/base-switch-invalid")),
  "base-switch-rtl": lazy(() => import("../examples/base-switch-rtl")),
  "base-switch-sizes": lazy(() => import("../examples/base-switch-sizes")),
  "base-table-actions": lazy(() => import("../examples/base-table-actions")),
  "base-table-demo": lazy(() => import("../examples/base-table-demo")),
  "base-table-footer": lazy(() => import("../examples/base-table-footer")),
  "base-table-rtl": lazy(() => import("../examples/base-table-rtl")),
  "base-tabs-demo": lazy(() => import("../examples/base-tabs-demo")),
  "base-tabs-disabled": lazy(() => import("../examples/base-tabs-disabled")),
  "base-tabs-icons": lazy(() => import("../examples/base-tabs-icons")),
  "base-tabs-line": lazy(() => import("../examples/base-tabs-line")),
  "base-tabs-rtl": lazy(() => import("../examples/base-tabs-rtl")),
  "base-tabs-vertical": lazy(() => import("../examples/base-tabs-vertical")),
  "base-textarea-button": lazy(
    () => import("../examples/base-textarea-button"),
  ),
  "base-textarea-demo": lazy(() => import("../examples/base-textarea-demo")),
  "base-textarea-disabled": lazy(
    () => import("../examples/base-textarea-disabled"),
  ),
  "base-textarea-field": lazy(() => import("../examples/base-textarea-field")),
  "base-textarea-invalid": lazy(
    () => import("../examples/base-textarea-invalid"),
  ),
  "base-textarea-rtl": lazy(() => import("../examples/base-textarea-rtl")),
  "base-toast-demo": lazy(() => import("../examples/base-toast-demo")),
  "base-toast-promise": lazy(() => import("../examples/base-toast-promise")),
  "base-toast-types": lazy(() => import("../examples/base-toast-types")),
  "base-toggle-demo": lazy(() => import("../examples/base-toggle-demo")),
  "base-toggle-disabled": lazy(
    () => import("../examples/base-toggle-disabled"),
  ),
  "base-toggle-group-demo": lazy(
    () => import("../examples/base-toggle-group-demo"),
  ),
  "base-toggle-group-disabled": lazy(
    () => import("../examples/base-toggle-group-disabled"),
  ),
  "base-toggle-group-font-weight-selector": lazy(
    () => import("../examples/base-toggle-group-font-weight-selector"),
  ),
  "base-toggle-group-outline": lazy(
    () => import("../examples/base-toggle-group-outline"),
  ),
  "base-toggle-group-rtl": lazy(
    () => import("../examples/base-toggle-group-rtl"),
  ),
  "base-toggle-group-sizes": lazy(
    () => import("../examples/base-toggle-group-sizes"),
  ),
  "base-toggle-group-spacing": lazy(
    () => import("../examples/base-toggle-group-spacing"),
  ),
  "base-toggle-group-vertical": lazy(
    () => import("../examples/base-toggle-group-vertical"),
  ),
  "base-toggle-outline": lazy(() => import("../examples/base-toggle-outline")),
  "base-toggle-rtl": lazy(() => import("../examples/base-toggle-rtl")),
  "base-toggle-sizes": lazy(() => import("../examples/base-toggle-sizes")),
  "base-toggle-text": lazy(() => import("../examples/base-toggle-text")),
  "base-tooltip-demo": lazy(() => import("../examples/base-tooltip-demo")),
  "base-tooltip-disabled": lazy(
    () => import("../examples/base-tooltip-disabled"),
  ),
  "base-tooltip-keyboard": lazy(
    () => import("../examples/base-tooltip-keyboard"),
  ),
  "base-tooltip-rtl": lazy(() => import("../examples/base-tooltip-rtl")),
  "base-tooltip-sides": lazy(() => import("../examples/base-tooltip-sides")),
  "base-typography-blockquote": lazy(
    () => import("../examples/base-typography-blockquote"),
  ),
  "base-typography-demo": lazy(
    () => import("../examples/base-typography-demo"),
  ),
  "base-typography-h1": lazy(() => import("../examples/base-typography-h1")),
  "base-typography-h2": lazy(() => import("../examples/base-typography-h2")),
  "base-typography-h3": lazy(() => import("../examples/base-typography-h3")),
  "base-typography-h4": lazy(() => import("../examples/base-typography-h4")),
  "base-typography-inline-code": lazy(
    () => import("../examples/base-typography-inline-code"),
  ),
  "base-typography-large": lazy(
    () => import("../examples/base-typography-large"),
  ),
  "base-typography-lead": lazy(
    () => import("../examples/base-typography-lead"),
  ),
  "base-typography-list": lazy(
    () => import("../examples/base-typography-list"),
  ),
  "base-typography-muted": lazy(
    () => import("../examples/base-typography-muted"),
  ),
  "base-typography-p": lazy(() => import("../examples/base-typography-p")),
  "base-typography-rtl": lazy(() => import("../examples/base-typography-rtl")),
  "base-typography-small": lazy(
    () => import("../examples/base-typography-small"),
  ),
  "base-typography-table": lazy(
    () => import("../examples/base-typography-table"),
  ),

  "select-groups": lazy(() => import("../examples/select-groups")),
  "select-states": lazy(() => import("../examples/select-states")),
  "select-scroll": lazy(() => import("../examples/select-scroll")),
  "input-group-compositions": lazy(
    () => import("../examples/input-group-compositions"),
  ),
  "field-fieldset": lazy(() => import("../examples/field-fieldset")),
  "tabs-variants": lazy(() => import("../examples/tabs-variants")),
  "dropdown-menu-selection": lazy(
    () => import("../examples/dropdown-menu-selection"),
  ),
  "chart-series": lazy(() => import("../examples/chart-series")),
  "progress-states": lazy(() => import("../examples/progress-states")),
  "toast-feedback": lazy(() => import("../examples/toast-feedback")),
  "avatar-images": lazy(() => import("../examples/avatar-images")),
  "table-native": lazy(() => import("../examples/table-native")),
  "dropzone-files": lazy(() => import("../examples/dropzone-files")),
  "editor-readonly": lazy(() => import("../examples/editor-readonly")),
  "aspect-ratio-media": lazy(() => import("../examples/aspect-ratio-media")),
  "button-group-orientation": lazy(
    () => import("../examples/button-group-orientation"),
  ),
  "accordion-multiple": lazy(() => import("../examples/accordion-multiple")),
  "toggle-group-vertical": lazy(
    () => import("../examples/toggle-group-vertical"),
  ),
  "toggle-controlled": lazy(() => import("../examples/toggle-controlled")),
  "radio-group-form": lazy(() => import("../examples/radio-group-form")),
  "checkbox-select-all": lazy(() => import("../examples/checkbox-select-all")),
  "rotating-content-external-control": lazy(
    () => import("../examples/rotating-content-external-control"),
  ),
  "text-reveal-timing": lazy(() => import("../examples/text-reveal-timing")),
  "button-sizes": lazy(() => import("../examples/button-sizes")),
  "input-types": lazy(() => import("../examples/input-types")),
  "switch-states": lazy(() => import("../examples/switch-states")),
  "label-controls": lazy(() => import("../examples/label-controls")),
  "textarea-states": lazy(() => import("../examples/textarea-states")),
  "card-media": lazy(() => import("../examples/card-media")),
  "separator-vertical": lazy(() => import("../examples/separator-vertical")),
  "dialog-controlled": lazy(() => import("../examples/dialog-controlled")),
  "popover-positioning": lazy(() => import("../examples/popover-positioning")),
  "sheet-sides": lazy(() => import("../examples/sheet-sides")),
  "tooltip-sides": lazy(() => import("../examples/tooltip-sides")),
  "brand-gradient-text-motion": lazy(
    () => import("../examples/brand-gradient-text-motion"),
  ),
  "status-notice-actions": lazy(
    () => import("../examples/status-notice-actions"),
  ),
  "reveal-content-variants": lazy(
    () => import("../examples/reveal-content-variants"),
  ),
  "collapsible-controlled": lazy(
    () => import("../examples/collapsible-controlled"),
  ),
  "avatar-stack-animated": lazy(
    () => import("../examples/avatar-stack-animated"),
  ),
  "calendar-constraints": lazy(
    () => import("../examples/calendar-constraints"),
  ),
  "list-custom-rows": lazy(() => import("../examples/list-custom-rows")),
  "code-block-plain": lazy(() => import("../examples/code-block-plain")),
  "contribution-graph-selection": lazy(
    () => import("../examples/contribution-graph-selection"),
  ),
  "choicebox-form": lazy(() => import("../examples/choicebox-form")),
  "combobox-controlled": lazy(() => import("../examples/combobox-controlled")),
  "tags-controlled": lazy(() => import("../examples/tags-controlled")),
  "image-crop-aspect": lazy(() => import("../examples/image-crop-aspect")),
  "ticker-card": lazy(() => import("../examples/ticker-card")),
  "stories-viewer": lazy(() => import("../examples/stories-viewer")),
  "announcement-static": lazy(() => import("../examples/announcement-static")),
  "banner-subtle": lazy(() => import("../examples/banner-subtle")),
  "typography-semantics": lazy(
    () => import("../examples/typography-semantics"),
  ),
  "color-picker-controlled": lazy(
    () => import("../examples/color-picker-controlled"),
  ),
  "glimpse-text-only": lazy(() => import("../examples/glimpse-text-only")),
  "pill-locked": lazy(() => import("../examples/pill-locked")),
  "spinner-sizes": lazy(() => import("../examples/spinner-sizes")),
};

export function AdditionalExamplePreview({ file }: { file: string }) {
  const Example = examples[file as keyof typeof examples];
  if (!Example) throw new Error(`Missing example preview: ${file}`);
  return (
    <div
      data-additional-example={file}
      className="flex min-w-0 w-full items-center justify-center text-foreground"
    >
      <Suspense
        fallback={
          <p role="status" className="text-sm text-muted-foreground">
            Loading example…
          </p>
        }
      >
        <Example />
      </Suspense>
    </div>
  );
}
