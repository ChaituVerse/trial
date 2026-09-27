import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Lumaroz Industries', description: 'Building technology for what comes next.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
