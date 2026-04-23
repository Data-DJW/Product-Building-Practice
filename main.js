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
                    gap: 80px;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 1s forwards ease-out;
                }
                .left-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                    flex-shrink: 0;
                }
                .profile-img-placeholder {
                    width: 280px;
                    height: 280px;
                    background: #000;
                    border-radius: 30px;
                    box-shadow: 20px 20px 60px #080808, -20px -20px 60px #101010;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    border: 4px solid #0047AB;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .profile-img-placeholder:hover {
                    transform: scale(1.05) rotate(-2deg);
                    box-shadow: 0 0 30px rgba(0, 71, 171, 0.4);
                }
                .education-box {
                    width: 100%;
                    padding: 30px;
                    background: rgba(20, 20, 20, 0.6);
                    backdrop-filter: blur(15px);
                    border-radius: 25px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: 0.4s;
                }
                .education-box:hover {
                    border-color: rgba(0, 71, 171, 0.5);
                    box-shadow: 0 15px 40px rgba(0, 71, 171, 0.2);
                    transform: translateY(-5px);
                }
                .edu-title {
                    color: #0047AB;
                    font-size: 0.85rem;
                    font-weight: 900;
                    letter-spacing: 3px;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                }
                .edu-item { margin-bottom: 15px; }
                .school { font-weight: 800; color: #fff; font-size: 1rem; margin-bottom: 5px; }
                .period { font-size: 0.85rem; color: #666; margin-bottom: 8px; }
                .major { font-size: 0.9rem; color: #bbb; font-weight: 500; }
                .minor { font-size: 0.85rem; color: #888; margin-top: 4px; }

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
                    font-size: 5rem;
                    color: #222;
                    z-index: 1;
                }
                .bio-text {
                    max-width: 700px;
                    padding-top: 20px;
                }
                .greeting {
                    color: #0047AB;
                    font-weight: 700;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    font-size: 0.9rem;
                    display: block;
                }
                h1 {
                    font-size: 5rem;
                    line-height: 0.95;
                    margin-bottom: 30px;
                    font-weight: 900;
                    color: #f0f0f0;
                    letter-spacing: -3px;
                }
                .description {
                    font-size: 1.2rem;
                    color: #aaa;
                    margin-bottom: 50px;
                    line-height: 1.8;
                }
                .highlight {
                    color: #fff;
                    font-weight: 700;
                    position: relative;
                    z-index: 1;
                    padding: 0 4px;
                }
                .highlight::after {
                    content: "";
                    position: absolute;
                    bottom: 2px; left: 0;
                    width: 100%; height: 8px;
                    background: rgba(0, 71, 171, 0.4);
                    z-index: -1;
                    border-radius: 2px;
                }
                .skills-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                }
                .tag {
                    padding: 10px 22px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 30px;
                    font-size: 0.9rem;
                    color: #888;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    font-weight: 600;
                }
                .tag:hover {
                    background: #0047AB;
                    color: #fff;
                    transform: translateY(-8px) scale(1.1);
                    border-color: #0047AB;
                    box-shadow: 0 10px 25px rgba(0, 71, 171, 0.4);
                }
                .tag.active { border-color: #0047AB; color: #fff; background: rgba(0, 71, 171, 0.1); }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 968px) {
                    .bio-content { flex-direction: column; text-align: center; gap: 50px; align-items: center; }
                    h1 { font-size: 3.5rem; }
                    .skills-tags { justify-content: center; }
                }
            </style>
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
                            <div class="major">B.S. in <span style="color:#fff">Sports Marketing & Management</span></div>
                            <div class="minor">Minor in Business (Kelley School of Business)</div>
                        </div>
                    </div>
                </div>
                <div class="bio-text">
                    <span class="greeting">Sports Professional</span>
                    <h1>Austin <br>Dongjae Won<span style="color: #0047AB">.</span></h1>
                    <p class="description">
                        An experienced sports business professional specializing in <span class="highlight">data-driven strategy</span> and <span class="highlight">AI integration</span>. By bridging the gap between industry expertise and modern LLM tools, I streamline complex workflows and scale business outcomes. I excel at delivering <span class="highlight">measurable growth</span> and <span class="highlight">high ROI</span> in fast-paced, technology-forward environments.
                    </p>
                    <div class="skills-tags">
                        <span class="tag active">Data Analysis</span>
                        <span class="tag active">AI/LLM Integration</span>
                        <span class="tag active">Prompt Engineering</span>
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
        this.initAnimations();
    }

    initAnimations() {
        const items = this.shadowRoot.querySelectorAll('.career-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.25 });
        items.forEach(item => observer.observe(item));
    }

    render() {
        const experiences = [
            {
                year: "2025 May - Present",
                company: "Atheneum Partners",
                role: "Associate, Client Service",
                points: [
                    "Source and engage industry experts on behalf of <span style='color:#fff;font-weight:700'>S&P 500 companies</span> and leading global consulting firms.",
                    "Consistently generated over <span style='color:#0047AB;font-weight:800'>€10,000 in monthly profit</span>, achieving <span style='color:#0047AB;font-weight:800'>185% of target KPI</span> through proactive client management."
                ]
            },
            {
                year: "2024 Jul - 2025 May",
                company: "IMG",
                role: "Coordinator, Golf Events",
                points: [
                    "Spearheaded the Green Room Program for <span style='color:#fff;font-weight:700'>LIV Golf Korea 2025</span>, overseeing talent sourcing and on-site hospitality for <span style='color:#fff;font-weight:700'>C-suite executives</span>.",
                    "Managed on-course brand assets for BMW Ladies Championship and produced <span style='color:#0047AB;font-weight:800'>ROI evaluation reports</span>.",
                    "Coordinated media operations and player logistics for Shinhan Donghae Open 2024."
                ]
            },
            {
                year: "2023 Jan - 2024 May",
                company: "SponsorUnited",
                role: "Data Analytics Intern",
                points: [
                    "Leveraged <span style='color:#fff;font-weight:700'>R and Excel</span> within ProTool to monitor performance metrics and sharpen <span style='color:#fff;font-weight:700'>revenue forecasting accuracy</span>.",
                    "Conducted competitive research to surface emerging sponsorship trends, informing sales and marketing strategy.",
                    "Built technical demos and synthesized research reports to support high-stakes decision-making."
                ]
            },
            {
                year: "2023 Aug - 2023 Nov",
                company: "Indianapolis Colts",
                role: "Ticketing & Client Service",
                points: [
                    "Managed gate operations and coordinated ticketing staff for <span style='color:#fff;font-weight:700'>60,000+ attendees</span>.",
                    "Provided guest services in suite lounges to enhance game-day experience."
                ]
            }
        ];

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; width: 100%; margin: 0 auto; overflow: hidden; }
                .career-timeline { padding: 60px 0; position: relative; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
                .career-timeline::before { content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, #333, transparent); transform: translateX(-50%); }
                .career-item { display: grid; grid-template-columns: 1fr 1fr; width: 100%; padding-bottom: 120px; position: relative; align-items: start; cursor: default; }
                
                .year-side { text-align: right; padding-right: 80px; opacity: 0; transform: translateX(-100px); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
                .info-side { text-align: left; padding-left: 80px; opacity: 0; transform: translateX(100px); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
                
                .career-item::after {
                    content: ""; position: absolute; left: 50%; top: 12px; width: 18px; height: 16px; background-color: #222; border: 3px solid #333; border-radius: 4px; transform: translateX(-50%) scale(0) rotate(45deg); z-index: 2; transition: all 0.6s 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .career-item.animate .year-side, .career-item.animate .info-side { opacity: 1; transform: translateX(0); }
                .career-item.animate::after { transform: translateX(-50%) scale(1) rotate(45deg); background-color: #0047AB; border-color: #0047AB; box-shadow: 0 0 20px rgba(0, 71, 171, 0.6); }

                .career-item:hover .year { color: #fff; transform: scale(1.1); }
                .career-item:hover .company { color: #0047AB; transform: translateX(10px); }

                .year { font-weight: 900; color: #444; font-size: 1.2rem; letter-spacing: 2px; transition: 0.3s; display: inline-block; }
                .company { font-size: 2.2rem; font-weight: 900; color: #fff; margin-bottom: 10px; letter-spacing: -1px; transition: 0.4s; }
                .role { font-weight: 700; color: #0047AB; margin-bottom: 30px; font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; }
                .points { list-style: none; padding: 0; }
                .points li { color: #888; font-size: 1.05rem; line-height: 1.8; margin-bottom: 18px; position: relative; padding-left: 30px; transition: 0.3s; }
                .points li:hover { color: #ccc; }
                .points li::before { content: ""; position: absolute; left: 0; top: 12px; width: 12px; height: 2px; background: #0047AB; transition: 0.3s; }
                .points li:hover::before { width: 20px; }

                @media (max-width: 900px) {
                    .career-timeline::before { left: 30px; transform: none; }
                    .career-item { grid-template-columns: 1fr; padding-left: 80px; text-align: left; }
                    .career-item::after { left: 30px; transform: translateX(-50%) rotate(45deg); }
                    .year-side { text-align: left; padding-right: 0; margin-bottom: 20px; }
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
                    background-color: rgba(20, 20, 20, 0.4);
                    backdrop-filter: blur(20px);
                    padding: 60px;
                    border-radius: 35px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    width: 100%;
                    max-width: 700px;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
                    transition: 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .form-section:hover { border-color: rgba(0, 71, 171, 0.4); transform: translateY(-10px); box-shadow: 0 40px 80px rgba(0, 71, 171, 0.15); }
                .form-group { margin-bottom: 35px; }
                label { display: block; margin-bottom: 15px; color: #0047AB; font-size: 0.85rem; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; }
                input, textarea {
                    width: 100%; padding: 20px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 18px; color: #fff; font-family: inherit; font-size: 1rem;
                    transition: all 0.3s;
                }
                input:focus, textarea:focus { outline: none; border-color: #0047AB; background: rgba(0, 0, 0, 0.5); box-shadow: 0 0 20px rgba(0, 71, 171, 0.2); }
                .btn-submit {
                    width: 100%; padding: 22px; background: #0047AB; color: white; border: none; border-radius: 18px; font-weight: 900; cursor: pointer; transition: 0.4s;
                    font-size: 1.1rem; text-transform: uppercase; letter-spacing: 3px;
                }
                .btn-submit:hover { background: #3373C4; transform: scale(1.02); box-shadow: 0 15px 30px rgba(0, 71, 171, 0.4); }
            </style>
            <div class="inquiry-container">
                <div class="form-section">
                    <form action="https://formspree.io/f/xjgjpznl" method="POST">
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea name="message" rows="6" placeholder="How can we collaborate?" required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        `;
    }
}

customElements.define('resume-bio', ResumeBio);
customElements.define('resume-career', ResumeCareer);
customElements.define('resume-inquiry', ResumeInquiry);

/**
 * Premium Interactivity Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Bar
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";
    });

    // 2. Mouse Tracking Glow
    const bgGlow = document.getElementById('bg-glow');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        if (bgGlow) bgGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 71, 171, 0.12) 0%, transparent 65%)`;
    });

    // 3. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
