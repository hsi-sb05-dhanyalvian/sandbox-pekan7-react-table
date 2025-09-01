//- libs/meta.ts

export function getMetaPageTitle(page: string = ''): string {
  const title = process.env.NEXT_PUBLIC_PAGE_TITLE ?? 'Title';
  return page ? `${title} | ${page}` : title;
};

export function getMetaPageDesc(): string {
  return process.env.NEXT_PUBLIC_PAGE_DESC ?? 'Description';
};
