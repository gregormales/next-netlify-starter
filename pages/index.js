import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Males AS – Total Oppussing</title>
        <meta name="description" content="Males AS – Total Oppussing. Kontakt: 936-92-560 • gregor@males.no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* HERO */}
        <Header title="Males AS" />
        <p className="description">Total Oppussing – Established 2006</p>

        <div className="hero">
          <div className="hero-badge">
            <Image
              src="/males-badge.png"
              alt="Males AS – Established 2006 • Total Oppussing • 936-92-560 • gregor@males.no"
              width={420}
              height={420}
              priority
            />
          </div>
          <div className="hero-copy">
            <h2>Alt innen oppussing og rådgiving</h2>
            <p>
              Vi tilbyr maling, sparkling, gipsarbeid, trekonstruksjoner, parkettlegging, montering av dører og vinduer,
              kjøkken og garderober – samt personlig rådgiving og prosjektstyring.
            </p>

            <div className="cta">
              <a className="btn primary" href="tel:+4793692560">Ring: 936-92-560</a>
              <a className="btn" href="mailto:gregor@males.no">gregor@males.no</a>
              <a className="btn ghost" href="#tjenester">Se tjenester</a>
            </div>
          </div>
        </div>

        {/* WIDE LOGO / BANNER */}
        <div className="card">
          <Image
            src="/males-logo-wide.jpg"
            alt="Males AS – Total Oppussing (logo)"
            width={1280}
            height={615}
            style={{ width: '100%', height: 'auto' }}
          />
          <p className="muted">Bilde er et eksempel – vi kan bytte til prosjektfoto senere.</p>
        </div>

        {/* SEKCE: USŁUGI */}
        <section id="tjenester" className="grid">
          <div className="tile">
            <h3>Håndverk og oppussing</h3>
            <p>
              Maling, sparkling, gipsplater, trekonstruksjoner, parkettlegging, montering av dører og vinduer,
              samt installasjon av kjøkken og garderober.
            </p>
          </div>

          <div className="tile">
            <h3>Spesialister og underleverandører</h3>
            <p>
              Samarbeid med et bredt nettverk av fagfolk: flisleggere, rørleggere, elektrikere,
              tak- og membranspesialister samt murere.
            </p>
          </div>

          <div className="tile">
            <h3>Rådgivning og prosjektstyring</h3>
            <p>
              Over 20 års erfaring i det norske markedet – støtte fra kjøpsfase til ferdigstilt oppussing eller videresalg.
            </p>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="contact">
          <h2>Kontakt</h2>
          <ul>
            <li><strong>Daglig leder:</strong> Gregor</li>
            <li><strong>Telefon:</strong> <a href="tel:+4793692560">936-92-560</a></li>
            <li><strong>E-post:</strong> <a href="mailto:gregor@males.no">gregor@males.no</a></li>
          </ul>
          <div className="cta">
            <a className="btn primary" href="tel:+4793692560">Zadzwoń teraz</a>
            <a className="btn" href="mailto:gregor@males.no?subject=Zapytanie%20Males%20AS">Napisz e-mail</a>
            <a className="btn ghost" href="https://wa.me/4793692560">WhatsApp</a>
          </div>
        </section>
      </main>

      <Footer />
      <style jsx>{`
        .hero { display: grid; gap: 24px; align-items: center; }
        @media (min-width: 900px) {
          .hero { grid-template-columns: 420px 1fr; }
        }
        .hero-badge { justify-self: center; }
        .cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; }
        .btn { padding: 10px 16px; border-radius: 8px; border: 1px solid #ddd; text-decoration: none; }
        .btn.primary { background: #e10600; color: #fff; border-color: #e10600; }
        .btn.ghost { background: transparent; }
        .card { margin: 24px 0; padding: 12px; border: 1px solid #eee; border-radius: 12px; background: #fff; }
        .muted { color: #666; margin: 8px 0 0; font-size: 0.9rem; }
        .grid { display: grid; gap: 16px; margin-top: 16px; }
        @media (min-width: 900px) {
          .grid { grid-template-columns: repeat(3,1fr); }
        }
        .tile { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 16px; }
        .contact { margin: 24px 0; }
        .description { margin-top: -8px; }
      `}</style>
    </div>
  )
}
