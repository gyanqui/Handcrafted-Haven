import AddProductForm from "@/app/ui/home/dashboard/AddProductForm";
import { getSellerIdByUserId, listCategories } from "@/app/lib/data";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
  const {id: user_id} = await params;

  return (
    <>
      {user_id ? (
        <AsyncWrapper user_id={user_id} />
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

async function AsyncWrapper({ user_id }: { user_id: string }) {
  const [seller, categories] = await Promise.all([
    getSellerIdByUserId(user_id),
    listCategories(),
  ]);
  return (
    <div>
      {seller && categories && user_id && (
        <AddProductForm
          categories={categories}
          seller_id={seller?.seller_id || null}
          user_id={user_id}
        />
      )}
    </div>
  );
}
