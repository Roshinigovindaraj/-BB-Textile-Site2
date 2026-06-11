export type DropdownItem = {
  label: string
  href: string
  tag?: string
}

export type NavLink = {
  label: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

export type FeatureBadge = {
  title: string
  subtitle: string
  icon: 'shield' | 'medal' | 'package'
}

export type Category = {
  name: string
  image: string
}

export type Product = {
  name: string
  price: string
  image: string
}

export type BridalProduct = {
  name: string
  price: string
  rating: number
  reviews: number
  tag?: string
  image: string
}

export type SareeProduct = BridalProduct

export type SareeCategoryMeta = {
  slug: string
  title: string
  subtitle: string
  description: string
  accentColor: string
  heroBg: string
  heroImage: string        // real photo for hero right panel
  products: SareeProduct[]
}

export type Benefit = {
  title: string
  description: string
  icon: 'lotus' | 'sparkles' | 'hand' | 'truck' | 'headphones'
}

export type Testimonial = {
  quote: string
  author: string
  city: string
  avatar: string
}

const svgToDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const createPortraitArtwork = (palette: {
  background: string
  wall: string
  saree: string
  border: string
  skin: string
  hair: string
  blouse: string
}) =>
  svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 760">
      <defs>
        <linearGradient id="wall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.background}" />
          <stop offset="100%" stop-color="${palette.wall}" />
        </linearGradient>
        <linearGradient id="saree" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.saree}" />
          <stop offset="100%" stop-color="${palette.border}" />
        </linearGradient>
        <pattern id="zari" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="3" fill="#f7df9a" opacity="0.6" />
          <path d="M6 12h12M12 6v12" stroke="#f7df9a" stroke-width="1.2" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="600" height="760" fill="url(#wall)" />
      <path d="M414 24h126c20 0 36 16 36 36v640c0 20-16 36-36 36H414z" fill="#8a6a57" opacity="0.28" />
      <path d="M0 68h126c-6 24-8 50-8 78v372c0 68 16 144 50 242H0Z" fill="#ede0d3" opacity="0.88" />
      <path d="M110 0h44v760h-44zM468 0h54v760h-54z" fill="#6a493a" opacity="0.16" />
      <path d="M132 88c32-54 78-84 134-84 58 0 104 30 136 84v556c-38 50-82 76-136 76-54 0-100-26-134-76Z" fill="#caa789" opacity="0.12" />
      <ellipse cx="318" cy="168" rx="58" ry="72" fill="${palette.skin}" />
      <path d="M252 162c10-62 48-106 88-106 46 0 88 54 88 128-20-28-40-46-86-46-32 0-52 6-90 24Z" fill="${palette.hair}" />
      <path d="M376 180c32 18 52 52 54 102 6 124-16 238 18 382H206c18-104 30-196 34-276 4-74 18-132 54-178 22-28 46-42 82-42 36 0 60 8 80 12Z" fill="url(#saree)" />
      <path d="M232 304c62-40 126-50 208-18" stroke="#f6dfa6" stroke-width="18" opacity="0.6" />
      <path d="M218 350c88 14 176 98 198 230" fill="none" stroke="${palette.border}" stroke-width="86" stroke-linecap="round" />
      <path d="M218 352c92 14 176 96 198 228" fill="none" stroke="url(#zari)" stroke-width="82" stroke-linecap="round" opacity="0.8" />
      <path d="M202 256c46-46 86-62 132-62 50 0 88 14 126 52l-22 54c-50-32-92-42-124-42-34 0-74 10-126 42Z" fill="${palette.blouse}" />
      <path d="M142 734c62-34 132-50 212-50 74 0 148 12 246 48v28H142Z" fill="#b78b72" opacity="0.34" />
      <circle cx="442" cy="244" r="20" fill="#f3d88a" opacity="0.78" />
      <circle cx="470" cy="274" r="16" fill="#f3d88a" opacity="0.72" />
      <circle cx="492" cy="300" r="12" fill="#f3d88a" opacity="0.68" />
    </svg>
  `)

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Sarees',
    href: '/sarees/silk',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Silk Sarees',     href: '/sarees/silk' },
      { label: 'Banarasi Sarees', href: '/sarees/banarasi' },
      { label: 'Kancheepuram',    href: '/sarees/kancheepuram' },
      { label: 'Tussar Sarees',   href: '/sarees/tussar' },
      { label: 'Linen Sarees',    href: '/sarees/linen' },
      { label: 'Designer Sarees', href: '/sarees/designer', tag: 'New' },
    ],
  },
  {
    label: 'Collections',
    href: '/bridal',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Bridal Collection',  href: '/bridal',     tag: 'New' },
      { label: 'Festive Picks',      href: '/festive' },
      { label: 'Casual Wear',        href: '/casual' },
      { label: 'Office Elegance',    href: '/office' },
      { label: 'Party Wear',         href: '/party' },
    ],
  },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'About Us',     href: '#why-vaarini' },
  { label: 'Contact',      href: '#footer' },
]

export const heroBadges: FeatureBadge[] = [
  { title: 'Authentic', subtitle: 'Weaves', icon: 'shield' },
  { title: 'Handpicked', subtitle: 'Luxury', icon: 'medal' },
  { title: 'Premium', subtitle: 'Quality', icon: 'package' },
]

export const categoryItems: Category[] = [
  { name: 'Silk Sarees',     image: '/images/d1.png' },
  { name: 'Designer Sarees', image: '/images/d2.png' },
  { name: 'Banarasi Sarees', image: '/images/d3.png' },
  { name: 'Kancheepuram',    image: '/images/d4.png' },
  { name: 'Tussar Sarees',   image: '/images/d5.png' },
  { name: 'Linen Sarees',    image: '/images/d6.png' },
]

export const newArrivalProducts: Product[] = [
  { name: 'Soft Silk Saree',      price: '₹3,899', image: '/images/n1.png' },
  { name: 'Banarasi Silk Saree',  price: '₹7,499', image: '/images/n2.png' },
  { name: 'Kanjipuram Saree',     price: '₹8,999', image: '/images/n3.png' },
  { name: 'Tussar Silk Saree',    price: '₹4,599', image: '/images/n4.png' },
  { name: 'Linen Silk Saree',     price: '₹3,299', image: '/images/n5.png' },
]

export const heroImage = '/images/b-hero.png'

export const benefits: Benefit[] = [
  {
    title: 'Authentic Weaves',
    description: 'Sourced from trusted weaving communities across India.',
    icon: 'lotus',
  },
  {
    title: 'Pure & Premium',
    description: 'Curated fabrics chosen for drape, sheen, and richness.',
    icon: 'sparkles',
  },
  {
    title: 'Handpicked With Care',
    description: 'Every piece is selected to feel refined and occasion-ready.',
    icon: 'hand',
  },
  {
    title: 'Secure & Fast Delivery',
    description: 'Safe packing and quick doorstep delivery for every order.',
    icon: 'truck',
  },
  {
    title: 'Personal Styling',
    description: 'Thoughtful suggestions to help you style with confidence.',
    icon: 'headphones',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'The quality is exceptional and the saree looks even more beautiful in person. Absolutely loved the purchase.',
    author: 'Priya S.',
    city: 'Bengaluru',
    avatar: createPortraitArtwork({ background: '#f0e0d8', wall: '#d4b0a0', saree: '#c84060', border: '#f090a8', skin: '#d4a882', hair: '#2c1814', blouse: '#a02848' }),
  },
  {
    quote: 'Vaarini Boutique is my go-to store for sarees. Elegant collections and amazing customer service!',
    author: 'Anjali R.',
    city: 'Hyderabad',
    avatar: createPortraitArtwork({ background: '#e8d4c8', wall: '#c49878', saree: '#8b1a1a', border: '#d4a017', skin: '#c8906a', hair: '#2a1810', blouse: '#6b1212' }),
  },
  {
    quote: 'Handpicked with so much care. Received so many compliments when I wore it!',
    author: 'Meera K.',
    city: 'Chennai',
    avatar: createPortraitArtwork({ background: '#dce8e0', wall: '#9abcaa', saree: '#1a6040', border: '#c0a830', skin: '#c89060', hair: '#281c14', blouse: '#144830' }),
  },
]

export const footerColumns = [
  {
    title: 'Shop',
    links: ['All Sarees', 'Silk Sarees', 'Designer Sarees', 'Banarasi Sarees', 'Kanchipuram', 'Tussar Sarees', 'New Arrivals'],
  },
  {
    title: 'Help',
    links: ['Track Order', 'Shipping & Delivery', 'Returns & Exchanges', 'FAQs', 'Care Instructions', 'Size Guide'],
  },
  {
    title: 'About',
    links: ['About Us', 'Our Weaves', 'Sustainability', 'Contact Us', 'Store Locator'],
  },
]

export const bridalProducts: BridalProduct[] = [
  {
    name: 'Royal Red Banarasi Saree',
    price: '₹18,999',
    rating: 4.5,
    reviews: 42,
    tag: 'New',
    image: createPortraitArtwork({ background: '#e8d0c4', wall: '#c4937a', saree: '#8b1a1a', border: '#d4a017', skin: '#c8906a', hair: '#2a1810', blouse: '#6b1212' }),
  },
  {
    name: 'Golden Kanchipuram Saree',
    price: '₹16,999',
    rating: 4.5,
    reviews: 36,
    tag: 'New',
    image: createPortraitArtwork({ background: '#ede0cc', wall: '#c9a87a', saree: '#c8a528', border: '#f0d060', skin: '#cc9a70', hair: '#2e1e14', blouse: '#9a7a1a' }),
  },
  {
    name: 'Blush Pink Silk Saree',
    price: '₹15,999',
    rating: 4.0,
    reviews: 28,
    tag: 'New',
    image: createPortraitArtwork({ background: '#f0ddd6', wall: '#d4b0a4', saree: '#c87090', border: '#f0a8b8', skin: '#d0a080', hair: '#301e18', blouse: '#a0506c' }),
  },
  {
    name: 'Emerald Green Kanjivaram Saree',
    price: '₹17,999',
    rating: 4.5,
    reviews: 31,
    tag: 'New',
    image: createPortraitArtwork({ background: '#d8e4d8', wall: '#9ab89a', saree: '#1a5c38', border: '#c8a030', skin: '#c89060', hair: '#281c14', blouse: '#143c24' }),
  },
  {
    name: 'Purple & Gold Banarasi Saree',
    price: '₹18,499',
    rating: 4.5,
    reviews: 24,
    tag: 'New',
    image: createPortraitArtwork({ background: '#e0d4ec', wall: '#b4a0cc', saree: '#5a2880', border: '#d4a030', skin: '#cc9070', hair: '#2c1818', blouse: '#401860' }),
  },
  {
    name: 'Ivory Gold Silk Saree',
    price: '₹16,499',
    rating: 4.0,
    reviews: 19,
    tag: 'New',
    image: createPortraitArtwork({ background: '#f0e8d8', wall: '#d8c4a4', saree: '#e8d498', border: '#c8a850', skin: '#d0a070', hair: '#2e2010', blouse: '#b89040' }),
  },
  {
    name: 'Traditional Red Kanchipuram Saree',
    price: '₹19,999',
    rating: 4.5,
    reviews: 45,
    tag: 'New',
    image: createPortraitArtwork({ background: '#e4ccbc', wall: '#c09878', saree: '#9e1a1a', border: '#e8b830', skin: '#ca9060', hair: '#281810', blouse: '#781414' }),
  },
  {
    name: 'Peach Zari Weave Saree',
    price: '₹14,999',
    rating: 4.0,
    reviews: 17,
    tag: 'New',
    image: createPortraitArtwork({ background: '#f0ddd0', wall: '#d4b498', saree: '#d8906c', border: '#f0c898', skin: '#d0a07c', hair: '#2c1c14', blouse: '#b06848' }),
  },
]

export const bridalBenefits: Benefit[] = [
  { title: 'Authentic Weaves', description: 'Sourced from trusted weaving communities across India.', icon: 'lotus' },
  { title: 'Handpicked With Care', description: 'Curated sarees that speak elegance.', icon: 'hand' },
  { title: 'Secure & Fast Delivery', description: 'Safe packaging and quick doorstep delivery.', icon: 'truck' },
  { title: 'Personal Styling', description: 'Need help choosing? We\'re here for you.', icon: 'headphones' },
]

/* ─────────────────────────────────────────
   SAREE CATEGORY PAGES DATA
───────────────────────────────────────── */

export const sareeCategoryData: SareeCategoryMeta[] = [
  {
    slug: 'silk',
    title: 'Silk',
    subtitle: 'Sarees Collection',
    description: 'Timeless elegance woven into every thread. Discover handcrafted silk sarees for weddings, festivals, and special occasions.',
    accentColor: '#6e1024',
    heroBg: '#faf5f0',
    heroImage: '/images/hero-backgr.png',
    products: [
      { name: 'Pure Katan Silk Saree',       price: '₹12,999', rating: 4.5, reviews: 38, tag: 'New', image: '/images/ss1.png' },
      { name: 'Mysore Silk Saree',            price: '₹9,499',  rating: 4.0, reviews: 22, tag: 'New', image: '/images/sss2.png' },
      { name: 'Kanchipuram Silk Saree',       price: '₹16,999', rating: 4.5, reviews: 51, tag: 'New', image: '/images/ss3.png' },
      { name: 'Soft Silk Bandhani Saree',     price: '₹7,999',  rating: 4.0, reviews: 17,             image: '/images/n4.png' },
      { name: 'Gadwal Silk Saree',            price: '₹11,499', rating: 4.5, reviews: 29,             image: '/images/n5.png' },
      { name: 'Patola Silk Saree',            price: '₹22,999', rating: 5.0, reviews: 14, tag: 'New', image: '/images/n1.png' },
      { name: 'Chanderi Silk Saree',          price: '₹6,499',  rating: 4.0, reviews: 33,             image: '/images/n3.png' },
      { name: 'Ikkat Silk Saree',             price: '₹8,999',  rating: 4.5, reviews: 26,             image: '/images/ss1.png' },
    ],
  },
  {
    slug: 'banarasi',
    title: 'Banarasi',
    subtitle: 'Sarees Collection',
    description: 'Woven in the city of lights — every Banarasi saree carries centuries of artistry in its golden zari threads.',
    accentColor: '#8b1a1a',
    heroBg: '#fdf5ee',
    heroImage: '/images/d3.png',
    products: [
      { name: 'Royal Red Banarasi Saree',     price: '₹18,999', rating: 4.5, reviews: 42, tag: 'New',  image: createPortraitArtwork({ background: '#e8d0c4', wall: '#c4937a', saree: '#8b1a1a', border: '#d4a017', skin: '#c8906a', hair: '#2a1810', blouse: '#6b1212' }) },
      { name: 'Purple Gold Banarasi Saree',   price: '₹17,499', rating: 4.5, reviews: 31, tag: 'New',  image: createPortraitArtwork({ background: '#e8d8f0', wall: '#b898cc', saree: '#5c2880', border: '#c890e0', skin: '#cc9870', hair: '#2c1818', blouse: '#401860' }) },
      { name: 'Teal Zari Banarasi Saree',     price: '₹15,999', rating: 4.0, reviews: 19,              image: createPortraitArtwork({ background: '#d8eee8', wall: '#90c0b0', saree: '#186858', border: '#60d0a8', skin: '#c89870', hair: '#281c14', blouse: '#105040' }) },
      { name: 'Navy Blue Banarasi Saree',     price: '₹16,499', rating: 4.5, reviews: 27,              image: createPortraitArtwork({ background: '#d8ddf0', wall: '#9098c8', saree: '#1a2878', border: '#7080d0', skin: '#cc9870', hair: '#2a1814', blouse: '#101860' }) },
      { name: 'Ivory Gold Banarasi Saree',    price: '₹19,999', rating: 5.0, reviews: 38, tag: 'New',  image: createPortraitArtwork({ background: '#f4ece0', wall: '#d8c8a0', saree: '#e8d490', border: '#f0e070', skin: '#cc9870', hair: '#2e1e12', blouse: '#a89040' }) },
      { name: 'Maroon Brocade Saree',         price: '₹14,999', rating: 4.0, reviews: 23,              image: createPortraitArtwork({ background: '#f0dcd8', wall: '#c4988c', saree: '#701828', border: '#c05040', skin: '#cc9870', hair: '#2a1810', blouse: '#501020' }) },
      { name: 'Peach Banarasi Silk Saree',    price: '₹13,499', rating: 4.0, reviews: 15,              image: createPortraitArtwork({ background: '#f8ece4', wall: '#d8b8a0', saree: '#d89070', border: '#f0c898', skin: '#d0a07c', hair: '#2c1c14', blouse: '#b07050' }) },
      { name: 'Emerald Banarasi Saree',       price: '₹17,999', rating: 4.5, reviews: 34,              image: createPortraitArtwork({ background: '#d8ece0', wall: '#98c0a8', saree: '#186040', border: '#a0d0a0', skin: '#c89870', hair: '#281c14', blouse: '#104830' }) },
    ],
  },
  {
    slug: 'kancheepuram',
    title: 'Kancheepuram',
    subtitle: 'Sarees Collection',
    description: 'The queen of silks — Kancheepuram sarees are a living heirloom, rich in colour, texture, and tradition.',
    accentColor: '#7a5a00',
    heroBg: '#fdf8ee',
    heroImage: '/images/d4.png',
    products: [
      { name: 'Classic Red Kanjivaram Saree', price: '₹19,999', rating: 4.5, reviews: 45, tag: 'New',  image: createPortraitArtwork({ background: '#f0d8d0', wall: '#c89880', saree: '#9e1a1a', border: '#e8b830', skin: '#ca9060', hair: '#281810', blouse: '#781414' }) },
      { name: 'Golden Kancheepuram Saree',    price: '₹21,999', rating: 5.0, reviews: 57, tag: 'New',  image: createPortraitArtwork({ background: '#f4ecd8', wall: '#d8c090', saree: '#c89820', border: '#f0d860', skin: '#cc9870', hair: '#2e1e12', blouse: '#987018' }) },
      { name: 'Emerald Kanjivaram Saree',     price: '₹17,999', rating: 4.5, reviews: 31,              image: createPortraitArtwork({ background: '#d8ece0', wall: '#98c0a8', saree: '#1a6040', border: '#c0a830', skin: '#c89060', hair: '#281c14', blouse: '#144830' }) },
      { name: 'Pink Contrast Kanjivaram',     price: '₹16,499', rating: 4.0, reviews: 22,              image: createPortraitArtwork({ background: '#f4dce8', wall: '#d0a0b8', saree: '#c04080', border: '#f090b0', skin: '#d0a07a', hair: '#2c1818', blouse: '#902858' }) },
      { name: 'Blue Gold Kancheepuram',       price: '₹18,499', rating: 4.5, reviews: 39,              image: createPortraitArtwork({ background: '#d8e0f0', wall: '#98a8d0', saree: '#1a3080', border: '#c0a828', skin: '#cc9870', hair: '#2a1814', blouse: '#101860' }) },
      { name: 'Purple Zari Kanjivaram',       price: '₹20,999', rating: 4.5, reviews: 28, tag: 'New',  image: createPortraitArtwork({ background: '#e8d8f0', wall: '#b898cc', saree: '#5a2880', border: '#d4a030', skin: '#cc9070', hair: '#2c1818', blouse: '#401860' }) },
      { name: 'Ivory Kancheepuram Silk',      price: '₹22,499', rating: 5.0, reviews: 19,              image: createPortraitArtwork({ background: '#f4ece0', wall: '#d8c8a0', saree: '#f0e8c0', border: '#c8a030', skin: '#d0a07c', hair: '#2e1e12', blouse: '#b09040' }) },
      { name: 'Maroon Temple Kanjivaram',     price: '₹23,999', rating: 4.5, reviews: 44, tag: 'New',  image: createPortraitArtwork({ background: '#f0d8d0', wall: '#c4907a', saree: '#801828', border: '#e0a828', skin: '#ca9060', hair: '#281810', blouse: '#601020' }) },
    ],
  },
  {
    slug: 'tussar',
    title: 'Tussar',
    subtitle: 'Sarees Collection',
    description: 'Wild-gathered, earthy-textured — Tussar silk sarees bring the raw beauty of nature into every fold.',
    accentColor: '#7a4a1a',
    heroBg: '#fdf5ec',
    heroImage: '/images/d5.png',
    products: [
      { name: 'Natural Tussar Silk Saree',    price: '₹6,999',  rating: 4.0, reviews: 28, tag: 'New',  image: createPortraitArtwork({ background: '#f0e4d0', wall: '#d0b890', saree: '#c8a060', border: '#e8c888', skin: '#d0a07c', hair: '#2c1c14', blouse: '#9a7840' }) },
      { name: 'Printed Tussar Saree',         price: '₹5,499',  rating: 4.0, reviews: 19,              image: createPortraitArtwork({ background: '#f4e8d8', wall: '#d8b898', saree: '#d09850', border: '#f0c870', skin: '#d0a07a', hair: '#2e1c12', blouse: '#a87830' }) },
      { name: 'Kantha Tussar Silk Saree',     price: '₹8,999',  rating: 4.5, reviews: 34, tag: 'New',  image: createPortraitArtwork({ background: '#e8f0e0', wall: '#a8c890', saree: '#488028', border: '#a0c870', skin: '#c89870', hair: '#281c14', blouse: '#386018' }) },
      { name: 'Batik Tussar Saree',           price: '₹7,499',  rating: 4.0, reviews: 21,              image: createPortraitArtwork({ background: '#f0dce0', wall: '#c8a0a8', saree: '#9a4858', border: '#d89098', skin: '#d0a07c', hair: '#2c1818', blouse: '#783040' }) },
      { name: 'Gold Zari Tussar Saree',       price: '₹9,999',  rating: 4.5, reviews: 26,              image: createPortraitArtwork({ background: '#f4ece0', wall: '#d8c098', saree: '#b88030', border: '#e8b860', skin: '#cc9870', hair: '#2e1e12', blouse: '#886020' }) },
      { name: 'Embroidered Tussar Saree',     price: '₹11,499', rating: 4.5, reviews: 17, tag: 'New',  image: createPortraitArtwork({ background: '#f0e8f8', wall: '#c8b8d8', saree: '#6840a0', border: '#d0a8e8', skin: '#d0a07c', hair: '#2c1c16', blouse: '#502878' }) },
      { name: 'Block Print Tussar Saree',     price: '₹6,199',  rating: 4.0, reviews: 32,              image: createPortraitArtwork({ background: '#e0f0e8', wall: '#90c0a8', saree: '#208060', border: '#70d0a0', skin: '#c89870', hair: '#281c14', blouse: '#185848' }) },
      { name: 'Dupion Tussar Silk Saree',     price: '₹8,499',  rating: 4.0, reviews: 14,              image: createPortraitArtwork({ background: '#f8ece4', wall: '#d8b8a0', saree: '#c07858', border: '#e8a880', skin: '#d0a07a', hair: '#2e1c14', blouse: '#9a5838' }) },
    ],
  },
  {
    slug: 'linen',
    title: 'Linen',
    subtitle: 'Sarees Collection',
    description: 'Breathable, elegant, and effortlessly modern — linen sarees are the perfect blend of comfort and sophistication.',
    accentColor: '#1f5e4f',
    heroBg: '#f0f8f4',
    heroImage: '/images/d6.png',
    products: [
      { name: 'Pure Linen Saree',             price: '₹3,999',  rating: 4.0, reviews: 41, tag: 'New',  image: createPortraitArtwork({ background: '#e0f0e8', wall: '#98c8b0', saree: '#2a7858', border: '#80d0a8', skin: '#c89870', hair: '#281c14', blouse: '#1a5840' }) },
      { name: 'Linen Silk Blend Saree',       price: '₹5,499',  rating: 4.5, reviews: 33,              image: createPortraitArtwork({ background: '#e8f4ec', wall: '#a8c8b0', saree: '#388060', border: '#a0d8b0', skin: '#cc9870', hair: '#2a1c14', blouse: '#286048' }) },
      { name: 'Printed Linen Saree',          price: '₹4,299',  rating: 4.0, reviews: 27, tag: 'New',  image: createPortraitArtwork({ background: '#f0f4e8', wall: '#c0d0a8', saree: '#6a8830', border: '#b0c878', skin: '#d0a07c', hair: '#2c1c14', blouse: '#4a6820' }) },
      { name: 'Linen Jamdani Saree',          price: '₹6,999',  rating: 4.5, reviews: 18,              image: createPortraitArtwork({ background: '#f0e8f4', wall: '#c0a8d0', saree: '#6040a0', border: '#c0a0e0', skin: '#d0a07c', hair: '#2c1c16', blouse: '#482878' }) },
      { name: 'Cotton Linen Saree',           price: '₹3,299',  rating: 4.0, reviews: 52,              image: createPortraitArtwork({ background: '#e8f0f8', wall: '#a0b8d0', saree: '#2848a0', border: '#80a8d8', skin: '#cc9870', hair: '#2a1814', blouse: '#183080' }) },
      { name: 'Handwoven Linen Saree',        price: '₹7,499',  rating: 4.5, reviews: 23, tag: 'New',  image: createPortraitArtwork({ background: '#f4ece0', wall: '#d8c098', saree: '#c09040', border: '#e8c060', skin: '#d0a07c', hair: '#2e1e12', blouse: '#907020' }) },
      { name: 'Linen Tant Saree',             price: '₹4,799',  rating: 4.0, reviews: 36,              image: createPortraitArtwork({ background: '#f0f8f0', wall: '#b0d0b0', saree: '#308050', border: '#90d090', skin: '#cc9870', hair: '#281c14', blouse: '#206040' }) },
      { name: 'Khadi Linen Saree',            price: '₹5,999',  rating: 4.5, reviews: 29,              image: createPortraitArtwork({ background: '#f8f0e8', wall: '#d8c0a0', saree: '#a87840', border: '#d8a860', skin: '#d0a07a', hair: '#2c1c12', blouse: '#805820' }) },
    ],
  },
  {
    slug: 'designer',
    title: 'Designer',
    subtitle: 'Sarees Collection',
    description: 'Where tradition meets couture — our designer sarees are crafted for women who lead with style.',
    accentColor: '#6e1024',
    heroBg: '#fdf2f5',
    heroImage: '/images/d2.png',
    products: [
      { name: 'Embellished Georgette Saree',  price: '₹8,999',  rating: 4.5, reviews: 29, tag: 'New',  image: createPortraitArtwork({ background: '#f4e0ec', wall: '#d4a0c0', saree: '#b04080', border: '#f090c0', skin: '#d0a07c', hair: '#2c1818', blouse: '#8a2860' }) },
      { name: 'Sequin Net Saree',             price: '₹7,499',  rating: 4.0, reviews: 22, tag: 'New',  image: createPortraitArtwork({ background: '#f0ecd8', wall: '#d8c898', saree: '#c8a830', border: '#f0e070', skin: '#cc9870', hair: '#2e1e12', blouse: '#987020' }) },
      { name: 'Mirror Work Saree',            price: '₹9,499',  rating: 4.5, reviews: 37,              image: createPortraitArtwork({ background: '#e0ecf8', wall: '#98b8d8', saree: '#2060a8', border: '#80b0e0', skin: '#d0a07c', hair: '#2a1814', blouse: '#103880' }) },
      { name: 'Floral Digital Print Saree',   price: '₹5,999',  rating: 4.0, reviews: 44,              image: createPortraitArtwork({ background: '#f4ece4', wall: '#d4b8a0', saree: '#c07850', border: '#e8a870', skin: '#d0a07a', hair: '#2c1c14', blouse: '#9a5830' }) },
      { name: 'Leheriya Designer Saree',      price: '₹6,499',  rating: 4.0, reviews: 18,              image: createPortraitArtwork({ background: '#f0e8f4', wall: '#c4a8d4', saree: '#8050b0', border: '#d0a0e0', skin: '#d0a07c', hair: '#2c1c16', blouse: '#603090' }) },
      { name: 'Ruffle Border Saree',          price: '₹7,999',  rating: 4.5, reviews: 26, tag: 'New',  image: createPortraitArtwork({ background: '#f8e8f0', wall: '#d8a8c0', saree: '#d04890', border: '#f090c8', skin: '#d0a07a', hair: '#2c1818', blouse: '#a83068' }) },
      { name: 'Organza Designer Saree',       price: '₹11,999', rating: 4.5, reviews: 31,              image: createPortraitArtwork({ background: '#e8f0f4', wall: '#a8c8d8', saree: '#186090', border: '#70b8d8', skin: '#cc9870', hair: '#2a1c14', blouse: '#0e4868' }) },
      { name: 'Velvet Fusion Saree',          price: '₹13,499', rating: 5.0, reviews: 14, tag: 'New',  image: createPortraitArtwork({ background: '#e8d8e8', wall: '#b898b8', saree: '#682880', border: '#d090d0', skin: '#cc9070', hair: '#2c1818', blouse: '#4a1860' }) },
    ],
  },
]

// Flat lookup map for O(1) access in page component
export const sareeCategoryBySlug = Object.fromEntries(
  sareeCategoryData.map((c) => [c.slug, c])
)
