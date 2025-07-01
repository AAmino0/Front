# MyLearnia Platform

**Speak & Study Smart, Not Hard!**

Master languages and ace school subjects with expert mentors in real-time, 1-on-1 tailored sessions.

## About

MyLearnia is a comprehensive learning platform that connects students with expert mentors for personalized education in languages and academic subjects. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Real-time 1-on-1 Sessions**: Connect with expert mentors instantly
- **Language Learning**: Master new languages with native speakers
- **Academic Support**: Get help with school subjects from qualified teachers
- **User Authentication**: Secure login and registration system
- **Profile Management**: Complete user profile and settings
- **Responsive Design**: Works seamlessly on all devices
- **Dark/Light Mode**: Toggle between themes for comfortable learning

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: Formik with Yup validation
- **HTTP Client**: Axios
- **Icons**: React Icons, Lucide React, Heroicons
- **UI Components**: Headless UI
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mylearnia-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── profile/           # User profile pages
│   ├── about/             # About pages
│   ├── support/           # Support pages
│   ├── home/              # Home page components
│   └── ...
├── components/            # Reusable components
├── contexts/              # React contexts
├── hooks/                 # Custom hooks
├── layouts/               # Layout components
├── utils/                 # Utility functions
└── interceptors/          # API interceptors
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
