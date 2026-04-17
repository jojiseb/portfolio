import React from 'react';

const jobs = [
  // {
  //   company: 'Company Name',
  //   role: 'Software Engineer',
  //   period: 'Jan 2022 – Present',
  //   location: 'Remote',
  //   note: 'A line or two about what you worked on and what you took away from it.',
  // },
];

function Work() {
  return (
    <section id="work">
      <p className="section-label">Work</p>
      <p className="work-intro">
        Places I've spent time, problems I've worked on, things I've shipped.
      </p>

      {jobs.length === 0 ? (
        <div className="work-empty">
          <p className="work-empty-title">Being put together.</p>
          <p className="work-empty-sub">Full history coming soon.</p>
        </div>
      ) : (
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
                {job.note && <p className="work-note">{job.note}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Work;
