"use client";

import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Section } from "../../styles/GlobalComponents";

const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Section>
      <CookieConsent
        style={{ background: "#2B373B", color: "#a8a99e" }}
        buttonStyle={{
          color: "#3f4133",
          fontSize: "13px",
          borderRadius: "5px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience. By clicking "I
        understand", you agree to the use of all cookies.
      </CookieConsent>
    </Section>
  );
};

export default CookieBanner;
