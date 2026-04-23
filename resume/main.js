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
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(45deg, #111, #0047AB);
                    border-radius: 20px;
                    box-shadow: 20px 20px 60px #080808, -20px -20px 60px #101010;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 5rem;
                    color: rgba(255, 255, 255, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                .profile-img-placeholder::after {
                    content: "BIO";
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    font-weight: 900;
                    letter-spacing: 5px;
                }
                .bio-text {
                    max-width: 600px;
                }
                .greeting {
                    color: #0047AB;
                    font-weight: 600;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                }
                h1 {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    margin-bottom: 20px;
                    font-weight: 700;
                    color: #f0f0f0;
                }
                .role {
                    font-size: 1.2rem;
                    color: #a0a0a0;
                    margin-bottom: 30px;
                    font-weight: 300;
                }
                .description {
                    font-size: 1.1rem;
                    color: #d0d0d0;
                    margin-bottom: 40px;
                }
                .cta-group {
                    display: flex;
                    gap: 20px;
                }
                .btn {
                    padding: 15px 35px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.3s ease;
                    text-decoration: none;
                    font-size: 1rem;
                }
                .btn-primary {
                    background-color: #0047AB;
                    color: white;
                    border: none;
                }
                .btn-primary:hover {
                    background-color: #3373C4;
                    transform: translateY(-5px);
                }
                .btn-outline {
                    background: transparent;
                    color: #f0f0f0;
                    border: 2px solid #333;
                }
                .btn-outline:hover {
                    border-color: #0047AB;
                    color: #0047AB;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 968px) {
                    .bio-content {
                        flex-direction: column;
                        text-align: center;
                        gap: 40px;
                    }
                    h1 {
                        font-size: 3rem;
                    }
                    .cta-group {
                        justify-content: center;
                    }
                }
            </style>
            <div class="bio-content">
                <div class="profile-img-placeholder">
                    <i class="fas fa-user"></i>
                </div>
                <div class="bio-text">
                    <p class="greeting">안녕하세요,</p>
                    <h1>Front-end<br>Developer</h1>
                    <p class="role">Creative Problem Solver & User Experience Enthusiast</p>
                    <p class="description">
                        코발트 블루처럼 명확하고 깊이 있는 코드를 지향합니다. 
                        사용자 중심의 가치를 실현하기 위해 끊임없이 도전하고 배우는 개발자입니다.
                    </p>
                    <div class="cta-group">
                        <a href="#career" class="btn btn-primary">경력 보기</a>
                        <a href="#inquiry" class="btn btn-outline">문의하기</a>
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
                year: "2022 - Present",
                company: "Blue Tech Solution",
                role: "Senior Frontend Developer",
                desc: "React와 Web Components를 활용한 대규모 기업형 대시보드 설계 및 구현."
            },
            {
                year: "2020 - 2022",
                company: "Core Design Studio",
                role: "Web Publisher / Junior Dev",
                desc: "고성능 UI 인터랙션 개발 및 웹 표준 준수 프로젝트 리딩."
            },
            {
                year: "2018 - 2020",
                company: "Creative Lab",
                role: "UI/UX Designer",
                desc: "사용자 여정 지도 분석 및 프로토타이핑을 통한 서비스 개선."
            }
        ];

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .career-timeline {
                    padding: 20px;
                }
                .career-item {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    gap: 40px;
                    padding-bottom: 60px;
                    position: relative;
                }
                .career-item:not(:last-child)::after {
                    content: "";
                    position: absolute;
                    left: 200px;
                    top: 10px;
                    bottom: 0;
                    width: 2px;
                    background-color: #333;
                    margin-left: -21px;
                }
                .year {
                    font-weight: 700;
                    color: #0047AB;
                    font-size: 1.1rem;
                    text-align: right;
                }
                .company {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #f0f0f0;
                    margin-bottom: 5px;
                }
                .role {
                    font-weight: 500;
                    color: #a0a0a0;
                    margin-bottom: 15px;
                    font-size: 1rem;
                }
                .desc {
                    color: #d0d0d0;
                    font-size: 0.95rem;
                }
                @media (max-width: 768px) {
                    .career-item {
                        grid-template-columns: 1fr;
                        gap: 10px;
                        padding-left: 20px;
                        border-left: 2px solid #0047AB;
                    }
                    .career-item:not(:last-child)::after {
                        display: none;
                    }
                    .year {
                        text-align: left;
                    }
                }
            </style>
            <div class="career-timeline">
                ${experiences.map(exp => `
                    <div class="career-item">
                        <div class="year">${exp.year}</div>
                        <div class="info">
                            <div class="company">${exp.company}</div>
                            <div class="role">${exp.role}</div>
                            <div class="desc">${exp.desc}</div>
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
                :host {
                    display: block;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .inquiry-card {
                    background-color: #1a1a1a;
                    padding: 40px;
                    border-radius: 12px;
                    border: 1px solid #333;
                }
                .form-group {
                    margin-bottom: 25px;
                }
                label {
                    display: block;
                    margin-bottom: 10px;
                    color: #a0a0a0;
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                input, textarea {
                    width: 100%;
                    padding: 15px;
                    background-color: #0c0c0c;
                    border: 1px solid #333;
                    border-radius: 6px;
                    color: #f0f0f0;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: 0.3s ease;
                }
                input:focus, textarea:focus {
                    outline: none;
                    border-color: #0047AB;
                    box-shadow: 0 0 10px rgba(0, 71, 171, 0.2);
                }
                .btn-submit {
                    width: 100%;
                    padding: 15px;
                    background-color: #0047AB;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.3s ease;
                }
                .btn-submit:hover {
                    background-color: #3373C4;
                    transform: translateY(-2px);
                }
                .contact-info {
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                    gap: 40px;
                    color: #a0a0a0;
                }
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .contact-item i {
                    color: #0047AB;
                }
            </style>
            <div class="inquiry-card">
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">NAME</label>
                        <input type="text" id="name" placeholder="성함을 입력해주세요" required>
                    </div>
                    <div class="form-group">
                        <label for="email">EMAIL</label>
                        <input type="email" id="email" placeholder="example@email.com" required>
                    </div>
                    <div class="form-group">
                        <label for="message">MESSAGE</label>
                        <textarea id="message" rows="5" placeholder="프로젝트 제안이나 문의사항을 입력해주세요" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">메시지 보내기</button>
                </form>

                <div class="contact-info">
                    <div class="contact-item">
                        <span>hello@modernresume.com</span>
                    </div>
                    <div class="contact-item">
                        <span>+82 10 1234 5678</span>
                    </div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('#contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('메시지가 성공적으로 전송되었습니다! (Mock Action)');
            e.target.reset();
        });
    }
}

// Register Custom Elements
customElements.define('resume-bio', ResumeBio);
customElements.define('resume-career', ResumeCareer);
customElements.define('resume-inquiry', ResumeInquiry);
