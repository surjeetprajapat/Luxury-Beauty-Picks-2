export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  link: string;
  category: string;
}

export const categories = [
  "Top Beauty Picks",
  "Luxury Skincare",
  "Premium Makeup",
  "Designer Perfumes",
  "Hair Care",
  "Eye Makeup",
  "Body Care",
  "Celebrity Picks",
  "Beauty Devices",
  "Makeup Tools",
  "Spring Nails"
];

export const products: Product[] = [
  // Top Beauty Picks
  { id: "tbp-1", name: "Lancôme Lash Idôle Lash-Lifting & Volumizing Mascara", image: "https://m.media-amazon.com/images/I/61jh-r2MLkL._SL1500_.jpg", price: "$24", description: "The Lancôme Lash Idôle Mascara uses a 360 micro-bristle wand to provide instant lift, fanned-out volume, and up to 24-hour smudge-proof wear.", link: "https://amzn.to/4sxRUis", category: "Top Beauty Picks" },
  { id: "tbp-2", name: "Super Anti-Aging Face Cream by Dr. Barbara Sturm", image: "https://m.media-amazon.com/images/I/514V446F3wL._AC_SX679_.jpg", price: "$360", description: "A high-performance, luxury anti-aging moisturizer that delivers instant plumping and deep hydration for a firmer, more radiant complexion.", link: "https://amzn.to/4tTUeBz", category: "Top Beauty Picks" },
  { id: "tbp-3", name: "Estée Lauder Double Wear Stay-in-Place Foundation", image: "https://m.media-amazon.com/images/I/61mIuEtxqgL._SL1500_.jpg", price: "$52", description: "A medium-to-full buildable coverage foundation that provides a fresh matte finish with 24-hour oil control and sweat resistance.", link: "https://amzn.to/4tRV0io", category: "Top Beauty Picks" },
  { id: "tbp-4", name: "Dr. Barbara Sturm The Good C Vitamin C Serum", image: "https://m.media-amazon.com/images/I/6199zetnzvL._AC_SY741_.jpg", price: "$160", description: "Luxury brightening serum uses a non-aggressive, molecular science approach to reduce pigmentation and provide antioxidant hydration for a radiant glow.", link: "https://amzn.to/3Q22Qr8", category: "Top Beauty Picks" },
  { id: "tbp-5", name: "Lancôme Dual Finish Powder Foundation - Natural Finish", image: "https://m.media-amazon.com/images/I/81Ws82Rn9+L._SL1500_.jpg", price: "$42", description: "Long-wearing makeup that provides sheer-to-full matte coverage and can be applied wet or dry to control shine.", link: "https://amzn.to/3OgxMDr", category: "Top Beauty Picks" },
  { id: "tbp-6", name: "Tata Harper Hydrating Floral Essence", image: "https://m.media-amazon.com/images/I/51icy+vqdsL._SL1500_.jpg", price: "$98", description: "Lightweight hyaluronic acid face mist that deeply moisturizes and plumps the skin while providing a refreshed, glowing complexion", link: "https://amzn.to/4swlBk1", category: "Top Beauty Picks" },
  { id: "tbp-7", name: "Estée Lauder Advanced Night Repair Face Serum Synchronized Multi-Recovery Complex", image: "https://m.media-amazon.com/images/I/61HciMAGYxL._SL1500_.jpg", price: "$68", description: "Provide 72-hour hydration for a radiant, youthful glow.", link: "https://amzn.to/4vLHBKy", category: "Top Beauty Picks" },
  { id: "tbp-8", name: "Lancôme Définicils High Definition Mascara", image: "https://m.media-amazon.com/images/I/61UedJwc7VL._SL1500_.jpg", price: "$27", description: "Create perfectly separated, lengthened, and natural-looking lashes without clumping or flaking.", link: "https://amzn.to/4vBbZHu", category: "Top Beauty Picks" },
  { id: "tbp-9", name: "Sunday Riley C.E.O. Glow Vitamin C & Turmeric Face Oil", image: "https://m.media-amazon.com/images/I/51n8PCddVjL._SL1000_.jpg", price: "$40", description: "Uses advanced Vitamin C and golden turmeric to instantly brighten the complexion and provide antioxidant protection for a healthy glow.", link: "https://amzn.to/4cL0OEt", category: "Top Beauty Picks" },
  { id: "tbp-10", name: "Laura Mercier Translucent Loose Setting Powder", image: "https://m.media-amazon.com/images/I/71QAHZzhQlL._SL1500_.jpg", price: "$34", description: "Lightweight powder that provides 24-hour shine control and a soft-matte finish to lock in makeup without adding weight or texture.", link: "https://amzn.to/4szyqKg", category: "Top Beauty Picks" },

  // Luxury Skincare
  { id: "ls-1", name: "Augustinus Bader The Cream", image: "https://m.media-amazon.com/images/I/715Yj-M9qJL._SL1500_.jpg", price: "$565", description: "lightweight daily moisturizer powered by TFC8® technology that supports cellular renewal to significantly reduce the appearance of fine lines, wrinkles, and hyperpigmentation.", link: "https://amzn.to/4840VID", category: "Luxury Skincare" },
  { id: "ls-2", name: "SK-II Facial Treatment Essence", image: "https://m.media-amazon.com/images/I/41--mR6SdYL._SX466_.jpg", price: "$190", description: "To refine skin texture, fade dark spots, and reduce fine lines for a clear, glowing complexion.", link: "https://amzn.to/4tbDup7", category: "Luxury Skincare" },
  { id: "ls-3", name: "Natura Bissé Diamond Extreme Eye", image: "https://m.media-amazon.com/images/I/61bgR7lVfFL._SL1500_.jpg", price: "$270", description: "Uses Artemia salina and botanical extracts to firm the eyelids, depuff bags, and brighten dark circles for a more energized appearance.", link: "https://amzn.to/4syknok", category: "Luxury Skincare" },
  { id: "ls-4", name: "Augustinus Bader Face Oil", image: "https://m.media-amazon.com/images/I/61ysh7LMyeL._SL1500_.jpg", price: "$100", description: "Nourishing anti-aging oil for dry or mature skin.", link: "https://amzn.to/3ODgaBM", category: "Luxury Skincare" },
  { id: "ls-5", name: "Caudalie Premier Cru The Rich Cream", image: "https://m.media-amazon.com/images/I/51S87twGRbL._SX466_.jpg", price: "$119", description: "Exceptional complete care for visible signs of aging.", link: "https://amzn.to/4vxySLO", category: "Luxury Skincare" },
  { id: "ls-6", name: "Night Treatment for Cream", image: "https://m.media-amazon.com/images/I/51a3W36fROL._SX466_.jpg", price: "$370", description: "Powerful rejuvenating potion for overnight transformation.", link: "https://amzn.to/4sLh2T6", category: "Luxury Skincare" },
  { id: "ls-7", name: "Supremÿa at Night", image: "https://m.media-amazon.com/images/I/714s2+2QjGL._SL1500_.jpg", price: "$1020", description: "Supreme anti-aging skin care for the night.", link: "https://amzn.to/3Qb1biW", category: "Luxury Skincare" },
  { id: "ls-8", name: "The Concentrate", image: "https://m.media-amazon.com/images/I/61pfCLD32eL._SL1500_.jpg", price: "$260", description: "Potent barrier serum to strengthen and protect.", link: "https://amzn.to/4tMIVLd", category: "Luxury Skincare" },
  { id: "ls-9", name: "Sublimage L'Extrait", image: "https://m.media-amazon.com/images/I/71GxZwWX3ZL._SL1500_.jpg", price: "$699", description: "Intensive recovery treatment with Vanilla Planifolia.", link: "https://amzn.to/4tHBDs6", category: "Luxury Skincare" },
  { id: "ls-10", name: "Biossance Squalane + Vitamin C Rose Oil", image: "https://m.media-amazon.com/images/I/71nPVEghgDL._SL1500_.jpg", price: "$74", description: "Plumps, smoothes, and illuminates with honey.", link: "https://amzn.to/4szFMgQ", category: "Luxury Skincare" },

  // Premium Makeup
  { id: "pm-1", name: "Lancôme L'Absolu Rouge Hydrating Cream Lipstick", image: "https://m.media-amazon.com/images/I/61xxWD0AEqL._SL1500_.jpg", price: "$28", description: "Iconic lipstick with floral lip care.", link: "https://amzn.to/4tU7iXz", category: "Premium Makeup" },
  { id: "pm-2", name: "Estée Lauder Double Wear Stay-in-Place Foundation", image: "https://m.media-amazon.com/images/I/610Hrtc8JiL._SL1500_.jpg", price: "$52", description: "Hydrating foundation for a natural, luminous finish.", link: "https://amzn.to/3OJNvLn", category: "Premium Makeup" },
  { id: "pm-3", name: "YSL Touche Éclat Awakening Concealer", image: "https://m.media-amazon.com/images/I/61xx3d+rRwL._SL1500_.jpg", price: "$58", description: "Cult-favorite concealer and highlighter in one.", link: "https://amzn.to/4temCy4", category: "Premium Makeup" },
  { id: "pm-4", name: "Hourglass Ambient Lighting Bronzer", image: "https://m.media-amazon.com/images/I/71A+a2MjkPL._SL1500_.jpg", price: "$58", description: "Finishing powder that recreates flattering light.", link: "https://amzn.to/4vvEpCB", category: "Premium Makeup" },
  { id: "pm-5", name: "Charlotte Tilbury Cheek to Chic Blush", image: "https://m.media-amazon.com/images/I/61cJ8WUMzBL._SL1500_.jpg", price: "$43", description: "Two-step blush for a limitless glow.", link: "https://amzn.to/4tfr3c8", category: "Premium Makeup" },
  { id: "pm-6", name: "Charlotte Tilbury Filmstar Bronze & Glow", image: "https://m.media-amazon.com/images/I/71J2sQ+PqXL._SL1500_.jpg", price: "$69", description: "Contour and highlight palette for sculpted features.", link: "https://amzn.to/4vs9QxH", category: "Premium Makeup" },
  { id: "pm-7", name: "Hourglass Illusion Luminous Glow Foundation", image: "https://m.media-amazon.com/images/I/41NgqJ1imrL.jpg", price: "$60", description: "Light-diffusing, oil-free fluid foundation.", link: "https://amzn.to/3OHlCDJ", category: "Premium Makeup" },
  { id: "pm-8", name: "Charlotte Tilbury K.I.S.S.I.N.G Lipstick", image: "https://m.media-amazon.com/images/I/51YMKdhhW3L._SL1500_.jpg", price: "$37", description: "Highly pigmented, powdery matte lipstick.", link: "https://amzn.to/4tc1ngi", category: "Premium Makeup" },
  { id: "pm-9", name: "Charlotte Tilbury Airbrush Flawless Finish Setting Powde", image: "https://m.media-amazon.com/images/I/61IvV1sIMkL._SL1500_.jpg", price: "$50", description: "Prevent the cakey look often associated with setting powders.", link: "https://amzn.to/3QGbPhH", category: "Premium Makeup" },
  { id: "pm-10", name: "Flawless Filter", image: "https://m.media-amazon.com/images/I/811Q3OCgnjL._AC_SL1500_.jpg", price: "$20", description: "Complexion booster for a superstar youth glow.", link: "https://amzn.to/3Qf481W", category: "Premium Makeup" },

  // Designer Perfumes
  { id: "dp-1", name: "Marc Jacobs Perfect Absolute", image: "https://m.media-amazon.com/images/I/51qo+TSgXvL._SL1500_.jpg", price: "$133", description: "Luminous and sophisticated amber floral and woody breeze.", link: "https://amzn.to/4ctL7QS", category: "Designer Perfumes" },
  { id: "dp-2", name: "Molton Brown Mesmerising Oudh Accord & Gold Eau", image: "https://m.media-amazon.com/images/I/71Kfr6NOJhL._SL1500_.jpg", price: "$180", description: "Rare, exotic, and distinctive woody fragrance.", link: "https://amzn.to/4cdkkJD", category: "Designer Perfumes" },
  { id: "dp-3", name: "Maison Margiela REPLICA Beach Walk", image: "https://m.media-amazon.com/images/I/71C-JT9ALVL._SX466_.jpg", price: "$89", description: "Fragrance designed to capture the memory of a summer day on a sandy beach", link: "https://amzn.to/4sD5Ck7", category: "Designer Perfumes" },
  { id: "dp-4", name: "Crown Collection Crab Apple Blossom by Clive Christian", image: "https://m.media-amazon.com/images/I/61IvMEKoopL._AC_SL1500_.jpg", price: "$500", description: "Citrus-aquatic perfume that reimagines a historic 1886 fragrance from the Crown Perfumery Company.", link: "https://amzn.to/4szDs9s", category: "Designer Perfumes" },
  { id: "dp-5", name: "Lancôme La Vie Est Belle Eau de Parfum", image: "https://m.media-amazon.com/images/I/71abXn-lnhL._SL1500_.jpg", price: "$76", description: "It is widely recognized for its exceptional longevity and its elegant, sweet, and feminine profile.", link: "https://amzn.to/4sGozm3", category: "Designer Perfumes" },
  { id: "dp-6", name: "Santal 33", image: "https://m.media-amazon.com/images/I/51xA9042BfL._SL1500_.jpg", price: "$150", description: "Intoxicating blend of cardamom, iris, violet, and ambrox.", link: "https://amzn.to/41AZDkJ", category: "Designer Perfumes" },
  { id: "dp-7", name: "Delina Eau de Parfum", image: "https://m.media-amazon.com/images/I/419m37SbQ-L._SL1000_.jpg", price: "$410", description: "Highly nuanced fragrance which is both sweet and sensual.", link: "https://amzn.to/4ctsi0f", category: "Designer Perfumes" },
  { id: "dp-8", name: "Creed Aventus for Her", image: "https://m.media-amazon.com/images/I/715gfqJ6o+L._SL1500_.jpg", price: "$310", description: "Woody Fresh, Crisp, Fruity & Floral Fragrance", link: "https://amzn.to/4mwaoOV", category: "Designer Perfumes" },
  { id: "dp-9", name: "Lost Cherry", image: "https://m.media-amazon.com/images/I/61lVynWtkaL._SL1500_.jpg", price: "$388", description: "A full-bodied journey into the once-forbidden.", link: "https://amzn.to/4eoIEtm", category: "Designer Perfumes" },
  { id: "dp-10", name: "J'adore L'Or", image: "https://m.media-amazon.com/images/I/71F6-t0zhzL._SL1500_.jpg", price: "$185", description: "The quintessence of the J'adore floral bouquet.", link: "https://amzn.to/4tUPdIZ", category: "Designer Perfumes" },

  // Hair Care
  { id: "hc-1", name: "Gold Lust Repair & Restore Shampoo", image: "https://m.media-amazon.com/images/I/614TiuhTMjL._SL1500_.jpg", price: "$56", description: "Reawakens hair to its glossiest, healthiest prime.", link: "https://amzn.to/4vurOPU", category: "Hair Care" },
  { id: "hc-2", name: "Hair Alchemy Fortifying Treatment", image: "https://m.media-amazon.com/images/I/51kniR5pLoL._SL1500_.jpg", price: "$66", description: "Strengthens fragile, weak hair from the inside out.", link: "https://amzn.to/481720l", category: "Hair Care" },
  { id: "hc-3", name: "Chronologiste Masque Intese Régénérant", image: "https://m.media-amazon.com/images/I/61cbb6c4OuL._SL1500_.jpg", price: "$70", description: "Revitalizing hair mask for intense nourishment.", link: "https://amzn.to/4euztrk", category: "Hair Care" },
  { id: "hc-4", name: "Elixir Ultime Hydrating Hair Oil", image: "https://m.media-amazon.com/images/I/51JZd3GDDtL._SL1500_.jpg", price: "$32", description: "Versatile beautifying oil for all hair types.", link: "https://amzn.to/4t8TJn3", category: "Hair Care" },
  { id: "hc-5", name: "No. 3 Hair Perfector", image: "https://m.media-amazon.com/images/I/61J1mJhNJfL._SL1500_.jpg", price: "$34", description: "Repairs and strengthens all hair types.", link: "https://amzn.to/4ce21UO", category: "Hair Care" },
  { id: "hc-6", name: "Dry Texturizing Spray", image: "https://m.media-amazon.com/images/I/71lEBsbH3hL._SL1500_.jpg", price: "$26", description: "Invisible dry hair spray for incredible volume.", link: "https://amzn.to/4vsDgvD", category: "Hair Care" },
  { id: "hc-7", name: "Scalp Revival Charcoal + Coconut Oil", image: "https://m.media-amazon.com/images/I/51tly68PNqL._SL1000_.jpg", price: "$42", description: "Micro-exfoliating shampoo for a healthy scalp.", link: "https://amzn.to/4mus1id", category: "Hair Care" },
  { id: "hc-8", name: "Honey Infused Hair Oil", image: "https://m.media-amazon.com/images/I/61DvAXj5jyL._SL1500_.jpg", price: "$44", description: "Multipurpose hair oil enriched with Mirsalehi Honey.", link: "https://amzn.to/4mrRsRe", category: "Hair Care" },
  { id: "hc-9", name: "Supernatural Spray", image: "https://m.media-amazon.com/images/I/51UYq7UwqrL._SL1000_.jpg", price: "$30", description: "Anti-frizz treatment for sleek, glass hair.", link: "https://amzn.to/4vxGLRp", category: "Hair Care" },
  { id: "hc-10", name: "Nutritive 8H Magic Night Serum", image: "https://m.media-amazon.com/images/I/51LZstXj+IL._SL1500_.jpg", price: "$62", description: "Overnight beauty sleep nourishing serum for dry hair.", link: "https://amzn.to/3OHDoXp", category: "Hair Care" },

  // Eye Makeup
  { id: "em-1", name: "Charlotte Tilbury Luxury Palette Eyeshadow", image: "https://m.media-amazon.com/images/I/71VogOEkd5L._SL1500_.jpg", price: "$46", description: "Everyday nude-pink eyeshadow palette.", link: "https://amzn.to/4tefzW6", category: "Eye Makeup" },
  { id: "em-2", name: "Lancôme Lash Idôle Lash-Lifting & Volumizing Mascara", image: "https://m.media-amazon.com/images/I/61jh-r2MLkL._SL1500_.jpg", price: "$24", description: "Spectacular volume and curl mascara.", link: "https://amzn.to/4tPbzLN", category: "Eye Makeup" },
  { id: "em-3", name: "NYX Epic Ink Liner – Waterproof Vegan Liquid Eyeliner", image: "https://m.media-amazon.com/images/I/617F0F8N5UL._SL1500_.jpg", price: "$9", description: "Award-winning waterproof liquid eyeliner.", link: "https://amzn.to/4mEd25o", category: "Eye Makeup" },
  { id: "em-4", name: "Professional Eyeshadow & Face Palette", image: "https://m.media-amazon.com/images/I/613ad1H3nHL._SL1024_.jpg", price: "$199", description: "Avant-garde floral eyeshadow palette.", link: "https://amzn.to/4syzv4Z", category: "Eye Makeup" },
  { id: "em-5", name: "Caviar Stick Eye Shadow", image: "https://m.media-amazon.com/images/I/81un5xqyMqL._SL1500_.jpg", price: "$34", description: "Long-lasting creamy eyeshadow stick.", link: "https://amzn.to/4mB9Zef", category: "Eye Makeup" },
  { id: "em-6", name: "Brow Freeze Styling Wax", image: "https://m.media-amazon.com/images/I/511dfJKCaLL._SL1500_.jpg", price: "$12", description: "Extreme-hold brow styling wax.", link: "https://amzn.to/4sF99yn", category: "Eye Makeup" },
  { id: "em-7", name: "Eyes to Kill Classic Mascara", image: "https://m.media-amazon.com/images/I/81OdFelW05L._SL1500_.jpg", price: "$27", description: "All-in-one mascara for volume, length, and definition.", link: "https://amzn.to/3QGTPno", category: "Eye Makeup" },
  { id: "em-8", name: "Liquid Lurex Eyeshadow", image: "https://m.media-amazon.com/images/I/71WrMLInSsL._SX466_.jpg", price: "$23", description: "Lustrous, long-wearing liquid eyeshadow.", link: "https://amzn.to/4cS7Wht", category: "Eye Makeup" },
  { id: "em-9", name: "Lancôme Le Stylo Waterproof Eyeliner – Long-Wear Creamy Pencil", image: "https://m.media-amazon.com/images/I/51k1ND+bbVL._SL1500_.jpg", price: "$23", description: "Soft, easily blendable eye pencil.", link: "https://amzn.to/481d4ya", category: "Eye Makeup" },
  { id: "em-10", name: "Naked3 Eyeshadow Palette", image: "https://m.media-amazon.com/images/I/61mUI1UgAdL._SL1500_.jpg", price: "$47", description: "12 rose-hued neutral eyeshadows.", link: "https://amzn.to/4dN5U4d", category: "Eye Makeup" },

  // Body Care
  { id: "bc-1", name: "Revitalizing Body Oil – Natural Anti-Aging Body Moisturizer", image: "https://m.media-amazon.com/images/I/61MgNuVVwxL._SL1500_.jpg", price: "$118", description: "Sensual, scented body oil.", link: "https://amzn.to/3OsSgsv", category: "Body Care" },
  { id: "bc-2", name: "Brazilian Bum Bum Cream", image: "https://m.media-amazon.com/images/I/71VU9Gf7kPL._SL1500_.jpg", price: "$48", description: "Fast-absorbing body cream that helps tighten and smooth.", link: "https://amzn.to/4syTL6v", category: "Body Care" },
  { id: "bc-3", name: "Resurrecting Aromatique Hand Balm", image: "https://m.media-amazon.com/images/I/71WhEBWAG3L._SL1500_.jpg", price: "$105", description: "Greaseless formulation for labor-wearied hands.", link: "https://amzn.to/3OoL0hu", category: "Body Care" },
  { id: "bc-4", name: "The Body Crème", image: "https://m.media-amazon.com/images/I/613vIdPrVjL._SL1024_.jpg", price: "$170", description: "Rich, hydrating body cream with Miracle Broth.", link: "https://amzn.to/4dS0jtj", category: "Body Care" },
  { id: "bc-5", name: "All Over Body Spray", image: "https://m.media-amazon.com/images/I/61g0b6gZUzL._SX466_.jpg", price: "$120", description: "Invigorating body spray lightly scented with Oud Wood.", link: "https://amzn.to/4mGGiII", category: "Body Care" },
  { id: "bc-6", name: "Geranium Leaf Body Cleanser", image: "https://m.media-amazon.com/images/I/71x7KxiHAeL._SL1500_.jpg", price: "$58", description: "Invigorating gentle gel cleanser.", link: "https://amzn.to/4erz7Sp", category: "Body Care" },
  { id: "bc-7", name: "Ambre Vanillé Soufflé Body Crème", image: "https://m.media-amazon.com/images/I/61rST91SNzL._SL1500_.jpg", price: "$62", description: "Silky, smooth crème that luxuriously nourishes.", link: "https://amzn.to/3Q56Tmy", category: "Body Care" },
  { id: "bc-8", name: "Nourishing Body Oil", image: "https://m.media-amazon.com/images/I/61WGSsYqI9L._SX466_.jpg", price: "$115", description: "Fast-absorbing, antioxidant-rich body oil.", link: "https://amzn.to/4es5f8p", category: "Body Care" },
  { id: "bc-9", name: "English Pear & Freesia Body Crème", image: "https://m.media-amazon.com/images/I/81Qb07EpVbL._SL1500_.jpg", price: "$75", description: "Luxurious body cream with a mellow, fruity scent.", link: "https://amzn.to/4tapps8", category: "Body Care" },
  { id: "bc-10", name: "Anti-Aging Body Cream", image: "https://m.media-amazon.com/images/I/61ceROp1AuL._AC_SX466_.jpg", price: "$260", description: "Intensely hydrating and firming body treatment.", link: "https://amzn.to/3Qavtm0", category: "Body Care" },

  // Celebrity Picks
  { id: "cp-1", name: "Magic Cream Moisturizer", image: "https://m.media-amazon.com/images/I/81AwFthKbIL._SL1500_.jpg", price: "$120", description: "Award-winning moisturizer for glowing, dewy skin.", link: "https://amzn.to/4tPqLbN", category: "Celebrity Picks" },
  { id: "cp-2", name: "The Rich Cream", image: "https://m.media-amazon.com/images/I/71g-nh8S-rL._SL1500_.jpg", price: "$315", description: "Highly concentrated, deeply moisturizing daily cream.", link: "https://amzn.to/3OmjXDw", category: "Celebrity Picks" },
  { id: "cp-3", name: "Active Botanical Serum", image: "https://m.media-amazon.com/images/I/51ewfHkiQKL._AC_SL1500_.jpg", price: "$325", description: "Luxurious multi-correctional face oil.", link: "https://amzn.to/4vAuGed", category: "Celebrity Picks" },
  { id: "cp-4", name: "CE Ferulic", image: "https://m.media-amazon.com/images/I/71h4CgdSA8L._SL1500_.jpg", price: "$35", description: "Patented daytime vitamin C serum.", link: "https://amzn.to/4tOMaBI", category: "Celebrity Picks" },
  { id: "cp-5", name: "P50 Lotion", image: "https://m.media-amazon.com/images/I/61xIT96VTSL._SL1500_.jpg", price: "$99", description: "Cult-favorite exfoliating toner.", link: "https://amzn.to/41CqFbu", category: "Celebrity Picks" },
  { id: "cp-6", name: "Supergoop! Unseen Sunscreen", image: "https://m.media-amazon.com/images/I/81PH15WYYML._SL1500_.jpg", price: "$40", description: "Totally invisible, weightless, scentless sunscreen.", link: "https://amzn.to/4eaw8hl", category: "Celebrity Picks" },
  { id: "cp-7", name: "Laneige Lip Sleeping Mask", image: "https://m.media-amazon.com/images/I/71CGIzOm-EL._SL1500_.jpg", price: "$24", description: "Leave-on lip mask that soothes and moisturizes.", link: "https://amzn.to/4tQK2JM", category: "Celebrity Picks" },
  { id: "cp-8", name: "Olaplex No. 7 Bonding Oil", image: "https://m.media-amazon.com/images/I/71ACqtMWo2L._SL1500_.jpg", price: "$32", description: "Highly-concentrated, weightless reparative styling oil.", link: "https://amzn.to/4enGzOn", category: "Celebrity Picks" },
  { id: "cp-9", name: "Dyson Airwrap Multi-Styler", image: "https://m.media-amazon.com/images/I/71Qr2Y9EETL._SL1500_.jpg", price: "$649", description: "Styles hair with air, not extreme heat.", link: "https://amzn.to/3QrALtg", category: "Celebrity Picks" },
  { id: "cp-10", name: "NuFACE Trinity Starter Kit", image: "https://m.media-amazon.com/images/I/51f1ZZrmqiL._AC_SL1500_.jpg", price: "$395", description: "Advanced microcurrent facial toning device.", link: "https://amzn.to/4mBsmzJ", category: "Celebrity Picks" },

  // Beauty Devices
  { id: "bd-1", name: "LED Light Therapy Mask", image: "https://m.media-amazon.com/images/I/81x0kmsMwsL._SL1500_.jpg", price: "$399", description: "Clinical-grade LED mask for anti-aging and acne.", link: "https://amzn.to/3OrKCi4", category: "Beauty Devices" },
  { id: "bd-2", name: "TheraFace PRO", image: "https://m.media-amazon.com/images/I/81jmIGq5a-L._SL1500_.jpg", price: "$419", description: "Ultimate device for facial health.", link: "https://amzn.to/4mvLNcS", category: "Beauty Devices" },
  { id: "bd-3", name: "UFO 2 Smart Mask Treatment", image: "https://m.media-amazon.com/images/I/81+m1WRzWrL._SL1500_.jpg", price: "$379", description: "Supercharged 2-minute facial treatment.", link: "https://amzn.to/4cLoubQ", category: "Beauty Devices" },
  { id: "bd-4", name: "LUNA 4 Facial Cleansing Brush", image: "https://m.media-amazon.com/images/I/81pa5sretGL._SL1500_.jpg", price: "$238", description: "Smart facial cleansing and firming massage.", link: "https://amzn.to/4eqUt2j", category: "Beauty Devices" },
  { id: "bd-5", name: "Droplette Microinfusion Device", image: "https://m.media-amazon.com/images/I/61e5r9ZvFgL._SL1366_.jpg", price: "$350", description: "Delivers ingredients deep into the skin.", link: "https://amzn.to/4eqkBu8", category: "Beauty Devices" },
  { id: "bd-6", name: "ZIIP HALO", image: "https://m.media-amazon.com/images/I/51f1ZZrmqiL._AC_SL1500_.jpg", price: "$395", description: "Nanocurrent and microcurrent facial device.", link: "https://amzn.to/4tLVTJa", category: "Beauty Devices" },
  { id: "bd-7", name: "SpectraLite FaceWare Pro", image: "https://m.media-amazon.com/images/I/81iQUPjZ5bL._SL1500_.jpg", price: "$455", description: "FDA-cleared LED mask for wrinkles and acne.", link: "https://amzn.to/4tQPrR4", category: "Beauty Devices" },
  { id: "bd-8", name: "Dermaflash LUXE+", image: "https://m.media-amazon.com/images/I/71q3963tHPL._SL1500_.jpg", price: "$199", description: "Advanced sonic dermaplaning device.", link: "https://amzn.to/48DBnlP", category: "Beauty Devices" },
  { id: "bd-9", name: "GloPRO Microneedling Tool", image: "https://m.media-amazon.com/images/I/91yDTrS7MnL._SL1500_.jpg", price: "$199", description: "Rejuvenating at-home microneedling tool.", link: "https://amzn.to/4enMJ0X", category: "Beauty Devices" },
  { id: "bd-10", name: "High Frequency Wand", image: "https://m.media-amazon.com/images/I/71q5U6T8fdL._AC_SL1500_.jpg", price: "$69", description: "Professional grade high frequency facial machine.", link: "https://amzn.to/4mBapkE", category: "Beauty Devices" },

  // Makeup Tools
  { id: "mt-1", name: "Artis Elite Mirror Oval 7", image: "https://m.media-amazon.com/images/I/51xqJaJzscL._SL1500_.jpg", price: "$49", description: "Luxurious, densely packed foundation brush.", link: "https://amzn.to/4muesPy", category: "Makeup Tools" },
  { id: "mt-2", name: "Beautyblender Pro", image: "https://m.media-amazon.com/images/I/81cpIeSB5xL._AC_SX466_.jpg", price: "$20", description: "Edgeless, high-definition cosmetic sponge.", link: "https://amzn.to/3QdrTrb", category: "Makeup Tools" },
  { id: "mt-3", name: "Surratt Relevée Lash Curler", image: "https://m.media-amazon.com/images/I/715DaQDnUQL._SL1500_.jpg", price: "$28", description: "Ergonomic eyelash curler for a sweeping curl.", link: "https://amzn.to/4teBa0B", category: "Makeup Tools" },
  { id: "mt-4", name: "Hakuhodo J5523 Eye Shadow Brush", image: "https://m.media-amazon.com/images/I/41mYX3R3WaL._SL1500_.jpg", price: "$28", description: "Handcrafted, ultra-soft blending brush.", link: "https://amzn.to/3QrTDs5", category: "Makeup Tools" },
  { id: "mt-5", name: "Rae Morris Juka Brush Set", image: "https://m.media-amazon.com/images/I/81-898mg0zL._SL1500_.jpg", price: "$135", description: "Magnetic, premium vegan makeup brushes.", link: "https://amzn.to/4cdPDUK", category: "Makeup Tools" },
  { id: "mt-6", name: "Tweezerman Slant Tweezer", image: "https://m.media-amazon.com/images/I/51koAzBZ49L._SL1500_.jpg", price: "$18", description: "Award-winning, perfectly aligned slanted tips.", link: "https://amzn.to/4ccbSuc", category: "Makeup Tools" },
  { id: "mt-7", name: "Kevyn Aucoin The Eyelash Curler", image: "https://m.media-amazon.com/images/I/61+pog+x0rL._SL1500_.jpg", price: "$17", description: "Slim, professional-quality eyelash curler.", link: "https://amzn.to/4sBL5MA", category: "Makeup Tools" },
  { id: "mt-8", name: "Hourglass Ambient Powder Brush", image: "https://m.media-amazon.com/images/I/71ZUx0qGPPL._SL1500_.jpg", price: "$40", description: "Ideal brush for applying finishing powder.", link: "https://amzn.to/42gbUew", category: "Makeup Tools" },
  { id: "mt-9", name: "Bronzer Brush", image: "https://m.media-amazon.com/images/I/51pVai+cD4L._SL1500_.jpg", price: "$35", description: "Luxurious, soft brush for flawless bronzer application.", link: "https://amzn.to/481GhsO", category: "Makeup Tools" },
  { id: "mt-10", name: "Simplehuman Sensor Mirror", image: "https://m.media-amazon.com/images/I/71KaISJ0eeL._AC_SL1500_.jpg", price: "$199", description: "Lighted makeup mirror with tru-lux light system.", link: "https://amzn.to/3QaS1mE", category: "Makeup Tools" },

  // Spring Nails
  { id: "sn-1", name: "Dior Vernis - Muguet", image: "https://m.media-amazon.com/images/I/718wqJHptRL._SL1500_.jpg", price: "$30", description: "Soft, pastel pink nail polish with gel effect.", link: "https://amzn.to/4cg4L3T", category: "Spring Nails" },
  { id: "sn-2", name: "Chanel Le Vernis - Ballerina", image: "https://m.media-amazon.com/images/I/81I9JvHSVOL._SL1500_.jpg", price: "$12", description: "Classic, elegant sheer pink polish.", link: "#", category: "Spring Nails" },
  { id: "sn-3", name: "VSALON Pink Cat Eye Press-On Nails", image: "https://m.media-amazon.com/images/I/61AQW4mCn4L._SL1500_.jpg", price: "$15", description: "Radiant color with a long-lasting finish.", link: "https://amzn.to/41DSLTF", category: "Spring Nails" },
  { id: "sn-4", name: "6-Color Hema-Free Gel Nail Polish Set", image: "https://m.media-amazon.com/images/I/81z4PV96OzL._SL1500_.jpg", price: "$79", description: "High-shine, vibrant nail polish.", link: "https://amzn.to/4vAFw3W", category: "Spring Nails" },
  { id: "sn-5", name: "Press on Nails Short Almond Easter Collection", image: "https://m.media-amazon.com/images/I/71mdS-NWVBL._SL1500_.jpg", price: "$59", description: "Extra-amplified gloss and shine.", link: "https://amzn.to/4sCOkUc", category: "Spring Nails" },
  { id: "sn-6", name: "The Big Day Almond Kit", image: "https://m.media-amazon.com/images/I/7133Go1F5WL._SL1500_.jpg", price: "$17", description: "These salon-quality soft gel press-on nails.", link: "https://amzn.to/3O5hptq", category: "Spring Nails" },
  { id: "sn-7", name: "Dry Nail Polish Set – Spring & Summer Collection", image: "https://m.media-amazon.com/images/I/8153JgvYDVL._SL1500_.jpg", price: "$45", description: "Vibrant color with a flawless finish.", link: "https://amzn.to/3ObkiZI", category: "Spring Nails" },
  { id: "sn-8", name: "Oribe Nail Alchemy - The Nude", image: "https://m.media-amazon.com/images/I/61nzBKKWv+L._SL1500_.jpg", price: "$14", description: "High-coverage, long-wearing polish.", link: "https://amzn.to/4cvrAzo", category: "Spring Nails" },
  { id: "sn-9", name: "Deborah Lippmann - Gel Lab Pro", image: "https://m.media-amazon.com/images/I/41Rg9t2ka4L._SL1000_.jpg", price: "$20", description: "Healthy alternative to gel polish.", link: "https://amzn.to/4cNaE8O", category: "Spring Nails" },
  { id: "sn-10", name: "JINsoon - Nostalgia", image: "https://m.media-amazon.com/images/I/61-UCNXwoBL._SL1500_.jpg", price: "$18", description: "5-free, high-gloss, long-lasting polish.", link: "https://amzn.to/4szrTiD", category: "Spring Nails" }
];
