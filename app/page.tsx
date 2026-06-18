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
      {/* ── STICKY NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 shadow-2xl"
            : "py-4"
        }`}
        style={{
          background: scrolled
            ? "rgba(10, 15, 30, 0.97)"
            : "rgba(10, 15, 30, 0.75)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(201, 168, 76, 0.25)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
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
              <Image
                src={LOGO_URL}
                alt="Ummu Dufail Beauty Logo"
                fill
                sizes="52px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <span
              className="text-lg font-semibold tracking-widest uppercase hidden sm:block"
              style={{ color: "var(--gold)", letterSpacing: "0.18em" }}
            >
              Ummu Dufail
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-100"
                  style={{
                    color: link === "Home" ? "var(--gold)" : "rgba(245,240,232,0.65)",
                    letterSpacing: "0.15em",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      link === "Home" ? "var(--gold)" : "rgba(245,240,232,0.65)")
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="px-6 py-2 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                color: "var(--dark-blue)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
            >
              Shop Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--gold)",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--gold)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--gold)",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "300px" : "0" }}
        >
          <ul
            className="px-6 py-4 flex flex-col gap-4"
            style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
          >
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm tracking-widest uppercase"
                  style={{ color: "rgba(245,240,232,0.8)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button
                className="w-full py-2 text-xs uppercase tracking-widest font-semibold rounded-full"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                  color: "var(--dark-blue)",
                }}
              >
                Shop Now
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Product Image Background — low-opacity, blurred for luxurious depth */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://customer-assets.emergentagent.com/wingman/df668041-a6ae-41f8-a2f0-f06e756a3cce/attachments/cd1fa9ee96b34e6db1a45f946eb1e330_image.bin"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ opacity: 0.17, filter: "blur(3px) saturate(0.65)" }}
            priority
          />
        </div>

        {/* Background gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(10,40,90,0.5) 0%, transparent 60%), linear-gradient(180deg, rgba(10,15,30,0.86) 0%, rgba(13,21,40,0.80) 50%, rgba(10,15,30,0.86) 100%)",
          }}
        />

        {/* Decorative orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #1a3a6b, transparent)" }}
        />

        {/* Decorative corner lines */}
        <div className="absolute top-24 left-8 w-24 h-24 opacity-20" style={{ borderLeft: "1px solid #c9a84c", borderTop: "1px solid #c9a84c" }} />
        <div className="absolute top-24 right-8 w-24 h-24 opacity-20" style={{ borderRight: "1px solid #c9a84c", borderTop: "1px solid #c9a84c" }} />
        <div className="absolute bottom-16 left-8 w-24 h-24 opacity-20" style={{ borderLeft: "1px solid #c9a84c", borderBottom: "1px solid #c9a84c" }} />
        <div className="absolute bottom-16 right-8 w-24 h-24 opacity-20" style={{ borderRight: "1px solid #c9a84c", borderBottom: "1px solid #c9a84c" }} />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto fade-in-up">
          {/* Eyebrow tag */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs uppercase tracking-widest font-medium"
              style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
            >
              Luxury Beauty
            </span>
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span style={{ color: "#f5f0e8" }}>Ummu Dufail </span>
            <br />
            <span className="gold-shimmer">Beauty</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 tracking-wide"
            style={{
              color: "rgba(245,240,232,0.85)",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            &ldquo;The Pride of Your Home&rdquo;
          </p>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(245,240,232,0.55)" }}
          >
            Discover a curated collection of luxurious skincare rituals — born from nature, refined by tradition, and crafted to honour the beauty within you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                color: "#0a0f1e",
                boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
              }}
            >
              Explore Products
            </button>
            <button
              className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(201,168,76,0.5)",
                color: "var(--gold)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = "rgba(201,168,76,0.1)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = "transparent";
              }}
            >
              Read the Blog
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "100%", label: "Natural" },
              { value: "15+", label: "Products" },
              { value: "✦", label: "Luxury" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Scroll
          </span>
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
          />
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="gold-divider" />

      {/* ── FEATURE STRIP ── */}
      <section
        className="py-6 overflow-hidden"
        style={{ background: "rgba(201,168,76,0.05)" }}
      >
        <div className="flex gap-12 items-center justify-center flex-wrap px-6">
          {[
            "✦ Natural Ingredients",
            "✦ Luxury Formulas",
            "✦ Heritage Traditions",
            "✦ Crafted with Love",
            "✦ Skin-First Beauty",
          ].map((item) => (
            <span
              key={item}
              className="text-xs uppercase tracking-widest whitespace-nowrap"
              style={{ color: "rgba(201,168,76,0.7)", letterSpacing: "0.2em" }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="gold-divider" />

      {/* ── BLOG SECTION ── */}
      <section id="blog" className="py-24 px-6" style={{ background: "var(--dark-blue)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16" style={{ background: "var(--gold)" }} />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
              >
                Beauty Journal
              </span>
              <div className="h-px w-16" style={{ background: "var(--gold)" }} />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}
            >
              Latest from the{" "}
              <span className="gold-shimmer">Blog</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Skincare stories, beauty rituals, and product spotlights — written for those who believe beauty is a lifestyle.
            </p>
          </div>

          {/* Blog Cards Grid — multi-row, responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="product-card rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-gold)",
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  <Image
                    src={post.image}
                    alt={post.product}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 50%)",
                    }}
                  />
                  {/* Tag badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-full"
                    style={{
                      background: "rgba(201,168,76,0.2)",
                      color: "var(--gold)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs"
                      style={{ color: "rgba(245,240,232,0.4)" }}
                    >
                      {post.date}
                    </span>
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: "var(--gold)", opacity: 0.5 }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: "rgba(245,240,232,0.4)" }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-semibold mb-3 leading-snug line-clamp-2"
                    style={{
                      color: "#f5f0e8",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed line-clamp-3 mb-5"
                    style={{ color: "rgba(245,240,232,0.5)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 group">
                    <span
                      className="text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
                      style={{ color: "var(--gold)" }}
                    >
                      Read More
                    </span>
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-14">
            <button
              className="px-12 py-4 text-sm uppercase tracking-widest font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(201,168,76,0.45)",
                color: "var(--gold)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = "rgba(201,168,76,0.08)";
                t.style.boxShadow = "0 0 30px rgba(201,168,76,0.15)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = "transparent";
                t.style.boxShadow = "none";
              }}
            >
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="gold-divider" />

      {/* ── ABOUT / BRAND STATEMENT ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--mid-blue)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
            >
              Our Story
            </span>
            <div className="h-px w-16" style={{ background: "var(--gold)" }} />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}
          >
            Where <span className="gold-shimmer">Tradition</span> Meets{" "}
            <span className="gold-shimmer">Luxury</span>
          </h2>

          <p
            className="text-base sm:text-lg leading-loose mb-8"
            style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic" }}
          >
            &ldquo;At Ummu Dufail Beauty, every product is a love letter to your skin — rooted in ancestral wisdom and elevated for the modern woman. We believe beauty is not a mask, but a mirror of the soul.&rdquo;
          </p>

          <div
            className="inline-block w-12 h-px"
            style={{ background: "var(--gold)" }}
          />
          <p
            className="mt-4 text-sm tracking-widest uppercase"
            style={{ color: "var(--gold)" }}
          >
            — Ummu Dufail
          </p>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="gold-divider" />

      {/* ── NEWSLETTER ── */}
      <section className="py-20 px-6" style={{ background: "var(--dark-blue)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
          >
            Stay in the Loop
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}
          >
            Join the <span className="gold-shimmer">Beauty Circle</span>
          </h2>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            Get exclusive tips, product launches, and beauty rituals delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#f5f0e8",
              }}
            />
            <button
              className="px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                color: "#0a0f1e",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-6"
        style={{
          background: "#060a14",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div
              className="relative overflow-hidden rounded-full"
              style={{ width: 38, height: 38 }}
            >
              <Image
                src={LOGO_URL}
                alt="Ummu Dufail Beauty"
                fill
                sizes="38px"
                className="object-cover"
              />
            </div>
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Ummu Dufail Beauty
            </span>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact", "Blog"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.35)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(245,240,232,0.35)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "rgba(245,240,232,0.25)" }}
          >
            © 2026 Ummu Dufail Beauty. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
