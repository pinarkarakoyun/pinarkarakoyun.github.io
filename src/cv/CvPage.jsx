import { cv } from '../data/cv.js'
import { certificates, education, experience } from '../data/experience.js'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { languages, skillGroups } from '../data/skills.js'
import { translate } from '../i18n/translate.js'

const headings = {
  summary: { tr: 'Profil', en: 'Profile' },
  experience: { tr: 'Deneyim', en: 'Experience' },
  projects: { tr: 'Projeler', en: 'Projects' },
  education: { tr: 'Eğitim', en: 'Education' },
  skills: { tr: 'Yetenekler', en: 'Skills' },
  certificates: { tr: 'Sertifikalar', en: 'Certificates' },
  languages: { tr: 'Diller', en: 'Languages' },
  reference: { tr: 'Referans', en: 'Reference' },
  certificateCount: { tr: 'sertifika', en: 'certificates' },
}

// Her kurumdan CV'de gösterilecek en fazla sertifika adı (1 sayfaya sığması için)
const MAX_CERTIFICATES_SHOWN = 3

// "https://github.com/x" → "github.com/x": basılı CV'de kısa ve okunaklı
const shortUrl = (url) => decodeURI(url).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export function CvPage({ lang, privateInfo }) {
  const t = (value) => translate(value, lang)
  const projectsById = Object.fromEntries(projects.map((project) => [project.id, project]))
  const certificateTotal = certificates.reduce((sum, group) => sum + group.items.length, 0)
  const portfolio = 'https://pinarkarakoyun.github.io'

  return (
    <main className="cv">
      <header className="cv__header">
        <h1>{profile.name}</h1>
        <p className="cv__title">{t(profile.title)}</p>
        <ul className="cv__contact">
          <li>{t(profile.location)}</li>
          {privateInfo.phone && <li>{privateInfo.phone}</li>}
          <li>
            <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
          </li>
          <li>
            <a href={portfolio}>{shortUrl(portfolio)}</a>
          </li>
          <li>
            <a href={profile.links.linkedin}>{shortUrl(profile.links.linkedin)}</a>
          </li>
          <li>
            <a href={profile.links.github}>{shortUrl(profile.links.github)}</a>
          </li>
        </ul>
      </header>

      <section>
        <h2>{t(headings.summary)}</h2>
        <p>{t(cv.summary)}</p>
      </section>

      <section>
        <h2>{t(headings.experience)}</h2>
        {experience.map((job) => (
          <article className="cv__entry" key={job.company}>
            <div className="cv__entry-head">
              <h3>
                {job.company} <span>· {t(job.role)}</span>
              </h3>
              <p className="cv__date">{t(job.period)}</p>
            </div>
            <ul>
              {t(cv.experience[job.company]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>{t(headings.projects)}</h2>
        {cv.projects.map(({ id, line }) => {
          const project = projectsById[id]
          return (
            <article className="cv__project" key={id}>
              <p>
                <strong>{project.title}</strong>
                {project.tech.length > 0 && <span className="cv__tech"> ({project.tech.slice(0, 4).join(', ')})</span>}
                {' — '}
                {t(line)}
              </p>
            </article>
          )
        })}
      </section>

      <section>
        <h2>{t(headings.education)}</h2>
        {education.map((item) => (
          <div className="cv__entry-head" key={t(item.school)}>
            <h3>
              {t(item.school)} <span>· {t(item.degree)}</span>
            </h3>
            <p className="cv__date">{t(item.period)}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{t(headings.skills)}</h2>
        <p className="cv__skills">
          {skillGroups.map((group, index) => (
            <span key={group.id}>
              <strong>{t(group.title)}:</strong> {group.items.map(t).join(', ')}
              {index < skillGroups.length - 1 && ' · '}
            </span>
          ))}
        </p>
      </section>

      <section>
        <h2>
          {t(headings.certificates)} <span className="cv__count">({certificateTotal} {t(headings.certificateCount)})</span>
        </h2>
        {/* Özet: kurum (sayı): ilk birkaç sertifika. Tam liste portfolyoda. */}
        <p className="cv__certificates">
          {certificates.map((group, index) => (
            <span key={group.issuer}>
              <strong>{group.issuer}</strong>
              {group.items.length > 1 && ` (${group.items.length})`}: {group.items.slice(0, MAX_CERTIFICATES_SHOWN).join(', ')}
              {group.items.length > MAX_CERTIFICATES_SHOWN && '…'}
              {index < certificates.length - 1 && ' · '}
            </span>
          ))}
        </p>
      </section>

      <section className="cv__last-row">
        <div>
          <h2>{t(headings.languages)}</h2>
          <p>{languages.map((language) => `${t(language.name)} (${t(language.level)})`).join(' · ')}</p>
        </div>
        {privateInfo.reference && (
          <div>
            <h2>{t(headings.reference)}</h2>
            <p>
              <strong>{privateInfo.reference.name}</strong>, {privateInfo.reference.title} · {privateInfo.reference.contact}
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
