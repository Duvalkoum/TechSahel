import React from "react";

const ConfidentialitePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6 md:p-12">

      {/* Espace pour le logo */}
      <div className="mb-6">
        <img src="/logoTS2.png" alt="TechServices" className="w-12" />
      </div>

      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6 md:p-12">
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#068bbf" }}
        >
          Politique de Confidentialité
        </h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            1. Introduction
          </h2>
          <p>
            La présente Politique de Confidentialité a pour objectif d’expliquer
            comment <strong>TechServices</strong> collecte, utilise, partage et
            protège vos informations personnelles lorsque vous utilisez notre
            plateforme.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            2. Données collectées
          </h2>
          <p>
            Nous collectons différentes catégories de données pour assurer le
            fonctionnement du service :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Informations de compte : nom, email, numéro de téléphone.</li>
            <li>Informations de localisation (pour les interventions).</li>
            <li>Historique des demandes et interactions.</li>
            <li>Données techniques (appareil, IP, navigateur).</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            3. Utilisation des données
          </h2>
          <p>Les données collectées permettent de :</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Créer et gérer votre compte utilisateur.</li>
            <li>Mettre en relation les clients avec des techniciens qualifiés.</li>
            <li>Assurer le suivi des demandes et des interventions.</li>
            <li>Améliorer l’expérience utilisateur et la sécurité.</li>
            <li>Communiquer avec vous (notifications, mises à jour).</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            4. Partage des données
          </h2>
          <p>
            TechServices ne vend aucune donnée personnelle.  
            Nous pouvons toutefois partager certaines informations avec :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Les techniciens, uniquement pour réaliser l’intervention.</li>
            <li>Les partenaires techniques (hébergement, sécurité, SMS, email).</li>
            <li>Les autorités en cas d’obligation légale.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            5. Droits des utilisateurs
          </h2>
          <p>
            Conformément à la législation en vigueur, vous disposez des droits suivants :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Droit d’accès à vos données.</li>
            <li>Droit de rectification.</li>
            <li>Droit de suppression.</li>
            <li>Droit d’opposition et de limitation du traitement.</li>
          </ul>
          <p className="mt-2">
            Pour exercer vos droits, contactez :  
            <strong>TechServices@gmail.com</strong>
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            6. Sécurité
          </h2>
          <p>
            TechServices applique des mesures de sécurité avancées pour protéger
            vos données : cryptage, accès restreints, surveillance des accès,
            sauvegardes régulières.  
            Cependant, aucun système n’est infaillible, et nous encourageons
            l’utilisation de mots de passe sécurisés.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            7. Cookies
          </h2>
          <p>
            TechServices utilise des cookies pour améliorer votre navigation,
            analyser les performances et personnaliser votre expérience.
            Consultez notre page dédiée « Cookies » pour plus de détails.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            8. Modifications
          </h2>
          <p>
            Nous pouvons mettre à jour cette politique à tout moment.  
            Les modifications seront publiées sur cette page, avec une date de mise
            à jour.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>
            9. Contact
          </h2>
          <p>
            Pour toute question concernant la confidentialité, contactez :  
            <strong>TechServices@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConfidentialitePage;
