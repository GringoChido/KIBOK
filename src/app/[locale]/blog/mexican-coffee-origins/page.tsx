import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Origins of Mexican Specialty Coffee — Ki'bok Coffee SMA Blog",
  description:
    "Explore the origins of Mexican specialty coffee from Chiapas, Oaxaca, and Veracruz. Learn where Mexican coffee comes from and why single origin Mexican beans rank among the world's best.",
};

export default function MexicanCoffeeOrigins() {
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
            src={IMAGES.beansBag}
            alt="Overhead view of an open bag of Mexican specialty coffee beans"
            fill
            className="object-cover photo-warm"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <h1 className="mt-8 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-kibok-ink">
          The Origins of Mexican Specialty Coffee
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
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Mexico is the world&apos;s eighth-largest coffee producer, growing
            over 900,000 metric tons annually across more than a dozen states.
            Yet for decades, Mexican coffee was treated as a commodity, blended
            into cans and sold without any recognition of its terroir. That
            narrative has changed dramatically. Today, Mexican specialty coffee
            is earning scores of 85+ on international cupping tables, winning
            awards at the Cup of Excellence, and drawing the attention of roasters
            from Tokyo to Copenhagen.
          </p>

          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            At Ki&apos;bok Coffee in San Miguel de Allende, we source directly
            from small farms across Mexico&apos;s three most celebrated coffee
            regions. Every cup we serve on Diez de Sollano y Dávalos in Centro
            tells the story of volcanic soil, mountain shade, and generations of
            farming knowledge. Here is that story.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            Where Does Mexican Coffee Come From?
          </h2>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Mexican coffee comes primarily from the southern and central mountain
            states of Chiapas, Oaxaca, and Veracruz, which together account for
            roughly 85% of the country&apos;s production. Coffee thrives at
            elevations between 900 and 1,800 meters above sea level, where cool
            nights slow the maturation of the cherry, allowing sugars and complex
            acids to develop inside the bean.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Beyond the big three, emerging regions like Puebla, Guerrero, Nayarit,
            and Colima are producing micro-lots that surprise cuppers with
            unexpected flavor profiles, from tropical fruit notes in Guerrero to
            honey-forward sweetness in Nayarit.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Makes Chiapas Coffee Special?
          </h2>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Chiapas coffee is grown in the Sierra Madre mountains at elevations
            of 1,200 to 1,800 meters, primarily in the Soconusco region and the
            highlands near San Cristóbal de las Casas. The volcanic soil, heavy
            rainfall, and shade canopy from native inga trees create ideal
            conditions for Arabica varieties like Typica, Bourbon, and the
            increasingly popular Gesha.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            In the cup, Chiapas beans tend toward a clean, bright profile with
            milk chocolate body, citrus acidity (often lemon or tangerine), and
            a caramel sweetness in the finish. Chiapas produces more organic
            coffee than any other Mexican state, with thousands of smallholder
            farmers organized into cooperatives that hold USDA Organic and EU
            organic certifications. Many of our single origin Mexican coffee
            offerings at Ki&apos;bok come from Chiapas cooperatives we have
            visited personally.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            Why Is Oaxaca Coffee Gaining International Recognition?
          </h2>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Oaxaca coffee is rapidly gaining recognition for its complexity and
            distinctive character. Grown in the Pluma Hidalgo region along the
            Sierra Madre del Sur, Oaxacan beans develop at elevations above
            1,500 meters where cloud forests maintain constant humidity and
            moderate temperatures year-round.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            The Pluma variety, a Typica descendant that has adapted to
            Oaxaca&apos;s microclimate over more than a century, produces a cup
            with stone fruit sweetness, floral aromatics, and a silky body that
            many cuppers compare to the best East African coffees. Oaxaca&apos;s
            indigenous Zapotec and Mixtec communities have cultivated coffee as a
            shade-grown crop under native forests for generations, maintaining
            biodiversity that most modern farms have lost. This heritage of
            organic coffee from Mexico is something we celebrate in every batch
            we roast.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Is Veracruz Known For in the Coffee World?
          </h2>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Veracruz coffee benefits from the state&apos;s unique geography: the
            eastern slope of the Sierra Madre Oriental catches moisture from the
            Gulf of Mexico, creating a lush growing corridor from Coatepec to
            Xico to Huatusco. Veracruz was Mexico&apos;s first major coffee
            region, with commercial production dating to the 1790s.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            The cup profile of Veracruz beans is often described as the most
            approachable of the three major Mexican coffee regions: a nutty,
            chocolatey sweetness with moderate acidity and a round, full body.
            The Coatepec appellation has become synonymous with quality in the
            domestic market, and Veracruz altura (high-grown) beans are prized
            by espresso blenders worldwide for their consistent sweetness and
            syrupy texture.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Mexican Coffee Regions at a Glance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-body text-base">
              <thead>
                <tr className="border-b-2 border-kibok-brown/20">
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Region
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Elevation
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Key Varieties
                  </th>
                  <th className="py-3 text-left font-heading font-bold text-kibok-ink">
                    Cup Profile
                  </th>
                </tr>
              </thead>
              <tbody className="text-kibok-warm-gray">
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4 font-bold">Chiapas</td>
                  <td className="py-3 pr-4">1,200–1,800m</td>
                  <td className="py-3 pr-4">Typica, Bourbon, Gesha</td>
                  <td className="py-3">Citrus, chocolate, caramel</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4 font-bold">Oaxaca</td>
                  <td className="py-3 pr-4">1,500–1,800m</td>
                  <td className="py-3 pr-4">Pluma, Typica, Caturra</td>
                  <td className="py-3">Stone fruit, floral, silky</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4 font-bold">Veracruz</td>
                  <td className="py-3 pr-4">900–1,400m</td>
                  <td className="py-3 pr-4">Typica, Mundo Novo, Garnica</td>
                  <td className="py-3">Nutty, chocolate, full body</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold">Puebla</td>
                  <td className="py-3 pr-4">1,000–1,600m</td>
                  <td className="py-3 pr-4">Typica, Colombia, Marsellesa</td>
                  <td className="py-3">Brown sugar, almond, balanced</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Role Does Altitude Play in Mexican Coffee Quality?
          </h2>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Altitude is the single most influential factor in Mexican specialty
            coffee quality. At higher elevations, cooler temperatures slow the
            cherry&apos;s ripening cycle from roughly seven months to nine or
            ten, giving the bean more time to develop the organic acids
            (particularly malic and citric) that translate into brightness and
            complexity in the cup. Mexican coffees labeled &ldquo;altura&rdquo;
            (high-grown, typically above 1,200 meters) consistently score higher
            on cupping evaluations than their lowland counterparts.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            This is why we prioritize high-altitude, shade-grown lots when
            selecting beans for Ki&apos;bok. When you visit us in San Miguel de
            Allende and taste a single origin Chiapas or Oaxaca on our{" "}
            <Link
              href="/menu"
              className="text-kibok-terracotta underline underline-offset-2 hover:text-kibok-brown"
            >
              menu
            </Link>
            , you&apos;re tasting the direct result of elevation, climate, and
            patient cultivation.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            How Is the Mexican Specialty Coffee Scene Evolving?
          </h2>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            The Mexican specialty coffee scene is evolving rapidly. A new
            generation of producers is investing in experimental processing
            methods, including natural, honey, and anaerobic fermentation, that
            unlock flavor profiles previously unseen in Mexican beans. Domestic
            consumption of specialty coffee is growing at over 15% per year, and
            cities from Mexico City to Guadalajara to San Miguel de Allende now
            host thriving cafe cultures that demand traceable, high-quality
            beans.
          </p>
          <p className="font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
            Organizations like the Asociación Mexicana de Cafés y Cafeterías de
            Especialidad (AMCCE) are building infrastructure for cuppings,
            competitions, and farmer education. Mexico&apos;s participation in
            the Cup of Excellence program since 2012 has brought international
            visibility to producers who were previously invisible in the global
            market. The best coffee regions in Mexico are no longer a secret,
            and that is good for farmers and drinkers alike.
          </p>

          <blockquote className="border-l-4 border-kibok-gold pl-6 italic font-body text-lg text-kibok-warm-gray/80">
            &ldquo;Mexican coffee has always had the terroir. What&apos;s
            changed is that producers now have the knowledge and market access to
            let that terroir speak.&rdquo;
          </blockquote>
        </div>

        <section className="mt-16 border-t border-kibok-brown/10 pt-12">
          <h2 className="font-heading text-2xl font-bold text-kibok-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Where does Mexican coffee come from?
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
                The majority of Mexican coffee comes from the southern states of
                Chiapas, Oaxaca, and Veracruz, with smaller but increasingly
                notable production in Puebla, Guerrero, and Nayarit. These
                regions provide the high altitude, volcanic soil, and shade
                canopy that Arabica coffee needs to develop complex flavors.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Is Mexican coffee Arabica or Robusta?
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
                Mexico grows almost exclusively Arabica coffee. The dominant
                varieties are Typica, Bourbon, Caturra, and the indigenous Pluma
                variety. A small amount of Robusta is grown in lowland Chiapas,
                but it represents less than 3% of national production.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                What does Mexican specialty coffee taste like?
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
                Mexican specialty coffee is known for its balance and sweetness.
                Common flavor notes include milk chocolate, caramel, citrus
                fruits, stone fruits, and nuts. High-altitude lots from Chiapas
                and Oaxaca can exhibit bright, complex acidity comparable to
                top-scoring Central American and East African coffees.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Why is organic coffee so common in Mexico?
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed md:text-lg text-kibok-warm-gray">
                Mexico is the world&apos;s largest producer of organic coffee.
                Many indigenous farming communities in Chiapas and Oaxaca have
                practiced shade-grown, chemical-free cultivation for generations.
                Organic certification formalized what was already the traditional
                farming method in these regions.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 rounded-sm bg-kibok-cream p-8 text-center">
          <p className="font-heading text-xl font-bold text-kibok-ink">
            Taste the Regions of Mexico
          </p>
          <p className="mt-2 font-body text-kibok-warm-gray">
            Visit Ki&apos;bok in Centro San Miguel de Allende and try our
            rotating single origin Mexican coffees from Chiapas, Oaxaca, and
            Veracruz.
          </p>
          <Link
            href="/menu"
            className="mt-4 inline-block rounded-sm bg-kibok-brown px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-colors hover:bg-kibok-brown-dark"
          >
            View Our Menu
          </Link>
        </div>
      </Container>
    </article>
  );
}
