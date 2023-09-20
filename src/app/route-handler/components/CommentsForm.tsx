"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateForm from "./CreateForm";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
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
