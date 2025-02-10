import Link from "next/link";

export default function notFound() {
  return (
    <div className="not-found">
      <h2>Page Introuvable !</h2>
      <div className="infos">
        <p>Impossible de trouver la page demandée</p>
        <Link href="/" className="return-link">
          Return Home
        </Link>
      </div>
    </div>
  );
}
