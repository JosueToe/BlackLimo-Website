# Black Car Service Miami - Luxury Landing Page

A premium, luxury single-page website for Black Car Service Miami featuring a sleek black and grey design with gold accents.

## 🚗 Features

- **Fully Responsive Design** - Mobile-first approach with breakpoints at 576px, 768px, 992px, and 1200px
- **Smooth Animations** - AOS (Animate on Scroll) library integration
- **Interactive Components**:
  - Sticky navigation with scroll effects
  - Mobile hamburger menu
  - Image carousel for fleet showcase
  - Auto-rotating testimonial slider
  - Scroll-to-top button
  - Form validation
- **13 Complete Sections**:
  1. Sticky Navigation
  2. Hero Section
  3. Quick Booking Bar
  4. About/Trust Section with Statistics
  5. Services Section (6 service cards)
  6. Fleet Showcase with Image Carousel
  7. Rates Section
  8. Why Choose Us Section
  9. Testimonials Carousel
  10. Coverage Area Section
  11. Booking Form (KYMARK Integration)
  12. Contact Section
  13. Footer

## 📁 File Structure

```
BlackLimo-Website/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive styles
├── js/
│   └── main.js         # Main JavaScript functionality
├── images/
│   ├── hero-suburban.png      # Hero section car image
│   ├── suburban-side.png     # Side profile image
│   ├── suburban-interior.png # Interior image
│   ├── miami-skyline.jpg     # Miami skyline image
│   ├── airport-mia.jpg       # MIA airport image
│   ├── airport-fll.jpg       # FLL airport image
│   ├── airport-pbi.jpg       # PBI airport image
│   └── icons/                # SVG icons (optional)
└── README.md          # This file
```

## 🎨 Design Specifications

### Color Palette
- **Primary Black**: `#0A0A0A`, `#1A1A1A`, `#000000`
- **Silver Accents**: `#F5F5F5`, `#E8E8E8`, `#C0C0C0`, `#CCCCCC`
- **Gold Accents**: `#D4AF37`, `#FFB800`, `#F5C842`

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 🖼️ Required Images

The following images are referenced in the HTML and should be placed in the `images/` directory:

1. **logo.png** - Company logo (transparent PNG recommended, height: 40px for desktop, 32px for mobile)
2. **hero-suburban.png** - 2025 Black Suburban hero image (3/4 front angle, 1920x1080px minimum) - Used as background for hero section only
3. **suburban-side.png** - Side profile of the Suburban (for fleet carousel)
4. **suburban-interior.png** - Interior view of the Suburban (for fleet carousel)
5. **suburban-rear.png** - Rear view of the Suburban (for fleet carousel)
6. **suburban-dashboard.png** - Dashboard/technology view (for fleet carousel)
7. **suburban-cargo.png** - Cargo area view (for fleet carousel)
8. **suburban-exterior.png** - Additional exterior view of the Suburban (for fleet carousel)
9. **suburban-miami-driving.png** - Suburban driving in Miami (for Why Choose section)
10. **chauffeur.jpg** - Professional chauffeur/driver photo (square format recommended, 500x500px minimum)

### Favicon Files (in `images/icons/` directory):
- **favicon.ico** - Main favicon file
- **favicon-32x32.png** - 32x32 PNG favicon
- **favicon-16x16.png** - 16x16 PNG favicon
- **apple-touch-icon.png** - 180x180 Apple touch icon
8. **miami-skyline.jpg** - Miami skyline/highway image
9. **airport-mia.jpg** - Miami International Airport image
10. **airport-fll.jpg** - Fort Lauderdale Airport image
11. **airport-pbi.jpg** - Palm Beach International Airport image

**Note:** The fleet carousel displays 6 images total. If you don't have the additional images (suburban-rear.png, suburban-dashboard.png, suburban-cargo.png), you can reuse the existing images (hero-suburban.png, suburban-side.png, suburban-interior.png) for those slots.

### Image Recommendations
- Format: PNG (with transparency) or JPG
- Minimum resolution: 1920x1080px for hero images
- Optimize for web (WebP format recommended)
- Use high-quality, professional photography

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Add your images** to the `images/` directory (see required images above)
3. **Update contact information** in `index.html`:
   - Phone number: `(305) XXX-XXXX`
   - Email: `info@blackcarservicemiami.com`
   - Address: `Miami, FL`
4. **Open `index.html`** in a web browser to view the site
5. **Test the booking form** integration with KYMARK software

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Customization

### Update Contact Information
Search for `(305) XXX-XXXX` and `info@blackcarservicemiami.com` in `index.html` and replace with your actual contact details.

### Modify Colors
Update CSS variables in `css/style.css`:
```css
:root {
    --gold-primary: #D4AF37;
    --black-primary: #0A0A0A;
    /* etc. */
}
```

### Adjust Section Content
All content is in `index.html` - simply edit the text within each section.

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **AOS Library** - Animate on Scroll (CDN)
- **Google Fonts** - Playfair Display & Inter

## 📝 Notes

- The booking form uses KYMARK software integration via iframe
- All images use placeholder paths - replace with actual images
- Form submissions are currently simulated - integrate with your backend
- Mobile menu requires JavaScript to function
- AOS animations require the CDN link in the HTML head

## 🎯 SEO Features

- Semantic HTML5 structure
- Proper heading hierarchy (H1, H2, H3)
- Meta tags for description and keywords
- Alt text placeholders for images (update with actual descriptions)

## 📞 Support

For questions or issues, please refer to the Task.txt file for detailed specifications.

## 📄 License

This project is created for Black Car Service Miami.

---

**Built with attention to luxury and detail** ✨

