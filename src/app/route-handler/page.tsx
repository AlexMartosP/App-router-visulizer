import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import prisma from "@/lib/prisma";
import CommenstForm from "./components/CommentsForm";
import { Separator } from "@/components/ui/Separator";
import InlineCode from "@/components/InlineCode";

export default async function Page() {
  const productWComments = await prisma.product.findMany({
    select: {
      name: true,
      SKU: true,
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  return (
    <>
      <h1>Route handlers</h1>
      <p className="mt-4">You can create APIs with route handlers.</p>
      <p className="mt-2">
        Try CRUD comments below and watch the table update.
      </p>
      <p className="mt-1">
        With route handlers the component manually has to&nbsp;
        <InlineCode>refresh()</InlineCode> the page, with Server Actions you can
        call <InlineCode>revalidatePath()</InlineCode> or&nbsp;
        <InlineCode>revalidateTag()</InlineCode>
      </p>
      <div className="py-4"></div>
      <Table>
        <TableCaption>
          A table of products and the amount of comments
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product name</TableHead>
            <TableHead className="text-right">No. of comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productWComments.map((product) => (
            <TableRow key={product.SKU}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell className="text-right">
                {product._count.comments}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator className="my-8" />
      <CommenstForm products={productWComments} />
    </>
  );
}
