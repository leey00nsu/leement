import { Stories } from "../../../registry/ui/stories";
export default function Example() {
  return <div className="w-full max-w-xs"><Stories presentation="viewer" autoAdvanceMs={4000} items={[
  {
    id: "hintersee",
    src: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg",
    alt: "Hintersee lake reflecting mountains and trees",
    author: "jplenio"
  },
  {
    id: "ulmener-maar",
    src: "https://cdn.pixabay.com/photo/2018/10/08/22/34/lake-3733649_640.jpg",
    alt: "Autumn trees reflected in Lake Ulmener Maar",
    author: "Katzenfee50"
  }
]} /></div>;
}
