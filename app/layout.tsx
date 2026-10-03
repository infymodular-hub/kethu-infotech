import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], display: 'swap' })
const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'KETHU INFOTECH | Corporate IT Training | Workato | MuleSoft | Salesforce | DevOps',
  description:
    'Enterprise corporate training provider delivering Workato, MuleSoft, Salesforce, DevOps, Python, AI, and cloud training for companies across India.',
  keywords: [
    'Corporate Training',
    'Workato Training',
    'MuleSoft Training',
    'Salesforce Training',
    'Python Training',
    'DevOps Training',
    'AI Training',
    'Enterprise Learning',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'KETHU INFOTECH | Enterprise Corporate IT Training',
    description:
      'Enterprise corporate training delivered by certified experts in Workato, MuleSoft, Salesforce, DevOps, Python, AI and cloud technologies.',
    type: 'website',
    url: 'https://www.kethuinfotech.com',
    siteName: 'KETHU INFOTECH',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#04070f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
