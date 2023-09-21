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

const formSchema = z.object({
  productSKU: z.string(),
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

export default function CreateForm({ products }: CommenstFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/comments/add", {
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await res.json();

    router.refresh();
  }

  return (
    <>
      <h2>Create comment</h2>
      <div className="py-2"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="productSKU"
            render={({ field }) => (
              <FormItem className="lg:w-96 w-full">
                <FormLabel>Product</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
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
                <FormDescription>
                  You will add a comment to the product you select
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <div className="py-4"></div>
          <Button size="lg">Submit</Button>
        </form>
      </Form>
    </>
  );
}
