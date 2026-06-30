#!/bin/bash
# Run this script on your Mac to install deps and build the portfolio
# Usage: cd divyesh-portfolio-v3 && bash setup.sh

set -e
echo "=== Divyesh Portfolio v3 Setup ==="

echo "→ Installing dependencies..."
npm install

echo "→ Running build..."
npm run build

echo ""
echo "=== Done! ==="
echo "To start dev server: npm run dev"
echo "Then open http://localhost:3000"
echo ""
echo "Next steps:"
echo "  1. Replace public/Divyesh_Annavarapu_Resume.pdf with your real resume"
echo "  2. Update calendly link in components/sections/BookingSection.tsx"
echo "  3. Deploy: vercel --prod"
