"use client";

import { Button } from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  productSKU: z.string(),
  commentId: z.string(),
  title: z.string(),
  body: z.string(),
});

type CommenstFormProps = {
  products: {
    name: string;
    SKU: string;
    _count: {
      comments: number;
    };
  }[];
};

export default function EditForm({ products }: CommenstFormProps) {
  const [comments, setComments] = useState<{ id: number; title: string }[]>([]);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function handleProductChange(value: string) {
    const data = await (
      await fetch("/api/comments/get-all-by-product/" + value)
    ).json();

    setComments(data.comments);

    form.setValue("productSKU", value);
    form.resetField("commentId");
  }

  async function handleCommentChange(value: string) {
    const data = await (await fetch("/api/comments/get-by-id/" + value)).json();

    form.setValue("title", data.comment.title);
    form.setValue("body", data.comment.body);
    form.setValue("commentId", value, {
      shouldTouch: true,
      shouldDirty: true,
    });
  }

  async function handleUpdate(values: z.infer<typeof formSchema>) {
    const data = await (
      await fetch("/api/comments/update", {
        method: "PUT",
        body: JSON.stringify({
          id: parseInt(values.commentId),
          title: values.title,
          body: values.body,
        }),
      })
    ).json();

    router.refresh();
    setComments([]);
    form.reset();
  }

  async function handleDelete() {
    const url = new URL("http://localhost:3000/api/comments/delete");
    url.searchParams.set("id", form.getValues("commentId"));
    console.log(url);

    const data = await (
      await fetch(url.href, {
        method: "DELETE",
      })
    ).json();

    router.refresh();
    setComments([]);
    form.reset();
  }

  return (
    <>
      <h2>Update or Delete comment</h2>
      <div className="py-4"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleUpdate)}>
          <div className="flex flex-col lg:flex-row gap-4">
            <FormField
              control={form.control}
              name="productSKU"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Select product</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={handleProductChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem value={product.SKU} key={product.SKU}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commentId"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Select comment</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={handleCommentChange}
                      defaultValue={field.value}
                      disabled={comments.length === 0}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            comments.length === 0
                              ? "Select a product first"
                              : "Select a comment"
                          }
                        />
                      </SelectTrigger>
                      {comments.length > 0 && (
                        <SelectContent>
                          {comments.map((comment) => (
                            <SelectItem
                              value={comment.id.toString()}
                              key={comment.id}
                            >
                              {comment.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      )}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {form.getValues("commentId") && (
            <>
              <div className="py-4"></div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Comment title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="py-2"></div>
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Comment text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <div className="py-4"></div>
          <div className="flex gap-2 flex-wrap">
            <Button type="submit" size="lg" variant="default">
              Update
            </Button>
            <Button
              type="button"
              onClick={handleDelete}
              size="lg"
              variant="outline"
              className="border-2 border-destructive text-destructive"
            >
              Delete
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
