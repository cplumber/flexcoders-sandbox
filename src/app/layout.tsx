import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const metadata: Metadata = {
  title: "FlexCoders Stripe Playground",
  description: "Standalone Stripe mockups and issue docs.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
