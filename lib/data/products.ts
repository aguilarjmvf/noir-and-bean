import type { Product } from "@/types";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "yirgacheffe-natural",
    name: "Yirgacheffe Natural",
    origin: "Gedeo Zone, Ethiopia",
    country: "Ethiopia",
    elevation: "2,100m",
    process: "Natural",
    roast: "Light",
    tastingNotes: "Blueberry, jasmine, dark chocolate finish.",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=800&fit=crop&q=80",
    slug: "yirgacheffe-natural",
    harvest: "November 2024",
    description:
      "A wildly expressive natural-process coffee from the birthplace of Arabica. Drying the cherry whole on raised beds amplifies the fruit until it's almost wine-like. Best as a pour-over or Aeropress, black — no milk to hide behind.",
  },
  {
    id: "burundi-kibira",
    name: "Burundi Kibira Hill",
    origin: "Kayanza Province, Burundi",
    country: "Burundi",
    elevation: "1,900m",
    process: "Washed",
    roast: "Light",
    tastingNotes: "Peach nectar, lemon curd, hibiscus.",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=800&fit=crop&q=80",
    slug: "burundi-kibira",
    badge: "New",
    harvest: "June 2024",
    description:
      "Grown on the steep hills bordering the Kibira rainforest, this washed lot is all clarity and lift. Delicate and floral up top, with a juicy stone-fruit centre that keeps unfolding as the cup cools.",
  },
  {
    id: "kenya-nyeri",
    name: "Kenya Nyeri AB",
    origin: "Nyeri County, Kenya",
    country: "Kenya",
    elevation: "1,800m",
    process: "Washed",
    roast: "Light-Medium",
    tastingNotes: "Blackcurrant, tomato, brown sugar.",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&h=800&fit=crop&q=80",
    slug: "kenya-nyeri",
    harvest: "January 2025",
    description:
      "Classic Nyeri intensity from the volcanic red soils of the central highlands. A savoury blackcurrant depth balanced by a syrupy sweetness — the kind of cup that reminds you why Kenyan coffee has a cult following.",
  },
  {
    id: "huila-reserve",
    name: "Huila Reserve",
    origin: "Huila Department, Colombia",
    country: "Colombia",
    elevation: "1,850m",
    process: "Washed",
    roast: "Medium",
    tastingNotes: "Brown sugar, red plum, walnut.",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=800&fit=crop&q=80",
    slug: "huila-reserve",
    harvest: "August 2024",
    description:
      "Sourced from a single family farm in one of Colombia's most celebrated growing regions. Balanced enough for any brew method, complex enough to reward attention — our most versatile everyday cup.",
  },
  {
    id: "peru-cajamarca",
    name: "Peru Cajamarca",
    origin: "Cajamarca Region, Peru",
    country: "Peru",
    elevation: "1,750m",
    process: "Washed",
    roast: "Medium",
    tastingNotes: "Milk chocolate, hazelnut, dried apricot.",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=800&fit=crop&q=80",
    slug: "peru-cajamarca",
    harvest: "September 2024",
    description:
      "A gentle, comforting cup from smallholder farms high in the northern Andes. Rounded chocolate and nut with a soft fruit edge — forgiving on any machine and a reliable base for milk drinks.",
  },
  {
    id: "costa-rica-tarrazu",
    name: "Costa Rica Tarrazú",
    origin: "Los Santos Valley, Costa Rica",
    country: "Costa Rica",
    elevation: "1,650m",
    process: "Honey",
    roast: "Medium",
    tastingNotes: "Nectarine, almond butter, cane sugar.",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=800&fit=crop&q=80",
    slug: "costa-rica-tarrazu",
    harvest: "March 2024",
    description:
      "Honey processing leaves some of the fruit mucilage on the bean as it dries, splitting the difference between washed clarity and natural sweetness. The result is silky and rounded, with a clean cane-sugar finish.",
  },
  {
    id: "antigua-estate",
    name: "Antigua Estate",
    origin: "Sacatepéquez, Guatemala",
    country: "Guatemala",
    elevation: "1,700m",
    process: "Washed",
    roast: "Medium-Dark",
    tastingNotes: "Caramel, cedar, bittersweet cocoa.",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop&q=80",
    slug: "antigua-estate",
    harvest: "March 2024",
    description:
      "A structured, full-bodied coffee from the volcanic slopes around Antigua. The kind of cup that makes you think seriously about whether you need a second. You do.",
  },
  {
    id: "brazil-cerrado",
    name: "Brazil Cerrado Natural",
    origin: "Cerrado Mineiro, Brazil",
    country: "Brazil",
    elevation: "1,050m",
    process: "Natural",
    roast: "Medium-Dark",
    tastingNotes: "Dark chocolate, roasted almond, brown sugar.",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=800&fit=crop&q=80",
    slug: "brazil-cerrado",
    harvest: "July 2024",
    description:
      "Low-acidity, heavy-bodied, and dependable — the backbone of a great espresso. Deep chocolate and toasted nut with enough sweetness to pull a balanced shot without fuss. Our most popular coffee to grind for the machine.",
  },
  {
    id: "sulawesi-toraja",
    name: "Sulawesi Toraja",
    origin: "Tana Toraja, Indonesia",
    country: "Indonesia",
    elevation: "1,400m",
    process: "Wet-Hulled",
    roast: "Dark",
    tastingNotes: "Earthy spice, molasses, dried fruit.",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=800&fit=crop&q=80",
    slug: "sulawesi-toraja",
    harvest: "July 2024",
    description:
      "Indonesia's most complex terroir in a cup. Traditional wet-hull processing gives it a distinctive low-acidity body that works beautifully as espresso or French press. Earthy, savoury, and unmistakably itself.",
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    origin: "North Sumatra, Indonesia",
    country: "Indonesia",
    elevation: "1,200m",
    process: "Wet-Hulled",
    roast: "Dark",
    tastingNotes: "Cedar, dark cocoa, black pepper, tobacco.",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=800&fit=crop&q=80",
    slug: "sumatra-mandheling",
    harvest: "May 2024",
    description:
      "Dark, brooding, and full of character. Cedar and cocoa lead into a peppery, almost smoky depth — a heavyweight cup for anyone who takes their coffee bold and their evenings slow.",
  },
];

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) =>
  ["yirgacheffe-natural", "huila-reserve", "antigua-estate", "sulawesi-toraja"].includes(p.id)
);

/** Look up a single product by its URL slug. */
export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

/** Other coffees to suggest on a detail page — same roast first, then fill. */
export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return ALL_PRODUCTS.slice(0, limit);

  const others = ALL_PRODUCTS.filter((p) => p.slug !== slug);
  const sameRoast = others.filter((p) => p.roast === current.roast);
  const rest = others.filter((p) => p.roast !== current.roast);
  return [...sameRoast, ...rest].slice(0, limit);
}
