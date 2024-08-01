"use client";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { useEditContext } from "./editContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useCheckedItemsContext } from "./checkButton";
import { BulkTagDelete } from "@/app/(Backend)/actions/tag/bulkTagDelete";
import { toast } from "sonner";

function EditButton() {
  const { toggleEdit, isEditing } = useEditContext();
  return (
    <div className="flex items-center gap-3   ">
      <BulkDeleteButton />
      <Switch
        checked={isEditing}
        onCheckedChange={toggleEdit}
        id="airplane-mode"
      />
    </div>
  );
}

export default EditButton;

function BulkDeleteButton() {
  const { isEditing } = useEditContext();
  const { checkedItems } = useCheckedItemsContext();
  const [Loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleBulkDelete = async () => {
    setLoading(true);
    const res = await BulkTagDelete(checkedItems);

    if (res.success) {
      toast.success(res.success);
      setOpen(false);
    } else if (res.error) {
      toast.error(res.error);
    } else if (res.info) {
      toast.info(res.info);
    }
    setLoading(false);
  };

  return (
    <>
      {isEditing && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              size={"sm"}
              variant={"destructive"}
              className={""}
              disabled={checkedItems.length === 0}
              type="button"
            >
              <Trash className="h-4  w-4" />
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
              <Button onClick={handleBulkDelete} disabled={Loading}>
                {Loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading..
                  </>
                ) : (
                  "Delete"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
