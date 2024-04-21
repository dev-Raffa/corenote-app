import '../styles/global.scss';
import { Header } from '../components/layout/header';
import { fontFamily } from '../styles/fonts/inter';
import { Providers } from '../providers';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fontFamily.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
