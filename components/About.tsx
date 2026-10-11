import React from 'react';

const principles = [
  { title: 'Audit first', text: 'I do not automate a broken process. I fix the process, then automate it.' },
  { title: 'Built to fail safely', text: 'Every workflow logs what it did and tells someone when it cannot finish.' },
  { title: 'Measured in outcomes', text: 'Hours saved, leads answered, bookings kept. Not how clever the build is.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-32 bg-surface border-y border-line">
      <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <img
            src="/images/fred.webp"
            alt="Fred"
            width={480}
            height={480}
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border border-line mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">Hi, I'm Fred.</h2>
        </div>

        <div className="lg:col-span-8">
          <div className="text-lg text-muted leading-relaxed space-y-5 max-w-[60ch] mb-12">
            <p>
              I'm an automation specialist based in the Philippines. I started by fixing the repetitive work that was eating a small team's week, and found I cared less about saving time than about building systems that keep working when nobody is watching.
            </p>
            <p>
              Today I run the automation behind a marketing agency with more than 40 client accounts: lead capture, booking, calendar sync, AI chat and monitoring. I also take on projects for other service businesses and agencies that need the same thing, done once and done right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-line pt-10">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
