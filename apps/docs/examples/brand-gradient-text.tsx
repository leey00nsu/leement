import { BrandGradientText } from "../../../registry/ui/brand-gradient-text";

export default function BrandGradientTextExample() {
  return <div className="space-y-4 text-center">
    <p className="text-3xl font-semibold"><BrandGradientText>Color belongs to your brand.</BrandGradientText></p>
    <p className="text-sm text-muted-foreground">The gradient follows light and dark brand tokens.</p>
  </div>;
}
