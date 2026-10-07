import { Comparison } from "../../../registry/ui/comparison";
export default function ComparisonExample() {
  return <figure className="w-full max-w-xl space-y-2">
    <Comparison beforeSrc="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg" afterSrc="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg" beforeAlt="Original color photo of Hintersee lake" afterAlt="Black-and-white preview of the same Hintersee photo" className="[&>img]:grayscale" />
    <figcaption className="text-sm text-muted-foreground">Original color → CSS grayscale · photo by jplenio on Pixabay.</figcaption>
  </figure>;
}
