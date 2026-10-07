"use client";
import { Feature } from "../../../registry/blocks/feature";
export default function FeatureExample() {
  return (
    <Feature
      features={[
        {
          id: "workshop",
          title: "Workshop collaboration",
          description:
            "People sharing ideas around a workshop table. Photo by StartupStockPhotos on Pixabay.",
          image:
            "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
        },
        {
          id: "desk",
          title: "A focused coding desk",
          description:
            "A notebook computer displaying code. Photo by AlfredMuller on Pixabay.",
          image:
            "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg",
        },
        {
          id: "meeting",
          title: "Room for shared decisions",
          description: "An empty boardroom ready for a meeting. Photo by Jo_Johnston on Pixabay.",
          image:
            "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg",
        },
      ]}
    />
  );
}
