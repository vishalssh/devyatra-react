// ── Data ─────────────────────────────────────────────────────

const temples = [
	{
		name: "Kashi Vishwanath",
		loc: "Varanasi, UP",
		badge: "Jyotirlinga",
		bg: "#FAEEDA",
		icon: "",
	},
	{
		name: "Tirupati Balaji",
		loc: "Tirupati, AP",
		badge: "Divya Desam",
		bg: "#EAF3DE",
		icon: "",
	},
	{
		name: "Sai Baba Shirdi",
		loc: "Shirdi, MH",
		badge: "Top rated",
		bg: "#E1F5EE",
		icon: "",
	},
	{
		name: "Golden Temple",
		loc: "Amritsar, PB",
		badge: "Gurudwara",
		bg: "#FAC775",
		icon: "",
	},
];

const services = [
	{
		icon: "",
		bg: "#FAEEDA",
		name: "Temple hotels",
		desc: "Dharamshalas, budget stays & resorts near sacred sites",
		count: "12,400+ options",
	},
	{
		icon: "🚗",
		bg: "#E1F5EE",
		name: "Car rental",
		desc: "AC cabs, tempo travellers & self-drive for yatra routes",
		count: "3,200+ cars",
	},
	{
		icon: "☕",
		bg: "#EAF3DE",
		name: "Satvik cafes",
		desc: "Pure veg eateries, prasad thalis & chai dhabas nearby",
		count: "8,600+ spots",
	},
];

const listings = [
	{
		type: "Hotel",
		name: "Hotel Ganges View",
		meta: "0.3 km from Kashi Vishwanath",
		rate: "₹1,850",
		per: "/ night",
		stars: "★ 4.6",
		bg: "#FAEEDA",
		icon: "",
		cta: "Book",
	},
	{
		type: "Car rental",
		name: "Swift Dzire AC",
		meta: "Varanasi pickup · 4 seats",
		rate: "₹1,200",
		per: "/ day",
		stars: "★ 4.8",
		bg: "#E6F1FB",
		icon: "🚗",
		cta: "Book",
	},
	{
		type: "Cafe",
		name: "Pehelwan Lassi",
		meta: "Dashashwamedh Ghat, 50m",
		rate: "₹60",
		per: "avg",
		stars: "★ 4.9",
		bg: "#EAF3DE",
		icon: "☕",
		cta: "View",
	},
];

const stats = [
	{ num: "500+", lbl: "Temples covered" },
	{ num: "12K+", lbl: "Hotels listed" },
	{ num: "3.2K+", lbl: "Cars available" },
	{ num: "8K+", lbl: "Cafes & dhabas" },
];

const NAV_TABS = ["Hotels", "Car rental", "Cafes", "Packages"];
const NAV_LINKS = ["Temples", "Hotels", "Cars", "Cafes"];

// ── Shared: StarIcon ─────────────────────────────────────────

function StarIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 20 20" fill="none">
			<path
				d="M10 2L12.5 8H19L13.5 11.5L15.5 18L10 14.5L4.5 18L6.5 11.5L1 8H7.5L10 2Z"
				fill="white"
			/>
		</svg>
	);
}

// ── Logo ─────────────────────────────────────────────────────

export function Logo() {
	return (
		<div className="dy-logo-wrap">
			<div className="dy-logo-icon">
				<StarIcon />
			</div>
			<div>
				<div className="dy-logo-text">DevYatra</div>
				<div className="dy-logo-sub">Temple Travel</div>
			</div>
		</div>
	);
}

// ── Navbar ───────────────────────────────────────────────────

export function Navbar({ activeLink }) {
	return (
		<nav className="dy-nav">
			<Logo />
			<div className="dy-nav-links">
				{NAV_LINKS.map((link) => (
					<span
						key={link}
						className={activeLink === link ? "active" : ""}
					>
						{link}
					</span>
				))}
			</div>
			<button className="dy-nav-cta">Sign in</button>
		</nav>
	);
}

// ── TabBar ───────────────────────────────────────────────────

export function TabBar({ tabs, active, onChange }) {
	return (
		<div className="dy-tab-row">
			{tabs.map((t) => (
				<button
					key={t}
					className={`dy-tab${active === t ? " active" : ""}`}
					onClick={() => onChange(t)}
				>
					{t}
				</button>
			))}
		</div>
	);
}

// ── HeroSection ──────────────────────────────────────────────

export function HeroSection({ activeTab, onTabChange }) {
	return (
		<section className="dy-hero">
			<TabBar tabs={NAV_TABS} active={activeTab} onChange={onTabChange} />
			<div className="dy-hero-tag">Sacred journeys, simplified</div>
			<h1 className="dy-hero-title">
				Book everything around your <em>temple visit</em>
			</h1>
			<p className="dy-hero-sub">
				Hotels, cars, and cafes near 500+ temples across India — all in
				one place.
			</p>
			<div className="dy-search-box">
				<div className="dy-search-field">
					<label className="dy-search-label">Temple / City</label>
					<select className="dy-search-input">
						<option>Varanasi, Kashi Vishwanath</option>
						<option>Tirupati, Balaji Temple</option>
						<option>Shirdi, Sai Baba</option>
						<option>Vrindavan, Banke Bihari</option>
						<option>Amritsar, Golden Temple</option>
						<option>Puri, Jagannath Temple</option>
					</select>
				</div>
				<div className="dy-search-field">
					<label className="dy-search-label">Check-in</label>
					<input type="date" className="dy-search-input" />
				</div>
				<div className="dy-search-field">
					<label className="dy-search-label">Guests</label>
					<select className="dy-search-input">
						<option>2 pilgrims</option>
						<option>1 pilgrim</option>
						<option>4 pilgrims</option>
						<option>Family (6+)</option>
					</select>
				</div>
				<button className="dy-search-btn">Search →</button>
			</div>
		</section>
	);
}

// ── StatsBar ─────────────────────────────────────────────────

export function StatsBar() {
	return (
		<div className="dy-stats-bar">
			{stats.map((s) => (
				<div key={s.lbl} className="dy-stat-item">
					<div className="dy-stat-num">{s.num}</div>
					<div className="dy-stat-lbl">{s.lbl}</div>
				</div>
			))}
		</div>
	);
}

// ── TempleCard ───────────────────────────────────────────────

export function TempleCard({ temple }) {
	return (
		<div className="dy-temple-card">
			<div className="dy-temple-img" style={{ background: temple.bg }}>
				{temple.icon}
			</div>
			<div className="dy-temple-info">
				<div className="dy-temple-name">{temple.name}</div>
				<div className="dy-temple-loc">{temple.loc}</div>
				<span className="dy-temple-badge">{temple.badge}</span>
			</div>
		</div>
	);
}

// ── TemplesSection ───────────────────────────────────────────

export function TemplesSection() {
	return (
		<section className="dy-section">
			<div className="dy-section-head">
				<div className="dy-section-title">Popular pilgrimages</div>
				<button className="dy-see-all">See all →</button>
			</div>
			<div className="dy-temples-grid">
				{temples.map((t) => (
					<TempleCard key={t.name} temple={t} />
				))}
			</div>
		</section>
	);
}

// ── ServiceCard ──────────────────────────────────────────────

export function ServiceCard({ svc }) {
	return (
		<div className="dy-service-card">
			<div className="dy-service-icon" style={{ background: svc.bg }}>
				{svc.icon}
			</div>
			<div className="dy-service-name">{svc.name}</div>
			<div className="dy-service-desc">{svc.desc}</div>
			<div className="dy-service-count">{svc.count}</div>
		</div>
	);
}

// ── ServicesSection ──────────────────────────────────────────

export function ServicesSection() {
	return (
		<section className="dy-section">
			<div className="dy-section-head">
				<div className="dy-section-title">Book by service</div>
			</div>
			<div className="dy-services-grid">
				{services.map((s) => (
					<ServiceCard key={s.name} svc={s} />
				))}
			</div>
		</section>
	);
}

// ── ListingCard ──────────────────────────────────────────────

export function ListingCard({ listing }) {
	return (
		<div className="dy-listing-card">
			<div className="dy-listing-img" style={{ background: listing.bg }}>
				{listing.icon}
			</div>
			<div className="dy-listing-body">
				<div className="dy-listing-type">{listing.type}</div>
				<div className="dy-listing-name">{listing.name}</div>
				<div className="dy-listing-meta">{listing.meta}</div>
				<div className="dy-listing-price">
					<div>
						<div className="dy-listing-rate">
							{listing.rate} <span>{listing.per}</span>
						</div>
						<div className="dy-listing-stars">{listing.stars}</div>
					</div>
					<button className="dy-book-btn">{listing.cta}</button>
				</div>
			</div>
		</div>
	);
}

// ── ListingsSection ──────────────────────────────────────────

export function ListingsSection() {
	return (
		<section className="dy-section">
			<div className="dy-section-head">
				<div className="dy-section-title">Trending near Varanasi</div>
				<button className="dy-see-all">See all →</button>
			</div>
			<div className="dy-listings-grid">
				{listings.map((l) => (
					<ListingCard key={l.name} listing={l} />
				))}
			</div>
		</section>
	);
}

// ── Footer ───────────────────────────────────────────────────

export function Footer() {
	return (
		<footer className="dy-footer">
			<Logo />
			<div className="dy-footer-links">
				{["About", "Contact", "Privacy", "Help"].map((l) => (
					<span key={l}>{l}</span>
				))}
			</div>
			<div className="dy-footer-note">
				© 2026 DevYatra · Made with ❤ for pilgrims
			</div>
		</footer>
	);
}
