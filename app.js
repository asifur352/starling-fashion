const { createApp } = Vue;

createApp({
  data() {
    return {
      year: new Date().getFullYear(),
      active: 0,
      error: "",
      form: { name: "", email: "", product: "Sweaters", message: "" },
      photo: 0,

      images: {
        hero: "image/hero.jpg",
        about: "image/about.jpg",
        logo: "image/logo.png",
      },
      company: {
        tagline: "Innovation meets elegance",
        intro:
          "We connect global brands and retailers with trusted garment manufacturers, from first sketch to final delivery.",
        about:
          "Sterling Fashions is an apparel buying house. We streamline the complex sourcing process so quality, compliance and efficiency hold from design to delivery.",
        compliance:
          "Certifications are the quality and ethics currency of global trade. They turn a workshop into a globally compliant manufacturing partner and reduce your operational risk.",
      },
      stats: [
        { value: "10+", label: "Years of industry expertise" },
        { value: "3M", label: "Pieces per month, all categories" },
        { value: "3", label: "Inspection stages: inline, mid-line, final" },
        { value: "ISO 9001", label: "Certified company (2015)" },
      ],
      mission: [
        {
          title: "Our mission",
          text: "A future where exceptional design and ethical integrity coexist. We aim to lead the industry toward a circular economy, where every thread is sourced responsibly and every garment is made to last.",
        },
        {
          title: "Mindful elegance",
          text: "Fashion as a force for good: building confidence in the wearer while protecting the planet for generations to come.",
        },
      ],

      services: [
        {
          title: "Sourcing and vendor management",
          text: "We test and work with a wide network of reliable factories across knit, woven, denim and activewear.",
        },
        {
          title: "Product development and sampling",
          text: "We guide your designs from sketches and tech packs to high-quality physical samples.",
        },
        {
          title: "Quality assurance and control",
          text: "Multi-stage inspections (inline, mid-line and final) so every garment meets international AQL standards.",
        },
      ],
      products: [
        {
          name: "Premium Sweaters",
          capacity: "Multiple sizes",
          image: "image/Sweaters/Sweaters(10).jpg",
          items: [
            "Premium knit fabric",
            "Multiple colors and sizes",
            "Custom branding available",
          ],
        },
        {
          name: "Fashion Collection",
          capacity: "Multiple styles",
          image: "image/fasion/fasion (2).jpg",
          items: [
            "Premium Fashion Collection",
            "Modern washes and fits",
            "Custom designs available",
          ],
        },
        {
          name: "Premium Outerwea",
          capacity: "Multiple styles",
          image: "image/Outerwear/Outerwear (5).jpg",
          items: [
            "Premium Outerwear fabric",
            "Modern washes and fits",
            "Custom designs available",
          ],
        },
      ],

      galleryCategories: [
        "All",
        "Sweaters",
        "Hoodies",
        "Fashion",
        "Outerwear",
      ],

      activeGalleryCategory: "All",

      galleryProducts: [
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters.jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters (2).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters (3).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(7).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(8).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(9).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(10).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
         {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(11).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
         {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(12).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
         {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(13).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
         {
          name: "Premium Sweaters",
          category: "Sweaters",
          img: "image/Sweaters/Sweaters(14).jpg",
          description: "Comfortable sweaters in modern styles.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (12).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (2).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (3).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (4).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (5).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (6).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (7).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (8).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (9).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (10).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (11).jpg",
          description: "Versatile knit garments.",
        },
        {
          name: "Premium Hoodies",
          category: "Hoodies",
          img: "image/hoodie/hoodie (12).jpg",
          description: "Versatile knit garments.",
        },
        
       
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (3).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (4).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (5).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (6).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (7).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (8).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (9).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(10).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(11).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },

        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(13).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(14).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(15).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(16).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear(17).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
        {
          name: "Premium Outerwear",
          category: "Outerwear",
          img: "image/Outerwear/Outerwear (18).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
          {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/Outerwear/Outerwear (18).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (10).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (11).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (12).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (1).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (2).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (3).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (4).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
         {
          name: "Premium Cloth",
          category: "fasion",
          img: "image/fasion/fasion (5).jpg",
          description: "Jackets and coats for seasonal ranges.",
        },
          
          


      ],

      // Set img to a file path (e.g. 'images/sweaters.jpg') to show your own photo.
      collections: [
        {
          name: "Sweaters",
          gallery: [
            "image/Sweaters/Sweaters.jpg",
            "image/Sweaters/Sweaters (2).jpg",
            "image/Sweaters/Sweaters (3).jpg",
            "image/Sweaters/Sweaters(7).jpg",
            "image/Sweaters/Sweaters(8).jpg",
            "image/Sweaters/Sweaters(9).jpg",
            "image/Sweaters/Sweaters(10).jpg",
            "image/Sweaters/Sweaters(11).jpg",
            "image/Sweaters/Sweaters(12).jpg",
            "image/Sweaters/Sweaters(13).jpg",
            "image/Sweaters/Sweaters(14).jpg",
            "image/Sweaters/Sweaters(7).jpg",
            "image/Sweaters/Sweaters(8).jpg",
            "image/Sweaters/Sweaters(9).jpg",
            "image/Sweaters/Sweaters(10).jpg",
            "image/Sweaters/Sweaters(11).jpg",
            "image/Sweaters/Sweaters(12).jpg",
            "image/Sweaters/Sweaters(13).jpg",
            "image/Sweaters/Sweaters(14).jpg",

      
          ],
          color: "linear-gradient(160deg,#1f3a73,#0f1f45)",
          text: "Cable-knit crews, half-zip pullovers and striped knits for men and women, up to 2XL.",
          styles: [
            "Cable-knit crew neck",
            "Half-zip pullover",
            "Striped knit",
            "Classic crew",
          ],
        },
        {
          name: "Fashion",
          gallery: [
            "image/fasion/fasion (3).jpg",
            "image/fasion/fasion (4).jpg",
            "image/fasion/fasion (5).jpg",
            "image/fasion/fasion (9).jpg",
            "image/fasion/fasion (10).jpg",
            "image/fasion/fasion (11).jpg",
            "image/fasion/fasion (12).jpg",
            "image/fasion/fasion (5).jpg",
            "image/fasion/fasion (9).jpg",
            "image/fasion/fasion (10).jpg",
            "image/fasion/fasion (11).jpg",
            "image/fasion/fasion (12).jpg",
          ],
          color: "linear-gradient(160deg,#ef4035,#a52620)",
          text: "Polos and zip-neck tops in solids and bright colours.",
          styles: [
            "Zip-neck top",
            "Classic polo",
            "Contrast-trim polo",
            "Embroidered polo",
          ],
        },

        {
          name: "Hoodies",
          gallery: [
            "image/hoodie/hoodie (2).jpg",
            "image/hoodie/hoodie (3).jpg",
            "image/hoodie/hoodie (4).jpg",
            "image/hoodie/hoodie (5).jpg",
            "image/hoodie/hoodie (6).jpg",
            "image/hoodie/hoodie (7).jpg",
            "image/hoodie/hoodie (8).jpg",
            "image/hoodie/hoodie (9).jpg",
            "image/hoodie/hoodie (10).jpg",
            "image/hoodie/hoodie (11).jpg",
            "image/hoodie/hoodie (12).jpg",
             "image/hoodie/hoodie (6).jpg",
            "image/hoodie/hoodie (7).jpg",
            "image/hoodie/hoodie (8).jpg",
            "image/hoodie/hoodie (9).jpg",
            "image/hoodie/hoodie (10).jpg",
            "image/hoodie/hoodie (11).jpg",
            "image/hoodie/hoodie (12).jpg",
          ],
          color: "linear-gradient(160deg,#5f8bbf,#2c4c73)",
          text: "Jackets and wide-leg denim in light, mid and dark washes.",
          styles: [
            "Denim jacket",
            "Collar-trim jacket",
            "Wide-leg jeans",
            "Oversized trucker",
          ],
        },

        {
          name: "Outerwear",
          gallery: [
            "image/Outerwear/Outerwear (3).jpg",
            "image/Outerwear/Outerwear (4).jpg",
            "image/Outerwear/Outerwear (5).jpg",
            "image/Outerwear/Outerwear (6).jpg",
            "image/Outerwear/Outerwear (7).jpg",
            "image/Outerwear/Outerwear (8).jpg",
            "image/Outerwear/Outerwear (9).jpg",
            "image/Outerwear/Outerwear(10).jpg",
            "image/Outerwear/Outerwear(11).jpg",
             "image/Outerwear/Outerwear(13).jpg",
            "image/Outerwear/Outerwear(14).jpg",
            "image/Outerwear/Outerwear(15).jpg",
             "image/Outerwear/Outerwear(16).jpg",
            "image/Outerwear/Outerwear(17).jpg",
             "image/Outerwear/Outerwear(18).jpg",
          ],
          color: "linear-gradient(160deg,#c98a5b,#6f4528)",
          text: "Puffers, parkas and hooded winter jackets for cold-weather retail.",
          styles: [
            "Puffer jacket",
            "Belted puffer",
            "Fur-hood parka",
            "Hooded winter coat",
          ],
        },
      ],
      certs: [
        "GOTS",
        "BSCI",
        "OEKO-TEX",
        "Accord on Fire and Building Safety",
        "Recycled Claim Standard 100",
        "WRAP",
        "Organic Content Standard 100",
        "Better Cotton Initiative",
        "ISO 9001:2015",
      ],
      values: [
        {
          title: "Ethical sourcing",
          text: "Fair labour practices: safe working conditions, fair wages, and no child or forced labour.",
        },
        {
          title: "Quality assurance",
          text: "Proactive by design: we fix the processes that create a product, not just the defects in the finished one.",
        },
        {
          title: "Transparency and integrity",
          text: "Open sharing of information builds accountability and long-term trust.",
        },
        {
          title: "Continuous improvement",
          text: "Small, steady changes over time, with the belief that there is always a better way.",
        },
      ],
      offers: [
        "Value-added product sourcing",
        "Integrated supply chain",
        "Mutually beneficial, fair business trade",
        "Result-oriented team",
        "Required and acceptable quality",
        "Competitive pricing for fashion trade",
        "Timely delivery",
        "Outstanding quality in workwear items",
      ],
      contacts: [
        { label: "Phone", value: "+88 02 55092282" },
        { label: "Mobile", value: "+880 1915 569233" },
        { label: "Email", value: "info@sterlingfashions.com" },
        {
          label: "Corporate office",
          value:
            "Level 02, House 52, Road 12, Sector 10, Uttara, Dhaka 1230, Bangladesh",
        },
        {
          label: "USA office",
          value: "1164 East 37th Street, Brooklyn, NY 11210",
        },
        { label: "Web", value: "www.sterlingfashions.com" },
      ],
    };
  },
  computed: {
    current() {
      return this.collections[this.active];
    },

    currentBg() {
      const gallery = this.current.gallery;

      if (gallery && gallery.length) {
        return {
          backgroundImage: `url("${gallery[this.photo]}")`,
        };
      }

      return {
        background: this.current.color,
      };
    },

    allPhotos() {
      return this.collections.flatMap((collection) =>
        (collection.gallery || []).map((src) => ({
          src,
          name: collection.name,
        })),
      );
    },

    filteredGallery() {
      if (this.activeGalleryCategory === "All") {
        return this.galleryProducts;
      }

      return this.galleryProducts.filter(
        (product) => product.category === this.activeGalleryCategory,
      );
    },
  },
  methods: {
    pick(i) {
      this.active = i;
      this.photo = 0;
    },

    next() {
      const gallery = this.current.gallery || [];

      if (!gallery.length) return;

      this.photo = (this.photo + 1) % gallery.length;
    },

    prev() {
      const gallery = this.current.gallery || [];

      if (!gallery.length) return;

      this.photo = (this.photo - 1 + gallery.length) % gallery.length;
    },

    send() {
      const f = this.form;

      if (!f.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
        this.error = "Enter your name and a valid email address.";
        return;
      }

      this.error = "";

      const body =
        `Name: ${f.name}\n` +
        `Email: ${f.email}\n` +
        `Category: ${f.product}\n\n` +
        `${f.message}`;

      window.location.href =
        "mailto:info@sterlingfashions.com?subject=" +
        encodeURIComponent("Sourcing enquiry: " + f.product) +
        "&body=" +
        encodeURIComponent(body);
    },
    setGalleryCategory(category) {
      this.activeGalleryCategory = category;
    },
        showDetails(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-details.html";
}
  },
}).mount("#app");
