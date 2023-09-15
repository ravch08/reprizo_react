import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState("");

  function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleShowScroll() {
    const scrollClass = window.scrollY > 150 ? "show" : "";
    setShowScroll(scrollClass);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShowScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = `scrollTop ${showScroll}`;

  return (
    <div className={scrollToTop} onClick={handleScroll}>
      <svg width="12" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
      </svg>
    </div>
  );
};

export default ScrollTop;
