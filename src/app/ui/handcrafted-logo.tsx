import { poppins } from '@/app/ui/font';
import Link from 'next/link';

export default function HandCraftedLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row items-center leading-none text-white`}
    >
    <Link href="/home">
      <p className="text-[30px] md:text-[40px]">HandCrafted Haven</p>
    </Link>
    </div>
  );
}