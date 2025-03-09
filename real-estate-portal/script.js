// Sample property data
const properties = [
  {
    id: 1,
    title: "شقة حديثة مع إطلالة على البحر",
    price: "350,000 ريال",
    location: "جدة، حي الشاطئ",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: "sale",
    isNew: true,
  },
  {
    id: 2,
    title: "فيلا فاخرة مع مسبح",
    price: "1,200,000 ريال",
    location: "الرياض، حي النرجس",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    type: "sale",
    isNew: false,
  },
  {
    id: 3,
    title: "استوديو مريح في وسط المدينة",
    price: "1,500 ريال/شهر",
    location: "الدمام، حي الفيصلية",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    bedrooms: 1,
    bathrooms: 1,
    area: 60,
    type: "rent",
    isNew: false,
  },
  {
    id: 4,
    title: "منزل عائلي مع حديقة",
    price: "450,000 ريال",
    location: "المدينة المنورة، حي الأزهر",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    type: "sale",
    isNew: false,
  },
  {
    id: 5,
    title: "شقة بنتهاوس مع إطلالة على المدينة",
    price: "3,200 ريال/شهر",
    location: "الرياض، حي العليا",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: "rent",
    isNew: true,
  },
  {
    id: 6,
    title: "منزل تاريخي مجدد",
    price: "875,000 ريال",
    location: "مكة المكرمة، حي العزيزية",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 240,
    type: "sale",
    isNew: false,
  },
  // Additional properties for "Load More" functionality
  {
    id: 7,
    title: "شقة مفروشة بالكامل",
    price: "2,800 ريال/شهر",
    location: "جدة، حي السلامة",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 2,
    bathrooms: 1,
    area: 110,
    type: "rent",
    isNew: false,
  },
  {
    id: 8,
    title: "فيلا مع حديقة خاصة",
    price: "1,750,000 ريال",
    location: "الرياض، حي الملقا",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 6,
    bathrooms: 5,
    area: 420,
    type: "sale",
    isNew: true,
  },
  {
    id: 9,
    title: "شقة دوبلكس فاخرة",
    price: "950,000 ريال",
    location: "الدمام، حي الشاطئ",
    image:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    type: "sale",
    isNew: false,
  },
  {
    id: 10,
    title: "مكتب تجاري حديث",
    price: "4,500 ريال/شهر",
    location: "الرياض، شارع التحلية",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    bedrooms: 0,
    bathrooms: 1,
    area: 90,
    type: "rent",
    isNew: false,
  },
  {
    id: 11,
    title: "أرض سكنية للبيع",
    price: "600,000 ريال",
    location: "مكة المكرمة، حي العوالي",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    bedrooms: 0,
    bathrooms: 0,
    area: 750,
    type: "sale",
    isNew: false,
  },
  {
    id: 12,
    title: "شاليه مطل على البحر",
    price: "3,500 ريال/يوم",
    location: "جدة، أبحر الشمالية",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    type: "rent",
    isNew: true,
  },
]

// DOM Elements
const propertiesContainer = document.getElementById("properties-container")
const filterButtons = document.querySelectorAll(".filter-btn")
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navLinks = document.querySelector(".nav-links")
const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-box input")
const propertyTypeSelect = document.getElementById("property-type")
const bedroomsSelect = document.getElementById("bedrooms")
const priceRangeSelect = document.getElementById("price-range")
const loadMoreBtn = document.querySelector(".load-more .btn")
const themeToggleBtn = document.getElementById("theme-toggle-btn")

// Variables for pagination and filtering
let currentPage = 1
const propertiesPerPage = 6
let currentFilter = "all"
let searchQuery = ""

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'
  }

  // Display initial properties
  displayProperties("all", 1)

  // Set up event listeners
  setupEventListeners()
})

// Display properties based on filter and page
function displayProperties(filter, page, query = "") {
  // Update current filter and page
  currentFilter = filter
  currentPage = page
  searchQuery = query

  // Clear the container
  propertiesContainer.innerHTML = ""

  // Filter properties
  let filteredProperties = properties

  // Apply type filter
  if (filter !== "all") {
    if (filter === "new") {
      filteredProperties = properties.filter((property) => property.isNew)
    } else {
      filteredProperties = properties.filter((property) => property.type === filter)
    }
  }

  // Apply search query if exists
  if (query) {
    const searchLower = query.toLowerCase()
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.title.toLowerCase().includes(searchLower) || property.location.toLowerCase().includes(searchLower),
    )
  }

  // Calculate pagination
  const startIndex = (page - 1) * propertiesPerPage
  const endIndex = startIndex + propertiesPerPage
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

  // Create and append property cards
  paginatedProperties.forEach((property) => {
    const propertyCard = createPropertyCard(property)
    propertiesContainer.appendChild(propertyCard)
  })

  // Show "No properties found" message if no properties match the filter
  if (filteredProperties.length === 0) {
    propertiesContainer.innerHTML = `
            <div class="no-properties">
                <p>لم يتم العثور على عقارات تطابق معايير البحث.</p>
            </div>
        `
    loadMoreBtn.style.display = "none"
  } else {
    // Update "Load More" button visibility
    if (endIndex >= filteredProperties.length) {
      loadMoreBtn.style.display = "none"
    } else {
      loadMoreBtn.style.display = "inline-block"
    }
  }
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

// Set up event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      // Get filter value and display properties
      const filter = button.getAttribute("data-filter")
      displayProperties(filter, 1, searchQuery)
    })
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show")
  })

  // Search functionality
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim()
    displayProperties(currentFilter, 1, query)
  })

  // Search on Enter key
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim()
      displayProperties(currentFilter, 1, query)
    }
  })

  // Property type filter
  propertyTypeSelect.addEventListener("change", () => {
    applyFilters()
  })

  // Bedrooms filter
  bedroomsSelect.addEventListener("change", () => {
    applyFilters()
  })

  // Price range filter
  priceRangeSelect.addEventListener("change", () => {
    applyFilters()
  })

  // Load more button
  loadMoreBtn.addEventListener("click", () => {
    displayProperties(currentFilter, currentPage + 1, searchQuery)
  })

  // Theme toggle
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

// Apply all filters from select dropdowns
function applyFilters() {
  const propertyType = propertyTypeSelect.value
  const bedrooms = bedroomsSelect.value
  const priceRange = priceRangeSelect.value

  // In a real application, this would filter properties based on all criteria
  // For this demo, we'll just show an alert with the selected filters
  const message =
    `تم تطبيق الفلاتر:\n` +
    `نوع العقار: ${propertyType || "الكل"}\n` +
    `غرف النوم: ${bedrooms || "الكل"}\n` +
    `نطاق السعر: ${priceRange || "الكل"}`

  alert(message)

  // Reset to first page with current filter
  displayProperties(currentFilter, 1, searchQuery)
}

// Handle window resize (for mobile menu)
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navLinks.classList.remove("show")
  }
})

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

