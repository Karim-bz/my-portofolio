'use client';
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { SideBar } from "@/components/sidebar";
import { handleScrollTo } from "@/lib/utilfunctions";
import { Project } from "@/components/project";
import { Experience } from "@/components/experience";
import { ContactSection } from "@/components/contact";
import { HomeSection } from "@/components/home";
import { LazySection } from "@/components/ui/lazy-section";
import { ViewCVButton } from "@/components/ui/curriculum-vitae";
import { SocialMediaLinks } from "@/components/ui/social-media";
import { useTailwindBreakpoint } from "@/components/hooks/breakpoint";
import { FaAnglesDown } from "react-icons/fa6";
import { ThemeChanger } from "@/components/ui/theme-changer";
import { useTheme } from "@/components/context/theme-context";

function Home() {
  const [scrollIconOpacity, setScrollIconOpacity] = React.useState(0);
  const handleScroll = () => {
    setScrollIconOpacity(80 - window.scrollY);
  };

  const { breakpoint } = useTailwindBreakpoint();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden landscape:px-30">
      {
        isDarkMode ? <Spotlight height={breakpoint == 'xs' ? 850 : breakpoint == 'md' ? 1000 : breakpoint == 'lg' ? 1200 : 1380} />
        : <Spotlight height={breakpoint == 'xs' ? 850 : breakpoint == 'md' ? 1000 : breakpoint == 'lg' ? 1200 : 1380}
        gradientFirst = "radial-gradient(68.54% 68.72% at 60.02% 31.46%, hsla(30, 50%, 70%, .08) 0, hsla(30, 45%, 50%, .02) 50%, hsla(30, 40%, 35%, 0) 80%)"
        gradientSecond = "radial-gradient(50% 50% at 50% 60%, hsla(30, 55%, 75%, .06) 0, hsla(30, 45%, 45%, .02) 80%, transparent 100%)"
        gradientThird = "radial-gradient(50% 50% at 50% 60%, hsla(30, 50%, 70%, .04) 0, hsla(30, 40%, 35%, .02) 80%, transparent 100%)" />
      }
      
      <SocialMediaLinks />
      <ViewCVButton />
      <ThemeChanger />
      <SideBar />
      {scrollIconOpacity > 0 && (
        <div className="fixed flex flex-col justify-end items-center bottom-[50px] left-0 right-0 space-y-3 transition duration-200 z-999 text-header" style={{ opacity: scrollIconOpacity / 100 }}>
          <div className="select-none text-xs">Scroll</div>
          <FaAnglesDown
            className="animate-pulse transition text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#project1");
            }}
          />
        </div>
      )}
      <LazySection id="home">
        <HomeSection />
      </LazySection>

      <LazySection id="project1">
        <Project
          title={'Fly Delivery'}
          description={"An application for fast food ordering and delivery, it connects you to your favorite restaurants, providing a seamless and hassle-free fast food ordering experience."}
          imageUrl={"/fly-delivery.png"}
          logo={"/fly_delivery_logo.webp"}
          link={"https://play.google.com/store/apps/details?id=tn.flydelivery.client"}
          number={1}
          breakpoint={breakpoint}
          techstacks={['Flutter', 'Dart', 'Firebase', 'PHP']}
          // project_story_path={"/projects/fly-delivery"}
        />
      </LazySection>

      <LazySection id="experience">
        <Experience />
      </LazySection>
      <LazySection id="contact">
        <ContactSection />
      </LazySection>
    </main>
  );
}

export default Home;