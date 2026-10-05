import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pricing, type PricingPlan } from "./pricing";
import { Feature } from "./feature";
import { Hero } from "./hero";
import { Footer } from "./footer";
import { Stats } from "./stats";
import { Team } from "./team";
import { Testimonial } from "./testimonial";

beforeEach(() => {
  vi.stubGlobal("matchMedia", (query: string) => ({ matches: false, media: query, onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return true; } }));
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
});
afterEach(() => {cleanup();vi.restoreAllMocks();vi.unstubAllGlobals();});
const plans:PricingPlan[]=[{id:"pro",name:"Pro",price:{monthly:90,yearly:75},description:"Team plan",features:["Unlimited projects"],cta:"Select Pro",popular:true},{id:"locked",name:"Locked",price:{monthly:"Contact us",yearly:"Contact us"},description:"Unavailable",features:[],cta:"Select Locked",disabled:true}];

test("pricing period changes visible prices and passes the selected period to the app action",async()=>{
 const user=userEvent.setup();const select=vi.fn();render(<Pricing plans={plans} onPlanSelect={select}/>);
 await user.click(screen.getByRole("tab",{name:"Yearly"}));
 expect(screen.getByRole("tab",{name:"Yearly"}).getAttribute("aria-selected")).toBe("true");expect(screen.getByText("$75")).toBeTruthy();
 await user.click(screen.getByRole("button",{name:"Select Pro"}));expect(select).toHaveBeenCalledWith(plans[0],"yearly");await user.click(screen.getByRole("button",{name:"Select Locked"}));expect(select).toHaveBeenCalledTimes(1);
});

test("controlled pricing period stays app-owned and link/empty plans have explicit behavior",async()=>{
 const user=userEvent.setup();const change=vi.fn();const {rerender}=render(<Pricing plans={plans} frequency="monthly" onFrequencyChange={change}/>);await user.click(screen.getByRole("tab",{name:"Yearly"}));expect(change).toHaveBeenCalledWith("yearly");expect(screen.getByRole("tab",{name:"Monthly"}).getAttribute("aria-selected")).toBe("true");expect(screen.getByRole("button",{name:"Select Pro"}).hasAttribute("disabled")).toBe(true);
 rerender(<Pricing plans={[{...plans[0]!,url:"/checkout/pro"}]}/>);expect(screen.getByRole("link",{name:"Select Pro"}).getAttribute("href")).toBe("/checkout/pro");rerender(<Pricing plans={[]}/>);expect(screen.getByRole("status").textContent).toBe("No plans available.");
});

const features=[{id:"first",title:"Editable source",image:"/source.png",description:"Change your source."},{id:"second",title:"Shared theme",image:"/theme.png",description:"Change your tokens."}];
test("feature keyboard expansion shares the selected image and supports controlled and empty data",async()=>{
 const user=userEvent.setup();const change=vi.fn();const {rerender}=render(<Feature features={features} onValueChange={change}/>);screen.getByRole("button",{name:"Editable source"}).focus();await user.tab();await user.keyboard("{Enter}");expect(change).toHaveBeenCalledWith("second");expect(screen.getByRole("button",{name:"Shared theme"}).getAttribute("aria-expanded")).toBe("true");const images=screen.getAllByRole("img",{name:"Shared theme"});expect(images.every(image=>image.getAttribute("src")==="/theme.png")).toBe(true);
 rerender(<Feature features={features} value="first" onValueChange={change}/>);await user.click(screen.getByRole("button",{name:"Shared theme"}));expect(screen.getByRole("button",{name:"Editable source"}).getAttribute("aria-expanded")).toBe("true");rerender(<Feature features={[]}/>);expect(screen.getByRole("status").textContent).toBe("No features to display.");
});

test("hero connects announcement/actions, partner links, paused marquee and video media source",async()=>{
 const user=userEvent.setup();render(<Hero announcement={{label:"New",title:"Release notes",href:"/updates"}} primaryAction={{text:"Start",url:"/start"}} logos={[{name:"Studio",url:"/studio"}]} video={{src:"/walkthrough.mp4",title:"Walkthrough"}}/>);
 expect(screen.getByRole("link",{name:/Release notes/}).getAttribute("href")).toBe("/updates");expect(screen.getByRole("link",{name:"Start"}).getAttribute("href")).toBe("/start");const partners=screen.getByRole("region",{name:"Trusted by teams building thoughtful products"});expect(within(partners).getByRole("link",{name:"Studio"}).getAttribute("href")).toBe("/studio");await user.click(within(partners).getByRole("button",{name:"Pause marquee"}));expect(within(partners).getByRole("button",{name:"Play marquee"})).toBeTruthy();expect(document.querySelector('video[aria-label="Walkthrough"]')?.getAttribute("src")).toBe("/walkthrough.mp4");
});

test("footer brand/navigation, metric destinations and editorial author data can be replaced",()=>{
 const {rerender}=render(<Footer logo={{title:"Studio",alt:"Studio logo",src:"/mark.svg",url:"/home"}} menuItems={[{title:"Product",links:[{text:"Docs",url:"/docs"}]}]} bottomLinks={[]} copyright="© Studio"/>);expect(screen.getByRole("link",{name:"Studio"}).getAttribute("href")).toBe("/home");expect(screen.getByRole("link",{name:"Docs"}).getAttribute("href")).toBe("/docs");
 rerender(<Stats stats={[{id:"one",value:"2×",label:"Delivery"}]} link={{text:"Report",url:"/report"}}/>);expect(screen.getByText("2×")).toBeTruthy();expect(screen.getByRole("link",{name:"Report"}).getAttribute("href")).toBe("/report");
 rerender(<Team members={[]}/>);expect(screen.getByRole("status").textContent).toBe("No team members to display.");
 rerender(<Testimonial quote="A consistent product." author={{name:"Alex",role:"Engineer",avatar:{src:"",alt:"Alex"}}}/>);expect(document.querySelector("blockquote")?.textContent).toContain("A consistent product.");expect(screen.getByText("Engineer")).toBeTruthy();
});
