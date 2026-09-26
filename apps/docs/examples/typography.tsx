"use client";
import { Typography } from "../../../registry/ui/typography";
export default function TypographyExample() { return <div className="space-y-2"><Typography as="h2" variant="heading">Clear type, shared intent</Typography><Typography variant="body">The same hierarchy works across light and dark surfaces.</Typography><Typography variant="muted">Muted text supports the content without competing with it.</Typography><Typography as="code" variant="code">--lm-typography-size-base</Typography></div>; }
