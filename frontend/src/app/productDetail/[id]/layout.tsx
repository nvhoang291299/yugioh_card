
// import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import LabTabs from '@/components/labTab/LabTab';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <LabTabs />
    </div>
  )
}
