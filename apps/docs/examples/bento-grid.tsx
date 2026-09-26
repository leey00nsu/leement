import { BentoGrid, BentoGridItem } from "../../../registry/blocks/bento-grid";

export default function BentoGridExample() {
  return <BentoGrid className="w-full">
    <BentoGridItem className="md:col-span-3" eyebrow="Plan" title="Organize work"><span className="text-2xl font-semibold text-data-accent-foreground">01</span></BentoGridItem>
    <BentoGridItem className="md:col-span-3" eyebrow="Share" title="Collaborate clearly"><span className="text-2xl font-semibold text-data-accent-foreground">02</span></BentoGridItem>
  </BentoGrid>;
}
