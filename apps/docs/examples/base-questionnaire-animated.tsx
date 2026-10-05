"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { toast } from "../../../registry/ui/toast";

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "../../../registry/ui/questionnaire";

const items = [
  { name: "task", required: true },
  { name: "review", required: true },
  { name: "delivery", required: true },
] as const;

function QuestionnaireAnimated() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    toast("Agent workflow saved", {
      description: `Task: ${formData.get("task") ?? "None"} · Review: ${formData.get("review") ?? "None"} · Delivery: ${formData.get("delivery") ?? "None"}`,
    });
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="task"
      items={items}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem ref={stageEntrance} name="task" required>
        <QuestionnaireTitle>What should the agent do?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose the task for this run.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="implement">
            Implement the requested change
          </QuestionnaireChoice>
          <QuestionnaireChoice value="debug">
            Debug the current behavior
          </QuestionnaireChoice>
          <QuestionnaireChoice value="review">
            Review the implementation
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem ref={stageEntrance} name="review" required>
        <QuestionnaireTitle>
          How should the work be reviewed?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          Select the verification depth.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="targeted">
            Targeted checks
          </QuestionnaireChoice>
          <QuestionnaireChoice value="complete">
            Complete test suite
          </QuestionnaireChoice>
          <QuestionnaireChoice value="manual">
            Tests and manual QA
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem ref={stageEntrance} name="delivery" required>
        <QuestionnaireTitle>
          How should the result be delivered?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose the final handoff format.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="summary">
            Concise summary
          </QuestionnaireChoice>
          <QuestionnaireChoice value="diff">
            Summary and changed files
          </QuestionnaireChoice>
          <QuestionnaireChoice value="handoff">
            Detailed review handoff
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Save workflow</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}

import { Toaster as ExampleToaster } from "../../../registry/ui/toast";

export default function Example() {
  return (
    <>
      <ExampleToaster />
      <QuestionnaireAnimated />
    </>
  );
}

import { animate } from "motion/mini";
import {
  motionSeconds,
  motionEasing,
} from "../../../registry/lib/leement-motion";
// Callback ref observes native fieldset visibility; primitive semantics stay intact.
function stageEntrance(node: HTMLFieldSetElement | null) {
  if (!node) return;
  let animation: ReturnType<typeof animate> | undefined;
  const reveal = () => {
    if (node.hidden) return;
    animation?.stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animation = animate(
      node,
      { opacity: [0, 1], transform: ["translateY(8px)", "translateY(0px)"] },
      {
        duration: motionSeconds(node, "duration-normal"),
        ease: motionEasing(node),
      },
    );
  };
  reveal();
  const observer = new MutationObserver(reveal);
  observer.observe(node, { attributes: true, attributeFilter: ["hidden"] });
  return () => {
    observer.disconnect();
    animation?.stop();
  };
}
