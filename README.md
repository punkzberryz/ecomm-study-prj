This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started (For Admin Dashboard)

First, create a db-container:

```bash
make postgres
```

then migrate the schema with:

```bash
pnpm prisma db push
```

And finally, run the dev server:

```bash
pnpm dev
```
