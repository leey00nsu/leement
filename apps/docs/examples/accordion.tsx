"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../registry/ui/accordion";

export default function AccordionExample() {

return (<Accordion className="w-full max-w-lg" defaultValue={["ownership"]}><AccordionItem value="ownership"><AccordionTrigger>Who owns the source?</AccordionTrigger><AccordionContent>Your project owns and can edit the installed source.</AccordionContent></AccordionItem><AccordionItem value="theme"><AccordionTrigger>Can I change the theme?</AccordionTrigger><AccordionContent>Override semantic tokens for your brand.</AccordionContent></AccordionItem><AccordionItem value="later" disabled><AccordionTrigger>Coming later</AccordionTrigger><AccordionContent>Not available.</AccordionContent></AccordionItem></Accordion>);
}
