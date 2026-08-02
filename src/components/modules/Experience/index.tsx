import Link from 'next/link';
import { experience } from 'data/experience';

const Experience = () => (
  <div className="container py-16" id="experience">
    <h2 className="text-3xl font-bold mb-2 text-brand-primary dark:text-white typography">
      Experience
    </h2>
    <p className="text-brand-secondary dark:text-gray-300 mb-10 text-lg max-w-xl">
      Web3 projects I’ve contributed to or built. Still learning, still shipping.
    </p>
    <div className="space-y-8">
      {experience.map((exp) => (
        <div key={exp.id} className="border-b border-gray-200 dark:border-zinc-800 pb-8 last:border-b-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-semibold text-brand-primary dark:text-white">{exp.title}</h3>
              <p className="text-brand-secondary dark:text-gray-400">{exp.role} · {exp.period}</p>
            </div>
            <div className="flex gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-brand-secondary dark:text-gray-300 mb-4 max-w-3xl">{exp.description}</p>
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="text-sm text-brand-secondary dark:text-gray-300 flex items-start gap-2">
                <span className="text-brand-accent mt-1">→</span>
                {h}
              </li>
            ))}
          </ul>
          <Link href={exp.link} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-accent hover:underline">
            View project →
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
