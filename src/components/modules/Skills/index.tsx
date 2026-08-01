import Link from 'next/link';

const skillGroups = [
  {
    label: 'Web3 & Community',
    skills: [
      'Web3 Community Strategy',
      'Discord / Telegram Growth',
      'Tokenomics',
      'Governance Design',
      'Ethereum / L2s',
    ],
  },
  {
    label: 'AI & Agents',
    skills: [
      'Autonomous Agents',
      'Multi-Agent Systems',
      'Prompt Architecture',
      'Hermes Agent',
      'OpenAI / Anthropic / DeepSeek',
    ],
  },
  {
    label: 'Engineering',
    skills: [
      'Python',
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'Docker / AWS',
    ],
  },
];

const Skills = () => (
  <div className="container py-16" id="about">
    <h2 className="text-3xl font-bold mb-8 text-brand-primary dark:text-white typography">
      Skills & expertise
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
    <Link href="#contact" className="button button-primary">
      Discuss a project
    </Link>
  </div>
);

export default Skills;
