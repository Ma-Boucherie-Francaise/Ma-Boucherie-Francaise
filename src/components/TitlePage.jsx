import { useEffect } from "react";

export default function TitlePage({ title }) {
  useEffect(() => {
    document.title = `${title} Ma Boucherie Française — Sublimez vos tables avec ma Boucherie Française.`;
  }, []);
}
