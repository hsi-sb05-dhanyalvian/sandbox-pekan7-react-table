//- app/socials/comments/page.tsx

'use client';

import React from "react";
import { ApiClient } from "@/libs/api";
import { ScrollToTop } from "@/libs/util";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/table/table";
import { columns } from "./column";
import { CommentResponse } from "./type";

const ApiQuotes = async (
  page: number,
  limit: number,
  globalFilter: string
): Promise<CommentResponse> => {
  const skip = (page - 1) * limit;
  const { data } = await ApiClient.get('/comments', {
    params: {
      q: globalFilter,
      // select: 'image,name,difficulty,cuisine,mealType,ingredients',
      limit: limit,
      skip: skip,
      // delay: 3000,
    }
  });
  ScrollToTop();

  return data;
}

const SocialQuotesPage = () => {
  const [page, setPage] = React.useState(1);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [debouncedFilter, setDebouncedFilter] = React.useState(globalFilter);
  const perPage = 15;

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(globalFilter);
    }, 1000);
    return () => clearTimeout(handler);
  }, [globalFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ['socials', 'quotes', page, debouncedFilter],
    queryFn: () => ApiQuotes(page, perPage, debouncedFilter),
  });

  return (
    <DataTable
      title="Social Comments"
      columns={columns}
      data={data?.comments || []}
      pageSize={perPage}
      totalRows={data?.total || 0}
      page={page}
      setPage={setPage}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      loading={isLoading}
      searchPlaceholder="Search..."
    />
  );
};

export default SocialQuotesPage;
