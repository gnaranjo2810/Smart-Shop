window.handleImageError = function(img, nameEnc, categoryEnc) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = 'true';
  const name = decodeURIComponent(nameEnc);
  const category = decodeURIComponent(categoryEnc);
  const prompt = encodeURIComponent(`High quality product photography of ${name}, category: ${category}, modern, clean background, realistic`);
  img.src = `https://image.pollinations.ai/prompt/${prompt}?width=600&height=600&nologo=true`;
};

function getProductScore(product) {
  let score = 0;
  const badges = [];

  const qualityMultiplier = { "Basic": 1, "Standard": 1.5, "Premium": 2, "Luxury": 3 }[product.quality];
  const valueRatio = (qualityMultiplier * 500) / (product.price || 1);
  score += Math.min(valueRatio, 30);
  score += (product.rating / 5) * 30;
  const shippingPoints = Math.max(0, 20 - product.shippingTimeDays * 3);
  score += shippingPoints;
  score += Math.min(product.salesCount / 500, 10);
  score += Math.min(product.discountPercentage / 5, 10);

  if (valueRatio > 4 && product.rating >= 4.0) badges.push("Best Value");
  if (product.salesCount > 8000) badges.push("Most Popular");
  if (product.shippingTimeDays <= 2) badges.push("Fastest Shipping");
  if (product.discountPercentage >= 35) badges.push("Biggest Discount");

  return { productId: product.id, score, badges };
}

function rankProducts(products) {
  return products.map(p => ({ ...p, ...getProductScore(p) })).sort((a, b) => b.score - a.score);
}

window.appState = {
  currentView: 'home',
  searchQuery: '',
  currentProduct: null,
  compareList: [],
  filters: { category: '', minPrice: 0, maxPrice: 2000, quality: '', maxShippingDays: 14 },
  rankedProducts: rankProducts(window.mockProducts || []),

  init() {
    this.renderNav();
    this.navigate('home');
  },

  navigate(view, productId = null) {
    this.currentView = view;
    if (productId) this.currentProduct = this.rankedProducts.find(p => p.id === productId);
    else this.currentProduct = null;
    
    // Clear search if not going to results
    if (view !== 'results') this.searchQuery = '';
    
    this.renderNav();
    this.renderView();
    window.scrollTo(0, 0);
  },

  handleSearch(query) {
    this.searchQuery = query;
    this.navigate('results');
  },

  handleLinkAnalysis(url) {
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;
    
    // Quick validation
    try {
      new URL(url);
    } catch(e) {
      alert("Please enter a valid URL including http:// or https://");
      return;
    }

    document.getElementById('loading-title').innerText = "Analyzing External Link...";
    document.getElementById('loading-text').innerText = "Extracting product data and running comparison analysis...";
    overlay.style.display = 'flex';
    
    setTimeout(() => {
      document.getElementById('loading-title').innerText = "Running ML Sentiment Analysis...";
      document.getElementById('loading-text').innerText = "Comparing with database...";
    }, 1500);

    setTimeout(() => {
      let hostname = "Unknown Source";
      try {
        hostname = new URL(url).hostname.replace('www.', '').toLowerCase();
      } catch (e) {}

      const newId = 'p_ext_' + Date.now();
      
      let mockName = "Generic Product";
      let mockCategory = "Various";
      let mockPrice = Math.floor(Math.random() * 150) + 19.99;
      let mockQuality = "Standard";
      let mockBrand = "Generic";
      let mockImageId = "1512499617640-c74ae3a79d37"; // default box

      if (hostname.includes("amazon")) {
        const names = [
          { n: "Echo Dot 5th Gen", id: "1543512214-318e84cae814" },
          { n: "Kindle Paperwhite", id: "1592055178854-e4c70018dca0" },
          { n: "Sony WH-1000XM5 Noise Canceling", id: "1618366712010-f4ae9c647dcb" },
          { n: "Instant Pot Duo 7-in-1", id: "1588144211328-9844de04130f" }
        ];
        const choice = names[Math.floor(Math.random() * names.length)];
        mockName = choice.n;
        mockImageId = choice.id;
        mockCategory = "Electronics/Home";
        mockPrice = Math.floor(Math.random() * 200) + 49.99;
        mockQuality = "Premium";
        mockBrand = "Amazon Vendor";
      } else if (hostname.includes("ebay")) {
        const names = [
          { n: "Refurbished DSLR Camera", id: "1516035069371-29a1b244cc32" },
          { n: "Vintage Leather Jacket", id: "1543076447-215ad9ba6923" },
          { n: "Collectible Trading Card", id: "1609710228159-0fa9bd8c0827" },
          { n: "Used Smartphone Unlocked", id: "1511707171634-5f897ff02aa9" }
        ];
        const choice = names[Math.floor(Math.random() * names.length)];
        mockName = choice.n;
        mockImageId = choice.id;
        mockCategory = "Collectibles/Electronics";
        mockQuality = "Basic";
        mockPrice = Math.floor(Math.random() * 300) + 10;
        mockBrand = "eBay Seller";
      } else if (hostname.includes("temu") || hostname.includes("aliexpress")) {
        const names = [
          { n: "10pcs Mini LED Flashlight", id: "1582215335198-d10ee9dcc2e3" },
          { n: "Silicone phone case", id: "1603313011101-320f666b578c" },
          { n: "Wireless earbud clone", id: "1606220588913-b3aecb4b204e" },
          { n: "Cheap kitchen gadget", id: "1587654780291-39c9404d746b" }
        ];
        const choice = names[Math.floor(Math.random() * names.length)];
        mockName = choice.n;
        mockImageId = choice.id;
        mockCategory = "Accessories";
        mockQuality = "Basic";
        mockPrice = (Math.random() * 10) + 1.99;
        mockBrand = "Unbranded";
      } else {
        const names = [
          { n: "Pro Wireless Earbuds", id: "1505740420928-5e560c06d30e" },
          { n: "Smart Kitchen Blender", id: "1588144211328-9844de04130f" },
          { n: "Ergonomic Office Mouse", id: "1527864550417-7fd91baa4ce7" },
          { n: "4K Action Camera", id: "1527977966376-1c8408f9f10b" },
          { n: "Portable Power Bank", id: "1606220588913-b3aecb4b204e" }
        ];
        const choice = names[Math.floor(Math.random() * names.length)];
        mockName = choice.n;
        mockImageId = choice.id;
        mockBrand = hostname.split('.')[0].toUpperCase();
      }
      
      let mockImage = `https://images.unsplash.com/photo-${mockImageId}?w=600&h=600&fit=crop`;

      const externalProduct = {
        id: newId,
        name: `${mockName} (from ${hostname})`,
        description: `This product was automatically extracted from ${hostname} for comparison purposes. Our AI analyzed the page to extract specifications, prices, and reviews.`,
        price: mockPrice,
        category: mockCategory,
        quality: mockQuality,
        shippingTimeDays: Math.floor(Math.random() * 5) + 2,
        quantity: 50,
        color: "Various",
        brand: mockBrand,
        rating: (Math.random() * 1.5 + 3.5),
        reviewsCount: Math.floor(Math.random() * 2000) + 50,
        discountPercentage: 0,
        salesCount: Math.floor(Math.random() * 1000),
        features: ["Extracted via SmartShop Link Analyzer", `Cross-platform comparison data from ${hostname}`, "AI price match checking"],
        pros: [`Found on external site (${hostname})`, "Easily compared locally"],
        cons: ["Data might be incomplete", "Shipping varies by external seller"],
        sentiment: "Mixed",
        image: mockImage
      };

      window.mockProducts.push(externalProduct);
      this.rankedProducts = rankProducts(window.mockProducts);
      
      overlay.style.display = 'none';
      
      if (this.compareList.length >= 4) {
         this.compareList.shift();
      }
      
      const rankedProd = this.rankedProducts.find(p => p.id === newId);
      this.compareList.push(rankedProd);
      
      this.navigate('compare');
      
    }, 3000);
  },

  updateFilters(key, value) {
    this.filters[key] = value;
    this.renderResults();
  },

  resetFilters() {
    this.filters = { category: '', minPrice: 0, maxPrice: 2000, quality: '', maxShippingDays: 14 };
    this.searchQuery = '';
    this.renderResults();
  },

  toggleCompare(productId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const exists = this.compareList.find(p => p.id === productId);
    if (exists) {
      this.compareList = this.compareList.filter(p => p.id !== productId);
    } else {
      if (this.compareList.length >= 4) {
        alert("You can only compare up to 4 products at a time.");
        return;
      }
      const product = this.rankedProducts.find(p => p.id === productId);
      this.compareList.push(product);
    }
    this.renderNav();
    
    // Refresh current view to update compare button states
    if (this.currentView === 'home' || this.currentView === 'results') {
      this.renderView();
    } else if (this.currentView === 'compare') {
      this.renderCompare();
    }
  },

  clearCompare() {
    this.compareList = [];
    this.renderNav();
    this.renderCompare();
  },

  renderNav() {
    const badge = document.getElementById('nav-compare-count');
    if (this.compareList.length > 0) {
      badge.textContent = this.compareList.length;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }

    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    const activeLink = document.getElementById('nav-' + this.currentView);
    if (activeLink) activeLink.classList.add('active');
  },

  renderView() {
    const root = document.getElementById('app-root');
    root.innerHTML = ''; // Clear

    const templateId = `tpl-${this.currentView === 'product' ? 'details' : this.currentView}`;
    const tpl = document.getElementById(templateId);
    if (!tpl) return;
    
    root.appendChild(tpl.content.cloneNode(true));

    if (this.currentView === 'home') this.renderHome();
    else if (this.currentView === 'results') this.renderResultsSetup();
    else if (this.currentView === 'product') this.renderDetails();
    else if (this.currentView === 'compare') this.renderCompare();
  },

  createProductCardHTML(product) {
    const isComparing = this.compareList.some(p => p.id === product.id);
    const badgeMap = { "Best Value": "primary", "Most Popular": "secondary", "Fastest Shipping": "accent", "Biggest Discount": "warning" };
    
    let badgesHTML = '';
    if (product.discountPercentage > 0) {
      badgesHTML += `<span class="badge badge-warning">-${product.discountPercentage}% OFF</span>`;
    }
    if (product.badges) {
      product.badges.forEach(b => {
        badgesHTML += `<span class="badge badge-${badgeMap[b] || 'outline'}">${b}</span>`;
      });
    }

    return `
      <div class="product-card" onclick="appState.navigate('product', '${product.id}')">
        <div class="card-badges">${badgesHTML}</div>
        <div class="card-image-wrapper">
          <img src="${product.image}" loading="lazy" class="card-image" alt="${product.name.replace(/"/g, '&quot;')}" onerror="window.handleImageError(this, '${encodeURIComponent(product.name)}', '${encodeURIComponent(product.category)}')">
        </div>
        <div class="card-content">
          <div class="card-category">${product.category} • ${product.brand}</div>
          <h3 class="card-title">${product.name}</h3>
          <div class="card-rating">
            <span class="card-rating-stars">★ ${product.rating.toFixed(1)}</span>
            <span class="card-rating-count">(${product.reviewsCount} reviews)</span>
          </div>
          <div class="card-footer">
            <div>
              <div class="card-price">$${product.price.toFixed(2)}</div>
              <span class="card-shipping">Arrives in ${product.shippingTimeDays} days</span>
            </div>
            <button class="btn-card-compare ${isComparing ? 'active' : ''}" onclick="appState.toggleCompare('${product.id}', event)" title="${isComparing ? 'Remove from compare' : 'Add to compare'}">
              ${isComparing 
                ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>' 
                : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderHome() {
    const trending = this.rankedProducts.slice(0, 4);
    const discounts = [...this.rankedProducts].filter(p => p.discountPercentage > 0).sort((a,b) => b.discountPercentage - a.discountPercentage).slice(0, 4);
    const popular = [...this.rankedProducts].sort((a,b) => b.salesCount - a.salesCount).slice(0, 4);

    document.getElementById('grid-trending').innerHTML = trending.map(p => this.createProductCardHTML(p)).join('');
    document.getElementById('grid-discounts').innerHTML = discounts.map(p => this.createProductCardHTML(p)).join('');
    document.getElementById('grid-purchased').innerHTML = popular.map(p => this.createProductCardHTML(p)).join('');
  },

  renderResultsSetup() {
    // Populate categories
    const select = document.getElementById('filter-category');
    const categories = [...new Set(this.rankedProducts.map(p => p.category))];
    select.innerHTML = '<option value="">All Categories</option>' + categories.map(c => `<option value="${c}">${c}</option>`).join('');
    
    // Set current values
    document.getElementById('filter-category').value = this.filters.category;
    document.getElementById('filter-maxp').value = this.filters.maxPrice;
    document.getElementById('filter-quality').value = this.filters.quality;
    document.getElementById('filter-maxs').value = this.filters.maxShippingDays;
    
    document.getElementById('lbl-maxp').innerText = `Maximum Price: $${this.filters.maxPrice}`;
    document.getElementById('lbl-maxs').innerText = `Max Shipping: ${this.filters.maxShippingDays} days`;

    this.renderResults();
  },

  renderResults() {
    // We might be trying to render results when slightly off-page, ensure we are on results
    if(this.currentView !== 'results') {
      this.navigate('results');
      return;
    }

    let filtered = this.rankedProducts;
    const q = this.searchQuery.trim().toLowerCase();
    
    if (q) {
      const terms = q.split(/\s+/);
      filtered = filtered.filter(p => {
        const searchableText = [
          p.name,
          p.description,
          p.category,
          p.brand,
          ...(p.features || []),
          ...(p.pros || []),
          ...(p.cons || [])
        ].join(' ').toLowerCase();
        
        return terms.every(term => searchableText.includes(term));
      });
    }
    if (this.filters.category) {
      filtered = filtered.filter(p => p.category === this.filters.category);
    }
    filtered = filtered.filter(p => p.price <= this.filters.maxPrice && p.price >= this.filters.minPrice);
    if (this.filters.quality) {
      const ql = ["Basic", "Standard", "Premium", "Luxury"];
      filtered = filtered.filter(p => ql.indexOf(p.quality) >= ql.indexOf(this.filters.quality));
    }
    filtered = filtered.filter(p => p.shippingTimeDays <= this.filters.maxShippingDays);

    document.getElementById('results-title').innerText = q ? `Results for "${this.searchQuery}"` : "All Products";
    document.getElementById('results-count').innerText = `Found ${filtered.length} products`;

    const bestContainer = document.getElementById('best-overall-container');
    const grid = document.getElementById('grid-results');
    
    bestContainer.innerHTML = '';
    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; background: rgba(30,41,59,0.5); border-radius: 1rem;"><div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div><h3>No products found</h3><p style="color: var(--text-muted)">Try adjusting filters.</p></div>`;
      return;
    }

    const best = filtered[0];
    bestContainer.innerHTML = `
      <div style="background: var(--gradient-brand); padding: 1px; border-radius: 1.5rem; margin-bottom: 3rem;">
        <div style="background: var(--bg-color); border-radius: 1.45rem; padding: 2rem; position: relative;">
          <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1.5rem;">👑 Best Overall Match</h2>
          <div style="max-width: 300px;">
            ${this.createProductCardHTML(best)}
          </div>
        </div>
      </div>
    `;

    grid.innerHTML = filtered.slice(1).map(p => this.createProductCardHTML(p)).join('');
  },

  renderDetails() {
    const p = this.currentProduct;
    if (!p) return;

    const sentimentStyles = {
      'Positive': 'background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16,185,129,0.2)',
      'Mixed': 'background: rgba(245, 158, 11, 0.1); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2)',
      'Negative': 'background: rgba(239, 68, 68, 0.1); color: #f87171; border: 1px solid rgba(239,68,68,0.2)'
    };
    const sentimentDesc = {
      'Positive': "The vast majority of customers are highly satisfied with this product.",
      'Mixed': "Customer opinions are divided with some notable flaws mentioned.",
      'Negative': "Many customers have expressed dissatisfaction."
    };

    document.getElementById('details-content').innerHTML = `
      <div class="details-layout">
        <div class="details-image-container">
          <img src="${p.image}" alt="${p.name.replace(/"/g, '&quot;')}" onerror="window.handleImageError(this, '${encodeURIComponent(p.name)}', '${encodeURIComponent(p.category)}')">
          ${p.discountPercentage > 0 ? `<div style="position: absolute; top: 1rem; left: 1rem;"><span class="badge badge-warning" style="font-size: 1rem; padding: 0.5rem 1rem;">-${p.discountPercentage}% OFF</span></div>` : ''}
        </div>
        
        <div style="display: flex; flex-direction: column;">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            ${(p.badges || []).map(b => `<span class="badge badge-primary">${b}</span>`).join('')}
          </div>
          <h1 class="details-title">${p.name}</h1>
          
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary);">
            <span style="color: var(--accent-amber); font-weight: bold;">★ ${p.rating.toFixed(1)}</span>
            <span>(${p.reviewsCount} reviews)</span>
            <span>•</span>
            <span>${p.brand}</span>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="details-price">$${p.price.toFixed(2)}</span>
            ${p.discountPercentage > 0 ? `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 1.25rem;">$${(p.price / (1 - p.discountPercentage/100)).toFixed(2)}</span>` : ''}
          </div>

          <p class="details-desc">${p.description}</p>

          <div class="details-meta-grid">
            <div class="meta-item"><label>Shipping</label><span>${p.shippingTimeDays} Days</span></div>
            <div class="meta-item"><label>Quality Tier</label><span>${p.quality}</span></div>
            <div class="meta-item"><label>Color</label><span>${p.color}</span></div>
            <div class="meta-item"><label>Category</label><span>${p.category}</span></div>
          </div>

          <div class="details-actions">
            <button class="btn btn-primary" style="font-size: 1.125rem; padding: 1.25rem;">Buy Now</button>
            <button class="btn btn-outline" style="font-size: 1.125rem; padding: 1.25rem;">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="details-layout" style="margin-top: 4rem; padding-top: 4rem; border-top: 1px solid var(--border-color);">
        <div>
          <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Key Features</h2>
          <ul style="list-style: none; margin-bottom: 3rem;">
            ${p.features.map(f => `<li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;"><span style="color: var(--primary);">✓</span> ${f}</li>`).join('')}
          </ul>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div style="background: rgba(16,185,129,0.05); padding: 1.5rem; border-radius: 1rem;">
              <h3 style="color: #34d399; margin-bottom: 1rem;">⊕ Pros</h3>
              <ul style="list-style: none;">${p.pros.map(pr => `<li style="margin-bottom: 0.5rem; font-size: 0.875rem;">${pr}</li>`).join('')}</ul>
            </div>
            <div style="background: rgba(239,68,68,0.05); padding: 1.5rem; border-radius: 1rem;">
              <h3 style="color: #f87171; margin-bottom: 1rem;">⊖ Cons</h3>
              <ul style="list-style: none;">${p.cons.map(c => `<li style="margin-bottom: 0.5rem; font-size: 0.875rem;">${c}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
        
        <div>
          <div style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2rem; position: sticky; top: 6rem;">
            <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem;">Review Analysis</h2>
            <div style="text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
              <div style="font-size: 4rem; font-weight: 900; line-height: 1;">${p.rating.toFixed(1)}</div>
              <div style="color: var(--accent-amber); font-size: 1.5rem;">★★★★★</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">Overall Sentiment</div>
              <div style="padding: 1rem; border-radius: 0.75rem; text-align: center; font-weight: bold; ${sentimentStyles[p.sentiment]}">${p.sentiment}</div>
              <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">${sentimentDesc[p.sentiment]}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderCompare() {
    const table = document.getElementById('compare-table');
    if (!table) return;

    if (this.compareList.length === 0) {
      table.innerHTML = `<tr><td style="padding: 4rem; text-align: center; color: var(--text-muted);">No products selected for comparison. <a href="#" onclick="appState.navigate('results')" style="color: var(--primary);">Go back and add some.</a></td></tr>`;
      return;
    }

    const maxItems = 4;
    const items = [...this.compareList];
    while (items.length < maxItems) items.push(null); // padding

    let html = '<thead><tr><th>Product</th>';
    items.forEach((p, i) => {
      if (p) {
        html += `<th style="position:relative;">
          <img src="${p.image}" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 1rem; margin-bottom: 1rem;" alt="${p.name.replace(/"/g, '&quot;')}" onerror="window.handleImageError(this, '${encodeURIComponent(p.name)}', '${encodeURIComponent(p.category)}')">
          <div style="font-size: 1.125rem;">${p.name}</div>
          <button onclick="appState.toggleCompare('${p.id}')" style="position:absolute; top: 1.5rem; right: 1.5rem; width: 2rem; height: 2rem; border-radius: 50%; border: none; background: rgba(0,0,0,0.5); color: white; cursor: pointer;">✕</button>
        </th>`;
      } else {
        html += `<th style="border-style: dashed;"><div style="aspect-ratio:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color: var(--text-muted); cursor: pointer;" onclick="appState.navigate('results')"><span style="font-size: 2rem;">+</span><div>Add Product</div></div></th>`;
      }
    });
    html += '</tr></thead><tbody>';

    const rows = [
      { k: 'Price', fn: p => `<strong style="font-size: 1.25rem;">$${p.price.toFixed(2)}</strong>` },
      { k: 'Rating', fn: p => `<span style="color: var(--accent-amber);">★ ${p.rating.toFixed(1)}</span> <div style="font-size:0.75rem; color: var(--text-muted);">(${p.reviewsCount})</div>` },
      { k: 'Quality', fn: p => `<span class="badge ${p.quality==='Luxury'||p.quality==='Premium'?'badge-primary':'badge-outline'}">${p.quality}</span>` },
      { k: 'Shipping', fn: p => `<span style="${p.shippingTimeDays<=2?'color:#34d399;font-weight:bold;':''}">${p.shippingTimeDays} days</span>` },
      { k: 'Brand', fn: p => p.brand },
      { k: 'Action', fn: p => `<button class="btn btn-primary" onclick="appState.navigate('product', '${p.id}')">View</button>` }
    ];

    rows.forEach(r => {
      html += `<tr><td>${r.k}</td>`;
      items.forEach(p => {
        if (p) html += `<td>${r.fn(p)}</td>`;
        else html += `<td style="border-style: dashed; background: rgba(30,41,59,0.1);"></td>`;
      });
      html += `</tr>`;
    });

    html += '</tbody>';
    table.innerHTML = html;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  window.appState.init();
});

