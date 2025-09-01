//- components/meta.tsx

export const MetadataTitle = (): string => {
  return process.env.NEXT_PUBLIC_PAGE_TITLE ?? "Title";
};

export const MetadataDesc = (): string => {
  return process.env.NEXT_PUBLIC_PAGE_DESC ?? "Description";
};
