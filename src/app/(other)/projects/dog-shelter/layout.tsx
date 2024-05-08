import "./styles.css";

import Logo from "./components/Layout/Logo";
import NavLink from "./components/Layout/NavLink";

export const metadata = {
  title: "Dog Shelter",
  description: "A landing page for a dog shelter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <NavLink href="/about" firstLine="ABOUT US" secondLine="WHO WE ARE" />
        </header>
        {children}
        <footer>
          <NavLink
            href="/contact"
            firstLine="CONTACT"
            secondLine="GET IN TOUCH"
          />
        </footer>
      </body>
    </html>
  );
}
