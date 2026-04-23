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
                    align-items: flex-start;
                    gap: 60px;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 1s forwards ease-out;
                }
                .left-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                    flex-shrink: 0;
                }
                .profile-img-placeholder {
                    width: 260px;
                    height: 260px;
                    background: #000;
                    border-radius: 20px;
                    box-shadow: 15px 15px 40px #080808, -15px -15px 40px #101010;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    border: 3px solid #0047AB;
                    transition: transform 0.3s ease;
                }
                .profile-img-placeholder:hover {
                    transform: scale(1.03) rotate(-1deg);
                }
                .education-box {
                    width: 100%;
                    padding: 25px;
                    background: #111;
                    border-radius: 15px;
                    border: 1px solid #222;
                    transition: 0.3s;
                }
                .education-box:hover {
                    border-color: #0047AB;
                    box-shadow: 0 10px 30px rgba(0, 71, 171, 0.2);
                }
                .edu-title {
                    color: #0047AB;
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                }
                .edu-item { margin-bottom: 15px; }
                .edu-item:last-child { margin-bottom: 0; }
                .school { font-weight: 700; color: #f0f0f0; font-size: 0.95rem; margin-bottom: 4px; }
                .period { font-size: 0.8rem; color: #888; margin-bottom: 6px; }
                .major { font-size: 0.85rem; color: #ccc; }
                .minor { font-size: 0.8rem; color: #777; margin-top: 2px; }

                .profile-img-placeholder img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 10;
                }
                .profile-img-placeholder i {
                    font-size: 4rem;
                    color: #222;
                    z-index: 1;
                }
                .bio-text {
                    max-width: 650px;
                    padding-top: 10px;
                }
                .greeting {
                    color: #0047AB;
                    font-weight: 600;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    margin-bottom: 15px;
                    font-size: 0.9rem;
                    display: block;
                    animation: slideInLeft 0.8s both;
                }
                h1 {
                    font-size: 4.5rem;
                    line-height: 1;
                    margin-bottom: 25px;
                    font-weight: 800;
                    color: #f0f0f0;
                    letter-spacing: -2px;
                    animation: slideInLeft 0.8s 0.2s both;
                }
                .description {
                    font-size: 1.1rem;
                    color: #d0d0d0;
                    margin-bottom: 40px;
                    line-height: 1.8;
                    animation: slideInLeft 0.8s 0.4s both;
                }
                .skills-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-bottom: 40px;
                    animation: slideInLeft 0.8s 0.6s both;
                }
                .tag {
                    padding: 8px 18px;
                    background: #111;
                    border: 1px solid #333;
                    border-radius: 25px;
                    font-size: 0.85rem;
                    color: #a0a0a0;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: default;
                }
                .tag:hover {
                    background: var(--accent-color, #0047AB);
                    color: #fff;
                    transform: translateY(-5px) scale(1.1);
                    border-color: var(--accent-color, #0047AB);
                    box-shadow: 0 10px 20px rgba(0, 71, 171, 0.3);
                }
                .tag.highlight { border-color: #0047AB; color: #f0f0f0; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @media (max-width: 968px) {
                    .bio-content { flex-direction: column; text-align: center; gap: 40px; align-items: center; }
                    .left-column { width: 100%; max-width: 320px; }
                    h1 { font-size: 3.2rem; }
                    .skills-tags { justify-content: center; }
                }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <div class="bio-content">
                <div class="left-column">
                    <div class="profile-img-placeholder">
                        <img src="./profile.jpg" alt="Austin Dongjae Won" onerror="this.style.display='none'">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="education-box">
                        <div class="edu-title">Education</div>
                        <div class="edu-item">
                            <div class="school">Indiana University Bloomington</div>
                            <div class="period">2018 - 2024</div>
                            <div class="major">B.S. in Sports Marketing & Management</div>
                            <div class="minor">Minor in Business (Kelley)</div>
                        </div>
                    </div>
                </div>
                <div class="bio-text">
                    <span class="greeting">Sports Professional</span>
                    <h1>Austin <br>Dongjae Won<span style="color: #0047AB">.</span></h1>
                    <p class="description">
                        An experienced sports business professional specializing in data-driven strategy and AI integration. By bridging the gap between industry expertise and modern LLM tools, I streamline complex workflows and scale business outcomes. I excel at delivering measurable growth and high ROI in fast-paced, technology-forward environments.
                    </p>
                    <div class="skills-tags">
                        <span class="tag highlight">Data Analysis</span>
                        <span class="tag highlight">AI/LLM Integration</span>
                        <span class="tag highlight">Prompt Engineering</span>
                        <span class="tag">Market Research</span>
                        <span class="tag">Business Strategy</span>
                        <span class="tag">Google Analytics</span>
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
                :host { display: block; width: 100%; margin: 0 auto; }
                .career-timeline { 
                    padding: 60px 0; 
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .career-timeline::before {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background-color: #333;
                    transform: translateX(-50%);
                }
                .career-item {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    width: 100%;
                    padding-bottom: 100px;
                    position: relative;
                    align-items: start;
                    transition: 0.4s;
                }
                .career-item:hover .company { color: #0047AB; }
                .career-item::after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 10px;
                    width: 16px;
                    height: 16px;
                    background-color: #0047AB;
                    border: 4px solid #161616;
                    border-radius: 50%;
                    transform: translateX(-50%);
                    z-index: 2;
                    transition: 0.3s;
                }
                .career-item:hover::after {
                    transform: translateX(-50%) scale(1.5);
                    box-shadow: 0 0 15px #0047AB;
                }
                .year-side { text-align: right; padding-right: 60px; }
                .year { font-weight: 800; color: #0047AB; font-size: 1.1rem; letter-spacing: 1px; }
                .info-side { text-align: left; padding-left: 60px; }
                .company { font-size: 1.8rem; font-weight: 800; color: #f0f0f0; margin-bottom: 8px; letter-spacing: -0.5px; transition: 0.3s; }
                .role { font-weight: 600; color: #0047AB; margin-bottom: 25px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; }
                .points { list-style: none; padding: 0; }
                .points li { color: #b0b0b0; font-size: 1rem; line-height: 1.7; margin-bottom: 15px; position: relative; padding-left: 25px; }
                .points li::before { content: "→"; position: absolute; left: 0; color: #0047AB; font-weight: bold; }

                @media (max-width: 900px) {
                    .career-timeline::before { left: 30px; transform: none; }
                    .career-item { grid-template-columns: 1fr; padding-left: 60px; text-align: left; }
                    .career-item::after { left: 30px; transform: translateX(-50%); }
                    .year-side { text-align: left; padding-right: 0; margin-bottom: 15px; }
                    .info-side { padding-left: 0; }
                }
            </style>
            <div class="career-timeline">
                ${experiences.map(exp => `
                    <div class="career-item">
                        <div class="year-side">
                            <div class="year">${exp.year}</div>
                        </div>
                        <div class="info-side">
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
                :host { display: block; width: 100%; }
                .inquiry-container { display: flex; justify-content: center; width: 100%; padding: 20px 0; }
                .form-section {
                    background-color: #111;
                    padding: 50px;
                    border-radius: 20px;
                    border: 1px solid #222;
                    width: 100%;
                    max-width: 650px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                    transition: 0.4s;
                }
                .form-section:hover { border-color: #0047AB; transform: translateY(-5px); }
                .form-group { margin-bottom: 30px; }
                label { display: block; margin-bottom: 12px; color: #0047AB; font-size: 0.85rem; font-weight: 800; letter-spacing: 2px; }
                input, textarea {
                    width: 100%; padding: 18px; background: #080808; border: 1px solid #222; border-radius: 12px; color: #f0f0f0; font-family: inherit;
                    transition: all 0.3s;
                }
                input:focus, textarea:focus { outline: none; border-color: #0047AB; background: #0c0c0c; box-shadow: 0 0 15px rgba(0, 71, 171, 0.2); }
                .btn-submit {
                    width: 100%; padding: 20px; background: #0047AB; color: white; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; transition: 0.4s;
                    font-size: 1.1rem; text-transform: uppercase; letter-spacing: 2px;
                }
                .btn-submit:hover { background: #3373C4; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0, 71, 171, 0.4); }
            </style>
            <div class="inquiry-container">
                <div class="form-section">
                    <form action="https://formspree.io/f/xjgjpznl" method="POST">
                        <div class="form-group">
                            <label>YOUR EMAIL</label>
                            <input type="email" name="email" placeholder="Enter your email address" required>
                        </div>
                        <div class="form-group">
                            <label>MESSAGE</label>
                            <textarea name="message" rows="6" placeholder="How can I help you?" required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        `;
    }
}

// Register Custom Elements
customElements.define('resume-bio', ResumeBio);
customElements.define('resume-career', ResumeCareer);
customElements.define('resume-inquiry', ResumeInquiry);

/**
 * Scroll Reveal Animation Logic
 */
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
});
