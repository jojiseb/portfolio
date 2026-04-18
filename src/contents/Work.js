import React from 'react';

const jobs = [
  {
    company: 'Bagmo Private Limited',
    role: 'Backend Developer',
    period: 'Mar 2022 – Present',
    location: 'India',
    bullets: [
      'Redesigned booking flow with async processing & query optimization — latency down from 1.5s to 0.1s for 1000+ active users.',
      'Rebuilt notification engine to eliminate message drops during server restarts and deployments.',
      'Built an appointment scheduling system from scratch with indefinite slot generation and role-based access controls.',
      'Implemented Jenkins CI/CD pipelines with Spring profiles — deployment time cut from 30 minutes to 2 minutes.',
      'Integrated Razorpay and PayPal for secure payment processing in the bookings flow.',
      'Engineered OTP notification service using Redis auto-expiry; established audit logging for data integrity.',
      'Resolved critical production bugs including AWS Cognito authentication failures and a year-end date formatting crisis.',
    ],
  },
];

function Work() {
  return (
    <section id="work">
      <p className="section-label">Work</p>
      <p className="work-intro">
        Places I've spent time, problems I've worked on, things I've shipped.
      </p>
      <div className="work-timeline">
        {jobs.map((job, i) => (
          <div key={i} className="work-item">
            <div className="work-meta">
              <span className="work-period">{job.period}</span>
              {job.location && <span className="work-location">{job.location}</span>}
            </div>
            <div className="work-body">
              <p className="work-company">{job.company}</p>
              <p className="work-role">{job.role}</p>
              <ul className="work-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
