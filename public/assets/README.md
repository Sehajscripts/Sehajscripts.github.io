# Product Images Instructions

## 📸 How to Add Your Jewellery Images

### ⚠️ IMPORTANT: Images are currently showing placeholder images from Unsplash

To use your actual jewellery images:

1. **Place your 5 jewellery images in this folder** (`public/images/products/`)

2. **Rename your images to match these exact filenames**:
   - `crystal-bun-pin.jpg` (Your first image - crystal bun pin)
   - `rose-gold-earrings.jpg` (Your second image)
   - `pearl-necklace.jpg` (Your third image)  
   - `crystal-bangles.jpg` (Your fourth image)
   - `bridal-maang-tikka.jpg` (Your fifth image)

3. **Update the code** in `src/data/products.ts`:
   - Replace the Unsplash URLs with your local image paths
   - Change from: `https://images.unsplash.com/photo-...`
   - Change to: `/images/products/crystal-bun-pin.jpg` (etc.)

4. **Image Requirements**:
   - Format: JPG or PNG
   - Recommended size: 800x800 pixels or higher
   - Keep file sizes reasonable for web loading

5. **After placing images**:
   - Restart the development server (`npm run dev`)
   - Your actual jewellery images will appear on:
     - Home page (featured products)
     - Collections page (product grid)
     - Gallery page (lookbook)

## 🌟 Current Setup

The website is currently showing **placeholder images** with these products:
- **Crystal Bun Pin** - ₹699 (Accessories category)
- **Rose Gold Earrings** - ₹1299 (Earrings category)
- **Pearl Necklace Set** - ₹1899 (Necklaces category)
- **Crystal Bangles** - ₹1599 (Bangles category)
- **Bridal Maang Tikka** - ₹2499 (Bridal Sets category)

All products are marked as "Bestsellers" and will appear prominently on the website.

## 📱 Where Your Images Will Appear

1. **Home Page**: Featured products section
2. **Collections Page**: Product grid with filtering
3. **Gallery Page**: Instagram-style lookbook
4. **All Pages**: With hover effects, animations, and luxury styling

## 🔧 Quick Switch to Your Images

In `src/data/products.ts`, find these lines and replace the URLs:

```typescript
// FROM (current placeholder):
image: 'https://images.unsplash.com/photo-1611088256428-4d2b6b5d6fbb?w=400&h=400&fit=crop'

// TO (your actual images):
image: '/images/products/crystal-bun-pin.jpg'
```

Replace these placeholder files with your actual jewellery photos to showcase your beautiful products! ✨
