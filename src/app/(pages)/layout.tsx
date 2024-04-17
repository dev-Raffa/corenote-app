import './styles/global.scss';
import { Header } from '../components/layout/header';
import { fontFamily } from '../styles/fonts/inter';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fontFamily.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
