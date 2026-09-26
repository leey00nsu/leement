"use client";
import { Banner } from "../../../registry/ui/banner";
import { Button } from "../../../registry/ui/button";
export default function BannerExample() { return <Banner title="Bring Leement into your project" description="Install the theme, then add the source you need from the registry." action={<Button asChild><a href="/getting-started">Get started</a></Button>} dismissible />; }
