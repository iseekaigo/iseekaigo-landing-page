This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, ensure you are using node v20.7.0

```bash
node -v
nvm use 20.7.0
```

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

Folder Structure:

```
iseekaigo/
├── public/ # Public assets like images, icons, and fonts
├── src/
│ ├── app/ # App Router (pages and layouts)
│ │ ├── layout.tsx # Root layout (shared across all routes)
│ │ ├── page.tsx # Homepage
│ │ ├── about/ # About page
│ │ │ ├── page.tsx
│ │ └── components/ # Components shared within app/
│ ├── assets/ # Static assets (if not moved to public/)
│ ├── components/ # Shared components (e.g., UI buttons, modals)
│ ├── context/ # React Context providers
│ ├── lib/ # Utility functions or libraries
│ ├── styles/ # Global and reusable CSS/SCSS files
│ └── tests/ # Unit and integration tests
├── .eslintrc.json # ESLint config
├── next.config.js # Next.js config
├── package.json
├── tsconfig.json
└── yarn.lock or package-lock.json
```

## Older Version

- Since v1.2.0 We refactored iseekaigo website from react to next and deployed it on firebase.
- To get older version v1.1.1 (stable react js) version. You can get it from here: https://github.com/iseekaigo/iseekaigo-landing-page/releases/tag/v1.1.1

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
