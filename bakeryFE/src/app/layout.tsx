import "./globals.css";
import Footer from "./module/footer"

export const metadata = {
  title: 'Good Bakery',
  description: 'un bar/pasticcieria gestita dagli studenti sotto la supervisione di un adulto, con lo scopo di aiutare nell&apos;apprendimento degli studenti',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="shortcut icon" href="/favicon.png"/>
      </head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

