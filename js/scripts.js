/**
 * Federico Morgante Portfolio - Modern Interactive Scripts
 * Features: Typing Effect, Scroll Animations, Parallax, Cursor Follower
 */

(function() {
    'use strict';

    // ==========================================
    // DOM Elements
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const cursorFollower = document.querySelector('.cursor-follower');
    const typingText = document.querySelector('.typing-text');
    const fadeElements = document.querySelectorAll('.fade-in');
    const sections = document.querySelectorAll('.section, .hero');

    // ==========================================
    // Configuration
    // ==========================================
    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    // ==========================================
    // Internationalization (i18n)
    // ==========================================
    const translations = {
        en: {
            typingPhrases: [
                'I build things for the web.',
                'I create digital experiences.',
                'I love clean code.',
                'I craft user interfaces.'
            ],
            nav: {
                about: 'About',
                experience: 'Experience',
                skills: 'Skills',
                projects: 'Projects',
                education: 'Education',
                contact: 'Contact'
            },
            hero: {
                greeting: 'Hi, my name is',
                description: 'I\'m a passionate <span class="highlight">Full Stack Developer</span> crafting engaging web experiences. My expertise spans a wide range of technologies, with a true passion for the dynamic universe of <span class="highlight">JavaScript</span>.',
                cta: {
                    work: 'View My Work',
                    contact: 'Get In Touch'
                },
                scroll: 'Scroll'
            },
            about: {
                title: 'About Me',
                p1: 'Hello! I\'m Federico, a passionate Full Stack Developer with a fervent passion for creating engaging web experiences. My adventure in the world of web development is enriched by the creative use of CSS and innovative libraries, through which I create captivating and intuitive web pages.',
                p2: 'I am a firm believer in <span class="highlight">modern design</span> and <span class="highlight">3D animation</span>. I believe that interactions are a key to a memorable user experience.',
                p3: 'Here are some technologies I\'ve been working with recently:'
            },
            experience: {
                title: 'Work Experience',
                job1: {
                    title: 'Customer Care Manager',
                    date: 'August 2025 - Present',
                    description: 'Promoted to Customer Care Manager, leading the entire customer support department for the software I previously developed as a Full Stack Developer.',
                    task1: 'Managing and coordinating the Customer Care team',
                    task2: 'Ensuring high-quality customer support and satisfaction',
                    task3: 'Developing support strategies and processes',
                    task4: 'Bridging technical knowledge with customer needs'
                },
                job2: {
                    title: 'Customer Care Support',
                    date: 'December 2024 - August 2025',
                    description: 'Transitioned to Customer Care Support role, leveraging my deep technical knowledge of the software I developed to provide expert assistance to users.',
                    task1: 'Providing technical support to software users',
                    task2: 'Troubleshooting and resolving customer issues',
                    task3: 'Creating documentation and user guides',
                    task4: 'Collecting feedback for product improvement'
                },
                job3: {
                    title: 'Full Stack Developer',
                    date: 'December 2023 - December 2024',
                    description: 'Joined RCP-vision, a software house based in Florence, as a Full Stack Developer. Worked on developing enterprise software solutions for one year.',
                    task1: 'Developing full-stack web applications',
                    task2: 'Working with Angular and Spring Boot',
                    task3: 'Collaborating with cross-functional teams',
                    task4: 'Implementing new features and maintaining codebase'
                },
                job4: {
                    title: 'Junior Full-Stack Web Developer',
                    date: 'August 2023 - Present',
                    description: 'After graduating from the Epicode Bootcamp I decided to work for myself. So I created a team made up of me and 2 other developers. We take care of creating WebApps for customers in our area.',
                    task1: 'Building responsive and performant web applications',
                    task2: 'Collaborating with clients to understand their needs',
                    task3: 'Leading a team of 3 developers',
                    task4: 'Full-stack development with Angular and Spring Boot'
                }
            },
            skills: {
                title: 'Skills & Tools',
                frontend: 'Frontend',
                backend: 'Backend',
                crm: 'CRM & Project Management',
                workflow: 'Workflow',
                workflow1: 'Mobile-First, Responsive Design',
                workflow2: 'Cross Browser Testing & Debugging',
                workflow3: 'Cross Functional Teams',
                workflow4: 'Agile Development & Scrum'
            },
            projects: {
                title: 'Featured Projects',
                p1: {
                    type: 'SaaS Platform',
                    desc: 'Enterprise SaaS platform for advanced football analytics with AI. 10 machine learning models analyzing 35,000+ historical matches with 55%+ prediction accuracy. Features gamification with levels, XP, news system with engagement, and multilingual support.',
                    role: 'Front End Developer | Team of 4'
                },
                p2: {
                    type: 'Corporate Website',
                    desc: 'Corporate multipage website for CERNET, presenting management software and ESCO services. Features GDPR-compliant privacy management with Iubenda, integrated contact forms, and mobile-first responsive design with interactive sliders.',
                    role: 'Front End Developer | Team of 3'
                },
                p3: {
                    type: 'Web Application',
                    desc: 'Complete web platform for managing Renewable Energy Communities (CER). Custom dashboards for citizens, companies, associations and entities. Stripe payment integration, interactive OpenStreetMap maps, and internal messaging system.',
                    role: 'Front End Developer | Team of 2'
                },
                p4: {
                    type: 'Dashboard',
                    desc: 'Advanced administrative dashboard for CER operations and GSE practices management. Real-time analytics with Chart.js, PoLP system with granular roles (Admin, Moderator, User), and internal communication system for user management.',
                    role: 'Front End Developer | Team of 2'
                },
                p5: {
                    type: 'Corporate Website',
                    desc: 'Corporate multipage website presenting CERNET management software for Energy Communities. Features interactive OpenStreetMap integration, WhatsApp Business for direct contact, and complete GDPR privacy management with Iubenda.',
                    role: 'Front End Developer | Team of 2'
                },
                p6: {
                    type: 'Marketing Landing Page',
                    desc: 'SEO-optimized single-page landing for furniture installation and setup services. Smooth Motion animations for engaging UX, Trustpilot integration for verified reviews, and contact form system for lead acquisition.',
                    role: 'Front End Developer | Team of 3'
                },
                p7: {
                    type: 'Personal Project',
                    desc: 'A web app born from a personal health need to help users find valuable health information. On InfoSalute you can find information based on patient testimonies, and you can also include reviews on hospitals, departments and doctors.',
                    role: 'Full Stack Developer'
                }
            },
            education: {
                title: 'Education',
                certifications: 'Certifications',
                e1: {
                    focus: 'Computer Science',
                    date: 'September 2024 - Present'
                },
                e2: {
                    degree: 'Project Manager Course',
                    focus: 'PMP Certification Preparation',
                    date: 'In Progress'
                },
                e3: {
                    focus: 'Technology Program',
                    date: 'March 2023 - August 2023'
                },
                e4: {
                    institution: 'High School',
                    degree: 'Scientific Program',
                    focus: 'Science - Physics - Mathematics',
                    date: 'September 2002 - August 2007'
                }
            },
            contact: {
                title: "What's Next?",
                subtitle: 'Get In Touch',
                description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
                button: 'Say Hello'
            },
            footer: {
                credit: 'Designed & Built by <span class="highlight">Federico Morgante</span>'
            }
        },
        it: {
            typingPhrases: [
                'Costruisco cose per il web.',
                'Creo esperienze digitali.',
                'Amo il codice pulito.',
                'Creo interfacce utente.'
            ],
            nav: {
                about: 'Chi Sono',
                experience: 'Esperienza',
                skills: 'Competenze',
                projects: 'Progetti',
                education: 'Formazione',
                contact: 'Contatti'
            },
            hero: {
                greeting: 'Ciao, mi chiamo',
                description: 'Sono un <span class="highlight">Full Stack Developer</span> appassionato che crea esperienze web coinvolgenti. La mia esperienza spazia su un\'ampia gamma di tecnologie, con una vera passione per l\'universo dinamico di <span class="highlight">JavaScript</span>.',
                cta: {
                    work: 'Vedi i Miei Lavori',
                    contact: 'Contattami'
                },
                scroll: 'Scorri'
            },
            about: {
                title: 'Chi Sono',
                p1: 'Ciao! Sono Federico, un Full Stack Developer appassionato con una fervida passione per la creazione di esperienze web coinvolgenti. La mia avventura nel mondo dello sviluppo web si arricchisce dell\'uso creativo dei CSS e di librerie innovative, attraverso le quali creo pagine web accattivanti e intuitive.',
                p2: 'Credo fermamente nel <span class="highlight">design moderno</span> e nelle <span class="highlight">animazioni 3D</span>. Credo che le interazioni siano la chiave per un\'esperienza utente memorabile.',
                p3: 'Ecco alcune tecnologie con cui ho lavorato di recente:'
            },
            experience: {
                title: 'Esperienza Lavorativa',
                job1: {
                    title: 'Customer Care Manager',
                    date: 'Agosto 2025 - Presente',
                    description: 'Promosso a Customer Care Manager, guido l\'intero reparto di assistenza clienti per il software che ho precedentemente sviluppato come Full Stack Developer.',
                    task1: 'Gestione e coordinamento del team Customer Care',
                    task2: 'Garantire supporto clienti di alta qualità e soddisfazione',
                    task3: 'Sviluppo di strategie e processi di supporto',
                    task4: 'Collegamento tra conoscenze tecniche ed esigenze dei clienti'
                },
                job2: {
                    title: 'Customer Care Support',
                    date: 'Dicembre 2024 - Agosto 2025',
                    description: 'Passaggio al ruolo di Customer Care Support, sfruttando la mia profonda conoscenza tecnica del software che ho sviluppato per fornire assistenza esperta agli utenti.',
                    task1: 'Fornire supporto tecnico agli utenti del software',
                    task2: 'Risoluzione problemi e gestione delle richieste dei clienti',
                    task3: 'Creazione di documentazione e guide utente',
                    task4: 'Raccolta feedback per il miglioramento del prodotto'
                },
                job3: {
                    title: 'Full Stack Developer',
                    date: 'Dicembre 2023 - Dicembre 2024',
                    description: 'Entrato in RCP-vision, una software house con sede a Firenze, come Full Stack Developer. Ho lavorato allo sviluppo di soluzioni software enterprise per un anno.',
                    task1: 'Sviluppo di applicazioni web full-stack',
                    task2: 'Lavoro con Angular e Spring Boot',
                    task3: 'Collaborazione con team interfunzionali',
                    task4: 'Implementazione di nuove funzionalità e manutenzione del codice'
                },
                job4: {
                    title: 'Junior Full-Stack Web Developer',
                    date: 'Agosto 2023 - Presente',
                    description: 'Dopo il diploma al Bootcamp Epicode ho deciso di lavorare in proprio. Ho creato un team composto da me e altri 2 sviluppatori. Ci occupiamo di creare WebApp per clienti della nostra zona.',
                    task1: 'Creazione di applicazioni web responsive e performanti',
                    task2: 'Collaborazione con i clienti per comprendere le loro esigenze',
                    task3: 'Guida di un team di 3 sviluppatori',
                    task4: 'Sviluppo full-stack con Angular e Spring Boot'
                }
            },
            skills: {
                title: 'Competenze & Strumenti',
                frontend: 'Frontend',
                backend: 'Backend',
                crm: 'CRM & Project Management',
                workflow: 'Workflow',
                workflow1: 'Mobile-First, Design Responsive',
                workflow2: 'Test Cross Browser & Debugging',
                workflow3: 'Team Interfunzionali',
                workflow4: 'Sviluppo Agile & Scrum'
            },
            projects: {
                title: 'Progetti in Evidenza',
                p1: {
                    type: 'Piattaforma SaaS',
                    desc: 'Piattaforma SaaS enterprise per analisi avanzate del calcio con AI. 10 modelli di machine learning che analizzano oltre 35.000 partite storiche con accuratezza predittiva superiore al 55%. Include gamification con livelli, XP, sistema news con engagement e supporto multilingua.',
                    role: 'Front End Developer | Team di 4'
                },
                p2: {
                    type: 'Sito Corporate',
                    desc: 'Sito web corporate multipagina per CERNET, che presenta software di gestione e servizi ESCO. Include gestione privacy conforme al GDPR con Iubenda, form di contatto integrati e design responsive mobile-first con slider interattivi.',
                    role: 'Front End Developer | Team di 3'
                },
                p3: {
                    type: 'Applicazione Web',
                    desc: 'Piattaforma web completa per la gestione delle Comunità Energetiche Rinnovabili (CER). Dashboard personalizzate per cittadini, aziende, associazioni ed enti. Integrazione pagamenti Stripe, mappe OpenStreetMap interattive e sistema di messaggistica interno.',
                    role: 'Front End Developer | Team di 2'
                },
                p4: {
                    type: 'Dashboard',
                    desc: 'Dashboard amministrativa avanzata per le operazioni CER e la gestione delle pratiche GSE. Analytics in tempo reale con Chart.js, sistema PoLP con ruoli granulari (Admin, Moderatore, Utente) e sistema di comunicazione interno per la gestione utenti.',
                    role: 'Front End Developer | Team di 2'
                },
                p5: {
                    type: 'Sito Corporate',
                    desc: 'Sito web corporate multipagina che presenta il software di gestione CERNET per le Comunità Energetiche. Include integrazione interattiva con OpenStreetMap, WhatsApp Business per contatto diretto e gestione completa della privacy GDPR con Iubenda.',
                    role: 'Front End Developer | Team di 2'
                },
                p6: {
                    type: 'Landing Page Marketing',
                    desc: 'Landing page single-page ottimizzata SEO per servizi di installazione e montaggio mobili. Animazioni Motion fluide per una UX coinvolgente, integrazione Trustpilot per recensioni verificate e sistema form di contatto per acquisizione lead.',
                    role: 'Front End Developer | Team di 3'
                },
                p7: {
                    type: 'Progetto Personale',
                    desc: 'Una web app nata da un\'esigenza personale di salute per aiutare gli utenti a trovare informazioni sanitarie di valore. Su InfoSalute puoi trovare informazioni basate su testimonianze dei pazienti, e puoi anche inserire recensioni su ospedali, reparti e medici.',
                    role: 'Full Stack Developer'
                }
            },
            education: {
                title: 'Formazione',
                certifications: 'Certificazioni',
                e1: {
                    focus: 'Informatica',
                    date: 'Settembre 2024 - Presente'
                },
                e2: {
                    degree: 'Corso Project Manager',
                    focus: 'Preparazione Certificazione PMP',
                    date: 'In Corso'
                },
                e3: {
                    focus: 'Programma Tecnologico',
                    date: 'Marzo 2023 - Agosto 2023'
                },
                e4: {
                    institution: 'Liceo',
                    degree: 'Indirizzo Scientifico',
                    focus: 'Scienze - Fisica - Matematica',
                    date: 'Settembre 2002 - Agosto 2007'
                }
            },
            contact: {
                title: 'E Adesso?',
                subtitle: 'Contattami',
                description: 'Attualmente sto cercando nuove opportunità. Che tu abbia una domanda o voglia semplicemente salutare, farò del mio meglio per risponderti!',
                button: 'Saluta'
            },
            footer: {
                credit: 'Progettato e Realizzato da <span class="highlight">Federico Morgante</span>'
            }
        }
    };

    // Current language
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    // Get nested translation value
    function getTranslation(key, lang) {
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return null;
            }
        }
        return value;
    }

    // Apply translations to all elements with data-i18n attribute
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getTranslation(key, lang);
            if (translation) {
                el.innerHTML = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update language switch button
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            const flag = langSwitch.querySelector('.lang-flag');
            const code = langSwitch.querySelector('.lang-code');
            if (lang === 'en') {
                flag.textContent = '\u{1F1EC}\u{1F1E7}';
                code.textContent = 'EN';
            } else {
                flag.textContent = '\u{1F1EE}\u{1F1F9}';
                code.textContent = 'IT';
            }
        }
    }

    // Toggle language
    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'it' : 'en';
        localStorage.setItem('portfolio-lang', currentLang);
        applyTranslations(currentLang);

        // Update typing effect with new phrases
        if (typingText && window.typeWriter) {
            window.typeWriter.phrases = translations[currentLang].typingPhrases;
        }
    }

    // Get current typing phrases based on language
    function getTypingPhrases() {
        return translations[currentLang].typingPhrases;
    }

    // ==========================================
    // Typing Effect
    // ==========================================
    class TypeWriter {
        constructor(element, phrases, typeSpeed, deleteSpeed, pause) {
            this.element = element;
            this.phrases = phrases;
            this.typeSpeed = typeSpeed;
            this.deleteSpeed = deleteSpeed;
            this.pause = pause;
            this.phraseIndex = 0;
            this.charIndex = 0;
            this.isDeleting = false;
            this.init();
        }

        init() {
            this.type();
        }

        type() {
            const currentPhrase = this.phrases[this.phraseIndex];

            if (this.isDeleting) {
                this.charIndex--;
                this.element.textContent = currentPhrase.substring(0, this.charIndex);
            } else {
                this.charIndex++;
                this.element.textContent = currentPhrase.substring(0, this.charIndex);
            }

            let timeout = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

            if (!this.isDeleting && this.charIndex === currentPhrase.length) {
                timeout = this.pause;
                this.isDeleting = true;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
                timeout = 500;
            }

            setTimeout(() => this.type(), timeout);
        }
    }

    // ==========================================
    // Scroll Animations (Intersection Observer)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally stop observing after animation
                // fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // ==========================================
    // Navbar Behavior
    // ==========================================
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        // Add shadow when scrolled
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    function toggleMobileMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ==========================================
    // Active Section Highlighting
    // ==========================================
    const sectionObserverOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, sectionObserverOptions);

    // ==========================================
    // Cursor Follower
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.15;
        cursorY += dy * 0.15;

        if (cursorFollower) {
            cursorFollower.style.left = cursorX + 'px';
            cursorFollower.style.top = cursorY + 'px';
        }

        requestAnimationFrame(updateCursor);
    }

    function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function initCursorFollower() {
        if (!cursorFollower) return;

        document.addEventListener('mousemove', onMouseMove);
        updateCursor();

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .education-card');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ==========================================
    // Parallax Effect
    // ==========================================
    function initParallax() {
        const shapes = document.querySelectorAll('.shape');

        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;

                shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }

    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    closeMobileMenu();
                }
            });
        });
    }

    // ==========================================
    // Skill Cards Tilt Effect
    // ==========================================
    function initTiltEffect() {
        const cards = document.querySelectorAll('.skill-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ==========================================
    // Initialize Everything
    // ==========================================
    function init() {
        // Apply saved language or default
        applyTranslations(currentLang);

        // Language switch event listener
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('click', toggleLanguage);
        }

        // Typing Effect with language-aware phrases
        if (typingText) {
            window.typeWriter = new TypeWriter(typingText, getTypingPhrases(), typingSpeed, deletingSpeed, pauseDuration);
        }

        // Scroll Animations
        fadeElements.forEach(el => fadeObserver.observe(el));

        // Section Observer for nav highlighting
        sections.forEach(section => sectionObserver.observe(section));

        // Navbar scroll behavior
        window.addEventListener('scroll', onScroll, { passive: true });

        // Mobile menu
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Cursor follower (only on desktop)
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            initCursorFollower();
        }

        // Parallax
        initParallax();

        // Smooth scroll
        initSmoothScroll();

        // Tilt effect
        initTiltEffect();

        // Initial visibility check for hero elements
        setTimeout(() => {
            document.querySelectorAll('.hero .fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 100);

        // Console welcome message
        console.log('%c Welcome to my portfolio! ', 'background: #64ffda; color: #0a192f; font-size: 14px; font-weight: bold; padding: 10px;');
        console.log('%c Built with vanilla HTML, CSS & JavaScript ', 'color: #8892b0; font-size: 12px;');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ==========================================
    // Performance: Debounce resize handler
    // ==========================================
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate anything that depends on viewport size
            closeMobileMenu();
        }, 250);
    });

})();
