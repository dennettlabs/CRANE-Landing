import { notFound } from 'next/navigation';

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  // Ensure this page is completely inaccessible in production
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  return <>{children}</>;
}
