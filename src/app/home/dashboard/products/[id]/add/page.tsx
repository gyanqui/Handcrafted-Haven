import AddProductForm from "@/app/ui/home/dashboard/AddProductForm";
import { getSellerIdByUserId, listCategories } from "@/app/lib/data";

type Params = {
  id: string;
};

export default function Page({ params }: { params: Params }) {
  const user_id = params.id;

  return <AsyncWrapper user_id={user_id} />;
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
