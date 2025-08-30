<center>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</center>
<br />

# B2/P7: React Table
Materi pekan ke-7. Membangun Tabel Interaktif Modern dengan TanStack React Table di Next.js.

## Demo
<a href="https://admin-panel-psi-taupe.vercel.app/" target="_blank">https://admin-panel-psi-taupe.vercel.app/</a>

## Features
- Grid Table using `React Table` and `React Query`.
- Global search, sorting by column, pagination (information, action), and custom row.
- Source data from API `DummyJSON`.

## Pages
- Dashboard (static).
- Manages > Products (soon).
- Manages > Recipes (API).
- Manages > Users (soon).
- Socials > Posts (API).
- Socials > Comments (API).
- Socials > Quotes (API).
- Settings (soon).

## Installation
Install project with npm

```bash
cd sandbox-pekan6-smart-form
npm install
```

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CONFIG_API_URL`

`NEXT_PUBLIC_CONFIG_API_LIMIT`

`NEXT_PUBLIC_CONFIG_API_DELAY`

`NEXT_PUBLIC_CONFIG_IMAGE_REMOTE`

`NEXT_PUBLIC_CONFIG_NOTIF_TIMEOUT`

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## API References

#### URL
```
https://dummyjson.com
```

#### Get all recipes
```http
GET /recipes/search
```
| Parameter | Type     | Required | Description                                               |
| :-------- | :------- | :------- | :-------------------------------------------------------- |
| `q`       | `string` | `false`  | param to search by specific column                        |
| `select`  | `string` | `false`  | param with comma-separated values to select specific data |
| `limit`   | `number` | `false`  | param to set records per page                             |
| `skip`    | `number` | `false`  | param to set records to skip                              |
| `sortBy`  | `string` | `false`  | param to sort by field name                               |
| `order`   | `string` | `false`  | param to sort order by `asc` or `desc`                    |

#### Get all posts
```http
GET /posts/search
```
| Parameter | Type     | Required | Description                                               |
| :-------- | :------- | :------- | :-------------------------------------------------------- |
| `q`       | `string` | `false`  | param to search by specific column                        |
| `select`  | `string` | `false`  | param with comma-separated values to select specific data |
| `limit`   | `number` | `false`  | param to set records per page                             |
| `skip`    | `number` | `false`  | param to set records to skip                              |
| `sortBy`  | `string` | `false`  | param to sort by field name                               |
| `order`   | `string` | `false`  | param to sort order by `asc` or `desc`                    |

### Get all comments
```http
GET /comments
```
| Parameter | Type     | Required | Description                                               |
| :-------- | :------- | :------- | :-------------------------------------------------------- |
| `select`  | `string` | `false`  | param with comma-separated values to select specific data |
| `limit`   | `number` | `false`  | param to set records per page                             |
| `skip`    | `number` | `false`  | param to set records to skip                              |

### Get all quotes
```http
GET /quotes
```
| Parameter | Type     | Required | Description                                               |
| :-------- | :------- | :------- | :-------------------------------------------------------- |
| `select`  | `string` | `false`  | param with comma-separated values to select specific data |
| `limit`   | `number` | `false`  | param to set records per page                             |
| `skip`    | `number` | `false`  | param to set records to skip                              |

## Tech Stack
![Static Badge](https://img.shields.io/badge/NextJS-v15.4.6-whitesmoke?logo=nextdotjs)<br />
![Static Badge](https://img.shields.io/badge/Tailwind%20CSS-v4.1.12-whitesmoke?logo=tailwindcss)<br />
![Static Badge](https://img.shields.io/badge/React%20Query-v5.85.3-whitesmoke?logo=reactquery)<br />
![Static Badge](https://img.shields.io/badge/React%20Table-v0.1.0-whitesmoke?logo=reacttable)<br />
![Static Badge](https://img.shields.io/badge/Lucide%20React-v0.541.0-whitesmoke?logo=lucide)<br />
![Static Badge](https://img.shields.io/badge/Axios-v1.11.0-whitesmoke?logo=axios)<br />