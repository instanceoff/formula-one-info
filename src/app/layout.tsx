import Header from '@components/header';
import LastWinner from '@components/winner';
import '@styles/globals.css';
import { getLastWin } from '@utils/formulaRequests';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { driver, race } = await getLastWin();

  return (
    <html lang='en'>
      <body>
        <Header />
        {/* <LastWinner driver={driver} race={race} /> */}
        {children}
      </body>
    </html>
  );
}
