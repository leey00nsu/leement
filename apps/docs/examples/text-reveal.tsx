import { TextReveal } from "../../../registry/ui/text-reveal";
import { BrandGradientText } from "../../../registry/ui/brand-gradient-text";
export default function Example() {
  return <h3 className="max-w-sm text-center text-2xl font-semibold leading-relaxed"><TextReveal><TextReveal.Item>나만의</TextReveal.Item>{" "}<TextReveal.Item><BrandGradientText>목소리로</BrandGradientText></TextReveal.Item><br /><TextReveal.Item>Make it yours.</TextReveal.Item></TextReveal></h3>;
}
