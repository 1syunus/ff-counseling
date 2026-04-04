// NOTE: Resend integration is scaffolded but not active.
import { Resend } from 'resend'

const NEEDS_LABELS: Record<string, string> = {
  story_dev:  'Story development',
  industry:   'Industry navigation',
  pitch:      'Pitch preparation',
  transmedia: 'Transmedia strategy',
  legal:      'Legal & IP counsel',
  wellbeing:  'Creator wellbeing',
}

const TIER_LABELS: Record<string, string> = {
  foundation: 'Tier I — Foundation ($350 – $600, one-time)',
  guidance:   'Tier II — Guidance ($1,200 – $1,800 / month)',
  incubation: 'Tier III — Incubation ($2,500 – $4,000 / month)',
  unsure:     'Not sure yet — would like guidance',
}

function isResendConfigured(): boolean {
  const key = process.env.RESEND_API_KEY
  return typeof key === 'string' && key.length > 0 && key !== 'placeholder'
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      first_name,
      last_name,
      email,
      phone,
      tier,
      medium,
      needs,
      project,
      referral,
    } = body

    if (!first_name || !last_name || !email || !tier || !project) {
      return Response.json(
        { error: 'Please complete all required fields.' },
        { status: 400 }
      )
    }

    // Graceful fallback while domain is pending
    if (!isResendConfigured()) {
      console.warn(
        '[contact] Resend not configured — inquiry received but not delivered.',
        { first_name, last_name, email, tier }
      )
      return Response.json(
        {
          error:
            'Our inquiry system is not yet active. Please email us directly while we finish setup.',
        },
        { status: 503 }
      )
    }

    // Lazy instantiation — only runs at request time, never at build time
    const resend = new Resend(process.env.RESEND_API_KEY)

    const needsList = Array.isArray(needs) && needs.length
      ? needs.map((n: string) => NEEDS_LABELS[n] ?? n).join(', ')
      : 'None selected'

    await resend.emails.send({
      from:    process.env.CONTACT_FROM as string,
      to:      process.env.CONTACT_TO   as string,
      replyTo: email,
      subject: `New Inquiry — ${TIER_LABELS[tier] ?? tier} — ${first_name} ${last_name}`,
      html: `
        <div style="font-family:sans-serif;max-width:620px;color:#1a1208;">

          <div style="background:#0b3d38;padding:2rem 2.4rem;margin-bottom:0;">
            <h1 style="font-family:Georgia,serif;font-weight:400;font-size:1.5rem;
                       color:#e8b86d;margin:0;">
              New Creative Counseling Inquiry
            </h1>
          </div>

          <div style="border:1px solid #e4d9c8;border-top:none;padding:2rem 2.4rem;">

            <table style="width:100%;border-collapse:collapse;margin-bottom:1.6rem;">
              <tr>
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           width:160px;vertical-align:top;">Name</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  ${first_name} ${last_name}
                </td>
              </tr>
              <tr style="border-top:1px solid #f0e8d8;">
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           vertical-align:top;">Email</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  <a href="mailto:${email}" style="color:#0b3d38;">${email}</a>
                </td>
              </tr>
              <tr style="border-top:1px solid #f0e8d8;">
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           vertical-align:top;">Phone</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  ${phone || '—'}
                </td>
              </tr>
              <tr style="border-top:1px solid #f0e8d8;">
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           vertical-align:top;">Tier Interest</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  ${TIER_LABELS[tier] ?? tier}
                </td>
              </tr>
              <tr style="border-top:1px solid #f0e8d8;">
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           vertical-align:top;">Medium</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  ${medium || '—'}
                </td>
              </tr>
              <tr style="border-top:1px solid #f0e8d8;">
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           vertical-align:top;">Support Needed</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  ${needsList}
                </td>
              </tr>
              <tr style="border-top:1px solid #f0e8d8;">
                <td style="padding:10px 0;color:#7a6245;font-size:.85rem;
                           vertical-align:top;">Referral</td>
                <td style="padding:10px 0;font-size:.9rem;">
                  ${referral || '—'}
                </td>
              </tr>
            </table>

            <div style="background:#faf6ee;border-left:3px solid #c9973b;
                        padding:1.2rem 1.4rem;margin-bottom:1rem;">
              <div style="font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;
                          color:#8a640e;margin-bottom:.6rem;">Project / Situation</div>
              <p style="font-size:.9rem;line-height:1.8;margin:0;color:#1a1208;">
                ${project.replace(/\n/g, '<br>')}
              </p>
            </div>

            <p style="font-size:.75rem;color:#7a6245;margin-top:1.4rem;">
              Reply directly to this email to respond to ${first_name}.
            </p>

          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return Response.json(
      { error: 'Failed to send. Please try again.' },
      { status: 500 }
    )
  }
}