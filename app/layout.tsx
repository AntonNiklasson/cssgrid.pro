import type { Metadata } from 'next';
import { TutorialProvider } from '@/contexts/TutorialContext';
import '@/index.css';

export const metadata: Metadata = {
  title: 'CSSGrid.pro - Interactive CSS Grid Tutorial',
  description:
    'Master CSS Grid through hands-on practice. Learn by doing, not just reading. Each lesson builds on the last, taking you from beginner to confident.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TutorialProvider>{children}</TutorialProvider>
      </body>
    </html>
  );
}
