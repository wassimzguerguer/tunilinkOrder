// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
//import Example from "@/components/HeroSection";
import HeaderResponsive from "@/components/HeaderResponsive";
import HeroOfficial from "@/components/HeroOfficial";
import PlatformsGrid from "@/components/PlatformsGrid";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
//import FeaturesSection from "@/components/FeaturesSection"
export default function HomePage() {
  return (
    <>
      {/* <Header />
      <HeroSection /> */}
      {/* <Example /> */}
       <HeaderResponsive />
      <HeroOfficial />
      {/* <FeaturesSection /> */}
       <PlatformsGrid />
        <Footer />
       

<Toaster
  position="top-right"
  toastOptions={{
    style: {
      borderRadius: '8px',
      background: '#fff',
      color: '#333',
      fontSize: '14px',
      fontWeight: 500,
    },
    success: {
      style: {
        background: '#ecfdf5',
        color: '#065f46',
        border: '1px solid #34d399',
      },
      iconTheme: {
        primary: '#10b981',
        secondary: '#ecfdf5',
      },
    },
    error: {
      style: {
        background: '#fef2f2',
        color: '#991b1b',
        border: '1px solid #f87171',
      },
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fef2f2',
      },
    },
  }}
/>

       
    </>
  );
}
