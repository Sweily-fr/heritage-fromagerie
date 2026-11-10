/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // TEMPORAIRE : page Plateaux en refonte. Redirection 307 (non permanente)
      // pour que Google conserve l'URL. Supprimer ce bloc pour réactiver la page.
      {
        source: "/plateaux-de-fromages",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
