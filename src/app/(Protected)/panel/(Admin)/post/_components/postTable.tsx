"use client";
import Image from "next/image";

import { ChevronDownIcon, Loader2, Trash2 } from "lucide-react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { AddButton } from "./add-button";
import { ActionButton } from "./action-button";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { BulkDeletePost } from "@/app/(Backend)/actions/post/bulkDelete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";

export type Type = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  category: any;
  no_of_posts: number;
  filetype: string;
};

export const columns: ColumnDef<Type>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="rounded"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="rounded"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Id</div>,
    cell: ({ row }) => {
      return <div className="text-center ">{parseInt(row.id) + 1}</div>;
    },
  },

  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      console.log(row.original.filetype);
      if (row.original.filetype !== "Video")
        return (
          <>
            <Image
              id="image"
              width={80}
              height={40}
              src={process.env.NEXT_PUBLIC_URL + "" + row.getValue("imageUrl")}
              alt="cover image"
              className="drop-shadow-lg "
            />
          </>
        );
      else if (row.original.filetype === "Video") {
        return (
          <>
            <video width="320" height="240" controls preload="none">
              <source
                src={
                  process.env.NEXT_PUBLIC_URL + "" + row.getValue("imageUrl")
                }
                width={80}
                height={40}
              />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </>
        );
      }
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return <div className="">Title</div>;
    },
    cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const DynamicHeader = dynamic(
        () => import("../../../../../../lib/innerHtmlClient"),
        {
          ssr: false,
          loading: () => <p>Loading...</p>,
        }
      );
      return (
        <div className="capitalize">
          <DynamicHeader rawHTML={row.getValue("description")} />
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return (
        <div className="capitalize">
          <Badge>{row.original.category?.title || "--"}</Badge>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "postTags",
  //   header: ({ column }) => {
  //     return (
  //       <div className="text-right">
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Number of Tags
  //           <ChevronDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       </div>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     const tag = row.getValue("postTags") as number[];
  //     const tagLength = tag.length;

  //     return (
  //       <div className="lowercase text-right mr-4">
  //         <Badge variant={"secondary"}>{tagLength}</Badge>
  //       </div>
  //     );
  //   },
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <ActionButton data={row.original} />;
    },
  },
];

export function PostTable({ data }: { data: any }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 20, // Set the page size to 20
      },
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const SelectedRowsIds = table
    .getFilteredSelectedRowModel()
    .flatRows.map((item) => item.original.id);
  const SelectedRowsImages = table
    .getFilteredSelectedRowModel()
    .flatRows.map((item) => item.original.imageUrl);

  const handleBulkDelete = async () => {
    setLoading(true);
    const res = await BulkDeletePost(SelectedRowsIds, SelectedRowsImages);
    setLoading(false);
    setOpen(false);

    if (res.success) {
      toast.success(res.success);
      table.resetRowSelection();
    } else {
      toast.error(res.error);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Search By Title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm mr-4"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="mr-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto space-x-2 flex items-center">
          <AddButton />

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                disabled={SelectedRowsIds.length === 0}
                variant="destructive"
                size="sm"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to
                  permanently delete this file from our servers?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleBulkDelete}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4 mr-2" />{" "}
                      Loading..{" "}
                    </>
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
