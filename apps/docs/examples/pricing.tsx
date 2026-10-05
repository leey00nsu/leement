"use client";
import { useState } from "react";
import { Pricing } from "../../../registry/blocks/pricing";
export default function PricingExample() {
  const [selected, setSelected] = useState("");
  return (
    <div className="w-full min-w-0">
      <Pricing
        yearlyBadge="Annual billing"
        onPlanSelect={(plan, frequency) =>
          setSelected(
            `Local demo selected ${plan.name}, ${frequency}. No payment occurred.`,
          )
        }
        plans={[
          {
            id: "hobby",
            name: "Hobby",
            price: { monthly: "Free forever", yearly: "Free forever" },
            description: "For a personal project.",
            features: ["One workspace", "Community support"],
            cta: "Get started",
          },
          {
            id: "pro",
            name: "Pro",
            price: { monthly: 90, yearly: 75 },
            description: "For a growing team.",
            features: ["Unlimited projects", "Priority support"],
            cta: "Select Pro",
            popular: true,
          },
          {
            id: "enterprise",
            name: "Enterprise",
            price: { monthly: "Contact us", yearly: "Contact us" },
            description: "For larger organizations.",
            features: ["Dedicated support", "Advanced access control"],
            cta: "Talk to us",
          },
        ]}
      />
      <p role="status" className="px-4 text-sm text-muted-foreground">
        {selected}
      </p>
    </div>
  );
}
