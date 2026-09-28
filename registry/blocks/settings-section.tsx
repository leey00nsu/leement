import * as React from "react";
import { FormSection } from "@/components/patterns/form-section";
import { Card, CardContent } from "@/components/ui/card";
function SettingsSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) { return <FormSection title={title} description={description}><Card><CardContent className="space-y-4 pt-6">{children}</CardContent></Card></FormSection>; }
export { SettingsSection };
