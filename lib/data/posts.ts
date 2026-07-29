import type { BlogPost } from "@/types";

export const POSTS: BlogPost[] = [
  {
    slug: "forty-eight-hours-in-gedeo-zone",
    title: "Forty-Eight Hours in Gedeo Zone",
    excerpt:
      "We followed a single lot of Yirgacheffe cherries from the tree to the drying bed. Here's what two days at 2,100 meters taught us about why this coffee tastes the way it does.",
    subtitle:
      "What two days at 2,100 meters taught us about why the Yirgacheffe Natural tastes the way it does.",
    category: "Origins",
    author: "Elise Nakamura",
    date: "2025-01-14",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&h=750&fit=crop&q=85",
    content: [
      {
        type: "paragraph",
        text: "I've been to the Gedeo Zone four times. Each time I land in Addis and drive south through the highlands, I think I'm prepared for it. I'm not. The density of the forest, the altitude, the smell of coffee growing wild alongside cardamom and false banana — it resets something.",
      },
      {
        type: "paragraph",
        text: "The farm we partner with sits at 2,100 meters above sea level, which matters. At that elevation, the coffee cherry takes longer to ripen — sometimes twice as long as a low-altitude cherry. The cellular structure develops more slowly, and that extra time concentrates the sugars and acids in ways that eventually become what you taste in the cup.",
      },
      { type: "heading", text: "The Harvest" },
      {
        type: "paragraph",
        text: "Picking starts at six. The family employs thirty seasonal workers during harvest, almost all of them from the surrounding village. They pick only red cherries — no under-ripes, no overripes, a selectivity that requires multiple passes through the same trees over several weeks rather than a single strip harvest.",
      },
      {
        type: "paragraph",
        text: "I followed one picker named Selam for about two hours. She moved through the trees with a fluency I can only describe as musical — she never seemed to look for the ripe cherries, she seemed to already know where they were.",
      },
      {
        type: "paragraph",
        text: "By eight o'clock, the collection area was already piled with fruit. The color was extraordinary. Hundreds of kilograms of deep red and burgundy cherries, with the occasional yellow variety mixed in.",
      },
      { type: "heading", text: "The Drying Beds" },
      {
        type: "paragraph",
        text: "This is where natural processing becomes what it is. The cherries go directly from the picking area onto raised African drying beds — no pulping, no washing, no fermentation tanks. Just whole fruit, elevated from the ground so air can circulate beneath it, laid out in a thin layer under the highland sun.",
      },
      {
        type: "paragraph",
        text: "For the next twenty to forty days, the cherry will slowly desiccate. The fruit dries around the seed. All those sugars and fruit compounds seep through the skin and into the parchment, infusing the bean with the flavors that eventually produce what a cupper calls “fruit-forward” or “natural process character.”",
      },
      {
        type: "paragraph",
        text: "The beds are turned by hand every hour or two during the day. The smell is extraordinary — wine, dried fruit, something almost fermented at the edges. Left too long, it goes wrong. Done correctly, it becomes the Yirgacheffe Natural.",
      },
      { type: "heading", text: "What We Actually Taste" },
      {
        type: "paragraph",
        text: "When I cup this coffee back in Portland, I taste blueberry. Everyone does. It's the most reliably consistent tasting note in our entire catalog — something about the specific combination of variety, elevation, and drying time produces a blueberry compound so consistent that professional cuppers with no prior knowledge of the origin identify it almost universally.",
      },
      {
        type: "paragraph",
        text: "This is why we make the sourcing trip every year. Not because we couldn't reorder by email. But because the specific decisions made on a specific farm are all present in the cup you eventually make at six in the morning, two continents away.",
      },
    ],
  },
  {
    slug: "the-pour-over-dial-in",
    title: "The Pour-Over Dial-In: A Ratio-First Approach",
    excerpt:
      "Most people start with grind size when they're dialing in a pour-over. We start with ratio. Here's why it changes everything.",
    subtitle: "Fix your ratio before you touch the grinder. Everything else gets easier.",
    category: "Brew Guides",
    author: "James Okafor",
    date: "2025-01-07",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&q=85",
    content: [
      {
        type: "paragraph",
        text: "When someone tells me their pour-over tastes off, the first thing they reach for is grind size. It's the wrong first move. Grind is a fine-tuning tool — it controls how fast water moves through the bed. But if your ratio is wrong, no grind adjustment will save the cup.",
      },
      {
        type: "paragraph",
        text: "Start here: 60 grams of coffee per liter of water. For a single cup, that's roughly 15 grams of coffee to 250 grams of water — a 1:16.6 ratio. Weigh both. A kitchen scale is the single most valuable piece of equipment in your kitchen, more than any kettle or dripper.",
      },
      { type: "heading", text: "Lock the ratio, then adjust" },
      {
        type: "paragraph",
        text: "Once your ratio is fixed, you have two levers: grind and time. If the cup is thin, sour, and watery, your extraction is too low — grind finer to slow the water down. If it's harsh, bitter, and drying, you've over-extracted — grind coarser. Change one variable at a time, and taste between every change.",
      },
      {
        type: "paragraph",
        text: "Aim for a total brew time of two and a half to three minutes for a single cup. If you're finishing in ninety seconds, your grind is too coarse regardless of how the cup tastes. Consistency in process is what lets you actually learn from each brew.",
      },
      {
        type: "paragraph",
        text: "Dial in one coffee this way and the method transfers to every bag you buy after. That's the whole point — you're not memorizing recipes, you're building intuition.",
      },
    ],
  },
  {
    slug: "why-elevation-matters-more-than-country",
    title: "Why Elevation Matters More Than Country",
    excerpt:
      "Ethiopia and Colombia are very different places. But a 2,000m Ethiopian natural and a 2,000m Colombian washed have more in common than either does with a low-altitude coffee from the same country.",
    subtitle: "The number on the bag that tells you the most isn't the country. It's the altitude.",
    category: "Origins",
    author: "Elise Nakamura",
    date: "2024-12-19",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&h=400&fit=crop&q=85&sat=-40",
    content: [
      {
        type: "paragraph",
        text: "We label coffee by country because it's easy, not because it's the most useful information. Country tells you a region and a rough set of traditions. Elevation tells you what's actually happening inside the cherry.",
      },
      {
        type: "paragraph",
        text: "Higher-grown coffee ripens more slowly. Cooler temperatures at altitude stretch the maturation window, and that slower development concentrates sugars and organic acids in the seed. More acid reads as more brightness and clarity in the cup; more sugar reads as sweetness and complexity.",
      },
      { type: "heading", text: "The comparison that surprised me" },
      {
        type: "paragraph",
        text: "A 2,000m Ethiopian natural and a 2,000m Colombian washed are processed completely differently and grown a hemisphere apart. But cup them side by side and the shared density — the intensity, the structure, the finish length — is unmistakable. Then cup either against a 1,000m coffee from the same country, and the gap is enormous.",
      },
      {
        type: "paragraph",
        text: "None of this means low-grown coffee is bad. Lower elevations give you body, chocolate, and forgiveness — exactly what you want in an espresso base. It just means the country name on the bag is the least specific thing on the label. Read the altitude first.",
      },
    ],
  },
  {
    slug: "the-quiet-case-for-drinking-coffee-alone",
    title: "The Quiet Case for Drinking Coffee Alone",
    excerpt:
      "Coffee culture increasingly defaults to the social. The café as third space, the meeting over espresso. But there's something to be said for the cup you make before anyone else is awake.",
    subtitle: "Not every ritual needs company.",
    category: "Culture",
    author: "James Okafor",
    date: "2024-12-10",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=600&h=400&fit=crop&q=85",
    content: [
      {
        type: "paragraph",
        text: "Most of the coffee industry is built around the social cup. The café as a third place. The meeting over espresso. The catch-up over flat whites. It's a good part of the culture, and we're not arguing against it.",
      },
      {
        type: "paragraph",
        text: "But the cup we think about most is the one you make before anyone else is awake. No conversation, no line, no playlist chosen by committee — just the grinder, the kettle, and ten minutes that belong entirely to you.",
      },
      {
        type: "paragraph",
        text: "There's a reason the morning ritual survives even in a world optimized for speed. Grinding by hand, waiting for the bloom, watching the bed settle — it's a small, deliberate act in a day full of things you didn't choose. The slowness is the point.",
      },
      {
        type: "paragraph",
        text: "So make it well, even when no one's watching. Especially then.",
      },
    ],
  },
  {
    slug: "cold-brew-concentrate-three-ways",
    title: "Cold Brew Concentrate: One Ratio, Three Ways to Use It",
    excerpt:
      "A strong cold brew concentrate is one of the most versatile things you can have in your refrigerator. We use it straight, in cocktails, and as a base for two desserts.",
    subtitle: "Brew once, keep it in the fridge, and use it all week.",
    category: "Recipes",
    author: "Noir & Bean",
    date: "2024-11-28",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&h=400&fit=crop&q=85",
    content: [
      {
        type: "paragraph",
        text: "Cold brew concentrate is the most useful thing you can keep in your fridge. Brew it strong, store it, and dilute to taste — it holds for up to two weeks and opens up far more than an iced coffee.",
      },
      { type: "heading", text: "The concentrate" },
      {
        type: "paragraph",
        text: "Use a 1:5 ratio of coffee to water by weight — 200 grams of coarsely ground coffee to 1 liter of cold, filtered water. Stir to saturate, cover, and steep at room temperature for 16 hours. Strain through a paper filter. That's your base.",
      },
      { type: "heading", text: "Three ways to use it" },
      {
        type: "paragraph",
        text: "Straight: dilute one part concentrate to one part water or milk over ice. Bright, clean, and strong. In cocktails: it stands in beautifully for espresso in an espresso martini, and a half-ounce adds backbone to an old fashioned.",
      },
      {
        type: "paragraph",
        text: "As a dessert base: whisk two tablespoons into a simple mascarpone cream for a shortcut tiramisu, or freeze it into a granita — scrape with a fork every thirty minutes until flaky. One brew, a whole week of uses.",
      },
    ],
  },
];

export const FEATURED_POST = POSTS[0];
export const RECENT_POSTS = POSTS.slice(1);

/** Look up a single article by its URL slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Related reading for a detail page — same category first, then fill. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  const others = POSTS.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
