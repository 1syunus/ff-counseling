const credentials = [
  'J.D., Rutgers School of Law — Camden',
  'B.A. Political Science, Univ. of Richmond',
  'Management Certification, The Wharton School',
  'Voting Member, Critics Choice Association',
  'Founder, Fictional Frontiers (Est. 2008)',
  'CEO, Jabal Entertainment, LLC',
  'Creator, Jinnrise (IDW Publishing)',
  'SDCC Panelist & Industry Speaker',
]

const stats = [
  { number: '600+', label: 'Industry conversations\nconducted' },
  { number: '17',   label: 'Years at the\nfrontier of media' },
  { number: '3',    label: 'Disciplines: Law,\nMedia & Creation' },
]

export default function About() {
  return (
    <section className="ab" id="about">
      <div className="ab-inner">

        <div className="reveal">
          <div className="pf-wrap">
            <div className="pf">
              <div className="pf-init">SA</div>
              <div className="pf-name">Sohaib Awan</div>
            </div>
            <div className="pf-border" />
          </div>

          <div className="creds">
            {credentials.map((cred) => (
              <div key={cred} className="cred">
                <div className="cred-d" />
                {cred}
              </div>
            ))}
          </div>
        </div>

        <div className="ac">
          <div className="sl reveal">
            <div className="sl-line" style={{ background: 'var(--gd)' }} />
            <span style={{ color: 'var(--gd)' }}>Your Counsel</span>
          </div>

          <h2 className="sh2 dk reveal" style={{ marginBottom: '1.4rem' }}>
            Sohaib Awan —<br /><em>Lawyer. Creator. Insider.</em>
          </h2>

          <p className="lead reveal">
            "He possesses the wit of a Shakespearean fool, the insight of an
            oracle, the depth of knowledge of a Yoda, and the showmanship of
            a magician."
          </p>

          <p className="reveal">
            Sohaib Awan occupies a position that is genuinely rare:{' '}
            <strong>
              a practicing attorney, Wharton-certified executive, award-circuit
              voting member, multimedia entrepreneur, and published comic book
              creator
            </strong>{' '}
            — all simultaneously, for nearly two decades.
          </p>

          <p className="reveal d1">
            Through Fictional Frontiers, launched in 2008 as a nationally
            broadcast radio program, he has conducted over{' '}
            <strong>600 conversations</strong> with the entertainment industry's
            most consequential voices — showrunners, publishers, animation
            directors, novelists, and game designers. His network includes the
            directors of <em>Bad Boys for Life</em>, the executive producers of
            Disney's <em>Ms. Marvel</em>, Avatar brand creators, and Star Wars
            sound supervisors.
          </p>

          <p className="reveal d2">
            His transmedia company, Jabal Entertainment, produced{' '}
            <em>Jinnrise</em> with IDW Publishing — a fantasy/sci-fi series
            bringing authentic Middle Eastern mythology to mainstream comics.
            He currently shepherds the <em>Mythrise</em> franchise into release.{' '}
            <strong>
              He has built IPs. He has negotiated rights. He understands the
              full arc of a storyteller's career.
            </strong>
          </p>

          <div className="ab-stats reveal">
            {stats.map((stat) => (
              <div key={stat.number}>
                <div className="sn">{stat.number}</div>
                <div className="sl2" style={{ whiteSpace: 'pre-line' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}