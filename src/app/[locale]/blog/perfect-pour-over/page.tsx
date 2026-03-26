import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title:
    "How to Brew the Perfect Pour-Over at Home — Ki'bok Coffee SMA Blog",
  description:
    "A step by step pour over coffee guide with V60 recipe, ratios, and technique tips. Learn how to make pour over coffee at home like a specialty barista.",
};

export default function PerfectPourOver() {
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
            src={IMAGES.kalitaOrange}
            alt="Kalita Wave pour-over dripper brewing specialty coffee on an orange background"
            fill
            className="object-cover photo-warm"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <h1 className="mt-8 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-kibok-ink">
          How to Brew the Perfect Pour-Over at Home
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
            Pour-over coffee is the simplest way to unlock the full flavor of a
            great bean. Unlike immersion methods that steep all the grounds at
            once, a pour-over lets you control the flow of water through the
            coffee bed, extracting sweetness, acidity, and body in a deliberate,
            repeatable way. It is the method our baristas use most at Ki&apos;bok
            Coffee in San Miguel de Allende, and it is the method we recommend
            for anyone who wants to taste the difference that specialty coffee
            brewing makes at home.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            This guide walks you through a complete step by step pour over coffee
            recipe that works with a Hario V60, Kalita Wave, or any cone-shaped
            dripper. We will cover ratios, grind size, water temperature, pouring
            technique, and the common mistakes that trip up beginners.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Do You Need to Make Pour-Over Coffee?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            To make pour-over coffee at home, you need five things: a pour-over
            dripper, paper filters, a gooseneck kettle, a kitchen scale, and
            freshly roasted whole-bean coffee. A burr grinder is strongly
            recommended since pre-ground coffee loses aromatic compounds within
            minutes of grinding.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Essential Equipment
          </h3>
          <ul className="list-disc pl-6 space-y-2 font-body text-lg text-kibok-warm-gray">
            <li>
              <strong>Dripper:</strong> Hario V60 (size 02), Kalita Wave 185, or
              Origami dripper. The V60&apos;s single large drain hole gives you
              more control over flow rate; the Kalita&apos;s flat bottom is more
              forgiving for beginners.
            </li>
            <li>
              <strong>Filters:</strong> Use the manufacturer&apos;s recommended
              paper filters. Tabbed Kalita filters for the Wave, Hario conical
              filters for the V60.
            </li>
            <li>
              <strong>Gooseneck kettle:</strong> The narrow spout lets you pour
              in a slow, controlled stream. Electric models with temperature hold
              (like the Fellow Stagg EKG) are ideal.
            </li>
            <li>
              <strong>Scale:</strong> Any kitchen scale accurate to 0.1g works.
              A built-in timer is convenient but not required.
            </li>
            <li>
              <strong>Grinder:</strong> A conical or flat burr grinder. The
              Baratza Encore or Timemore C2 are excellent entry-level options.
            </li>
          </ul>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Is the Best Pour-Over Coffee Ratio?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The best pour-over coffee ratio for most specialty beans is 1:16,
            meaning 1 gram of coffee to 16 grams of water. For a single cup,
            that translates to 15g of coffee and 240g of water. This ratio
            produces a balanced, flavorful cup that highlights origin
            characteristics without over- or under-extracting.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Pour-Over Ratio Reference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-body text-base">
              <thead>
                <tr className="border-b-2 border-kibok-brown/20">
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Serving
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Coffee
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Water
                  </th>
                  <th className="py-3 text-left font-heading font-bold text-kibok-ink">
                    Ratio
                  </th>
                </tr>
              </thead>
              <tbody className="text-kibok-warm-gray">
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">1 cup (8 oz)</td>
                  <td className="py-3 pr-4">15g</td>
                  <td className="py-3 pr-4">240g</td>
                  <td className="py-3">1:16</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">Large cup (12 oz)</td>
                  <td className="py-3 pr-4">22g</td>
                  <td className="py-3 pr-4">352g</td>
                  <td className="py-3">1:16</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">Two cups</td>
                  <td className="py-3 pr-4">30g</td>
                  <td className="py-3 pr-4">480g</td>
                  <td className="py-3">1:16</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Stronger brew</td>
                  <td className="py-3 pr-4">15g</td>
                  <td className="py-3 pr-4">210g</td>
                  <td className="py-3">1:14</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            If you prefer a stronger cup, try a 1:14 ratio. For lighter, more
            tea-like brews, go to 1:17. Small adjustments of one gram of coffee
            can shift the flavor noticeably, so keep notes on what you like.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            How Do You Make Pour-Over Coffee Step by Step?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Follow this step by step pour over coffee method for a consistent,
            delicious brew every time. The total brew time should land between
            2:30 and 3:30, depending on your grind size and pouring speed. This
            is the same V60 recipe our baristas use at Ki&apos;bok.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Step 1: Heat Your Water
          </h3>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Bring water to 93&ndash;96&deg;C (200&ndash;205&deg;F). If you
            don&apos;t have a thermometer, bring water to a full boil and let it
            rest for 30 seconds. Water that is too hot will scorch the coffee and
            emphasize bitterness; water that is too cool will under-extract and
            taste sour.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Step 2: Grind Your Coffee
          </h3>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Grind 15g of coffee to a medium-fine consistency, roughly the texture
            of table salt. For the V60, err slightly finer; for the Kalita Wave,
            go slightly coarser. If your brew drains too fast (under 2:30), grind
            finer. If it stalls past 3:30, grind coarser.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Step 3: Rinse the Filter
          </h3>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Place the filter in your dripper, set it on your mug or carafe, and
            pour hot water through the filter until it is fully saturated.
            Discard the rinse water. This removes paper taste and preheats your
            brewing vessel, which keeps the slurry temperature stable throughout
            the brew.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Step 4: Bloom (0:00 &ndash; 0:45)
          </h3>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            Add the ground coffee to the filter and gently shake to level the
            bed. Start your timer and pour 30&ndash;45g of water in a slow
            spiral, starting from the center and working outward. You will see
            the coffee bed swell and bubble as CO2 escapes. This is the bloom,
            and it is essential. Fresh coffee releases more gas, which is why
            beans roasted within the last 7&ndash;21 days perform best. Let the
            bloom sit until 0:45.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Step 5: Main Pour (0:45 &ndash; 2:00)
          </h3>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            At 0:45, begin your main pour. Pour in slow, concentric circles from
            the center outward, keeping the stream thin and steady. Avoid
            pouring directly onto the filter walls, which lets water bypass the
            coffee bed and results in under-extraction. Pour in two or three
            stages: add water to about two-thirds full, let it draw down
            slightly, then pour again. Aim to reach your target weight of 240g
            by the 2:00 mark.
          </p>

          <h3 className="mt-8 mb-3 font-heading text-xl font-bold text-kibok-ink">
            Step 6: Drawdown (2:00 &ndash; 3:00)
          </h3>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            After your final pour, let the water drain through the coffee bed.
            The bed should draw down evenly. If you see a flat, uniform layer of
            spent grounds at the end, your technique and grind are dialed in. A
            sloped or cratered bed suggests uneven pouring. Total brew time
            should fall between 2:30 and 3:30. Remove the dripper, give your cup
            a gentle swirl to mix, and taste.
          </p>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Are Common Pour-Over Mistakes Beginners Make?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The most common pour-over mistakes beginners make are using stale
            coffee, inconsistent grind size, and pouring too fast. Here is a
            quick troubleshooting guide for the most frequent issues.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-body text-base">
              <thead>
                <tr className="border-b-2 border-kibok-brown/20">
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Problem
                  </th>
                  <th className="py-3 pr-4 text-left font-heading font-bold text-kibok-ink">
                    Likely Cause
                  </th>
                  <th className="py-3 text-left font-heading font-bold text-kibok-ink">
                    Fix
                  </th>
                </tr>
              </thead>
              <tbody className="text-kibok-warm-gray">
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">Sour, thin taste</td>
                  <td className="py-3 pr-4">Under-extraction</td>
                  <td className="py-3">Grind finer or increase water temp</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">Bitter, harsh taste</td>
                  <td className="py-3 pr-4">Over-extraction</td>
                  <td className="py-3">Grind coarser or lower water temp</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">Weak, watery cup</td>
                  <td className="py-3 pr-4">Too little coffee</td>
                  <td className="py-3">Use a 1:15 or 1:14 ratio</td>
                </tr>
                <tr className="border-b border-kibok-brown/10">
                  <td className="py-3 pr-4">Brew drains too fast</td>
                  <td className="py-3 pr-4">Grind too coarse</td>
                  <td className="py-3">Grind 2&ndash;3 clicks finer</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Brew stalls / clogs</td>
                  <td className="py-3 pr-4">Grind too fine or fines clogging</td>
                  <td className="py-3">Grind coarser; consider a better grinder</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 font-heading text-2xl font-bold text-kibok-ink">
            What Is the Best Pour-Over Technique for Beginners?
          </h2>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            The best pour-over technique for beginners is to keep it simple:
            use a Kalita Wave for its flat-bottom forgiveness, start with a 1:16
            ratio, and focus on a slow, steady pour from the center outward.
            Don&apos;t chase perfection on your first cup. Instead, change one
            variable at a time (grind size, then water temperature, then pour
            speed) and taste the difference each adjustment makes.
          </p>
          <p className="font-body text-lg leading-relaxed text-kibok-warm-gray">
            If you want to see these techniques in person, visit us at
            Ki&apos;bok on Diez de Sollano y Dávalos in San Miguel de Allende.
            Our baristas are happy to walk you through a brew and help you find
            the grind and ratio that match your taste. You can also explore our{" "}
            <Link
              href="/menu"
              className="text-kibok-terracotta underline underline-offset-2 hover:text-kibok-brown"
            >
              menu
            </Link>{" "}
            to try different single origin coffees brewed by pour-over before
            committing to a bag for home.
          </p>

          <blockquote className="border-l-4 border-kibok-gold pl-6 italic font-body text-lg text-kibok-warm-gray/80">
            &ldquo;Pour-over is not about ritual for its own sake. It is about
            paying attention, and attention is how good coffee becomes great
            coffee.&rdquo;
          </blockquote>
        </div>

        <section className="mt-16 border-t border-kibok-brown/10 pt-12">
          <h2 className="font-heading text-2xl font-bold text-kibok-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                How long should a pour-over take?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                A single-cup pour-over (15g coffee, 240g water) should take
                between 2 minutes 30 seconds and 3 minutes 30 seconds from the
                first pour to the last drip. If it finishes faster, your grind is
                too coarse. If it takes longer, your grind is too fine.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Can I use pre-ground coffee for pour-over?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                You can, but the results will be noticeably less aromatic and
                complex. Coffee begins losing volatile compounds within 15
                minutes of grinding. For the best home coffee brewing experience,
                grind whole beans immediately before brewing.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                What is the difference between V60 and Kalita Wave?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                The Hario V60 has a single large drain hole and spiral ridges
                that give the brewer more control over flow rate, but are less
                forgiving of technique errors. The Kalita Wave has a flat bottom
                with three small drain holes, which creates a more even
                extraction and is better for beginners. Both can produce
                excellent cups.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-kibok-ink">
                Does water quality matter for pour-over coffee?
              </h3>
              <p className="mt-2 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Yes. Coffee is about 98.5% water, so the mineral content of your
                water directly affects extraction and taste. Avoid distilled water
                (too flat) and very hard water (too mineral-forward). Filtered tap
                water or water with a TDS of 75&ndash;150 ppm produces the best
                results for specialty coffee brewing.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 rounded-sm bg-kibok-cream p-8 text-center">
          <p className="font-heading text-xl font-bold text-kibok-ink">
            Learn to Brew With Us
          </p>
          <p className="mt-2 font-body text-kibok-warm-gray">
            Visit Ki&apos;bok in San Miguel de Allende and watch our baristas
            brew pour-over with single origin Mexican beans. Take a bag home and
            practice.
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
