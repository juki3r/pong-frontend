import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
    return (
        <div>
            <Navbar />

            {/* Hero / Intro Section */}
            <section className="hero bg-dark text-light py-5 text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">
                        Welcome to <span className="text-warning">PONG-MTA</span>
                    </h1>
                    <p className="lead mt-3 mb-4">
                        Your trusted <strong>All-in-One Services</strong> provider — from{" "}
                        <span className="text-warning fw-semibold">Plumbing</span>,{" "}
                        <span className="text-warning fw-semibold">Home Repairs</span>,{" "}
                        <span className="text-warning fw-semibold">Taxi & Transport</span>, to{" "}
                        <span className="text-warning fw-semibold">Rental Solutions</span>. <br />
                        Reliable, affordable, and hassle-free — all in one place.
                    </p>
                    <a href="#services" className="btn btn-warning btn-lg px-4 py-2 shadow fw-semibold">
                        Explore Our Services
                    </a>
                </div>
            </section>

            {/* Services Highlight Section */}
            <section id="services" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold text-dark">
                        What We <span className="text-warning">Offer</span>
                    </h2>
                    <div className="row g-4">
                        <div className="col-md-3 text-center">
                            <div className="p-4 border rounded shadow-sm h-100 bg-white service-card">
                                <h4 className="text-warning mb-3">🔧 Plumbing</h4>
                                <p className="text-muted">
                                    Fast and reliable plumbing solutions for leaks, installations, and emergencies.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="p-4 border rounded shadow-sm h-100 bg-white service-card">
                                <h4 className="text-warning mb-3">🛠️ Repairs</h4>
                                <p className="text-muted">
                                    From home to office repairs — we’ve got expert technicians ready to help.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="p-4 border rounded shadow-sm h-100 bg-white service-card">
                                <h4 className="text-warning mb-3">🚖 Taxi Services</h4>
                                <p className="text-muted">
                                    Safe, affordable, and on-time rides whenever and wherever you need them.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="p-4 border rounded shadow-sm h-100 bg-white service-card">
                                <h4 className="text-warning mb-3">🏠 Rental Services</h4>
                                <p className="text-muted">
                                    Convenient and flexible rental options for your personal or business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-5 bg-warning text-dark text-center">
                <div className="container">
                    <h2 className="fw-bold mb-3">Ready to Experience Hassle-Free Services?</h2>
                    <p className="lead mb-4">
                        Join hundreds of satisfied customers who trust PONG-MTA for everyday solutions.
                    </p>
                    <a href="/contact" className="btn btn-dark btn-lg px-4 py-2 shadow fw-semibold">
                        Contact Us Today
                    </a>
                </div>
            </section>

            <Footer className="footer" />
        </div>
    );
}

export default LandingPage;
