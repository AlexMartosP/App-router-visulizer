import { Skeleton } from "@/components/Skeleton";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/utils";

type CommentsProps = {
  sku: string;
};

export default async function Comments({ sku }: CommentsProps) {
  const comments = await prisma.comment.findMany({
    where: {
      productId: sku,
    },
    include: {
      product: true,
    },
  });

  await wait(3000);

  return (
    <>
      <div className="py-2"></div>
      <div className="flex flex-col gap-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3 className="font-semibold">{comment.title}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

Comments.Loading = function CommentsLoading() {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2, 3].map((t) => (
        <div key={t}>
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-4 mt-2" />
        </div>
      ))}
    </div>
  );
};
