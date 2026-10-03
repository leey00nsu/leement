import { Stories } from "../../../registry/ui/stories";
export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <Stories
        presentation="viewer"
        autoAdvanceMs={4000}
        items={[
          {
            id: "day",
            src: "/demo-scene.svg",
            alt: "Daytime illustrated hills",
            author: "Day study",
          },
          {
            id: "night",
            src: "/demo-scene-night.svg",
            alt: "Nighttime illustrated hills",
            author: "Night study",
          },
        ]}
      />
    </div>
  );
}
