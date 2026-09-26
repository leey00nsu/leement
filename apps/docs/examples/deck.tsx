"use client";
import { Deck } from "../../../registry/blocks/deck";
export default function DeckExample() { return <Deck slides={[{ id: "language", title: "One design language", content: "CopySinger light and Leesfield dark share semantic rules." }, { id: "source", title: "Own the source", content: "Install only the registry components your project needs." }, { id: "build", title: "Build your product", content: "Compose patterns and blocks from the same design tokens." }]} />; }
