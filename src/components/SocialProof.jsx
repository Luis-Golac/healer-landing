import Reveal from './Reveal'

import logoUtec from '../assets/logo-utec.png'
import logoUtecVentures from '../assets/logo-utec-ventures.png'
import logoGoogle from '../assets/logo-google.png'
import logoClevelandClinic from '../assets/logo-cleveland-clinic.png'
import logoProinnovate from '../assets/logo-proinnovate.png'

const PARTNERS = [
  {
    name: 'UTEC',
    logo: logoUtec,
    className: 'h-[150px] w-auto',
  },
  {
    name: 'UTEC Ventures',
    logo: logoUtecVentures,
    className: 'h-11 w-auto',
  },
  {
    name: 'Google',
    logo: logoGoogle,
    className: 'h-11 w-auto',
  },
  {
    name: 'Cleveland Clinic',
    logo: logoClevelandClinic,
    className: 'h-12 w-auto',
  },
  {
    name: 'ProInnóvate',
    logo: logoProinnovate,
    className: 'h-[80px] w-auto',
  },
]

export default function SocialProof() {
  return (
    <section id="respaldo" className="scroll-mt-24 bg-bg-light py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Acompañado y reconocido por
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-10 lg:flex-nowrap xl:gap-x-14">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                title={`Logo ${partner.name}`}
                className="flex h-24 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className={`${partner.className} object-contain`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
