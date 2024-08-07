"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActionButton } from "./action-button";
import { AddButton } from "./add-button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { BulkDeleteCategory } from "@/app/(Backend)/actions/category/bulkDeleteCategory";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Input } from "postcss";

export function CategoryTable({ data, children }: any) {
  let idCounter = 1;
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [Loader, setLoader] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item: any) => item !== value));
    }
  };
  const handleBulkDelete = async () => {
    setLoader(true);
    const res = await BulkDeleteCategory(checkedItems);
    if (res.success) {
      setCheckedItems([]);
      toast.success(res.success);
    } else if (res.error) {
      toast.error(res.error);
    } else if (res.info) {
      toast.info(res.info);
    }
    setLoader(false);
  };

  const DynamicHeader = dynamic(
    () => import("../../../../../../lib/innerHtmlClient"),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]"></TableHead>
            <TableHead className="w-[10px]">Id</TableHead>
            <TableHead className="w-[130px]">Cover Image</TableHead>
            <TableHead className="w-[110px]">Title</TableHead>
            <TableHead>Descriptions</TableHead>
            <TableHead className="text-center">Section</TableHead>
            <TableHead className="text-center">Number of Posts</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.categories?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>
                {
                  <input
                    type="checkbox"
                    value={item.id}
                    checked={checkedItems.includes(item.id)}
                    onChange={handleCheckboxChange}
                  />
                }
              </TableCell>
              <TableCell>{idCounter++}</TableCell>
              <TableCell>
                <Image
                  width={80}
                  height={40}
                  src={process.env.NEXT_PUBLIC_URL + item.imageUrl}
                  alt="cover image"
                  className="drop-shadow-lg"
                />
              </TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>
                <DynamicHeader rawHTML={item?.description} />
              </TableCell>

              <TableCell className="text-center">
                {item.section?.title || "--"}
              </TableCell>

              <TableCell className="text-center">
                {item.posts?.length}
              </TableCell>

              <TableCell className="text-right">
                <div className="text-right flex items-center justify-center gap-4">
                  <ActionButton
                    id={item.id}
                    title={item.title}
                    meta_title={item.metaTitle}
                    description={item.description}
                    meta_description={item.metaDescription}
                    section={item.section?.id || ""}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddButton />
      {checkedItems.length !== 0 && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="w-full">
            <Button
              size={"sm"}
              variant={"destructive"}
              className="w-14 h-14 fixed bottom-10 right-28 rounded-full "
            >
              {!Loader ? (
                <Trash />
              ) : (
                <Loader2 className="animate-spin h-4 w-4 " />
              )}
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
              {" "}
              <Button onClick={handleBulkDelete} disabled={Loader}>
                {!Loader ? (
                  "Delete"
                ) : (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 " />
                    Loading..
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
