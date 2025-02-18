import { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import "./globals.css";
import { 
  poppins

} from "./ui/font";

export const metadata: Metadata = {
  title: {
    template: "%s | Handcrafted HAven",
    default: "Handcrafted Haven"
  },
  description: "Handcrafted Haven is an innovative web application that aims to provide a platform for artisans and crafters to showcase and sell their unique handcrafted items. It serves as a virtual marketplace, connecting talented creators with potential customers who appreciate the beauty and quality of handmade products.  This is a school project of WDD430 BYU-Idaho, contributed by Gabriel Yanqui, Josue Sinaca Gomez, Min-ting Chuang and Carlos Cervantes",
  metadataBase: new URL('https://handcrafted-haven-wheat-iota.vercel.app/')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
