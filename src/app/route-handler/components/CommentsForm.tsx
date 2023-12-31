"use client";

import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useState } from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

enum SelectableForms {
  create = "0",
  edit = "1",
}

type CommenstFormProps = {
  products: {
    name: string;
    SKU: string;
    _count: {
      comments: number;
    };
  }[];
};

export default function CommenstForm({ products }: CommenstFormProps) {
  const [selectedForm, setSelectedForm] = useState<string>();

  function handleChanege(value: string) {
    setSelectedForm(value);
  }

  return (
    <div>
      <Label>Select a form to make CRUD operation</Label>
      <Select value={selectedForm} onValueChange={handleChanege}>
        <SelectTrigger>
          <SelectValue placeholder="Select a form" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={SelectableForms.create.toString()}>
            Create comment
          </SelectItem>
          <SelectItem value={SelectableForms.edit.toString()}>
            Edit comment
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="py-4" />
      {selectedForm === SelectableForms.create && (
        <CreateForm products={products} />
      )}
      {selectedForm === SelectableForms.edit && (
        <EditForm products={products} />
      )}
    </div>
  );
}
