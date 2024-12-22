import type { Metadata } from 'next';
import '../globals.css';
import { DM_Serif_Text, Noto_Serif_KR, Nanum_Gothic } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding-card-choi.vercel.app'),
  title: '하영♥소희',
  description: '25년 1월 18일 토요일 오후 5시 30분 가천 컨벤션에서 결혼합니다'
};
const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700']
});
const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif'
});
const notoSerif = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-serif'
});
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${nanumGothic.className} ${dmSerif.variable} ${notoSerif.variable}`}>{children}</body>
    </html>
  );
}
