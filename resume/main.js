/**
 * Resume Web Components
 * Using Shadow DOM for encapsulation.
 */

class ResumeBio extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                }
                .bio-content {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    justify-content: center;
                    animation: fadeIn 1s ease;
                }
                .profile-img-placeholder {
                    width: 320px;
                    height: 320px;
                    background: linear-gradient(135deg, #050505, #0047AB);
                    border-radius: 20px;
                    box-shadow: 20px 20px 60px #080808, -20px -20px 60px #101010;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    color: white;
                }
                .profile-img-placeholder i {
                    font-size: 5rem;
                    margin-bottom: 15px;
                    opacity: 0.3;
                }
                .edu-info {
                    text-align: center;
                    font-size: 0.8rem;
                    padding: 0 20px;
                }
                .edu-info .univ { font-weight: 700; color: #0047AB; margin-bottom: 5px; }
                .bio-text {
                    max-width: 650px;
                }
                .greeting {
                    color: #0047AB;
                    font-weight: 600;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                    font-size: 1rem;
                }
                h1 {
                    font-size: 4rem;
                    line-height: 1.1;
                    margin-bottom: 20px;
                    font-weight: 800;
                    color: #f0f0f0;
                    letter-spacing: -1px;
                }
                .role {
                    font-size: 1.3rem;
                    color: #0047AB;
                    margin-bottom: 25px;
                    font-weight: 600;
                }
                .description {
                    font-size: 1.05rem;
                    color: #d0d0d0;
                    margin-bottom: 35px;
                    line-height: 1.7;
                }
                .skills-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 40px;
                }
                .tag {
                    padding: 6px 14px;
                    background: #111;
                    border: 1px solid #333;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    color: #a0a0a0;
                }
                .tag.highlight { border-color: #0047AB; color: #f0f0f0; }
                .cta-group {
                    display: flex;
                    gap: 20px;
                }
                .btn {
                    padding: 14px 30px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-decoration: none;
                    font-size: 0.95rem;
                }
                .btn-primary {
                    background-color: #0047AB;
                    color: white;
                    border: none;
                }
                .btn-primary:hover {
                    background-color: #3373C4;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 71, 171, 0.3);
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 968px) {
                    .bio-content { flex-direction: column; text-align: center; gap: 40px; }
                    h1 { font-size: 3rem; }
                    .cta-group { justify-content: center; }
                    .skills-tags { justify-content: center; }
                }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <div class="bio-content">
                <div class="profile-img-placeholder">
                    <i class="fas fa-user-tie"></i>
                    <div class="edu-info">
                        <div class="univ">INDIANA UNIVERSITY</div>
                        <div>Sports Marketing & Management</div>
                        <div style="font-size: 0.7rem; color: #888; margin-top: 5px;">Dean's List 2021-2023</div>
                    </div>
                </div>
                <div class="bio-text">
                    <p class="greeting">Results-Driven Professional</p>
                    <h1>Austin <br>DONGJAE WON<span style="color: #0047AB">.</span></h1>
                    <p class="role">AI-Driven Marketing & Data Strategy</p>
                    <p class="description">
                        Results-driven professional with a foundation in sports business and expert networking, transitioning into AI-driven marketing and data strategy. Adept at applying LLM tools and data analytics to streamline workflows and scale business outcomes in fast-moving, technology-forward environments.
                    </p>
                    <div class="skills-tags">
                        <span class="tag highlight">Data Analysis</span>
                        <span class="tag highlight">Prompt Engineering</span>
                        <span class="tag">Market Research</span>
                        <span class="tag">Coding</span>
                        <span class="tag">Google Analytics</span>
                        <span class="tag">Sports Sponsorship</span>
                    </div>
                    <div class="cta-group">
                        <a href="#career" class="btn btn-primary">View Experience</a>
                        <a href="#inquiry" class="btn btn-primary" style="background: transparent; border: 2px solid #333;">Contact Me</a>
                    </div>
                </div>
            </div>
        `;
    }
}

class ResumeCareer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const experiences = [
            {
                year: "2025 May - Present",
                company: "Atheneum Partners",
                role: "Associate, Client Service",
                points: [
                    "Source and engage industry experts on behalf of S&P 500 companies and leading global consulting firms.",
                    "Consistently generated over €10,000 in monthly profit, achieving 185% of target KPI through proactive client management."
                ]
            },
            {
                year: "2024 Jul - 2025 May",
                company: "IMG",
                role: "Coordinator, Golf Events",
                points: [
                    "Spearheaded the Green Room Program for LIV Golf Korea 2025, overseeing talent sourcing and on-site hospitality for C-suite executives.",
                    "Managed on-course brand assets for BMW Ladies Championship and produced ROI evaluation reports.",
                    "Coordinated media operations and player logistics for Shinhan Donghae Open 2024 (KPGA, Asian Tour, JGTO)."
                ]
            },
            {
                year: "2023 Jan - 2024 May",
                company: "SponsorUnited",
                role: "Data Analytics Intern & Sponsorship Scout",
                points: [
                    "Leveraged R and Excel within ProTool to monitor performance metrics and sharpen revenue forecasting accuracy.",
                    "Conducted competitive research to surface emerging sponsorship trends, informing sales and marketing strategy.",
                    "Built technical demos and synthesized research reports to support high-stakes decision-making."
                ]
            },
            {
                year: "2023 Aug - 2023 Nov",
                company: "Indianapolis Colts",
                role: "Ticketing & Client Service",
                points: [
                    "Managed gate operations and coordinated ticketing staff for 60,000+ attendees.",
                    "Provided guest services in suite lounges to enhance game-day experience."
                ]
            }
        ];

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; max-width: 900px; margin: 0 auto; }
                .career-timeline { padding: 20px; }
                .career-item {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    gap: 60px;
                    padding-bottom: 80px;
                    position: relative;
                }
                .career-item:not(:last-child)::after {
                    content: "";
                    position: absolute;
                    left: 200px;
                    top: 10px;
                    bottom: 0;
                    width: 2px;
                    background-color: #222;
                    margin-left: -31px;
                }
                .year {
                    font-weight: 800;
                    color: #0047AB;
                    font-size: 1rem;
                    text-align: right;
                    letter-spacing: 1px;
                    padding-top: 5px;
                }
                .company {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: #f0f0f0;
                    margin-bottom: 5px;
                }
                .role {
                    font-weight: 600;
                    color: #0047AB;
                    margin-bottom: 15px;
                    font-size: 1.1rem;
                    text-transform: uppercase;
                }
                .points {
                    list-style: none;
                    padding: 0;
                }
                .points li {
                    color: #b0b0b0;
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 10px;
                    position: relative;
                    padding-left: 20px;
                }
                .points li::before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #0047AB;
                }
                @media (max-width: 768px) {
                    .career-item { grid-template-columns: 1fr; gap: 15px; padding-left: 25px; border-left: 2px solid #0047AB; }
                    .career-item:not(:last-child)::after { display: none; }
                    .year { text-align: left; }
                }
            </style>
            <div class="career-timeline">
                ${experiences.map(exp => `
                    <div class="career-item">
                        <div class="year">${exp.year}</div>
                        <div class="info">
                            <div class="company">${exp.company}</div>
                            <div class="role">${exp.role}</div>
                            <ul class="points">
                                ${exp.points.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

class ResumeInquiry extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; max-width: 800px; margin: 0 auto; }
                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 30px;
                    margin-bottom: 50px;
                }
                .contact-card {
                    background: #111;
                    padding: 30px;
                    border-radius: 15px;
                    border: 1px solid #222;
                    text-align: center;
                    transition: 0.3s ease;
                }
                .contact-card:hover { border-color: #0047AB; transform: translateY(-5px); }
                .contact-card i { font-size: 2rem; color: #0047AB; margin-bottom: 20px; }
                .contact-card h3 { font-size: 0.8rem; letter-spacing: 2px; color: #888; margin-bottom: 10px; }
                .contact-card p { font-size: 1.1rem; color: #f0f0f0; word-break: break-all; }
                .contact-card a { color: inherit; text-decoration: none; }
                
                .form-section {
                    background-color: #111;
                    padding: 40px;
                    border-radius: 20px;
                    border: 1px solid #222;
                }
                .form-group { margin-bottom: 20px; }
                label { display: block; margin-bottom: 8px; color: #0047AB; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; }
                input, textarea {
                    width: 100%; padding: 15px; background: #080808; border: 1px solid #222; border-radius: 8px; color: #f0f0f0; font-family: inherit;
                }
                input:focus { outline: none; border-color: #0047AB; }
                .btn-submit {
                    width: 100%; padding: 15px; background: #0047AB; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: 0.3s;
                }
                .btn-submit:hover { background: #3373C4; }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <div class="contact-grid">
                <div class="contact-card">
                    <i class="fas fa-phone"></i>
                    <h3>PHONE</h3>
                    <p>+82 10-4705-7345</p>
                </div>
                <div class="contact-card">
                    <i class="fas fa-envelope"></i>
                    <h3>EMAIL</h3>
                    <p><a href="mailto:djwon7345@gmail.com">djwon7345@gmail.com</a></p>
                </div>
                <div class="contact-card">
                    <i class="fab fa-linkedin"></i>
                    <h3>LINKEDIN</h3>
                    <p><a href="https://www.linkedin.com/in/datajae" target="_blank">in/datajae</a></p>
                </div>
            </div>

            <div class="form-section">
                <form id="contact-form">
                    <div class="form-group">
                        <label>YOUR NAME</label>
                        <input type="text" placeholder="Enter your name" required>
                    </div>
                    <div class="form-group">
                        <label>MESSAGE</label>
                        <textarea rows="4" placeholder="How can I help you?" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">Send Message</button>
                </form>
            </div>
        `;

        this.shadowRoot.querySelector('#contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        });
    }
}

// Register Custom Elements
customElements.define('resume-bio', ResumeBio);
customElements.define('resume-career', ResumeCareer);
customElements.define('resume-inquiry', ResumeInquiry);
