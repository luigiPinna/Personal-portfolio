"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import CookieBanner from "../components/CookieBanner/cookieBanner";

export const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Container>
      <Header />
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </Container>
  );
};
