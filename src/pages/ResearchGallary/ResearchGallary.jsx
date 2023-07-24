import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./ResearchGallary.css"; // Add your custom styles for ResearchGallary here

const ResearchGallary = () => {
    return (
        <div className="research-gallery-container">
            <SectionTitle
                heading={"Student Research Papers"}
                subHeading={"Discover Inspiring Research Work by College Students"}
            />
            <div className="grid md:grid-cols-3 gap-4">
                <div className="card w-96 bg-rose-50 shadow-xl card-hover-effect">
                    <div className="card-body">
                        <h2 className="card-title">
                            Advancements in Artificial Intelligence: A Comprehensive Review
                        </h2>
                        <h3>Published: July 15, 2023 | Author: John Doe</h3>
                        <p>
                            This research paper provides a comprehensive review of recent advancements in artificial intelligence and their applications across various industries. It discusses the challenges and opportunities in AI research.
                        </p>
                        <div className="card-actions">
                            <a href="https://example.com/research-paper-1" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read Now</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-rose-50 shadow-xl card-hover-effect">
                    <div className="card-body">
                        <h2 className="card-title">
                            The Impact of Climate Change on Biodiversity: A Global Analysis
                        </h2>
                        <h3>Published: August 10, 2023 | Author: Jane Smith</h3>
                        <p>
                            This research paper analyzes the global impact of climate change on biodiversity. It examines the effects on various ecosystems and species, emphasizing the need for conservation measures.
                        </p>
                        <div className="card-actions">
                            <a href="https://example.com/research-paper-2" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read Now</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-rose-50 shadow-xl card-hover-effect">
                    <div className="card-body">
                        <h2 className="card-title">
                            Nanomedicine: Current Trends and Future Prospects
                        </h2>
                        <h3>Published: September 5, 2023 | Author: Michael Johnson</h3>
                        <p>
                            This research paper presents the current trends and future prospects of nanomedicine. It highlights the potential applications of nanotechnology in medical diagnosis, drug delivery, and therapy.
                        </p>
                        <div className="card-actions">
                            <a href="https://example.com/research-paper-3" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read Now</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-rose-50 shadow-xl card-hover-effect">
                    <div className="card-body">
                        <h2 className="card-title">
                            The Role of Renewable Energy in Sustainable Development
                        </h2>
                        <h3>Published: October 20, 2023 | Author: Emily Brown</h3>
                        <p>
                            This research paper explores the role of renewable energy sources in achieving sustainable development goals. It discusses the economic and environmental benefits of transitioning to clean energy.
                        </p>
                        <div className="card-actions">
                            <a href="https://example.com/research-paper-4" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read Now</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-rose-50 shadow-xl card-hover-effect">
                    <div className="card-body">
                        <h2 className="card-title">
                            Space Exploration and Beyond: A Vision for the Future
                        </h2>
                        <h3>Published: November 12, 2023 | Author: Robert Wilson</h3>
                        <p>
                            This research paper presents a vision for the future of space exploration, including plans for interplanetary missions, space tourism, and potential colonization of other celestial bodies.
                        </p>
                        <div className="card-actions">
                            <a href="https://example.com/research-paper-5" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchGallary;
