import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  DataTable,
} from "../../../registry/ui/table";
export default function Example() {
  return (
    <div className="w-full space-y-8">
      <Table>
        <TableCaption>October invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV-001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$120</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV-002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$80</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">$200</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <DataTable<{ id: string; name: string }>
        caption="Empty member search"
        data={[]}
        rowId={(row) => row.id}
        columns={[{ id: "name", header: "Name", cell: (row) => row.name }]}
        emptyMessage="No members match this search"
      />
      <a
        href="/patterns/data-table"
        className="text-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-ring"
      >
        Advanced Data Table examples
      </a>
    </div>
  );
}
