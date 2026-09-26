import { Button } from "../../../registry/ui/button";
import { PageHeader } from "../../../registry/patterns/page-header";

export default function PageHeaderExample() {
  return <PageHeader className="w-full">
    <PageHeader.Content>
      <PageHeader.Title>Members</PageHeader.Title>
      <PageHeader.Description>Manage members of your workspace.</PageHeader.Description>
    </PageHeader.Content>
    <PageHeader.Actions><Button>Add member</Button></PageHeader.Actions>
  </PageHeader>;
}
