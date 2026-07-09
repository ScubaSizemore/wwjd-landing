import { useEffect } from "react";

export const useCanonical = (path: string) => {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `https://wwjd.com${path}`;
    return () => {
      if (link) link.href = "https://wwjd.com";
    };
  }, [path]);
};
