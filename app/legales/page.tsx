"use client";

const COMPANY_NAME = "TechServices";
const OWNER_NAME = "Nom du propriétaire / Société"; 
const ADDRESS = "Douala, Cameroun";
const EMAIL = "TechServices@gmail.com";
const PHONE = "+237 622 000 000";
const REGISTRATION = "N° Registre du commerce / NIF: à renseigner";
const HOST = "Nom de l'hébergeur (ex: Vercel, OVH, Hostinger...)";
const HOST_ADDRESS = "Adresse de l'hébergeur";

export default function Legal() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Logo centré, petit et propre */}
      <div className="mb-6">
        <img src="/logoTS2.png" alt="TechServices" className="w-12" />                     
      </div>

      <div className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-md p-8">
        
        <header className="mb-6 text-center">
          <h1
            className="text-2xl font-semibold"
            style={{ color: "#068bbf" }}
          >
            Mentions légales
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Informations légales du site {COMPANY_NAME}.
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            1. Éditeur du site
          </h2>
          <p className="mt-2 text-sm leading-6">
            Le site est édité par <strong>{OWNER_NAME}</strong> (nom commercial : <strong>{COMPANY_NAME}</strong>),
            dont le siège social est : {ADDRESS}.
          </p>
          <ul className="mt-3 ml-4 list-disc text-sm leading-6">
            <li>
              Contact :{" "}
              <a href={`mailto:${EMAIL}`} className="underline">
                {EMAIL}
              </a>
              {PHONE ? ` • Tel: ${PHONE}` : ""}
            </li>
            <li>{REGISTRATION}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            2. Directeur de publication
          </h2>
          <p className="mt-2 text-sm leading-6">
            Le directeur de la publication est : <strong>{OWNER_NAME}</strong>.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            3. Hébergeur
          </h2>
          <p className="mt-2 text-sm leading-6">
            Le site est hébergé par : <strong>{HOST}</strong>, {HOST_ADDRESS}.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            4. Propriété intellectuelle
          </h2>
          <p className="mt-2 text-sm leading-6">
            Tous les contenus présents sur ce site sont protégés par le droit de la propriété intellectuelle.
            Toute reproduction ou utilisation sans autorisation est interdite.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            5. Données personnelles
          </h2>
          <p className="mt-2 text-sm leading-6">
            Les informations collectées sont utilisées uniquement dans le cadre de l’activité du site.
            Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            Contact :{" "}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            6. Cookies
          </h2>
          <p className="mt-2 text-sm leading-6">
            Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez les accepter, les refuser
            ou les configurer depuis votre navigateur ou le panneau de consentement.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            7. Responsabilité
          </h2>
          <p className="mt-2 text-sm leading-6">
            {COMPANY_NAME} ne peut garantir l'absence d'erreurs dans les informations du site et décline toute
            responsabilité en cas de dommage lié à son utilisation.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            8. Conditions d'utilisation
          </h2>
          <p className="mt-2 text-sm leading-6">
            Toute utilisation abusive (piratage, diffusion illicite, etc.) est strictement interdite.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-medium" style={{ color: "#068bbf" }}>
            9. Modification des mentions
          </h2>
          <p className="mt-2 text-sm leading-6">
            {COMPANY_NAME} peut mettre à jour ces mentions à tout moment. La version en ligne fait foi.
          </p>
        </section>

        <footer className="mt-8 border-t pt-6 text-sm text-gray-600 text-center">
          <p>
            Pour toute question :{" "}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {COMPANY_NAME} — Tous droits réservés.
          </p>
        </footer>
      </div>
    </main>
  );
}
