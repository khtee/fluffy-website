# Fluffy Boarding — Commercial Website & Quotation Generator 🐾

Official website for **Fluffy Boarding**, a boutique cat hotel located in Sentul, Kuala Lumpur.

Features a modern one-page responsive design matching the business's flyers, room showcases, included amenities, boarding guidelines, an interactive multi-room quotation calculator, and direct 1-click WhatsApp booking integration.

---

## 🌟 Key Features

1. **Room Showcase**:
   - **Standard Suite (RM 25/night)**: Cozy wooden cabin suite (fits up to 2 cats, +RM10 for 2nd cat).
   - **Deluxe Suite (RM 35/night)**: Expansive playpen suite on wood flooring (fits up to 4 cats, +RM10 per extra cat).
   - High-resolution photo previews and full official package flyer viewer.

2. **All-Inclusive Perks**:
   - Daily photo & video updates via WhatsApp.
   - 24/7 continuous ventilation fan & HEPA air purifier.
   - Hospital-grade sanitization & litter cleaning twice daily.
   - 15–30 minutes dedicated daily playtime and cuddles.
   - Smart Heart kibbles & continuous filtered drinking water.
   - 100% dust-free premium Tofu cat litter.

3. **Interactive Quotation Calculator**:
   - Calculates night count, room rates, and multi-room combinations.
   - Auto-calculates 50% deposit (`Math.ceil(Total / 2)`) and balance payable upon check-in (matching the business's Excel formulas).
   - **1-Click WhatsApp Booking**: Formats all details into an inquiry message sent straight to `+601154396129`.

4. **Boarding Procedures & Guidelines**:
   - Drop-off / Pick-up times: Weekdays (6:00 PM – 9:00 PM) | Weekends & Holidays (8:00 AM – 9:00 PM).
   - Up-to-date vaccination card and deflea records.
   - 50% booking deposit; full refund for cancellations 3+ days before stay.
   - Downloadable official procedure PDF guide.

---

## 🚀 Quick Start (Local Development)

Ensure [Node.js](https://nodejs.org/) (v18+) is installed.

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production static bundle
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🌐 100% Free Long-Term Hosting via GitHub Pages

This repository is already configured with an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

### Setup in 2 Minutes:
1. Go to your GitHub repository: `https://github.com/khtee/fluffy-website`
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, GitHub will automatically build and publish your website at `https://khtee.github.io/fluffy-website/`.
5. **Custom Domain (Optional)**: If you buy a domain like `fluffyboarding.my` or `fluffyhotel.com`, simply enter it in the **Custom domain** box on the same Settings page. GitHub manages free HTTPS certificates automatically.

**Total Cost: RM 0 / month ($0)** forever.

---

## 🐳 Self-Hosting with Docker (Optional VPS / Home Server)

If you prefer to run on your own server or Raspberry Pi using Docker:

```bash
# Build and run container in detached mode (listens on port 8080)
docker compose up -d --build

# Open in browser: http://localhost:8080
```

To stop:
```bash
docker compose down
```

---

## ⚙️ Configuration & Customization

- **WhatsApp Phone Number**: Change `601154396129` in `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/QuotationCalculator.jsx`, `src/components/LocationContact.jsx`, `src/components/FloatingWhatsApp.jsx`, and `src/components/Footer.jsx`.
- **Pricing & Rates**: Configurable in `src/components/QuotationCalculator.jsx` and `src/components/Rooms.jsx`.
- **Assets**: Located in `public/images/` and `public/docs/`.
