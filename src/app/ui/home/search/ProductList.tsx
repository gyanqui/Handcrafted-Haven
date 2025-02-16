"use client";

import { Dropdown } from "antd";
import {
  DownOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import ProductWrapper from "../ProductWrapper";
import type { MenuProps } from "antd";
import { FaExclamationTriangle } from "react-icons/fa";
import { ProductListProps } from "@/app/lib/definitions";
import { useState } from "react";

export default function ProductList({
  productResult,
  query,
}: ProductListProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">(
    "default"
  );
  const productFilter: MenuProps["items"] = [
    {
      key: "asc",
      label: "Price (Low to High)",
      icon: <ArrowUpOutlined />,
      onClick: () => setSortOrder("asc"),
    },
    {
      key: "desc",
      label: "Price (High to Low)",
      icon: <ArrowDownOutlined />,
      onClick: () => setSortOrder("desc"),
    },
    {
      key: "default",
      label: "Default",
      icon: <ProductOutlined />,
      onClick: () => setSortOrder("default"),
    },
  ];

  const sortedProducts = [...productResult].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0; // default order
  });

  return (
    <div className="px-1 md:px-2 lg:px-8">
      <div className="flex justify-end pb-2">
        <Dropdown menu={{ items: productFilter }}>
          <button className="flex flex-row font-normal text-base">
            Filtered By
            <DownOutlined />
          </button>
        </Dropdown>
      </div>
      <div>
        {sortedProducts.length > 0 ? (
          <ProductWrapper
            products={sortedProducts.map((product) => ({
              product_id: product.product_id,
              name: product.name,
              price: product.price,
              image_url: product.image_url,
              averageRate: product.averageRate,
            }))}
          />
        ) : (
          <div className="text-xl text-center">
            <FaExclamationTriangle className="inline text-custom-yellow mx-2" />
            No data related to &quot;{query}&quot; found in our products
          </div>
        )}
      </div>
    </div>
  );
}
