'use client'

import ReviewWrapper from "../ReviewWrapper";
import dayjs from "dayjs";
import { FaExclamationTriangle } from "react-icons/fa";
import { ReviewListProps } from "@/app/lib/definitions";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ProductOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function ReviewList({ reviewResult, query }: ReviewListProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">(
    "default"
  );
  const reviewFilter: MenuProps["items"] = [
    {
      key: "asc",
      label: "Rating (Low to High)",
      icon: <ArrowUpOutlined />,
      onClick: () => setSortOrder("asc"),
    },
    {
      key: "desc",
      label: "Rating (High to Low",
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

  const sortedReviews = [...reviewResult].sort((a, b) => {
    if (sortOrder === "asc") return a.rating - b.rating
    if (sortOrder === "desc") return b.rating - a.rating
    return 0
  })

  return (
    <div className="px-1 md:px-2 lg:px-8">
      <div className="flex justify-end px-6 pb-2">
        <Dropdown menu={{ items: reviewFilter }}>
          <button className="flex flex-row font-normal text-base">
            Filtered By
            <DownOutlined />
          </button>
        </Dropdown>
      </div>
      <div>
        {sortedReviews.length > 0 ? (
          <ReviewWrapper
            reviewData={sortedReviews.map((r) => ({
              review_id: r.review_id,
              product_id: r.product_id,
              image_url: r.image_url,
              username: r.username,
              product_name: r.product_name,
              created_at: dayjs(r.created_at).format("YYYY-MM-DD"),
              rating: r.rating,
              review: r.review,
            }))}
          />
        ) : (
          <div className="text-xl text-center">
            <FaExclamationTriangle className="inline text-custom-yellow mx-2" />
            No data related to &quot;{query}&quot; found in our reviews
          </div>
        )}
      </div>
    </div>
    )
  }
