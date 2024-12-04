import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
