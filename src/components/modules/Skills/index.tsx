import Link from 'next/link';

const skillGroups = [
  {
    label: 'Web3 & Community',
    skills: [
      'Community Management',
      'Discord / Telegram',
      'Content Writing',
      'Social Media Strategy',
      'Twitter/X Growth',
    ],
  },
  {
    label: 'AI & Agents',
    skills: [
      'AI Agents',
      'Prompt Engineering',
      'LLM Integration',
      'Automation Workflows',
      'Anti-AI Writing',
    ],
  },
  {
    label: 'Engineering',
    skills: [
      'Python',
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'Docker',
    ],
  },
];

const Skills = () => (
  <div className="container py-16" id="skills">
    <h2 className="text-3xl font-bold mb-8 text-brand-primary dark:text-white typography">
      Skills & tools
    </h2>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <h3 className="text-sm uppercase tracking-wider text-brand-secondary dark:text-gray-400 mb-4 font-semibold">
            {group.label}
          </h3>
          <ul className="space-y-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="text-base text-brand-primary dark:text-gray-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="text-brand-secondary dark:text-gray-400 mb-6 max-w-2xl">
      Still learning. Currently focused on AI agent development and contributing to Web3 infrastructure projects. Not an expert — just building in public.
    </p>
    <Link href="#contact" className="button button-primary">
      Discuss a project
    </Link>
  </div>
);

export default Skills;
