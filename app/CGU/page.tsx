// Exemple : pages/cgu.tsx (remplacez le contenu pour Cookies ou Confidentialité)
import React from "react";

const CGUPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6 md:p-12">

      {/* Espace pour le logo */}
      <div className="mb-6">
        <img src="/logoTS2.png" alt="TechServices" className="w-12" />
      </div>

      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: "#068bbf" }}>
          Conditions Générales d’Utilisation (CGU)
        </h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>1. Présentation du site</h2>
          <p>
            Le site <strong>TechServices</strong> est une plateforme qui permet aux utilisateurs de : rechercher et contacter des techniciens qualifiés, prendre rendez-vous pour des prestations, et suivre l’avancement de leurs demandes. En utilisant le Site, vous acceptez pleinement les présentes Conditions Générales d’Utilisation.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>2. Accès au site</h2>
          <p>
            L’accès au Site est gratuit pour les utilisateurs. TechServices se réserve le droit de modifier, suspendre ou interrompre le Site à tout moment, sans préavis. L’utilisateur est responsable de la confidentialité de ses identifiants.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>3. Utilisation du site</h2>
          <p>
            Vous vous engagez à utiliser le Site conformément à la loi et aux présentes CGU. Toute utilisation frauduleuse, abusive ou nuisible est interdite. Le Site n’est pas responsable des actions des techniciens ou utilisateurs tiers.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>4. Comptes utilisateurs</h2>
          <p>
            La création d’un compte peut être nécessaire pour accéder à certaines fonctionnalités. Vous devez fournir des informations exactes et à jour. TechServices se réserve le droit de suspendre ou supprimer un compte en cas de violation des CGU.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>5. Propriété intellectuelle</h2>
          <p>
            Le contenu du Site (textes, logos, images, designs) est protégé par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>6. Données personnelles</h2>
          <p>
            TechServices collecte et utilise vos données personnelles conformément à sa Politique de confidentialité. Vos informations sont protégées et utilisées uniquement pour le bon fonctionnement du Site.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>7. Responsabilité</h2>
          <p>
            TechServices ne peut être tenu responsable des dommages directs ou indirects liés à l’utilisation du Site. Les prestations effectuées par les techniciens sont sous la responsabilité de ces derniers.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>8. Modification des CGU</h2>
          <p>
            TechServices peut modifier ces CGU à tout moment. Les utilisateurs seront informés via le Site ou par e-mail. L’utilisation continue du Site vaut acceptation des CGU mises à jour.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>9. Loi applicable</h2>
          <p>
            Ces CGU sont régies par la législation camerounaise. Tout litige sera soumis aux tribunaux compétents du Cameroun.
          </p>
        </section>

      </div>
    </div>
  );
};

export default CGUPage;
