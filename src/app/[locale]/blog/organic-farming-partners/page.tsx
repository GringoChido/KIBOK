import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Meet Our Farming Partners — Ki'bok Coffee SMA Blog",
  description:
    "Meet the organic coffee farmers in Mexico who grow Ki'bok's beans. Learn about direct trade coffee, sustainable sourcing, and how Mexican organic coffee is grown in Chiapas and Oaxaca.",
};

export default function OrganicFarmingPartners() {
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
            src={IMAGES.beansBurlap}
            alt="Organic Mexican coffee beans spilling from a burlap sack"
            fill
            className="object-cover photo-warm"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <h1 className="mt-8 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-kibok-ink">
          Meet Our Farming Partners
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <time className="font-body text-sm text-kibok-warm-gray">
            March 26, 2026
          </time>
          <span className="font-body text-sm text-kibok-warm-gray">·</span>
          <span className="font-body text-sm text-kibok-warm-gray">
            10 min read
          </span>
        </div>

        <div className="prose-kibok mt-12 space-y-6">
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Every bag of coffee we serve at Ki&apos;bok in San Miguel de Allende
            starts with a farmer. Not a commodity exchange, not a broker, not a
            container ship of anonymous green beans. A person, often a family,
            working a plot of land in the mountains of southern Mexico. Direct
            trade coffee is not a marketing label for us. It is the way we buy,
            and it shapes everything from the price we pay to the flavors in
            your cup.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            This post introduces the farming communities we work with, explains
            how organic coffee is grown in Mexico, and describes why sustainable
            coffee sourcing matters for both the people who grow it and the
            people who drink it.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            Who Are the Organic Coffee Farmers Behind Ki&apos;bok&apos;s Beans?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Ki&apos;bok sources from small-scale organic coffee farmers in
            Mexico, primarily in the highland communities of Chiapas and Oaxaca.
            Most of our partner farms are between 1 and 5 hectares, family-owned,
            and organized into cooperatives that share processing infrastructure,
            quality control expertise, and export logistics.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            In Chiapas, we work with producers in the Soconusco and Sierra Madre
            regions who grow Typica and Bourbon varieties under native shade
            canopies at elevations above 1,400 meters. These communities, many
            of them Tzotzil and Tzeltal indigenous groups, have cultivated coffee
            for three or more generations. Their farming knowledge is not
            textbook agronomy. It is inherited practice refined by decades of
            observation: which trees provide the best shade, when the rains
            signal it is time to prune, how long to ferment the cherry in the
            local water supply.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            In Oaxaca, our beans come from Zapotec-community farms in the Pluma
            Hidalgo corridor of the Sierra Madre del Sur. These producers
            specialize in the Pluma variety, a Typica descendant uniquely adapted
            to Oaxaca&apos;s cloud-forest microclimate. The farms sit above
            1,500 meters, surrounded by biodiversity that includes hundreds of
            bird species, native orchids, and the endangered cloud forest
            ecosystem that coffee cultivation helps preserve.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            How Is Mexican Organic Coffee Grown?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Mexican organic coffee is grown using shade-grown, chemical-free
            methods that rely on natural forest ecosystems rather than synthetic
            inputs. Coffee plants grow beneath a canopy of native trees (inga,
            chalahuite, banana, and avocado are common) that regulate sunlight,
            temperature, and moisture. Decomposing leaf litter from the canopy
            provides natural fertilization, and the diverse plant life harbors
            beneficial insects that control pests.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The growing cycle follows a natural rhythm. Plants are pruned after
            harvest (typically February through April). New growth appears during
            the spring rains. Flowers bloom in May, and cherries develop over
            the following six to nine months, with harvest running from November
            through February depending on elevation. Higher farms harvest later,
            as cooler temperatures slow maturation, and those later-harvest beans
            tend to develop more complex acidity and sweetness.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            After picking, cherries are processed at the farm or at a
            cooperative&apos;s wet mill. Most of our partner farms use the washed
            method: the fruit is removed mechanically, the beans are fermented
            in water for 12 to 36 hours to break down the remaining mucilage,
            then washed clean and dried on raised beds or patios under the sun.
            Some producers are experimenting with honey and natural processes
            that leave some or all of the fruit on the bean during drying,
            creating sweeter, more fruit-forward profiles.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Is Direct Trade Coffee and How Does It Differ from Fair Trade?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Direct trade coffee means the roaster buys directly from the
            producer, without intermediary exporters or commodity brokers, and
            typically at a price negotiated based on quality rather than a
            minimum floor. Fair trade, by contrast, is a certification system
            that guarantees a minimum price per pound and requires social
            premiums for community investment, but does not require direct
            relationships or quality-based pricing.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Direct Trade vs. Fair Trade vs. Commodity
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-body text-base">
              <thead>
                <tr className="border-b-2 border-kibok-brown/20">
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Model
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Pricing
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Relationship
                  </th>
                  <th className="py-3 text-left font-heading font-bold text-kibok-ink">
                    Quality Focus
                  </th>
                </tr>
              </thead>
              <tbody className="text-kibok-warm-gray">
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4 font-bold">Direct Trade</td>
                  <td className="py-3 pr-4">Negotiated per lot, based on cup score</td>
                  <td className="py-3 pr-4">Roaster visits farm, multi-year</td>
                  <td className="py-3">Very high (85+ SCA score typical)</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4 font-bold">Fair Trade</td>
                  <td className="py-3 pr-4">Minimum floor + social premium</td>
                  <td className="py-3 pr-4">Through certified cooperatives</td>
                  <td className="py-3">Moderate (certification, not cupping)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold">Commodity</td>
                  <td className="py-3 pr-4">C-market price (fluctuates)</td>
                  <td className="py-3 pr-4">None (brokers and exchanges)</td>
                  <td className="py-3">Low (volume over quality)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            At Ki&apos;bok, we practice direct trade because it lets us pay
            farmers more than fair trade minimums while also ensuring we receive
            beans that meet our cupping standards. We visit our partner farms at
            least once per harvest season, cup samples together with producers,
            and commit to purchasing before the harvest begins. This
            pre-commitment gives farmers the financial security to invest in
            quality rather than volume.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            Why Does Sustainable Coffee Sourcing Matter?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Sustainable coffee sourcing matters because coffee farming at scale
            is one of the most environmentally destructive agricultural
            practices in the tropics. Sun-grown monoculture plantations strip
            forests, deplete soil, and require heavy chemical inputs. Organic,
            shade-grown farming preserves biodiversity, sequesters carbon, and
            protects watersheds, but it requires more labor and produces lower
            yields per hectare. Without buyers willing to pay a premium for
            sustainably grown coffee, farmers face economic pressure to clear
            shade canopy and switch to sun-grown methods.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            When you drink a cup of organic, direct trade coffee at Ki&apos;bok
            in San Miguel de Allende, you are directly supporting a farming
            model that protects Mexico&apos;s cloud forests, sustains indigenous
            communities, and produces genuinely better coffee. The relationship
            is circular: better prices let farmers invest in quality, quality
            lets us charge sustainable retail prices, and those retail prices
            fund the next harvest. Read more about our approach on our{" "}
            <Link
              href="/about"
              className="text-kibok-terracotta underline underline-offset-2 hover:text-kibok-brown"
            >
              about page
            </Link>
            .
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Challenges Do Mexican Coffee Farmers Face Today?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Mexican coffee farmers face three major challenges: climate change,
            coffee leaf rust (la roya), and market access. Rising temperatures
            are pushing viable growing zones higher into the mountains, reducing
            the total area suitable for Arabica cultivation. La roya, a fungal
            disease that devastated Mexican coffee production between 2012 and
            2015, wiped out up to 40% of production in some Chiapas communities
            and forced many farmers to replant with rust-resistant varieties that
            do not always match the cup quality of traditional Typica and
            Bourbon.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Market access remains the most persistent barrier. Small-scale
            coffee producers in Oaxaca and Chiapas often lack the infrastructure
            to process, store, and export their own coffee. Without cooperative
            organization or direct buyer relationships, they sell to
            intermediaries (coyotes) at commodity prices that barely cover
            production costs. Direct trade relationships like the ones we
            maintain at Ki&apos;bok help address this by eliminating middlemen
            and ensuring that the farmer receives a price that reflects the
            actual quality of their work.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            How Can You Support Organic Coffee Farmers in Mexico?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The most impactful way to support organic coffee farmers in Mexico is
            to buy traceable coffee from roasters who publish their sourcing
            relationships. Look for specific farm or cooperative names on the
            bag, not just a country of origin. Ask your local cafe where their
            beans come from and whether they can name the producer. When
            roasters and consumers demand traceability, it creates market
            incentive for the direct relationships that pay farmers fairly.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            When you visit Ki&apos;bok in San Miguel de Allende, every bag we
            sell lists the farm or cooperative, the region, the variety, the
            elevation, and the processing method. We want you to know exactly
            where your coffee comes from, not because transparency is trendy,
            but because the people who grew it deserve to be recognized.
          </p>

          <blockquote className="border-l-4 border-kibok-gold pl-6 italic font-body text-lg text-kibok-warm-gray/80">
            &ldquo;Direct trade is not charity. It is a business relationship
            built on the idea that quality deserves a quality price, and that
            knowing your farmer makes the coffee taste better, because it
            does.&rdquo;
          </blockquote>
        </div>

        <section className="mt-16 border-t border-kibok-brown/10 pt-12">
          <h2 className="font-heading text-2xl font-bold text-kibok-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                How is Mexican organic coffee grown?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Mexican organic coffee is grown under natural shade canopies in
                the mountain forests of Chiapas, Oaxaca, and other southern
                states. Farmers use no synthetic fertilizers or pesticides.
                Instead, they rely on decomposing leaf litter for nutrients,
                beneficial insects for pest control, and traditional pruning
                practices refined over generations.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                What does direct trade mean for coffee pricing?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Direct trade typically results in farmers receiving 25% to 100%
                more per pound than the commodity C-market price, and often
                more than fair trade minimums. Prices are negotiated based on
                cup quality (SCA cupping scores), with higher-scoring lots
                commanding higher prices. This incentivizes quality investment
                rather than volume production.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Does Ki&apos;bok sell whole bean coffee to take home?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Yes. We sell whole bean bags of every origin we serve, roasted
                fresh in small batches. Each bag includes the farm name, region,
                variety, elevation, and processing method. Visit us on Diez de
                Sollano y Dávalos in Centro San Miguel de Allende or check our{" "}
                <Link
                  href="/menu"
                  className="text-kibok-terracotta underline underline-offset-2 hover:text-kibok-brown"
                >
                  menu
                </Link>{" "}
                for current offerings.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                What is coffee leaf rust and how does it affect Mexican coffee?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Coffee leaf rust (Hemileia vastatrix, known in Mexico as la roya)
                is a fungal disease that attacks coffee leaves, reducing the
                plant&apos;s ability to photosynthesize and ultimately killing
                it. A severe outbreak between 2012 and 2015 destroyed up to 40%
                of production in parts of Chiapas. Farmers have responded by
                replanting with resistant varieties and improving shade
                management, though the threat remains a constant concern.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 rounded-sm bg-kibok-cream p-8 text-center">
          <p className="font-heading text-xl font-bold text-kibok-ink">
            Taste the Difference Direct Trade Makes
          </p>
          <p className="mt-2 font-body text-kibok-warm-gray">
            Visit Ki&apos;bok in San Miguel de Allende and taste organic,
            direct trade coffee from the farms that grew it. Every cup supports
            sustainable farming in Mexico.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block rounded-sm bg-kibok-brown px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-colors hover:bg-kibok-brown-dark"
          >
            Learn About Us
          </Link>
        </div>
      </Container>
    </article>
  );
}
