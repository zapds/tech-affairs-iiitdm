'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './open-house.css';

/* ═══════ PALETTE ═══════ */
type ThemeName = 'dark' | 'light';

const C = {
    bg: 'var(--oh-bg)',
    surface: 'var(--oh-surface)',
    sectionBg: 'var(--oh-section-bg)',
    border: 'var(--oh-border)',
    text: 'var(--oh-text)',
    muted: 'var(--oh-muted)',
    dim: 'var(--oh-dim)',
    bgGradient: 'var(--oh-bg-gradient)',
    navBg: 'var(--oh-nav-bg)',
    gridLine: 'var(--oh-grid-line)',
    socialBg: 'var(--oh-social-bg)',
    orange: '#fb923c',
    pink: '#f472b6',
    violet: '#a78bfa',
    green: '#34d399',
    cyan: '#38bdf8',
    yellow: '#fbbf24',
    rose: '#fb7185',
    lime: '#a3e635',
};

const THEMES: Record<ThemeName, Record<string, string>> = {
    dark: {
        '--oh-bg': '#05051a',
        '--oh-page-bg': '#05051a',
        '--oh-surface': 'rgba(255,255,255,0.03)',
        '--oh-section-bg': 'rgba(255,255,255,0.008)',
        '--oh-border': 'rgba(255,255,255,0.07)',
        '--oh-text': '#f1f0f5',
        '--oh-muted': 'rgba(241,240,245,0.5)',
        '--oh-dim': 'rgba(241,240,245,0.28)',
        '--oh-bg-gradient': 'radial-gradient(1000px 560px at -10% -10%, rgba(251,146,60,0.12), transparent 60%), radial-gradient(960px 520px at 110% 100%, rgba(56,189,248,0.10), transparent 62%)',
        '--oh-nav-bg': 'rgba(5,5,26,0.92)',
        '--oh-grid-line': 'rgba(255,255,255,0.015)',
        '--oh-social-bg': 'rgba(255,255,255,0.04)',
        '--oh-ghost-hover-bg': 'rgba(255,255,255,0.08)',
        '--oh-ghost-hover-border': 'rgba(255,255,255,0.25)',
        '--oh-nav-link-hover': '#ffffff',
        '--oh-social-hover-bg': 'rgba(255,255,255,0.1)',
        '--oh-filter-hover-bg': 'rgba(255,255,255,0.06)',
        '--oh-filter-hover-border': 'rgba(255,255,255,0.15)',
        '--oh-why-hover-border': 'rgba(255,255,255,0.12)',
        '--oh-why-hover-bg': 'rgba(255,255,255,0.05)',
        '--oh-sched-hover-bg': 'rgba(255,255,255,0.04)',
        '--oh-card-hover-shadow': '0 24px 48px -12px rgba(0,0,0,0.4)',
        '--oh-card-hover-outline': 'rgba(255,255,255,0.08)',
    },
    light: {
        '--oh-bg': '#f6f7fb',
        '--oh-page-bg': '#f6f7fb',
        '--oh-surface': 'rgba(255,255,255,0.82)',
        '--oh-section-bg': 'rgba(15,23,42,0.03)',
        '--oh-border': 'rgba(15,23,42,0.14)',
        '--oh-text': '#0f172a',
        '--oh-muted': 'rgba(15,23,42,0.66)',
        '--oh-dim': 'rgba(15,23,42,0.46)',
        '--oh-bg-gradient': 'radial-gradient(860px 460px at -10% -10%, rgba(251,146,60,0.18), transparent 62%), radial-gradient(920px 500px at 110% 100%, rgba(56,189,248,0.14), transparent 64%)',
        '--oh-nav-bg': 'rgba(246,247,251,0.92)',
        '--oh-grid-line': 'rgba(15,23,42,0.06)',
        '--oh-social-bg': 'rgba(15,23,42,0.04)',
        '--oh-ghost-hover-bg': 'rgba(15,23,42,0.08)',
        '--oh-ghost-hover-border': 'rgba(15,23,42,0.22)',
        '--oh-nav-link-hover': '#0f172a',
        '--oh-social-hover-bg': 'rgba(15,23,42,0.09)',
        '--oh-filter-hover-bg': 'rgba(15,23,42,0.06)',
        '--oh-filter-hover-border': 'rgba(15,23,42,0.18)',
        '--oh-why-hover-border': 'rgba(15,23,42,0.16)',
        '--oh-why-hover-bg': 'rgba(15,23,42,0.05)',
        '--oh-sched-hover-bg': 'rgba(15,23,42,0.05)',
        '--oh-card-hover-shadow': '0 24px 48px -12px rgba(15,23,42,0.18)',
        '--oh-card-hover-outline': 'rgba(15,23,42,0.08)',
    },
};

/* ═══════ DATA ═══════ */
const EVENT_DATE = new Date('2026-04-05T09:00:00');

const bodies = [
    { name: 'Team Nira', desc: 'Autonomous Underwater Vehicle', logo: '/teams/nira/logo.jpg', route: '/teams/nira', cat: 'Teams' },
    { name: 'Team Shunya', desc: 'Mars Rover Systems', logo: '/teams/mars/logo.png', route: '/teams/shunya', cat: 'Teams' },
    { name: 'CS Club', desc: 'Algorithms, CP & Dev Culture', logo: '/clubs/csclub/logo.png', route: '/clubs/cs', cat: 'Clubs' },
    { name: 'E-Cell', desc: 'Startups & Entrepreneurship', logo: '/societies/Ecell/logo.png', route: '/societies/ecell', cat: 'Societies' },
    { name: 'Cybersecurity Community', desc: 'CTFs, Security & Red Teaming', logo: '/communities/Cybersecurity/logo.png', route: '/communities/cybersecurity', cat: 'Communities' },
    { name: 'Developers Club', desc: 'Full-stack, Open Source & Hackathons', logo: '/clubs/devclub/logo.jpg', route: '/clubs/dev', cat: 'Clubs' },
    { name: 'Robotics Club', desc: 'Bots, Arms & Automation', logo: '/clubs/robotics/logo.png', route: '/clubs/robotics', cat: 'Clubs' },
    { name: 'System Coding Club', desc: 'Low-level Systems & OS Hacking', logo: '/clubs/Scc/logo.png', route: '/clubs/scc', cat: 'Clubs' },
    { name: 'Team Astra', desc: 'Rocketry & Propulsion', logo: '/teams/astra/logo.png', route: '/teams/astra', cat: 'Teams' },
    { name: 'Revolt Racing', desc: 'Formula-style Electric Racing', logo: '/teams/revolt/logo.png', route: '/teams/revolt', cat: 'Teams' },
    { name: 'Team TAD', desc: 'Aero Design & Unmanned Systems', logo: '/teams/tad/logo.png', route: '/teams/tad', cat: 'Teams' },
    { name: 'SAE E-Baja', desc: 'Electric All-terrain Vehicle', logo: '/logo.png', route: '/clubs/sae-ebaja', cat: 'Teams' },
    { name: 'ASME Section', desc: 'Mechanical Engineering Society', logo: '/societies/ASMEStudentSection/logo.png', route: '/societies/asme', cat: 'Societies' },
    { name: 'IEEE Branch', desc: 'Electrical & Electronics', logo: '/societies/IEEE/logo.png', route: '/societies/ieee', cat: 'Societies' },
    { name: 'Optica Chapter', desc: 'Photonics & Optical Engineering', logo: '/societies/OpticaStudentChapter/logo.jpg', route: '/societies/optica', cat: 'Societies' },
    { name: 'Game Dev', desc: 'Unity, Unreal & Game Jams', logo: '/logo.png', route: '/communities/gamedevelopers', cat: 'Communities' },
];

const schedule = [
    { time: '09:00 AM', title: 'Doors Open', desc: 'Check-in, welcome kits & campus map', color: C.orange },
    { time: '10:00 AM', title: 'Inaugural Ceremony', desc: 'Welcome address and official kickoff', color: C.pink },
    { time: '11:00 AM', title: 'Demos Go Live', desc: 'All stalls open — robots, vehicles, code', color: C.green },
    { time: '01:00 PM', title: 'Awards Ceremony', desc: 'Best performing bodies, recognized on stage', color: C.violet },
    { time: '02:00 PM', title: 'Open Floor', desc: 'Walk around freely, talk to leads, try things', color: C.cyan },
    { time: '04:00 PM', title: 'Closing', desc: 'Wrap-up, networking, and what comes next', color: C.yellow },
];

const whyReasons = [
    { icon: '🔍', title: 'Explore Every Body', desc: 'Clubs, teams, societies, communities — all under one roof.', color: C.orange },
    { icon: '🤖', title: 'Live Demos', desc: 'Real robots, real rockets, real code — running in front of you.', color: C.green },
    { icon: '🗣️', title: 'Talk to Builders', desc: 'Ask team leads how they got in and what actually matters.', color: C.pink },
    { icon: '🧭', title: 'Find Your Fit', desc: 'Compare clubs side by side before recruitment begins.', color: C.cyan },
    { icon: '⚡', title: 'Skip the Confusion', desc: 'One day gives you clarity that months of asking around can\'t.', color: C.yellow },
    { icon: '🚀', title: 'Launch Your Journey', desc: 'Make an informed choice and start building from day one.', color: C.violet },
];

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Bodies', href: '#bodies' },
    { label: 'Why Attend', href: '#why' },
];

const filters = ['All', 'Clubs', 'Teams', 'Societies', 'Communities'];
const catColors: Record<string, string> = {
    Clubs: C.pink,
    Teams: C.green,
    Societies: C.violet,
    Communities: C.cyan,
};

const FONT = "var(--font-open-house), 'Roboto', system-ui, sans-serif";

/* ═══════ COUNTDOWN ═══════ */
function useCountdown(target: Date) {
    const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
    useEffect(() => {
        const tick = () => {
            const diff = Math.max(0, target.getTime() - Date.now());
            setT({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [target]);
    return t;
}

/* ═══════════════════════════════════════════ */
/*               MAIN COMPONENT               */
/* ═══════════════════════════════════════════ */
export default function OpenHousePage() {
    const [activeCat, setActiveCat] = useState('All');
    const [navScrolled, setNavScrolled] = useState(false);
    const [theme, setTheme] = useState<ThemeName>('light');
    const cd = useCountdown(EVENT_DATE);
    const activeTheme = THEMES[theme];
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const pad = (n: number) => String(n).padStart(2, '0');
    const filtered = activeCat === 'All' ? bodies : bodies.filter(b => b.cat === activeCat);

    useEffect(() => {
        document.documentElement.style.setProperty('--oh-page-bg', activeTheme['--oh-page-bg']);
        return () => {
            document.documentElement.style.removeProperty('--oh-page-bg');
        };
    }, [activeTheme]);

    useEffect(() => {
        const fn = () => setNavScrolled(window.scrollY > 60);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    /* Scroll-reveal */
    useEffect(() => {
        const els = document.querySelectorAll('[data-reveal]');
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    (e.target as HTMLElement).style.opacity = '1';
                    (e.target as HTMLElement).style.transform = 'translateY(0)';
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    /* Count-up */
    useEffect(() => {
        const els = document.querySelectorAll<HTMLElement>('[data-count]');
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target as HTMLElement;
                const target = parseInt(el.dataset.count || '0');
                const suffix = el.dataset.suffix || '';
                const dur = 2200;
                const t0 = performance.now();
                const step = (now: number) => {
                    const p = Math.min((now - t0) / dur, 1);
                    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
                obs.unobserve(el);
            });
        }, { threshold: 0.3 });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    /* ══════════ RENDER ══════════ */
    return (
        <div style={{
            ...activeTheme,
            background: C.bg,
            backgroundImage: C.bgGradient,
            backgroundRepeat: 'no-repeat',
            color: C.text,
            fontFamily: FONT,
            minHeight: '100vh',
            overflowX: 'hidden',
            WebkitFontSmoothing: 'antialiased',
        } as React.CSSProperties}>

            {/* ════════ NAV ════════ */}
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                padding: navScrolled ? '10px 0' : '18px 0',
                background: navScrolled ? C.navBg : 'transparent',
                backdropFilter: navScrolled ? 'blur(24px) saturate(1.4)' : 'none',
                borderBottom: navScrolled ? `1px solid ${C.border}` : '1px solid transparent',
                transition: 'all 0.35s ease',
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Image
                            src={theme === 'light' ? '/nav_logo_inv.png' : '/nav_logo.png'}
                            alt="Technical Affairs"
                            width={32}
                            height={32}
                            style={{ borderRadius: 8 }}
                        />
                        <span style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', color: C.text }}>
                            Open House{' '}
                            <span style={{ background: `linear-gradient(135deg, ${C.orange}, ${C.pink})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } as React.CSSProperties}>
                                &apos;26
                            </span>
                        </span>
                    </div>
                    <div className="oh-nav-links" style={{ display: 'flex', gap: 28 }}>
                        {navLinks.map(l => (
                            <a key={l.href} href={l.href} className="oh-nav-link"
                               onClick={e => scrollTo(e, l.href)}
                               style={{ color: C.muted, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
                                {l.label}
                            </a>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="oh-btn-ghost"
                        onClick={() => setTheme(nextTheme)}
                        aria-label={`Switch to ${nextTheme} mode`}
                        style={{
                            fontFamily: FONT,
                            background: C.surface,
                            color: C.text,
                            border: `1px solid ${C.border}`,
                            padding: '9px 18px',
                            borderRadius: 10,
                            fontSize: '0.82rem',
                            fontWeight: 650,
                            cursor: 'pointer',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </nav>

            {/* ════════ HERO ════════ */}
            <section style={{
                position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                padding: '120px 24px 80px', overflow: 'hidden',
            }}>
                {/* Grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: `linear-gradient(${C.gridLine} 1px, transparent 1px),
                                      linear-gradient(90deg, ${C.gridLine} 1px, transparent 1px)`,
                    backgroundSize: '72px 72px',
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: 840 }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: `linear-gradient(135deg, ${C.orange}18, ${C.pink}12)`,
                        border: `1px solid ${C.orange}30`,
                        borderRadius: 100, padding: '7px 18px', marginBottom: 36,
                    }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.orange, display: 'inline-block' }} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 550, color: C.orange, letterSpacing: '0.01em' }}>
                            April 5, 2026 &middot; IIITDM Kancheepuram
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="oh-hero-title" style={{
                        fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 800,
                        letterSpacing: '-0.045em', lineHeight: 1.0, margin: '0 0 6px', color: C.text,
                    }}>
                        Technical Affairs
                    </h1>
                    <h1 className="oh-hero-title" style={{
                        fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 800,
                        letterSpacing: '-0.045em', lineHeight: 1.05, margin: '0 0 28px',
                        background: `linear-gradient(135deg, ${C.orange}, ${C.pink}, ${C.violet}, ${C.cyan})`,
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    } as React.CSSProperties}>
                        Open House
                    </h1>

                    {/* Subtitle */}
                    <p className="oh-hero-subtitle" style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', lineHeight: 1.75,
                        color: C.muted, maxWidth: 580, margin: '0 auto 44px',
                    }}>
                        Discover your technical journey. 16+ bodies showcase live demonstrations,
                        real projects, running machines — all in a single day.
                    </p>

                    {/* Countdown */}
                    <div className="oh-cd-row" style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 44 }}>
                        {([
                            { v: cd.d, l: 'Days', c: C.orange },
                            { v: cd.h, l: 'Hours', c: C.pink },
                            { v: cd.m, l: 'Min', c: C.violet },
                            { v: cd.s, l: 'Sec', c: C.cyan },
                        ]).map(u => (
                            <div key={u.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                                <div style={{
                                    background: `${u.c}10`, border: `1px solid ${u.c}25`,
                                    borderRadius: 14, padding: '14px 20px', minWidth: 66,
                                    backdropFilter: 'blur(8px)',
                                }}>
                                    <span style={{
                                        fontSize: '1.7rem', fontWeight: 750, fontVariantNumeric: 'tabular-nums',
                                        color: u.c, display: 'block', textAlign: 'center',
                                    }}>{pad(u.v)}</span>
                                </div>
                                <span style={{ fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.dim }}>{u.l}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <a href="#about" onClick={e => scrollTo(e, '#about')} className="oh-btn-ghost" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'transparent', color: C.muted,
                            border: `1px solid ${C.border}`, padding: '15px 30px', borderRadius: 14, fontFamily: FONT,
                            fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
                        }}>
                            Explore
                        </a>
                    </div>
                </div>

            </section>

            {/* ════════ MARQUEE ════════ */}
            <div style={{
                overflow: 'hidden', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
                padding: '14px 0', position: 'relative',
            }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(90deg, ${C.bg}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(270deg, ${C.bg}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
                <div className="oh-marquee-track" style={{ display: 'flex', gap: 50, width: 'max-content' }}>
                    {[...bodies, ...bodies].map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                            <Image src={b.logo} alt="" width={18} height={18} style={{ borderRadius: 4, opacity: 0.45, objectFit: 'contain', width: 18, height: 18 }} />
                            <span style={{ fontSize: '0.78rem', fontWeight: 500, color: C.dim, whiteSpace: 'nowrap' }}>{b.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ════════ ABOUT ════════ */}
            <section id="about" style={{ padding: '110px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
                <div data-reveal style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 650, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.orange, marginBottom: 12 }}>
                        About the Event
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.12, color: C.text, margin: '0 0 18px' }}>
                        What is Open House?
                    </h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: C.muted, maxWidth: 680, margin: '0 0 64px' }}>
                        The Technical Affairs Open House is an orientation event that introduces freshers
                        to the institute&apos;s vibrant technical ecosystem. All clubs, teams, societies
                        and communities come together to showcase live projects, achievements, and opportunities
                        — enabling you to interact directly with team members and make informed decisions.
                    </p>
                </div>

                {/* Bento */}
                <div className="oh-bento" data-reveal style={{
                    display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14,
                    opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease 0.12s',
                }}>
                    <div style={{
                        background: `linear-gradient(145deg, ${C.orange}08, ${C.pink}06)`,
                        borderRadius: 20, padding: '40px 36px', border: `1px solid ${C.orange}18`,
                        gridRow: 'span 2',
                    }}>
                        <div style={{ width: 50, height: 50, borderRadius: 14, background: `${C.orange}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, fontSize: '1.5rem' }}>🤖</div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 750, color: C.text, margin: '0 0 12px', letterSpacing: '-0.02em' }}>Live Demonstrations</h3>
                        <p style={{ fontSize: '0.95rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>
                            An underwater vehicle in a tank. A rover on rough terrain. Code solving problems in real time.
                            No presentations, no slides — the actual machines, running live.
                        </p>
                    </div>
                    <div style={{ background: `linear-gradient(145deg, ${C.green}08, ${C.cyan}05)`, borderRadius: 20, padding: '28px 26px', border: `1px solid ${C.green}18` }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: 12 }}>🗣️</div>
                        <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: C.text, margin: '0 0 8px' }}>Talk to the Builders</h3>
                        <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.65, margin: 0 }}>
                            Team leads staff every stall. Ask how they started, what skills matter, how to join.
                        </p>
                    </div>
                    <div style={{ background: `linear-gradient(145deg, ${C.violet}08, ${C.pink}05)`, borderRadius: 20, padding: '28px 26px', border: `1px solid ${C.violet}18` }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: 12 }}>🧭</div>
                        <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: C.text, margin: '0 0 8px' }}>Find Your Crew</h3>
                        <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.65, margin: 0 }}>
                            Robotics, rocketry, coding, entrepreneurship, cybersecurity — something fits you.
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════ STATS ════════ */}
            <section style={{ padding: '56px 24px', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
                <div data-reveal className="oh-stats-row" style={{
                    maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
                    opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease',
                }}>
                    {[
                        { n: 16, s: '+', l: 'Technical Bodies', c: C.orange },
                        { n: 50, s: '+', l: 'Live Demos', c: C.green },
                        { n: 500, s: '+', l: 'Expected Visitors', c: C.pink },
                        { n: 1, s: '', l: 'Day to See It All', c: C.cyan },
                    ].map(stat => (
                        <div key={stat.l} style={{ textAlign: 'center' }}>
                            <span data-count={stat.n} data-suffix={stat.s} style={{
                                display: 'block', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800,
                                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em', color: stat.c, lineHeight: 1.1,
                            }}>0{stat.s}</span>
                            <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 550, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, marginTop: 8 }}>{stat.l}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════ SCHEDULE ════════ */}
            <section id="schedule" style={{ padding: '110px 24px', maxWidth: 1200, margin: '0 auto' }}>
                <div data-reveal style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 650, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.green, marginBottom: 12 }}>Schedule</span>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.12, color: C.text, margin: '0 0 52px' }}>
                        The Day, Start to Finish
                    </h2>
                </div>
                <div className="oh-sched-grid" data-reveal style={{
                    display: 'grid', gridTemplateColumns: 'auto auto 1fr', gap: 0, maxWidth: 680,
                    opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease 0.1s',
                }}>
                    {schedule.map((s, i) => (
                        <React.Fragment key={s.time}>
                            <div style={{ paddingRight: 22, paddingTop: 3, paddingBottom: i < schedule.length - 1 ? 44 : 0, textAlign: 'right' }}>
                                <span style={{ fontSize: '0.85rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: s.color, whiteSpace: 'nowrap' }}>{s.time}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 22 }}>
                                <div style={{ width: 13, height: 13, borderRadius: '50%', background: s.color, border: `2.5px solid ${C.bg}`, boxShadow: `0 0 0 2px ${s.color}40`, flexShrink: 0, marginTop: 4 }} />
                                {i < schedule.length - 1 && <div style={{ width: 1.5, flex: 1, background: `linear-gradient(${s.color}50, ${schedule[i + 1].color}30)`, marginTop: 6 }} />}
                            </div>
                            <div className="oh-sched-item" style={{ paddingBottom: i < schedule.length - 1 ? 44 : 0, padding: '0 8px 0 0' }}>
                                <h4 style={{ fontSize: '1.02rem', fontWeight: 720, color: C.text, margin: '0 0 4px' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.86rem', color: C.muted, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* ════════ BODIES ════════ */}
            <section id="bodies" style={{ padding: '110px 24px', borderTop: `1px solid ${C.border}`, background: C.sectionBg }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div data-reveal style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
                        <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 650, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.pink, marginBottom: 12 }}>Participating</span>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.12, color: C.text, margin: '0 0 10px' }}>
                            Technical Bodies
                        </h2>
                        <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.65, margin: '0 0 32px', maxWidth: 500 }}>
                            Every club, team, society and community — all in one place.
                        </p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
                            {filters.map(f => {
                                const active = activeCat === f;
                                const fc = f === 'All' ? C.orange : (catColors[f] || C.orange);
                                return (
                                    <button key={f}
                                        className={`oh-filter-btn${active ? ' oh-filter-active' : ''}`}
                                        onClick={() => setActiveCat(f)}
                                        style={{
                                            fontFamily: FONT, cursor: 'pointer', padding: '8px 20px', borderRadius: 100,
                                            fontSize: '0.82rem', fontWeight: 550,
                                            border: active ? `1px solid ${fc}` : `1px solid ${C.border}`,
                                            background: active ? `${fc}18` : 'transparent',
                                            color: active ? fc : C.muted,
                                        }}>{f}</button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="oh-bodies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
                        {filtered.map(b => {
                            const cc = catColors[b.cat] || C.orange;
                            const hasLinkedPage = !!b.route;
                            const cardContent = (
                                <>
                                    <div style={{
                                        width: 52, height: 52, borderRadius: 14,
                                        background: `${cc}10`, border: `1px solid ${cc}20`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    }}>
                                        <Image src={b.logo} alt={b.name} width={30} height={30} style={{ objectFit: 'contain', width: 30, height: 30 }} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: C.text, marginBottom: 3 }}>{b.name}</div>
                                        <div style={{ fontSize: '0.78rem', color: C.dim }}>{b.desc}</div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                                        <span style={{
                                            fontSize: '0.65rem', fontWeight: 650, color: cc,
                                            background: `${cc}12`, padding: '3px 10px', borderRadius: 6,
                                            letterSpacing: '0.03em',
                                        }}>{b.cat}</span>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: cc }}>
                                            {hasLinkedPage ? 'View →' : 'Coming Soon'}
                                        </span>
                                    </div>
                                </>
                            );

                            if (hasLinkedPage) {
                                return (
                                    <Link href={b.route} key={b.name}
                                        className="oh-card-hover" data-cat={b.cat}
                                        style={{
                                            textDecoration: 'none', color: 'inherit',
                                            background: C.surface, borderRadius: 18,
                                            padding: '22px 22px', border: `1px solid ${C.border}`,
                                            display: 'flex', alignItems: 'center', gap: 16,
                                        }}>
                                        {cardContent}
                                    </Link>
                                );
                            }

                            return (
                                <div key={b.name}
                                    data-cat={b.cat}
                                    style={{
                                        background: C.surface, borderRadius: 18,
                                        padding: '22px 22px', border: `1px solid ${C.border}`,
                                        display: 'flex', alignItems: 'center', gap: 16,
                                    }}>
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════ WHY ATTEND ════════ */}
            <section id="why" style={{ padding: '110px 24px', maxWidth: 1200, margin: '0 auto' }}>
                <div data-reveal style={{ textAlign: 'center', marginBottom: 56, opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 650, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.violet, marginBottom: 12 }}>Why Attend</span>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.15, color: C.text, margin: '0 0 14px' }}>
                        Your Gateway Into{' '}
                        <span style={{
                            background: `linear-gradient(135deg, ${C.orange}, ${C.pink}, ${C.violet})`,
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        } as React.CSSProperties}>Hands-on Learning</span>
                    </h2>
                    <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
                        Whether you&apos;re a fresher figuring out what clubs even do, or a pre-final year
                        looking for your next project — Open House gives you clarity in one day.
                    </p>
                </div>
                <div className="oh-why-grid" data-reveal style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
                    opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease 0.1s',
                }}>
                    {whyReasons.map((r, i) => (
                        <div key={i} className="oh-why-card" style={{
                            background: `linear-gradient(160deg, ${r.color}08, transparent)`,
                            borderRadius: 18, padding: '30px 26px',
                            border: `1px solid ${r.color}15`,
                        }}>
                            <div style={{
                                width: 46, height: 46, borderRadius: 13, background: `${r.color}14`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: 18, fontSize: '1.3rem',
                            }}>{r.icon}</div>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 720, color: C.text, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{r.title}</h3>
                            <p style={{ fontSize: '0.86rem', color: C.muted, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════ FOOTER ════════ */}
            <footer className="oh-local-footer" style={{ padding: '44px 24px 32px', borderTop: `1px solid ${C.border}`, maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: C.text, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                    Open House 2026
                </p>
                <p style={{ fontSize: '0.8rem', color: C.dim, margin: '0 0 14px' }}>
                    IIITDM Kancheepuram
                </p>
                <p style={{ fontSize: '0.72rem', color: C.dim, margin: 0 }}>
                    &copy; 2026 Open House. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
