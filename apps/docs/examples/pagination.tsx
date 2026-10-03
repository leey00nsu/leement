"use client";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "../../../registry/ui/pagination";

export default function PaginationExample() {

return (<Pagination><PaginationContent><PaginationItem><PaginationPrevious href="?page=1" disabled /></PaginationItem><PaginationItem><PaginationLink href="?page=1" isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="?page=2">2</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="?page=2" /></PaginationItem></PaginationContent></Pagination>);
}
