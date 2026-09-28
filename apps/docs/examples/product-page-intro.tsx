import { Button } from "../../../registry/ui/button";
import { ProductPageIntro } from "../../../registry/patterns/product-page-intro";

export default function ProductPageIntroExample() {
  return <ProductPageIntro className="w-full" eyebrow="Workspace" title="Members" meta={<span className="text-xs text-muted-foreground">42 members · 5 teams</span>} description="Bring your team together and manage access in one place." aside={<Button>Add member</Button>} />;
}
