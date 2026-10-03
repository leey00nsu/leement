"use client";

import type { ComponentType } from "react";
import ToggleGroupExample from "../examples/toggle-group";
import ToggleExample from "../examples/toggle";
import NativeSelectExample from "../examples/native-select";
import InputGroupExample from "../examples/input-group";
import FieldExample from "../examples/field";
import RadioGroupExample from "../examples/radio-group";
import CheckboxExample from "../examples/checkbox";
import TextRevealExample from "../examples/text-reveal";
import MediaRevealExample from "../examples/media-reveal";
import BrandActionExample from "../examples/brand-action";
import RotatingContentExample from "../examples/rotating-content";
import ButtonExample from "../examples/button";
import InputExample from "../examples/input";
import SelectExample from "../examples/select";
import SwitchExample from "../examples/switch";
import TabsExample from "../examples/tabs";
import LabelExample from "../examples/label";
import TextareaExample from "../examples/textarea";
import BadgeExample from "../examples/badge";
import CardExample from "../examples/card";
import SeparatorExample from "../examples/separator";
import DialogExample from "../examples/dialog";
import DropdownMenuExample from "../examples/dropdown-menu";
import PopoverExample from "../examples/popover";
import SheetExample from "../examples/sheet";
import TooltipExample from "../examples/tooltip";
import ChartExample from "../examples/chart";
import SkeletonExample from "../examples/skeleton";
import BrandGradientTextExample from "../examples/brand-gradient-text";
import StatusNoticeExample from "../examples/status-notice";
import RevealContentExample from "../examples/reveal-content";
import StatePanelExample from "../examples/state-panel";
import ProductPageIntroExample from "../examples/product-page-intro";
import ResourceRowLinkExample from "../examples/resource-row-link";
import BentoGridExample from "../examples/bento-grid";
import CollapsibleExample from "../examples/collapsible";
import ProgressExample from "../examples/progress";
import SliderExample from "../examples/slider";
import ToastExample from "../examples/toast";
import AvatarExample from "../examples/avatar";
import AlertDialogExample from "../examples/alert-dialog";
import PageSkeletonExample from "../examples/page-skeleton";
import FilterToolbarExample from "../examples/filter-toolbar";
import AvatarStackExample from "../examples/avatar-stack";
import CursorExample from "../examples/cursor";
import CalendarExample from "../examples/calendar";
import ListExample from "../examples/list";
import TableExample from "../examples/table";
import GanttExample from "../examples/gantt";
import KanbanExample from "../examples/kanban";
import CodeBlockExample from "../examples/code-block";
import ContributionGraphExample from "../examples/contribution-graph";
import SandboxExample from "../examples/sandbox";
import SnippetExample from "../examples/snippet";
import ChoiceboxExample from "../examples/choicebox";
import ComboboxExample from "../examples/combobox";
import DropzoneExample from "../examples/dropzone";
import MiniCalendarExample from "../examples/mini-calendar";
import TagsExample from "../examples/tags";
import ImageCropExample from "../examples/image-crop";
import ImageZoomExample from "../examples/image-zoom";
import CreditCardExample from "../examples/credit-card";
import TickerExample from "../examples/ticker";
import StoriesExample from "../examples/stories";
import ReelExample from "../examples/reel";
import AudioPlayerExample from "../examples/audio-player";
import VideoPlayerExample from "../examples/video-player";
import AnnouncementExample from "../examples/announcement";
import BannerExample from "../examples/banner";
import TypographyExample from "../examples/typography";
import ColorPickerExample from "../examples/color-picker";
import ComparisonExample from "../examples/comparison";
import DeckExample from "../examples/deck";
import DialogStackExample from "../examples/dialog-stack";
import EditorExample from "../examples/editor";
import GlimpseExample from "../examples/glimpse";
import MarqueeExample from "../examples/marquee";
import PillExample from "../examples/pill";
import QRCodeExample from "../examples/qr-code";
import RatingExample from "../examples/rating";
import RelativeTimeExample from "../examples/relative-time";
import SpinnerExample from "../examples/spinner";
import StatusExample from "../examples/status";
import ThemeSwitcherExample from "../examples/theme-switcher";
import TreeExample from "../examples/tree";
import PageHeaderExample from "../examples/page-header";
import BrandLogoExample from "../examples/brand-logo";
import EmptyStateExample from "../examples/empty-state";
import FormSectionExample from "../examples/form-section";
import SearchFieldExample from "../examples/search-field";
import StatCardExample from "../examples/stat-card";
import SettingsSectionExample from "../examples/settings-section";
import { items } from "../lib/items";

const examples: Record<keyof typeof items, ComponentType> = {
  "toggle-group": ToggleGroupExample,
  "toggle": ToggleExample,
  "native-select": NativeSelectExample,
  "input-group": InputGroupExample,
  "field": FieldExample,
  "radio-group": RadioGroupExample,
  "checkbox": CheckboxExample,
  "brand-action": BrandActionExample,
  "rotating-content": RotatingContentExample,
  "media-reveal": MediaRevealExample,
  "text-reveal": TextRevealExample,
  button: ButtonExample,
  input: InputExample,
  select: SelectExample,
  switch: SwitchExample,
  tabs: TabsExample,
  label: LabelExample,
  textarea: TextareaExample,
  badge: BadgeExample,
  card: CardExample,
  separator: SeparatorExample,
  dialog: DialogExample,
  "dropdown-menu": DropdownMenuExample,
  popover: PopoverExample,
  sheet: SheetExample,
  tooltip: TooltipExample,
  chart: ChartExample,
  skeleton: SkeletonExample,
  "brand-gradient-text": BrandGradientTextExample,
  "status-notice": StatusNoticeExample,
  "reveal-content": RevealContentExample,
  "state-panel": StatePanelExample,
  "product-page-intro": ProductPageIntroExample,
  "resource-row-link": ResourceRowLinkExample,
  "bento-grid": BentoGridExample,
  collapsible: CollapsibleExample,
  progress: ProgressExample,
  slider: SliderExample,
  toast: ToastExample,
  avatar: AvatarExample,
  "alert-dialog": AlertDialogExample,
  "page-skeleton": PageSkeletonExample,
  "filter-toolbar": FilterToolbarExample,
  "avatar-stack": AvatarStackExample,
  cursor: CursorExample,
  calendar: CalendarExample,
  list: ListExample,
  table: TableExample,
  gantt: GanttExample,
  kanban: KanbanExample,
  "code-block": CodeBlockExample,
  "contribution-graph": ContributionGraphExample,
  sandbox: SandboxExample,
  snippet: SnippetExample,
  choicebox: ChoiceboxExample,
  combobox: ComboboxExample,
  dropzone: DropzoneExample,
  "mini-calendar": MiniCalendarExample,
  tags: TagsExample,
  "image-crop": ImageCropExample,
  "image-zoom": ImageZoomExample,
  "credit-card": CreditCardExample,
  ticker: TickerExample,
  stories: StoriesExample,
  reel: ReelExample,
  "audio-player": AudioPlayerExample,
  "video-player": VideoPlayerExample,
  announcement: AnnouncementExample,
  banner: BannerExample,
  typography: TypographyExample,
  "color-picker": ColorPickerExample,
  comparison: ComparisonExample,
  deck: DeckExample,
  "dialog-stack": DialogStackExample,
  editor: EditorExample,
  glimpse: GlimpseExample,
  marquee: MarqueeExample,
  pill: PillExample,
  "qr-code": QRCodeExample,
  rating: RatingExample,
  "relative-time": RelativeTimeExample,
  spinner: SpinnerExample,
  status: StatusExample,
  "theme-switcher": ThemeSwitcherExample,
  tree: TreeExample,
  "page-header": PageHeaderExample,
  "brand-logo": BrandLogoExample,
  "empty-state": EmptyStateExample,
  "form-section": FormSectionExample,
  "search-field": SearchFieldExample,
  "stat-card": StatCardExample,
  "settings-section": SettingsSectionExample,
};

export function Preview({ name }: { name: keyof typeof items }) {
  const Example = examples[name];
  return <div data-preview-name={name} className="flex min-w-0 w-full items-center justify-center text-foreground"><Example /></div>;
}
