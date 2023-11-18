import { useEffect } from "react";

const useIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("show");
        } else {
          item.target.classList.remove("show");
        }
      });
    },
    { rootMargin: "-50px" }
  );

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, [observer]);

  return {};
};

export default useIntersectionObserver;
