import Link from 'next/link';
import { caseStudies } from 'data/case-studies';

interface CaseStudyCardProps {
  study: typeof caseStudies[0];
}

const CaseStudyCard = ({ study }: CaseStudyCardProps) => (
  <div className="bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-zinc-800 rounded-sm p-6 h-full">
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded">
        {study.type}
      </span>
      <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-xs rounded">
        {study.status}
      </span>
      <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-xs rounded">
        {study.scope}
      </span>
    </div>

    <h3 className="text-xl font-semibold mb-1 text-brand-primary dark:text-white">
      {study.title}
    </h3>
    <p className="text-brand-secondary dark:text-gray-400 mb-4">
      {study.organization}
    </p>

    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
      <div>
        <p className="text-brand-secondary dark:text-gray-400">Prize</p>
        <p className="font-semibold text-brand-primary dark:text-white">{study.prize}</p>
      </div>
      <div>
        <p className="text-brand-secondary dark:text-gray-400">Duration</p>
        <p className="font-semibold text-brand-primary dark:text-white">{study.duration}</p>
      </div>
      <div>
        <p className="text-brand-secondary dark:text-gray-400">Avg Response</p>
        <p className="font-semibold text-brand-primary dark:text-white">{study.avgResponseTime}</p>
      </div>
      <div>
        <p className="text-brand-secondary dark:text-gray-400">Recipients</p>
        <p className="font-semibold text-brand-primary dark:text-white">{study.recipients}</p>
      </div>
    </div>

    <p className="text-brand-secondary dark:text-gray-300 mb-4 text-sm leading-relaxed">
      {study.description}
    </p>

    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2 text-brand-primary dark:text-white">The Hypothesis</h4>
      <p className="text-sm text-brand-secondary dark:text-gray-300 leading-relaxed">
        {study.hypothesis}
      </p>
    </div>

    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2 text-brand-primary dark:text-white">How It Works</h4>
      <ol className="space-y-1.5">
        {study.howItWorks.map((step, i) => (
          <li key={i} className="text-sm text-brand-secondary dark:text-gray-300 flex items-start gap-2">
            <span className="text-brand-accent mt-0.5">{i + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </div>

    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2 text-brand-primary dark:text-white">What They Are Looking For</h4>
      <ul className="space-y-1.5">
        {study.lookingFor.map((item, i) => (
          <li key={i} className="text-sm text-brand-secondary dark:text-gray-300 flex items-start gap-2">
            <span className="text-brand-accent mt-0.5">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-2 text-brand-primary dark:text-white">Tech Stack</h4>
      <div className="flex flex-wrap gap-1.5">
        {study.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="pt-4 border-t border-gray-200 dark:border-zinc-800">
      <div className="flex flex-wrap gap-2 mb-4">
        {study.skillsNeeded.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 bg-brand-accent/10 text-brand-accent text-[11px] font-medium rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-brand-secondary dark:text-gray-400">
          My role: {study.myRole} · {study.outcome}
        </span>
        {study.link && study.link !== '#' && (
          <Link
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-accent hover:underline"
          >
            View listing →
          </Link>
        )}
      </div>
    </div>
  </div>
);

const CaseStudies = () => (
  <div className="container py-16" id="case-studies">
    <h2 className="text-3xl font-bold mb-2 text-brand-primary dark:text-white typography">
      Case Studies
    </h2>
    <p className="text-brand-secondary dark:text-gray-300 mb-10 text-lg max-w-xl">
      Real opportunities I have applied for or contributed to. Building in public.
    </p>
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-1">
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  </div>
);

export default CaseStudies;
