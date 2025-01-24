"use client";
import { poppins_black, poppins_medium } from "./font";
import Image from "next/image";

export function ArtistStory() {
  return (
    <div className={`bg-yellow-300 px-24 py-8`}>
      <h2 className={`${poppins_black.className} text-3xl mb-4 text-center md:text-left`}>ARTIST STORY</h2>
      <div className="flex flex-col md:flex-row">
        <div className="max-w-72 h-auto flex-none mb-8 md:mb-0 md:mr-8">
          <Image
            src="/placeholder/user-placeholder.webp"
            width={300}
            height={400}
            alt="Artist's photo"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-between">
        <div className="h-[250px] overflow-hidden" >
              <h3 className={`${poppins_medium.className} text-2xl mb-4`}>[Name]</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, maiores? Eum ea tempora natus. Consequuntur incidunt
                molestias velit saepe eum tempore labore, placeat sed magnam
                magni quod ducimus. Neque, praesentium temporibus dignissimos
                ullam tenetur soluta laudantium, voluptates ab quis suscipit
                maiores ut cupiditate. Repudiandae magni a repellat ab, deserunt
                facilis odio aut dignissimos, qui, eos consequuntur ducimus
                tempore minus. Dicta provident id nemo inventore natus atque
                obcaecati molestias, consequatur fuga doloribus officia suscipit
                laudantium. Eos ipsa sint quasi ducimus maiores magni adipisci
                modi obcaecati blanditiis ab, iste asperiores quia, architecto
                magnam illum vel nam enim illo doloremque ullam optio totam
                accusamus fugiat alias. Odio dolor aut sunt vero consectetur
                quis alias! Dolorum odit minus necessitatibus nemo quasi
                voluptas excepturi enim, nobis quod expedita hic quos numquam
                natus soluta fugiat nostrum quis odio ea cupiditate, alias
                accusamus. Sequi beatae dolorem id saepe? Iure, beatae quaerat,
                commodi perspiciatis rem error praesentium quos sapiente aliquam
                quasi quis excepturi porro! Laboriosam quos ullam illo dolore
                aperiam neque quo, ratione maiores, eum debitis consectetur quas
                perferendis dolorum nisi consequuntur soluta in tempore a vitae
                non, fugit reprehenderit reiciendis magni aliquid? Pariatur
                deleniti impedit minima nisi ex sunt vitae omnis doloribus eius
                reprehenderit asperiores quo modi, optio perferendis, tempore
                eligendi repellendus similique saepe. Ipsum esse provident
                aliquam distinctio sed asperiores voluptatem et autem eveniet
                eligendi, voluptates porro culpa ipsam repellat rem neque
                exercitationem fugit tempora ullam. Asperiores praesentium odit,
                nulla temporibus nobis at doloremque ea ratione tempore ex ad
                incidunt iste vero nisi dolorem quidem eaque neque explicabo aut
                quis, delectus, non vel! A placeat ipsa totam enim fuga ratione
                aliquid sint odio minus consequuntur qui tempora, quos officiis
                sed accusamus omnis, sequi fugiat nesciunt asperiores voluptatum
                mollitia voluptas consectetur fugit veritatis? Vero eum autem
                error tempora voluptates praesentium omnis, perspiciatis maiores
                a iste pariatur voluptatibus totam quae reiciendis beatae soluta
                odio sequi quas! Eum nobis commodi aliquam reprehenderit facilis
                id illum, ad debitis veniam velit! Accusamus itaque deserunt ad
                accusantium omnis est quos aperiam! Magni quibusdam cupiditate
                ipsum quis delectus, adipisci cum tempore dignissimos deleniti
                quo in iusto similique fuga ipsa assumenda. Minus officia ad
                maxime saepe consequatur! Ea voluptatibus, magnam est quo
                molestias delectus deleniti, animi ipsa similique alias veniam
                illo commodi voluptatem atque totam? Ratione culpa iure nam
                necessitatibus impedit dolorem quas velit placeat, nobis
                maiores, possimus facere unde? Accusamus vitae sit suscipit
                molestiae blanditiis voluptates voluptas assumenda doloremque
                magni laboriosam numquam minima incidunt adipisci voluptate,
                repellendus consequuntur reiciendis error doloribus tempora
                dolore maxime provident sint. Molestias aliquid nostrum optio.
                Distinctio eaque aliquid nam est atque sunt aspernatur mollitia
                dolorum rem commodi modi voluptates, possimus dolore et
                molestias aliquam earum ducimus expedita suscipit cupiditate.
                Accusantium iure, dolor amet nostrum soluta qui sed officia
                quis, vel adipisci voluptatibus laudantium! Tempore alias neque
                animi magnam expedita, veritatis dolorum voluptatum cum maxime,
                quam exercitationem. Id hic illum quo, sunt tempore vel possimus
                deleniti, commodi, autem nihil provident harum neque aliquam
                tenetur natus dolorem repellendus veniam enim. Error incidunt
                necessitatibus aliquid ipsam, voluptatibus nulla! Explicabo, est
                beatae.
              </p>
            </div>
          <div className="flex justify-center md:justify-end">
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Check it out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
