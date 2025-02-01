import { poppins } from '@/app/ui/fonts';

export default function HandCraftedLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[30px] md:text-[40px]">HandCrafted Haven</p>
    </div>
  );
}
