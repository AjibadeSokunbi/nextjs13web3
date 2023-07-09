import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import { Providers } from "./providers";
import SideBar from "@/components/SideBar";
import Headers from "@/components/Headers";
import Headers2 from "@/components/Headers2";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
const instrument_Sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Metadapp - All in one Web3 platform.",
  description:
    "Metadapp provides non technical users with the tools they need to manage all of their on-chain activities in one place. Users can use metadapp to explore blockchain data for actionable insights, protect themselves from scams & rug pulls, Buy & Sell tokens and NFT’s, interact with different  protocols across several chains without leaving the platform. DEFI | DEX Trading | Tradeviewer | NFT | Blockchain Analytics | Portfolio Management | Wallet tracking | Smart Alerts | Scam Check | Prevent Rug pulls | Revoke Wallet Approvals | EVM | Non EVM| DeFi Lama Alternative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instrument_Sans.className}>
        <SideBar />
        <Headers2 />
        <div className="-z-50">
          <Providers>
            <Headers />
            <div className="md:ml-20  overflow-y-auto">{children}</div>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
