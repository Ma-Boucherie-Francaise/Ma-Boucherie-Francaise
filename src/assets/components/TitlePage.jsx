import { useEffect } from "react";

export default function TitlePage({ title }) {
  useEffect(() => {
    document.title = `Ma Boucherie Française — ${title}`;
  }, []);
}
