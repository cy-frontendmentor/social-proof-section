// These styles apply to every route in the application
import './globals.css';
import { League_Spartan } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight

const leagueSpartan = League_Spartan({
  variable: '--font-league-spartan',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={leagueSpartan.variable}>
      <body>{children}</body>
    </html>
  );
}
