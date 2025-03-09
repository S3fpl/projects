// Properties Page JavaScript

// Import properties data (assuming it's in a separate file)
// If not in a separate file, define the properties array here
// For example:
const properties = [
  {
    id: 1,
    title: "شقة فاخرة في وسط المدينة",
    type: "sale",
    price: "1,500,000 ر.س",
    location: "الرياض، حي العليا",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "https://via.placeholder.com/350x200",
    isNew: true,
  },
  {
    id: 2,
    title: "فيلا عائلية مع حديقة",
    type: "sale",
    price: "3,200,000 ر.س",
    location: "جدة، حي الشاطئ",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    image: "https://via.placeholder.com/350x200",
    isNew: false,
  },
  {
    id: 3,
    title: "استوديو حديث للإيجار",
    type: "rent",
    price: "3,500 ر.س شهرياً",
    location: "الدمام، حي الفيصلية",
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    image: "https://via.placeholder.com/350x200",
    isNew: false,
  },
  {
    id: 4,
    title: "منزل مستقل بتصميم عصري",
    type: "sale",
    price: "2,800,000 ر.س",
    location: "مكة المكرمة، حي العوالي",
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    image: "https://via.placeholder.com/350x200",
    isNew: false,
  },
  {
    id: 5,
    title: "شقة مطلة على البحر للإيجار",
    type: "rent",
    price: "6,000 ر.س شهرياً",
    location: "الخبر، حي الكورنيش",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image: "https://via.placeholder.com/350x200",
    isNew: true,
  },
]

document.addEventListener("DOMContentLoaded", () => {
  // Load properties
  loadProperties()

  // Set up event listeners
  setupEventListeners()

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
    document.getElementById("theme-toggle-btn").innerHTML = '<i class="fas fa-sun"></i>'
  }
})

// Load properties into the grid
function loadProperties() {
  const propertiesGrid = document.getElementById("properties-grid")

  // Clear the grid
  propertiesGrid.innerHTML = ""

  // Add properties from the main script
  properties.forEach((property) => {
    const propertyCard = createPropertyCard(property)
    propertiesGrid.appendChild(propertyCard)
  })

  // Update properties count
  document.getElementById("properties-count").textContent = properties.length
}

// Create a property card element
function createPropertyCard(property) {
  const card = document.createElement("div")
  card.className = "property-card"

  // Determine tag class and text
  let tagClass = ""
  let tagText = ""

  if (property.isNew) {
    tagClass = "tag-new"
    tagText = "جديد"
  } else if (property.type === "sale") {
    tagClass = "tag-sale"
    tagText = "للبيع"
  } else if (property.type === "rent") {
    tagClass = "tag-rent"
    tagText = "للإيجار"
  }

  card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.title}">
            <div class="property-tag ${tagClass}">${tagText}</div>
        </div>
        <div class="property-content">
            <div class="property-price">${property.price}</div>
            <h3 class="property-title">${property.title}</h3>
            <div class="property-location">
                <i class="fas fa-map-marker-alt"></i> ${property.location}
            </div>
            <div class="property-features">
                <div class="feature">
                    <i class="fas fa-bed"></i> ${property.bedrooms} غرف
                </div>
                <div class="feature">
                    <i class="fas fa-bath"></i> ${property.bathrooms} حمام
                </div>
                <div class="feature">
                    <i class="fas fa-vector-square"></i> ${property.area} م²
                </div>
            </div>
        </div>
    `

  return card
}

// Set up event listeners for the properties page
function setupEventListeners() {
  // Property search
  const searchBtn = document.getElementById("property-search-btn")
  const searchInput = document.getElementById("property-search")

  searchBtn.addEventListener("click", () => {
    searchProperties(searchInput.value)
  })

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchProperties(searchInput.value)
    }
  })

  // Apply filters button
  const applyFiltersBtn = document.querySelector(".apply-filters-btn")
  applyFiltersBtn.addEventListener("click", applyFilters)

  // Pagination buttons
  const paginationBtns = document.querySelectorAll(".pagination-btn")
  paginationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      paginationBtns.forEach((b) => b.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      // In a real application, this would load the appropriate page of properties
      if (!btn.classList.contains("next")) {
        alert(`تم الانتقال إلى الصفحة ${btn.textContent}`)
      } else {
        alert("تم الانتقال إلى الصفحة التالية")
      }
    })
  })

  // FAQ toggles (for mobile menu)
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show")
  })

  // Theme toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    // Update button icon
    if (document.body.classList.contains("dark-theme")) {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'
      localStorage.setItem("theme", "dark")
    } else {
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'
      localStorage.setItem("theme", "light")
    }
  })
}

// Search properties
function searchProperties(query) {
  if (!query) {
    loadProperties()
    return
  }

  const propertiesGrid = document.getElementById("properties-grid")
  propertiesGrid.innerHTML = ""

  const searchLower = query.toLowerCase()
  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchLower) || property.location.toLowerCase().includes(searchLower),
  )

  if (filteredProperties.length === 0) {
    propertiesGrid.innerHTML = `
            <div class="no-properties">
                <p>لم يتم العثور على عقارات تطابق معايير البحث.</p>
            </div>
        `
    document.getElementById("properties-count").textContent = 0
  } else {
    filteredProperties.forEach((property) => {
      const propertyCard = createPropertyCard(property)
      propertiesGrid.appendChild(propertyCard)
    })
    document.getElementById("properties-count").textContent = filteredProperties.length
  }
}

// Apply all filters
function applyFilters() {
  // In a real application, this would filter properties based on all criteria
  // For this demo, we'll just show an alert
  alert("تم تطبيق الفلاتر المحددة")

  // Reset to first page
  const paginationBtns = document.querySelectorAll(".pagination-btn")
  paginationBtns.forEach((btn) => btn.classList.remove("active"))
  paginationBtns[0].classList.add("active")
}

