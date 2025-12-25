import React from "react";

export default function Launch() {
  const goToSite = () => {
    window.location.href = "https://www.r3rcm.com/";
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative frame-container">
      {/* Decorative Frame */}
      <div className="absolute inset-6 pointer-events-none frame-border"></div>

      {/* Content */}
      <div className="relative max-w-2xl w-full text-center px-10 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/r3rcm-logo.png"
            alt="R3 RCM Logo"
            className="h-14 object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
          Welcome to R3 RCM
        </h1>

        <p className="text-lg md:text-xl text-blue-700 mb-10 leading-relaxed">
          R3 RCM is a trusted revenue cycle management partner helping
          healthcare providers streamline operations, improve cash flow, and
          focus on what matters most — patient care.
        </p>

        <button
          onClick={goToSite}
          className="bg-orange-600 hover:bg-orange-700 text-white text-xl font-semibold px-10 py-5 rounded-lg transition duration-300 shadow-lg mb-10"
        >
          Launch R3 RCM Website
        </button>

        {/* Leadership */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Company Leadership
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-800">
            {/* Founder */}
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">
                Rajshekhar Reddy
              </p>
              <p className="text-sm uppercase tracking-wider text-gray-600 mt-1">
                Founder
              </p>
            </div>

            {/* Ampersand */}
            <div className="text-4xl font-serif text-orange-500 mx-4">&</div>

            {/* Co-Founder */}
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">
                Aqeeduddin Khan
              </p>
              <p className="text-sm uppercase tracking-wider text-gray-600 mt-1">
                Co-Founder & Director
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative CSS */}
      <style>{`
        .frame-border {
          border-radius: 32px;
        }

        .frame-border::before,
        .frame-border::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
        }

        /* Outer decorative line */
        .frame-border::before {
          border: 3px solid #c2410c; /* dark orange */
          opacity: 0.9;
        }

        /* Inner ornamental offset */
        .frame-border::after {
          inset: 14px;
          border: 1.5px dashed #c2410c;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
