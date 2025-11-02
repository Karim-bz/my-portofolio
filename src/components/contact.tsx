/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTailwindBreakpoint } from "./hooks/breakpoint";
import { useTheme } from "./context/theme-context";

export const ContactSection = () => {
  const [openMessagePage, setOpenMessagePage] = useState(false);

  const { breakpoint, orientation } = useTailwindBreakpoint();
  const { isDarkMode } = useTheme();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (openMessagePage) {
      setTimeout(() => {
        router.push("/send-message");
      }, 500);
    }
  }, [openMessagePage]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      id="contact"
    >
      {orientation === "landscape" ? (
        <div
          className={`flex flex-row items-center justify-center gap-10 xl:gap-20 transition-opacity ${
            openMessagePage ? "opacity-0" : "opacity-100"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className={`absolute rotate-270 left-[-170px] top-[100px] my-5 italic text-6xl font-primary text-header font-bold ${
                isDarkMode
                  ? "drop-shadow-[0_1.1px_1.1px_rgba(1,1,1,1)]"
                  : "drop-shadow-[0_1.1px_1.1px_rgba(255,255,255,1)]"
              } z-[999] whitespace-nowrap"`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              {"DEVELOPER"}
            </motion.div>
            <Image
              src="/profile_enhanced.webp"
              alt="Karim Bouzid"
              draggable={false}
              width={400}
              height={0}
              style={{ height: "auto" }}
            />
          </motion.div>
          <div className="flex flex-col max-w-[350px] lg:max-w-[400px] xl:max-w-[550px]">
            <TextRandomizerEffect
              className="text-2xl md:text-3xl lg:text-5xl font-semibold text-header"
              words={"Hello World!"}
              placeholder
            />

            <p className="text-md xl:text-lg mb-8 text-cfgray mt-5 text-justify font-inter">
              I&apos;m <strong>Karim</strong>, a{" "}
              <strong>Software Engineer</strong> with over two years of
              experience in developing{" "}
              <strong>web and mobile applications</strong>. I specialize in
              <strong> front-end development</strong>, crafting responsive and
              user-focused interfaces using modern technologies. Driven by a
              passion for innovation and quality, I&apos;m motivated to build
              features that not only work efficiently but also deliver great
              user experiences.
            </p>

            <p className="text-md xl:text-lg mb-8 text-cfgray text-justify font-inter">
              Beyond coding, I care about <strong>clean design</strong>,{" "}
              <strong>intuitive interactions</strong>, and
              <strong> scalable architectures</strong> — always aiming to create
              solutions that are both functional and impactful.
            </p>

            <CustomButton
              onClick={() => {
                window.location.href = "mailto:me@bouzidkarim.com";
                // setOpenMessagePage(true);
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <IoSend className="text-xl" />
                <div>Send me a message</div>
              </div>
            </CustomButton>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center gap-10 pr-10 pl-12 py-5 transition-opacity ${
            openMessagePage ? "opacity-0" : "opacity-100"
          }`}
          id="contact"
        >
          <div className="flex flex-col max-w-[350px] xl:max-w-[800px]">
            <TextRandomizerEffect
              className="text-2xl md:text-3xl lg:text-5xl font-semibold text-header"
              words={"Hello World!"}
              placeholder
            />

            <p className="text-sm md:text-md lg:text-lg mb-5 md:mb-8 text-cfgray mt-3 md:mt-5 text-justify">
              I&apos;m <strong>Karim</strong>, a{" "}
              <strong>Software Engineer</strong> with over two years of
              experience developing <strong>web and mobile applications</strong>
              . I specialize in
              <strong> front-end development</strong>, building responsive and
              user-centered interfaces with modern frameworks and technologies.
              Motivated by innovation and quality, I aim to deliver features
              that are both efficient and enjoyable to use.
            </p>

            <p className="text-sm md:text-md lg:text-lg mb-5 md:mb-8 text-cfgray text-justify">
              Beyond coding, I focus on <strong>clean design</strong>,{" "}
              <strong>intuitive user experiences</strong>, and{" "}
              <strong>scalable architectures</strong> — always striving to
              create solutions that are functional, reliable, and meaningful.
            </p>

            <CustomButton
              onClick={() => {
                window.location.href = "mailto:me@bouzidkarim.com";
                // setOpenMessagePage(true);
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <IoSend className="text-xl" />
                <div>Send me a message</div>
              </div>
            </CustomButton>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <Image
              src="/profile_enhanced.webp"
              alt="Karim Bouzid"
              draggable={false}
              width={
                breakpoint === "xs" || breakpoint === "sm"
                  ? 300
                  : breakpoint === "md"
                  ? 350
                  : breakpoint === "lg"
                  ? 400
                  : 500
              }
              height={0}
              style={{ height: "auto" }}
            />
          </motion.div>
        </div>
      )}
      {/* only animate the footer when already scrolled to the very bottom */}
      <motion.footer
        className="fixed bottom-5 landscape:bottom-15 justify-center mt-10 text-cfgray text-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={
          scrollPosition + window.innerHeight >=
          document.body.scrollHeight - 100
            ? { opacity: 1, y: 0 }
            : {}
        }
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        &copy; 2025 Karim Bouzid. All rights reserved.
      </motion.footer>
    </div>
  );
};
