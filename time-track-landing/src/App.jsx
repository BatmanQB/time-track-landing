import { useState } from 'react';

const featureCards = [
  { title: ['One-click', 'time tracking'], text: 'Start, pause, and switch tasks without interrupting your flow.', image: 'feature-one-click.svg', tone: 'white', titleTone: 'lime' },
  { title: ['Projects', 'with context'], text: 'Keep client work, estimates, and time entries together.', image: 'feature-projects.svg', tone: 'lime', titleTone: 'white' },
  { title: ['Reports', 'people use'], text: 'Turn tracked time into crisp weekly reports and exports.', image: 'feature-reports.svg', tone: 'dark', titleTone: 'white' },
  { title: ['Capacity', 'at a glance'], text: 'Spot overload early and plan work with confidence.', image: 'feature-capacity.svg', tone: 'white', titleTone: 'lime' },
  { title: ['Budget', 'signals'], text: 'See spend before a project slips.', image: 'feature-budget.svg', tone: 'lime', titleTone: 'white' },
  { title: ['Works with', 'your stack'], text: 'Connect tools your team already uses.', image: 'feature-stack.svg', tone: 'dark', titleTone: 'lime' },
];
const roles = [['01', 'Agencies', 'Protect project margins and create clean client reports.'], ['02', 'Product teams', 'Balance focus time, planning, and delivery.'], ['03', 'Freelancers', 'Track billable hours and send invoices with confidence.']];
const plans = [
  { name: 'Free', price: '$0', description: 'For personal productivity and the first few projects.', items: ['Unlimited time tracking', 'Personal reports', 'Up to 3 projects'], action: 'Choose plan' },
  { name: 'Pro', price: '$8', description: 'For teams that need reporting, budgets, and client-ready views.', items: ['Everything in Free', 'Team reports', 'Budgets & billable rates'], action: 'Start free trial', featured: true },
  { name: 'Business', price: '$16', description: 'For teams planning capacity across complex work.', items: ['Everything in Pro', 'Capacity planning', 'Priority support'], action: 'Choose plan' },
];

const assetUrl = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

function Logo({ inverse = false }) { return <a className={`logo ${inverse ? 'logo--inverse' : ''}`} href="#top" aria-label="TrackOn home"><img src={assetUrl(inverse ? 'logo-footer.svg' : 'logo-header.svg')} alt="TrackOn" /></a>; }
function Button({ children, variant = 'primary', className = '', ...props }) { return <a className={`button button--${variant} ${className}`} href="#get-started" {...props}>{children}</a>; }
function Label({ children }) { return <span className="eyebrow">{children}</span>; }
function Heading({ label, title, description }) { return <div className="section-heading"><Label>{label}</Label><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>; }
function FeatureCard({ title, text, image, tone, titleTone }) { return <article className={`feature-card feature-card--${tone}`}><div><h3 className={`feature-card__title feature-card__title--${titleTone}`}><span>{title[0]}</span><span>{title[1]}</span></h3><p>{text}</p></div><img src={assetUrl(image)} alt="" /></article>; }
function PriceCard({ plan }) { return <article className={`price-card ${plan.featured ? 'price-card--featured' : ''}`}><div className="price-card__title"><h3>{plan.name}</h3>{plan.featured && <Label>MOST POPULAR</Label>}</div><div className="price">{plan.price}</div><span>per member / month</span><p>{plan.description}</p><ul>{plan.items.map(item => <li key={item}><b>✓</b>{item}</li>)}</ul><Button variant={plan.featured ? 'brand' : 'secondary'}>{plan.action}</Button></article>; }

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main id="top">
    <header className="site-header container"><Logo /><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(value => !value)}><i /><i /><i /><span className="sr-only">Open menu</span></button><nav className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} id="site-nav" aria-label="Main navigation"><a href="#features" onClick={closeMenu}>Product</a><a href="#roles" onClick={closeMenu}>Solutions</a><a href="#pricing" onClick={closeMenu}>Pricing</a><a href="#resources" onClick={closeMenu}>Resources</a><a href="#get-started" onClick={closeMenu}>Log in</a><Button variant="secondary" onClick={closeMenu}>Start for free</Button></nav></header>

    <section className="hero container"><div className="hero-copy"><h1>Know where your<br />workday goes.</h1><p>Track time, projects, and team capacity in one calm workspace — so every hour moves your work forward.</p><div><Button>Start tracking free</Button><small>No card needed · Cancel anytime</small></div></div><img src={assetUrl('hero-time-tracking.svg')} alt="Illustration of a time tracker" /></section>
    <section className="stats" aria-label="TrackOn results"><div className="stats__inner container">{[['10,000+', 'teams keep their hours visible'], ['5 hours', 'saved every week on admin'], ['1.2M', 'hours tracked this month'], ['< 1 min', 'average time to get started']].map(([value, text]) => <div key={value}><strong>{value}</strong><span>{text}</span></div>)}</div></section>

    <section className="section container" id="features"><Heading label="FEATURES" title={<>Everything you need to make<br />hours make sense.</>} description="Built for fast tracking today and clearer decisions tomorrow." /><div className="feature-grid">{featureCards.map(card => <FeatureCard {...card} key={card.title[0]} />)}</div></section>
    <section className="safe-cta container"><div><h2>You always know exactly<br />what will be saved</h2><p>TrackOn doesn’t record hours silently: before saving, you see the project, task, time slot, and duration. Mistakes can be undone.</p><Button>Start tracking free</Button></div><img src={assetUrl('CTA illustration.svg')} alt="" /></section>

    <section className="section container" id="roles"><Heading label="FOR YOUR TEAM" title={<>A clearer workday,<br />whatever your role.</>} /><div className="role-grid">{roles.map(([number, title, text], index) => <article className={`role-card role-card--${index}`} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#get-started"><span>Learn more</span><b>→</b></a></article>)}</div></section>
    <section className="customer-story"><div className="container customer-story__inner"><Label>CUSTOMER STORY</Label><div><blockquote>“We stopped guessing about project health.<br />Now we can see it before the weekly stand-up.”</blockquote><div className="story-stats"><p><strong>18%</strong><span>less unbilled time</span></p><p><strong>2×</strong><span>faster weekly reviews</span></p></div></div><p>— Jamie Cole, Operations Director at Northstar</p></div></section>

    <section className="section container" id="pricing"><Heading label="PRICING" title={<>Pick a plan that<br />fits your pace.</>} description="Start free. Upgrade only when the work asks for more." /><div className="pricing-grid">{plans.map(plan => <PriceCard plan={plan} key={plan.name} />)}</div></section>
    <section className="section container"><Heading label="TESTIMONIALS" title={<>Loved by teams who value<br />both focus and visibility.</>} /><article className="testimonial"><blockquote>“TrackOn gives our team a shared view of time without making work feel monitored. It has made planning kinder and much more accurate.”</blockquote><div className="person"><span>MC</span><p><strong>Mara Chen</strong><br />Head of Product</p></div></article></section>

    <section className="signup-section" id="get-started"><img src={assetUrl('start_Illustration.svg')} alt="" /><div className="container signup-section__inner"><div><Heading label="READY WHEN YOU ARE" title={<>Make time visible.<br />Make work better.</>} description="Create a free workspace in under a minute." /></div><form className="signup-form" onSubmit={event => event.preventDefault()}><h3>Start with your work email</h3><div className="signup-form__fields"><label>Name<input placeholder="Your name" /></label><label>Work email<input type="email" placeholder="you@company.com" /></label></div><div className="signup-form__action"><button type="submit">Start tracking free</button><small>No card needed · Cancel anytime</small></div></form></div></section>
    <footer className="footer" id="resources"><div className="container footer-inner"><div className="footer-top"><div><Logo inverse /><p>Time tracking for teams that want a clearer workday.</p></div><div className="footer-links"><div><strong>Product</strong><a href="#top">Overview</a><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#resources">Integrations</a></div><div><strong>Resources</strong><a href="#resources">Guides</a><a href="#resources">Help center</a><a href="#resources">Time tracking tips</a><a href="#resources">Contact</a></div><div><strong>Company</strong><a href="#resources">About</a><a href="#resources">Careers</a><a href="#resources">Privacy</a><a href="#resources">Terms</a></div></div></div><div className="footer-bottom"><span>© 2026 TrackOn. Built for better workdays.</span><span>LinkedIn&nbsp;&nbsp; X&nbsp;&nbsp; Instagram</span></div></div></footer>
  </main>;
}
