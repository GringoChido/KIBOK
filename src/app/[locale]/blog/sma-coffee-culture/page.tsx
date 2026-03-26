import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Coffee Culture in San Miguel de Allende — Ki'bok Coffee SMA Blog",
  description:
    "Discover the specialty coffee scene in San Miguel de Allende. From the best cafes in SMA to coffee rituals in a UNESCO World Heritage city, here is where to get good coffee in San Miguel.",
};

export default function SmaCoffeeCulture() {
  return (
    <article className="bg-kibok-off-white pb-24 pt-32">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
        >
          &larr; Back to Blog
        </Link>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src={IMAGES.parroquiaEvening}
            alt="La Parroquia church in San Miguel de Allende at golden hour with warm evening light"
            fill
            className="object-cover photo-warm"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <h1 className="mt-8 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-kibok-ink">
          Coffee Culture in San Miguel de Allende
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <time className="font-body text-sm text-kibok-warm-gray">
            March 26, 2026
          </time>
          <span className="font-body text-sm text-kibok-warm-gray">·</span>
          <span className="font-body text-sm text-kibok-warm-gray">
            9 min read
          </span>
        </div>

        <div className="prose-kibok mt-12 space-y-6">
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            San Miguel de Allende has been named one of the world&apos;s best
            cities by Travel + Leisure for nearly a decade running. Visitors
            come for the colonial architecture, the art galleries, the
            festivals, and the food. Increasingly, they also come for the
            coffee. Over the past five years, a wave of specialty coffee shops
            has transformed SMA from a place where you drank cafe de olla on a
            park bench into a genuine coffee destination with beans sourced from
            farms a few hundred kilometers south.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            As a UNESCO World Heritage city that draws expats, artists, and
            travelers from every continent, San Miguel has a unique coffee
            culture shaped by the collision of Mexican tradition, international
            expectations, and a growing appreciation for single origin quality.
            Here is what makes drinking coffee in this city different from
            anywhere else.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            Where Can You Get Good Coffee in San Miguel de Allende?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            You can get good coffee in San Miguel de Allende at a growing number
            of specialty cafes concentrated in the Centro historico and the
            surrounding colonias. The best cafes in SMA share a few things in
            common: they source from Mexican farms, they roast in small batches
            (often on-site or nearby), and they employ baristas trained in
            extraction and latte art. Ki&apos;bok Coffee on Diez de Sollano y
            Dávalos is part of this movement, serving organic, single origin
            beans from Chiapas and Oaxaca in a space designed for both quick
            espressos and slow pour-over sessions.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Beyond the specialty shops, San Miguel retains its traditional coffee
            culture. Corner tiendas still serve cafe de olla, the piloncillo-
            and cinnamon-sweetened clay-pot coffee that predates espresso machines
            in Mexico by centuries. Market stalls in the Mercado de Artesanias
            sell bags of Veracruz and Chiapas beans roasted dark in the regional
            style. This coexistence of old and new is part of what makes the San
            Miguel de Allende coffee scene so distinctive.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Makes Coffee Culture in SMA Different From Other Mexican Cities?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            What sets San Miguel&apos;s coffee culture apart is its
            international community. Unlike Mexico City or Guadalajara, where
            the specialty coffee boom is driven primarily by young Mexican
            professionals, SMA&apos;s cafe scene serves an audience that
            includes American and Canadian retirees, European artists, Japanese
            visitors, and Mexican weekenders from the Bajio region. This means
            a cafe here might serve a cortado to a painter from Brooklyn, an
            Americano to a retired couple from Toronto, and a matcha latte to a
            visitor from Kyoto, all before noon.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            This multilingual, multicultural clientele pushes SMA cafes to be
            more versatile than their counterparts in larger cities. Menus tend
            to be bilingual or trilingual. Baristas explain brewing methods
            patiently to people who have never seen a V60 alongside regulars who
            have been drinking specialty for years. The result is a coffee
            culture that is both welcoming and surprisingly sophisticated.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Is the History of Coffee in San Miguel de Allende?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            San Miguel de Allende is not itself a coffee-growing region. The
            city sits at 1,900 meters in the semi-arid highlands of Guanajuato,
            too dry and too cold at night for coffee cultivation. But its
            history as a cultural crossroads has always brought goods and ideas
            from Mexico&apos;s coasts and southern mountains northward. Coffee
            arrived in SMA&apos;s cafes and kitchens in the 19th century, most
            likely from Veracruz, which was then the country&apos;s dominant
            coffee region and a major trading partner with the Bajio.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The modern cafe culture emerged in the 2000s, catalyzed by the
            city&apos;s booming tourism and expat population. Early specialty
            shops introduced the idea that Mexican coffee could be more than a
            dark roast commodity. By the 2020s, San Miguel de Allende travel
            guides were listing coffee shops alongside galleries and restaurants
            as essential stops, a recognition of how central the cafe experience
            had become to visiting the city.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            How Does San Miguel&apos;s Art Scene Influence Its Cafes?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            San Miguel&apos;s art scene directly shapes its cafe culture. Many
            of the best cafes in SMA double as informal galleries, with rotating
            exhibitions on their walls and design-forward interiors that reflect
            the city&apos;s creative energy. At Ki&apos;bok, our space on Diez
            de Sollano y Dávalos is as much about atmosphere as it is about
            extraction. The warm tones, the natural light, the curated quiet all
            exist because we believe that where you drink coffee affects how it
            tastes.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            This is not accidental. San Miguel is home to one of Mexico&apos;s
            oldest art schools (the Escuela de Bellas Artes, founded 1938) and
            hosts major cultural events throughout the year, from the Festival
            de Jazz to the Harvest Festival to the Festival de Escritores. During
            these events, cafes become gathering points where the line between
            audience and performer, visitor and local, blurs over cortados and
            conversation. Things to do in San Miguel de Allende often start with
            a good cup of coffee and a seat by the window.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Should You Order at a Specialty Coffee Shop in SMA?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            At a specialty coffee shop in San Miguel de Allende, start with
            whatever the barista recommends as the current single origin. This
            rotates frequently and gives you the most direct expression of
            Mexican terroir. If you prefer milk-based drinks, a cortado or flat
            white will let the bean&apos;s flavor come through while adding
            texture. For something uniquely local, ask for a cafe de olla
            variation, several SMA shops now prepare it with specialty-grade
            beans and real piloncillo.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            At Ki&apos;bok, our{" "}
            <Link
              href="/menu"
              className="text-kibok-terracotta underline underline-offset-2 hover:text-kibok-brown"
            >
              menu
            </Link>{" "}
            features pour-over flights that let you taste two or three origins
            side by side. It is the fastest way to understand how Chiapas
            differs from Oaxaca, or how a washed process compares to a natural.
            We also serve cold brew, espresso, and a selection of pastries from
            local bakers that pair with our roast profiles.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            When Is the Best Time to Visit San Miguel&apos;s Cafes?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The best time to visit San Miguel&apos;s cafes is mid-morning,
            between 9:00 and 11:00, when the light in Centro is golden and the
            pace is unhurried. Weekday mornings are quieter, making them ideal
            for a slow pour-over and a book. During festival weeks (particularly
            Semana Santa, Dia de los Muertos, and the September independence
            celebrations), cafes fill early and the energy shifts from
            contemplative to electric.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            San Miguel&apos;s climate is another gift to its coffee culture. At
            1,900 meters, mornings are cool enough year-round to make a hot cup
            of coffee feel right, even in May. Afternoons warm into the low 80s
            Fahrenheit, making cold brew and iced lattes equally appealing. There
            is no bad season for coffee in this city.
          </p>

          <blockquote className="border-l-4 border-kibok-gold pl-6 italic font-body text-lg text-kibok-warm-gray/80">
            &ldquo;In San Miguel, a good cafe is not a place you pass through on
            your way somewhere else. It is a place you go on purpose, and often
            the best part of the day.&rdquo;
          </blockquote>
        </div>

        <section className="mt-16 border-t border-kibok-brown/10 pt-12">
          <h2 className="font-heading text-2xl font-bold text-kibok-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Where to get good coffee in San Miguel de Allende?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                The best specialty coffee in San Miguel de Allende is found in
                Centro, particularly along the streets surrounding the Jardin
                Principal. Ki&apos;bok Coffee on Diez de Sollano y Dávalos
                serves organic, single origin Mexican beans roasted for
                specialty-grade extraction. Several other quality cafes operate
                in Centro and the surrounding neighborhoods.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Is San Miguel de Allende a coffee-producing region?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                No. San Miguel sits in the semi-arid highlands of Guanajuato at
                1,900 meters and does not have the tropical climate needed for
                coffee cultivation. However, the city&apos;s cafes source beans
                directly from Mexico&apos;s premier growing regions in Chiapas,
                Oaxaca, and Veracruz, making it an excellent place to drink
                Mexican specialty coffee.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Do coffee shops in San Miguel have English-speaking staff?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Yes. Most specialty coffee shops in Centro cater to an
                international clientele and have bilingual (English and Spanish)
                staff. Ki&apos;bok serves visitors in English, Spanish, and
                Japanese, reflecting the diversity of San Miguel&apos;s
                community.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                What is cafe de olla?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Cafe de olla is a traditional Mexican coffee preparation brewed
                in a clay pot (olla de barro) with piloncillo (unrefined cane
                sugar), cinnamon, and sometimes clove or orange peel. It predates
                espresso culture in Mexico and remains a beloved part of the
                country&apos;s coffee identity. Many specialty shops in SMA offer
                modern interpretations using high-quality beans.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 rounded-sm bg-kibok-cream p-8 text-center">
          <p className="font-heading text-xl font-bold text-kibok-ink">
            Experience Coffee in San Miguel
          </p>
          <p className="mt-2 font-body text-kibok-warm-gray">
            Come visit Ki&apos;bok in Centro, just steps from the Jardin
            Principal. We are open daily and welcome coffee lovers from
            everywhere.
          </p>
          <Link
            href="/visit"
            className="mt-4 inline-block rounded-sm bg-kibok-brown px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-colors hover:bg-kibok-brown-dark"
          >
            Plan Your Visit
          </Link>
        </div>
      </Container>
    </article>
  );
}
