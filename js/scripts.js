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
                'I lead tech teams.',
                'I build things for the web.',
                'From strategy to code.',
                'Full stack, full ownership.'
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
                description: 'I\'m a <span class="highlight">Project Manager &amp; Full Stack Developer</span> with over 14 years of leadership experience — from coordinating industrial teams for <span class="highlight">Leonardo S.p.A.</span>, the Italian Navy and Fincantieri, to leading customer care departments in enterprise software. I bridge business strategy and technical execution with <span class="highlight">Angular</span> and <span class="highlight">Spring Boot</span>.',
                cta: {
                    work: 'View My Work',
                    contact: 'Get In Touch'
                },
                scroll: 'Scroll'
            },
            about: {
                title: 'About Me',
                p1: 'Hello! I\'m Federico, a <span class="highlight">Project Manager &amp; Full Stack Developer</span>. My leadership journey started in 2006 and spans over 14 years: from managing a 9-person team in hospitality, to administering a hotel, to coordinating airmen at the Italian Senate\'s Honor Company in Rome, up to leading a 12-person welding department delivering the missile compartment of the Italian Navy\'s latest frigate for <span class="highlight">Leonardo S.p.A.</span>, along with components for submarines and Fincantieri cruise ships.',
                p2: 'In 2023 I channelled that leadership into tech: intensive Full-Stack Developer program at EPICODE and I joined <span class="highlight">RCP-vision</span> as a developer. Today I lead their entire Customer Care department — <span class="highlight">180+ direct clients</span>, sales and marketing — while building enterprise web applications in freelance with <span class="highlight">FAM Vision</span>.',
                p3: 'Here are some technologies I\'ve been working with recently:'
            },
            experience: {
                title: 'Work Experience',
                leadership: {
                    label: 'Management &amp; Leadership',
                    years: '14+ years &middot; 2006 — Present',
                    job1: {
                        title: 'Customer Care Manager',
                        date: 'August 2025 - Present',
                        description: 'Leading the entire Customer Care department of an enterprise software house, directly managing <strong>180+ clients</strong> and coordinating sales and marketing teams. End-to-end accountability for the relationship between customers and the development team.',
                        task1: 'Direct management of 180+ enterprise clients across the software lifecycle',
                        task2: 'Coordination of the Customer Care team, plus sales and marketing departments',
                        task3: 'Decision-making authority on product feedback loops and feature prioritization',
                        task4: 'Interface between customers and development team to drive implementations'
                    },
                    job2: {
                        title: 'Welding Department Manager',
                        company: '@ Industrial Contractor — Defense, Aerospace &amp; Shipbuilding',
                        date: '2017 - 2023 &middot; 6 years',
                        description: 'Managed a <strong>12-person welding department</strong> delivering manufacturing projects for the largest Italian groups in defense, aerospace and shipbuilding. Direct liaison with the technical referents of the end clients.',
                        task1: '<strong>Leonardo S.p.A. — Italian Navy</strong>: end-to-end coordination of the missile compartment of the latest frigate in service, including the surface cannon movement system and the internal robotic missile loading/unloading mechanism',
                        task2: '<strong>Italian Navy</strong>: structural components for submarines',
                        task3: '<strong>Fincantieri</strong>: structural components for cruise ships',
                        task4: 'Additional classified projects for the aerospace sector (under confidentiality)',
                        task5: 'Planning of shifts, tasks, supply chain, materials, deadlines and commissions for a 12-person team'
                    },
                    job3: {
                        title: 'Honor Company Soldier',
                        company: '@ Italian Senate &amp; Chamber of Deputies, Rome',
                        date: '2011 - 2012',
                        description: 'Served in the Italian Air Force Honor Company at the Italian Parliament, Rome. Coordinated subordinate airmen during official institutional ceremonies in a high-visibility context.',
                        task1: 'Coordination of subordinate airmen',
                        task2: 'Ceremonial duties at the Senate and Chamber of Deputies',
                        task3: 'Operating in a high-visibility institutional context'
                    },
                    job4: {
                        title: 'Manager &amp; Internal Administrator',
                        date: '2008 - 2011 &middot; 3 years',
                        description: 'End-to-end management and internal administration of Hotel Morgan, including accounting, operations and management of the online booking software systems.',
                        task1: 'Internal accounting and administration',
                        task2: 'Hotel-wide operational oversight',
                        task3: 'Management of online booking software systems'
                    },
                    job5: {
                        title: 'Shift Manager',
                        date: '2006 - 2008 &middot; 2 years',
                        description: 'First leadership role. Coordinated a team of 9, directly managing cash operations, supplies and operational expenses.',
                        task1: 'Coordination of a 9-person team',
                        task2: 'Direct management of cash and till',
                        task3: 'Supplies procurement and expense control'
                    }
                },
                tech: {
                    label: 'Tech Experience',
                    years: '2023 — Present',
                    job1: {
                        title: 'Customer Care Support',
                        date: 'December 2024 - August 2025',
                        description: 'Technical support role leveraging the deep knowledge of the enterprise software I had previously developed as Full Stack Developer.',
                        task1: 'Technical support for the enterprise software users',
                        task2: 'Troubleshooting and root-cause analysis of customer issues',
                        task3: 'Writing documentation and user guides',
                        task4: 'Collecting structured feedback for product improvement'
                    },
                    job2: {
                        title: 'Full Stack Developer',
                        date: 'December 2023 - December 2024',
                        description: 'Full Stack Developer at RCP-vision, a Florence-based software house. Developed enterprise software solutions with <strong>Angular</strong> and <strong>Spring Boot</strong>.',
                        task1: 'Full-stack development of enterprise web applications',
                        task2: 'Angular + Spring Boot + PostgreSQL tech stack',
                        task3: 'Cross-functional team collaboration in an Agile/Scrum environment',
                        task4: 'Feature implementation and codebase maintenance'
                    },
                    job3: {
                        title: 'Full-Stack Developer &amp; Team Lead',
                        date: 'August 2023 - Present',
                        description: 'Co-founding member and team lead of <strong>FAM Vision</strong>, a web agency delivering enterprise web applications, SaaS platforms and corporate websites to clients across Italy.',
                        task1: 'Technical lead of a team of 3 developers',
                        task2: 'Client-facing role: requirements gathering, scoping, delivery',
                        task3: 'Full-stack development with Angular, Spring Boot, Firebase, AWS',
                        task4: 'Project management across multiple concurrent enterprise engagements'
                    }
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
                    focus: 'PMP Certification &middot; Agile &amp; Scrum &middot; Stakeholder &amp; Budget Management',
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
                'Guido team tecnici.',
                'Costruisco cose per il web.',
                'Dalla strategia al codice.',
                'Full stack, piena ownership.'
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
                description: 'Sono un <span class="highlight">Project Manager &amp; Full Stack Developer</span> con oltre 14 anni di esperienza in ruoli di leadership — dal coordinamento di team industriali per <span class="highlight">Leonardo S.p.A.</span>, Marina Militare Italiana e Fincantieri, alla guida di reparti customer care in software house enterprise. Unisco strategia di business ed esecuzione tecnica con <span class="highlight">Angular</span> e <span class="highlight">Spring Boot</span>.',
                cta: {
                    work: 'Vedi i Miei Lavori',
                    contact: 'Contattami'
                },
                scroll: 'Scorri'
            },
            about: {
                title: 'Chi Sono',
                p1: 'Ciao! Sono Federico, <span class="highlight">Project Manager &amp; Full Stack Developer</span>. Il mio percorso in ruoli di leadership parte dal 2006 e dura da oltre 14 anni: dalla gestione di un team di 9 persone nella ristorazione, all\'amministrazione di un hotel, al coordinamento degli avieri nella Compagnia d\'Onore al Senato della Repubblica a Roma, fino alla guida di un reparto saldatura di 12 dipendenti che ha realizzato il comparto missilistico dell\'ultima fregata della Marina Militare Italiana per <span class="highlight">Leonardo S.p.A.</span>, insieme a componenti per sottomarini e per le navi da crociera Fincantieri.',
                p2: 'Nel 2023 ho convertito quella leadership nel mondo tech: corso Full-Stack intensivo a EPICODE e ingresso in <span class="highlight">RCP-vision</span> come sviluppatore. Oggi guido l\'intero reparto Customer Care dell\'azienda — <span class="highlight">oltre 180 clienti diretti</span>, sales e marketing — in parallelo al lavoro freelance con <span class="highlight">FAM Vision</span> su applicazioni web enterprise.',
                p3: 'Ecco alcune tecnologie con cui ho lavorato di recente:'
            },
            experience: {
                title: 'Esperienza Lavorativa',
                leadership: {
                    label: 'Management &amp; Leadership',
                    years: '14+ anni &middot; 2006 — Presente',
                    job1: {
                        title: 'Customer Care Manager',
                        date: 'Agosto 2025 - Presente',
                        description: 'Guido l\'intero reparto Customer Care di una software house enterprise, gestendo direttamente <strong>oltre 180 clienti</strong> e coordinando il reparto sales e marketing. Potere decisionale end-to-end sulla relazione tra clienti e team di sviluppo.',
                        task1: 'Gestione diretta di oltre 180 clienti enterprise lungo l\'intero ciclo di vita del software',
                        task2: 'Coordinamento del team Customer Care, oltre al reparto sales e marketing',
                        task3: 'Potere decisionale su loop di feedback prodotto e priorità delle nuove feature',
                        task4: 'Interfaccia tra clienti e team di sviluppo per guidare le implementazioni'
                    },
                    job2: {
                        title: 'Caporeparto Saldatore',
                        company: '@ Appalti industriali — Difesa, Aerospazio &amp; Cantieristica',
                        date: '2017 - 2023 &middot; 6 anni',
                        description: 'Gestione diretta di un <strong>reparto saldatura di 12 dipendenti</strong>, con commesse per i principali gruppi italiani dei settori difesa, aerospazio e cantieristica. Relazione diretta con i referenti tecnici dei clienti finali.',
                        task1: '<strong>Leonardo S.p.A. — Marina Militare Italiana</strong>: coordinamento end-to-end del comparto missilistico dell\'ultima fregata in dotazione, incluso il sistema di movimento del cannone in superficie e il meccanismo robotizzato interno di caricamento/scaricamento missili',
                        task2: '<strong>Marina Militare Italiana</strong>: componenti strutturali per sottomarini',
                        task3: '<strong>Fincantieri</strong>: componenti strutturali per navi da crociera',
                        task4: 'Ulteriori progetti classificati per il comparto aerospaziale (coperti da vincoli di riservatezza)',
                        task5: 'Pianificazione turni, mansioni, supply chain, materiali, scadenze e commesse per il team di 12 dipendenti'
                    },
                    job3: {
                        title: 'Militare in Compagnia d\'Onore',
                        company: '@ Senato della Repubblica &amp; Camera dei Deputati, Roma',
                        date: '2011 - 2012',
                        description: 'Servizio nella Compagnia d\'Onore dell\'Aeronautica Militare presso il Parlamento Italiano a Roma. Coordinamento degli avieri sottoposti durante le cerimonie istituzionali ufficiali, in un contesto ad alta visibilità.',
                        task1: 'Coordinamento degli avieri sottoposti',
                        task2: 'Servizio cerimoniale al Senato e alla Camera dei Deputati',
                        task3: 'Operatività in contesto istituzionale ad alta visibilità'
                    },
                    job4: {
                        title: 'Gestore &amp; Amministratore Interno',
                        date: '2008 - 2011 &middot; 3 anni',
                        description: 'Gestione end-to-end e amministrazione interna dell\'Hotel Morgan, inclusa contabilità, operazioni e gestione dei sistemi software di registrazione online.',
                        task1: 'Contabilità e amministrazione interna',
                        task2: 'Supervisione operativa dell\'intera struttura alberghiera',
                        task3: 'Gestione dei sistemi software di registrazione online'
                    },
                    job5: {
                        title: 'Responsabile Turno',
                        date: '2006 - 2008 &middot; 2 anni',
                        description: 'Primo ruolo di leadership. Coordinamento di un team di 9 persone, gestione diretta di cassa, approvvigionamenti e spese operative.',
                        task1: 'Coordinamento di un team di 9 persone',
                        task2: 'Gestione diretta di cassa e incassi',
                        task3: 'Approvvigionamenti e controllo spese'
                    }
                },
                tech: {
                    label: 'Esperienza Tech',
                    years: '2023 — Presente',
                    job1: {
                        title: 'Customer Care Support',
                        date: 'Dicembre 2024 - Agosto 2025',
                        description: 'Ruolo di supporto tecnico che sfrutta la profonda conoscenza del software enterprise che avevo precedentemente sviluppato come Full Stack Developer.',
                        task1: 'Supporto tecnico agli utenti del software enterprise',
                        task2: 'Troubleshooting e analisi delle cause radice delle issue dei clienti',
                        task3: 'Redazione di documentazione e guide utente',
                        task4: 'Raccolta strutturata di feedback per il miglioramento del prodotto'
                    },
                    job2: {
                        title: 'Full Stack Developer',
                        date: 'Dicembre 2023 - Dicembre 2024',
                        description: 'Full Stack Developer in RCP-vision, software house con sede a Firenze. Sviluppo di soluzioni software enterprise con <strong>Angular</strong> e <strong>Spring Boot</strong>.',
                        task1: 'Sviluppo full-stack di applicazioni web enterprise',
                        task2: 'Stack tecnologico Angular + Spring Boot + PostgreSQL',
                        task3: 'Collaborazione cross-funzionale in ambiente Agile/Scrum',
                        task4: 'Implementazione di feature e manutenzione del codebase'
                    },
                    job3: {
                        title: 'Full-Stack Developer &amp; Team Lead',
                        date: 'Agosto 2023 - Presente',
                        description: 'Membro co-fondatore e team lead di <strong>FAM Vision</strong>, web agency che consegna applicazioni web enterprise, piattaforme SaaS e siti corporate a clienti in tutta Italia.',
                        task1: 'Lead tecnico di un team di 3 sviluppatori',
                        task2: 'Ruolo client-facing: raccolta requisiti, scoping e delivery',
                        task3: 'Sviluppo full-stack con Angular, Spring Boot, Firebase, AWS',
                        task4: 'Project management su più commesse enterprise in parallelo'
                    }
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
                    focus: 'Certificazione PMP &middot; Agile &amp; Scrum &middot; Gestione Stakeholder &amp; Budget',
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
