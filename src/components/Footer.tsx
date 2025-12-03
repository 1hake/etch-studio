import useGeneralInfo from "../hooks/useGeneralInfo";

export const Footer = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");

  if (loading) {
    return (
      <footer id="contact" className="bg-background dark:bg-dark-background section-padding">
        <div className="container-custom">
          {/* About/Intro Section Loading */}
          <div className="space-y-4 max-w-4xl mx-auto text-center mb-16">
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-5/6 mx-auto" />
            <div className="skeleton h-6 w-4/5 mx-auto" />
          </div>

          {/* Contact Section Loading */}
          <div className="bg-primary-900 dark:bg-primary-950 text-white section-padding -mx-[calc(50vw-50%)] px-[calc(50vw-50%)]">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="skeleton h-32 w-full" />
                <div className="skeleton h-32 w-full" />
                <div className="skeleton h-32 w-full" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="bg-background dark:bg-dark-background">
      <div className="section-padding">
        <div className="container-custom">
          {/* About/Intro Section */}
          {!error && generalInfo?.intro && (
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Header Image */}
                {generalInfo.image_en_tete && (
                  <div className="order-2 lg:order-1">
                    <img
                      src={generalInfo.image_en_tete}
                      alt="Etch Studio"
                      className="w-full aspect-square rounded-lg shadow-lg object-cover"
                    />
                  </div>
                )}

                {/* Intro Text */}
                <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
                  {generalInfo.intro.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-body-lg text-text-primary dark:text-dark-text-primary leading-relaxed text-balance animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-primary-900 dark:bg-primary-950 text-white">
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-logo bg-no-repeat bg-center bg-contain" />
                  <h3 className="text-display-sm font-bold">ETCH STUDIO</h3>
                </div>
                <p className="text-body-md text-white/80 text-balance">
                  Sculptures, lampes, objets décoratifs.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-body-lg font-semibold">Contact</h4>
                <div className="space-y-3">
                  {!loading && generalInfo?.email && (
                    <a
                      href={`mailto:${generalInfo.email}`}
                      className="flex items-center space-x-3 text-body-md text-white/80 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{generalInfo.email}</span>
                    </a>
                  )}

                  {!loading && generalInfo?.phone && (
                    <a
                      href={`tel:${generalInfo.phone}`}
                      className="flex items-center space-x-3 text-body-md text-white/80 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{generalInfo.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/20 mb-8" />

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-caption text-white/60">
                © {new Date().getFullYear()} Etch Studio. Tous droits réservés.
              </p>
              <p className="text-caption text-white/60">
                Développé Colin Champdavoine
              </p>
              <div>
                <a
                  href="https://champdavoine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption text-white/60 hover:text-white transition-colors duration-200"
                >
                  champdavoine.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
