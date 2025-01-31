import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';

export const metadata: Metadata = {
  title: 'masakinihirota',
  description: `ネットという情報の洪水の中から真っ先に価値のある情報を拾い上げるWebサービス。
  適切な距離感のある友人を作る。
  ネット上の悪意をなくす。`,
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="ja"
      className={`${manrope.className}`}
    >
      <body className="">
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  );
}
