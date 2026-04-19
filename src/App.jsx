import React, { useState } from "react";
import {
	Navbar,
	HeroSection,
	StatsBar,
	TemplesSection,
	ServicesSection,
	ListingsSection,
	Footer,
} from "./components/DevYatra";

export default function App() {
	const [activeTab, setActiveTab] = useState("Hotels");

	return (
		<div className="dy-page">
			<div className="dy-frame">
				<Navbar />
				<HeroSection activeTab={activeTab} onTabChange={setActiveTab} />
				<StatsBar />
				<TemplesSection />
				<div className="dy-divider" />
				<ServicesSection />
				<div className="dy-divider" />
				<ListingsSection />
				<Footer />
			</div>
		</div>
	);
}
