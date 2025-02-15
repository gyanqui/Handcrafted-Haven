// "use client";

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { fetchAllSellers } from '@/app/lib/data';
// import { ArtisanCardProps } from '@/app/lib/definitions';

// export default function ArtisansPage() {
//   const [sellers, setSellers] = useState<ArtisanCardProps[]>([]);

//   useEffect(() => {
//     const getSellers = async () => {
//       const fetchedSellers = await fetchAllSellers();
//       setSellers(fetchedSellers);
//     };

//     getSellers();
//   }, []);

//   const truncateText = (text, limit) => {
//     const words = text.split(' ');
//     if (words.length > limit) {
//       return words.slice(0, limit).join(' ') + '...';
//     }
//     return text;
//   };

//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-5'>
//       {sellers.map((seller) => (
//         <div key={seller.seller_id} className='card cursor-pointer flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden h-full'>
//           <div className='image-container relative w-full md:w-1/2 h-56 md:h-full'>
//             <Image 
//               src={seller.profile_image_url || '/placeholder/user-placeholder.webp'}
//               alt={`${seller.firstname} ${seller.lastname}`}
//               layout='fill'
//               objectFit='contain'
//               className='rounded-t-lg md:rounded-l-lg md:rounded-none'
//             />
//           </div>
//           <div className='info p-4 flex flex-col justify-between w-full md:w-1/2'>
//             <h3 className='text-lg font-bold mb-2'>{seller.firstname} {seller.lastname}</h3>
//             <p className='text-sm text-gray-600 mb-3'>{seller.address}</p>
//             <p className='mb-3'>{truncateText(seller.introduction, 20)}</p>
//             <Link href={`/artisans/${seller.seller_id}`} passHref>
//               <p className='text-blue-600 hover:text-blue-800'>more...</p>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Page() {
  return (
    <>Artisan collection page</>
  )
}