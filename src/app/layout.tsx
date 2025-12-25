import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { Cairo } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-cairo',
});


export const metadata: Metadata = {
  title: 'Nour Dental | ابتسامتك الصحية تبدأ من هنا',
  description: 'رعاية أسنان احترافية لجميع أفراد العائلة باستخدام أحدث التقنيات وبدون ألم.',
  icons: {
    icon: 'https://tse3.mm.bing.net/th/id/OIP.TD80T-ssqDQsG-ZP2rNhwgHaG8?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn('font-body antialiased', cairo.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
