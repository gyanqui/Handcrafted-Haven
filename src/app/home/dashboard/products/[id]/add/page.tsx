import AddProductForm from "@/app/ui/home/dashboard/AddProductForm";
import AddSellerForm from "@/app/ui/home/dashboard/AddSellerForm";
import { getSellerIdByUserId, listCategories } from "@/app/lib/data";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  if (!session || !session.user) {
    return <p>Loading</p>;
  }

  const { user_id, email }: { user_id?: string; email?: string } = session.user;
  const [seller, categories] = await Promise.all([
    getSellerIdByUserId(user_id),
    listCategories(),
  ]);

  return (
    <>
      {user_id ? (
        <>
          {!seller ? (
            <AddSellerForm user_id={user_id} email={email} />
          ) : (
            categories &&
            user_id && (
              <AddProductForm
                categories={categories}
                seller_id={seller?.seller_id || undefined}
                user_id={user_id}
              />
            )
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
