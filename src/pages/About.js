// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h1 className="fw-bold display-5">All-in-One Services</h1>
                    <p className="lead">
                        Repair • Build • Design • Program
                    </p>
                </div>
            </div>

            {/* Intro / Main Content */}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5">
                                <p className="fs-6 lh-lg text-muted">
                                    <strong>PONG-MTA is more than just a platform</strong> — it’s
                                    your trusted partner for every service you need. We are an
                                    all-in-one hub designed to match your unique requirements,
                                    whether it’s repairing what’s broken, building something new,
                                    designing with creativity, or programming with precision.
                                    Instead of jumping between multiple providers, PONG-MTA brings
                                    everything together in one place, making life simpler, faster,
                                    and more reliable.
                                </p>

                                <p className="fs-6 lh-lg text-muted">
                                    From household fixes and construction projects to digital
                                    solutions, graphics, and software development, our network of
                                    skilled professionals is ready to deliver quality service
                                    tailored to your goals. Whether you’re an individual needing
                                    quick repairs, a business seeking technical expertise, or a
                                    community looking for reliable service providers, PONG-MTA
                                    connects you to the right people for the right job.
                                </p>

                                <p className="fs-6 lh-lg text-muted">
                                    Our mission is to <strong>save you time, effort, and
                                        stress</strong> by providing a one-stop solution for all types
                                    of work. No task is too small, no project is too big — if you
                                    need it done, PONG-MTA has the people and tools to make it
                                    happen. With a commitment to excellence, transparency, and
                                    customer satisfaction, we aim to transform how people access
                                    services: easy to request, reliable in delivery, and built
                                    around your needs.
                                </p>

                                <p className="fs-6 lh-lg text-muted">
                                    At PONG-MTA, we don’t just provide services —{" "}
                                    <strong>we build trust, deliver solutions, and create
                                        possibilities.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Our Core Values</h2>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <h5>✅ Reliability</h5>
                                <p className="text-muted">Services you can always count on.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <h5>💡 Innovation</h5>
                                <p className="text-muted">Creative solutions for modern needs.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <h5>🤝 Transparency</h5>
                                <p className="text-muted">Honest service and clear communication.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <h5>👨‍👩‍👧 Customer First</h5>
                                <p className="text-muted">Your satisfaction drives everything we do.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container py-5">
                <h2 className="fw-bold text-center mb-5">What We Offer</h2>
                <div className="row text-center">
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="fw-bold">🛠 Repair</h5>
                                <p className="text-muted">Quick and reliable fixes for home and business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="fw-bold">🏗 Build</h5>
                                <p className="text-muted">From construction to installations, done right.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="fw-bold">🎨 Design</h5>
                                <p className="text-muted">Creative designs for digital, print, and spaces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="fw-bold">💻 Program</h5>
                                <p className="text-muted">Web, mobile, and software solutions that work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements / Stats */}
            <div className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Our Achievements</h2>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-bold">100+</h3>
                            <p>Happy Clientss</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-bold">50+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-bold">2+</h3>
                            <p>Years of Service</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="fw-bold mb-4">Our Vision</h2>
                        <p className="fs-5 text-muted">
                            We aim to expand PONG-MTA into a complete lifestyle platform,
                            serving households and businesses with innovative digital and
                            physical solutions. Our goal is to make every service —
                            whether repair, build, design, or programming — accessible
                            from one trusted hub.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-white text-center py-5">
                <h2 className="fw-bold">Ready to Experience PONG-MTA?</h2>
                <p className="lead mb-4">One app. Endless services. Your trusted solution.</p>
                <a href="/services" className="btn btn-light btn-lg">
                    Explore Our Services
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default About;
