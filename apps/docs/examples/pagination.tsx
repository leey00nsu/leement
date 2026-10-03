"use client";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext, PaginationEllipsis } from "../../../registry/ui/pagination";

export default function PaginationExample() {

return (<Pagination><PaginationContent><PaginationItem><PaginationPrevious href="?page=1" disabled><span className="hidden sm:inline">Previous</span></PaginationPrevious></PaginationItem><PaginationItem><PaginationLink href="?page=1" isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="?page=2">2</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis /></PaginationItem><PaginationItem><PaginationNext href="?page=2"><span className="hidden sm:inline">Next</span></PaginationNext></PaginationItem></PaginationContent></Pagination>);
}
