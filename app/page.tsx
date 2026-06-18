"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/3af2e442dc9446fa8c2fa7fee9e05bcc_image.bin";

const blogPosts = [
  {
    id: 1,
    product: "Amarya Glow Lotion",
    slug: "amarya-glow-lotion",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/cd1fa9ee96b34e6db1a45f946eb1e330_image.bin",
    tag: "Skincare",
    title: "Radiance Redefined: The Secret Behind Amarya Glow Lotion",
    excerpt:
      "Unlock your skin's natural luminosity with our signature Amarya Glow Lotion — crafted with rare botanicals and enriched minerals that leave you glowing from within. A daily ritual your skin deserves.",
    date: "June 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    product: "Mango Body Butter",
    slug: "mango-body-butter",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/b501e5267636487facca2ad79bf6f440_image.bin",
    tag: "Body Care",
    title: "Deep Nourishment in Every Jar: Our Mango Body Butter",
    excerpt:
      "Pure mango butter blended with nourishing oils to deliver 24-hour moisture and silky-smooth skin. Indulge in nature's richest hydration — your body will thank you with every application.",
    date: "June 5, 2026",
    readTime: "3 min read",
  },
  {
    id: 3,
    product: "Mai Abin Mamaki Soap",
    slug: "mai-abin-mamaki-soap",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/17c47cc22d4e4133bfb18cd7b619979e_image.bin",
    tag: "Cleansing",
    title: "The Ancient Art of Clean: Mai Abin Mamaki Soap",
    excerpt:
      "Rooted in tradition, elevated by science. Our Mai Abin Mamaki Soap combines heritage herbal wisdom with modern skin science to cleanse, brighten, and rejuvenate — a bar of pure legacy.",
    date: "May 28, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    product: "Cleansing Water",
    slug: "cleansing-water",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/9cc9bb1011454cb3a4c6f7086e377608_image.bin",
    tag: "Facial Care",
    title: "Effortless Purity: Introducing Our Cleansing Water",
    excerpt:
      "Gentle yet powerful, our Cleansing Water melts away makeup, impurities, and daily stress in seconds — no rinsing required. The cleanest start to your most radiant day.",
    date: "May 20, 2026",
    readTime: "3 min read",
  },
  {
    id: 5,
    product: "Bini Da Addu'a & Taagab Oil",
    slug: "bini-da-addua-taagab-oil",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/bf10197a224c42a6897211d3c1dca7d4_image.bin",
    tag: "Herbal Oils",
    title: "Sacred Rituals in a Bottle: Bini Da Addu'a & Taagab Oil",
    excerpt:
      "Steeped in centuries of healing tradition, our Bini Da Addu'a & Taagab Oil is a divine blend of rare botanical extracts crafted to nourish the spirit and revive the skin. A timeless remedy, reimagined for the modern soul.",
    date: "June 12, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    product: "Herbal Supplements Collection",
    slug: "herbal-supplements-collection",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/cb98cd9f76a64ecbaf2545f8f550ca44_image.bin",
    tag: "Wellness",
    title: "From Earth to Essence: Our Herbal Supplements Collection",
    excerpt:
      "Nature's finest healing herbs, carefully harvested and blended into our premium Herbal Supplements Collection. Each sachet is a gift of vitality — supporting beauty from the inside out, the way nature intended.",
    date: "June 8, 2026",
    readTime: "4 min read",
  },
  {
    id: 7,
    product: "Amarya Glow Lotion (Alternate View)",
    slug: "amarya-glow-lotion-reveal",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/98cabc7e51314570bb1744c8e4ac74f0_image.bin",
    tag: "Skincare",
    title: "A Closer Look: The Amarya Glow Formula Changing Routines",
    excerpt:
      "Step inside the science of luminosity. Our Amarya Glow Lotion — now revealed in full — is more than a moisturiser; it's a transformative ritual that speaks radiance to every pore. Discover the formula behind the glow.",
    date: "June 6, 2026",
    readTime: "4 min read",
  },
  {
    id: 8,
    product: "Goat Milk & Rice Face Soap",
    slug: "goat-milk-rice-face-soap",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/961f3829ac7f4e85aee8d7d1752d3bc0_image.bin",
    tag: "Face Care",
    title: "Milk & Grain Perfection: Goat Milk & Rice Face Soap",
    excerpt:
      "Inspired by ancient beauty rites, our Goat Milk & Rice Face Soap harnesses the brightening power of rice extracts and the softening gentleness of pure goat milk — a cleansing bar that pampers as it purifies.",
    date: "June 3, 2026",
    readTime: "3 min read",
  },
  {
    id: 9,
    product: "Cleansing Water (Double Bottle)",
    slug: "cleansing-water-duo",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/f16044eb12b34ac79273d01a1e305905_image.bin",
    tag: "Facial Care",
    title: "Double the Purity: The Cleansing Water Duo Experience",
    excerpt:
      "Two bottles, one transformative experience. Our Cleansing Water Duo delivers a dual-action cleanse that removes impurities, balances the skin's pH, and preps your complexion for perfection — morning and night.",
    date: "May 30, 2026",
    readTime: "3 min read",
  },
  {
    id: 10,
    product: "Arabian Breast Secret Collection",
    slug: "arabian-breast-secret-collection",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/148b0edd713a423d91c7526ca5f55439_image.bin",
    tag: "Body Wellness",
    title: "The Arabian Secret: A Heritage Collection for Total Confidence",
    excerpt:
      "Rooted in generations of Arabian beauty wisdom, our Breast Secret Collection is a luxurious blend of time-honored botanical recipes designed to firm, nourish, and restore — giving you the confidence your body deserves.",
    date: "May 25, 2026",
    readTime: "5 min read",
  },
  {
    id: 11,
    product: "Mango Face & Body Butter (Jar)",
    slug: "mango-face-body-butter-jar",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/d1cc6221472845f5b3feb86c3d0dc2a0_image.bin",
    tag: "Body Care",
    title: "Golden Luxury in a Jar: Mango Face & Body Butter Unveiled",
    excerpt:
      "Scoop into pure indulgence. Our Mango Face & Body Butter melts on contact, delivering intense moisture and a silky, golden finish. Rich in vitamins A, C & E — hydration elevated to an art form.",
    date: "May 22, 2026",
    readTime: "4 min read",
  },
  {
    id: 12,
    product: "Arabian Organic Black Soap Set",
    slug: "arabian-organic-black-soap-set",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/2c540607438a41e9aa204b1ac7566555_image.bin",
    tag: "Cleansing",
    title: "Black Gold Ritual: The Arabian Organic Black Soap Set",
    excerpt:
      "Revered across generations for its deep-cleansing and exfoliating properties, our Arabian Organic Black Soap Set is the ultimate detox for your skin. Pure, powerful, and profoundly effective — from the heart of ancient Arabia.",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 13,
    product: "Zumar Kiba Syrup",
    slug: "zumar-kiba-syrup",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/14a0ce94a8454f67ac8bdaeafb37d532_image.bin",
    tag: "Wellness",
    title: "Inner Harmony, Outer Glow: Introducing Zumar Kiba Syrup",
    excerpt:
      "True beauty begins from within. Zumar Kiba Syrup is a potent herbal elixir crafted from a proprietary blend of time-tested botanicals to support inner wellness, hormonal balance, and a naturally radiant complexion.",
    date: "May 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 14,
    product: "Babu Baka & Maibaski Traditional Mix",
    slug: "babu-baka-maibaski-traditional-mix",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/395a1e5ffd39488ba5ebda163527aca1_image.bin",
    tag: "Herbal Traditions",
    title: "Rooted in Ritual: Babu Baka & Maibaski Traditional Mix",
    excerpt:
      "A masterclass in ancestral beauty wisdom. Our Babu Baka & Maibaski Traditional Mix is a curated fusion of revered herbal ingredients, hand-blended to restore vitality, enhance natural fragrance, and celebrate the beauty of heritage.",
    date: "May 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 15,
    product: "Mai Gayya & Mai Gaki Herbal Powder",
    slug: "mai-gayya-mai-gaki-herbal-powder",
    image:
      "https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/e50bb3c2240a4d8a932df492afef8dd5_image.bin",
    tag: "Herbal Care",
    title: "The Power of Two: Mai Gayya & Mai Gaki Herbal Powder",
    excerpt:
      "Ancient remedies meet modern elegance. Our Mai Gayya & Mai Gaki Herbal Powder is a finely ground blend of two celebrated herbs in traditional beauty — working in harmony to exfoliate, brighten, and restore your natural glow.",
    date: "April 28, 2026",
    readTime: "4 min read",
  },
];

const navLinks = ["Home", "Products", "Blog", "About", "Contact"];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "var(--dark-blue)" }}>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 shadow-2xl" : "py-4"
        }`}
        style={{
          background: scrolled ? "rgba(10, 15, 30, 0.97)" : "rgba(10, 15, 30, 0.75)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(201, 168, 76, 0.25)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: 52,
                height: 52,
                outline: "2px solid var(--gold)",
                outlineOffset: "2px",
              }}
            >
              <Image src={LOGO_URL} alt="Ummu Dufail Beauty Logo" fill sizes="52px" className="object-cover group-hover:scale-110 transition-transform duration-300" priority />
            </div>
            <span className="text-lg font-semibold tracking-widest uppercase hidden sm:block" style={{ color: "var(--gold)", letterSpacing: "0.18em" }}>Ummu Dufail</span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-100" style={{ color: link === "Home" ? "var(--gold)" : "rgba(245,240,232,0.65)", letterSpacing: "0.15em" }}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 text-xs uppercase tracking-widest font-semibold rounded-full" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)", color: "var(--dark-blue)" }}>Shop Now</button>
          </div>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: "80px" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(10,40,90,0.5) 0%, transparent 60%), linear-gradient(180deg, #0a0f1e 0%, #0d1528 50%, #0a0f1e 100%)" }} />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}><span style={{ color: "#f5f0e8" }}>Ummu Dufail </span><br /><span className="gold-shimmer">Beauty</span></h1>
          <p className="text-xl sm:text-2xl font-light mb-6 italic" style={{ color: "rgba(245,240,232,0.85)" }}>&ldquo;The Pride of Your Home&rdquo;</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)", color: "#0a0f1e" }}>Explore Products</button>
          </div>
        </div>
      </section>
      <section id="blog" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="product-card rounded-2xl overflow-hidden" style={{ background: "var(--card-bg)", border: "1px solid var(--border-gold)" }}>
                <div className="relative h-64"><Image src={post.image} alt={post.product} fill className="object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#f5f0e8" }}>{post.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(245,240,232,0.5)" }}>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
