import React from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  stars: number;
  forks: number;
}

const ProjectCard = ({ title, description, tech, link, stars, forks }: Project) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-zinc-800 rounded-sm p-5 h-full hover:shadow-md hover:border-brand-accent dark:hover:border-brand-accent transition-all duration-200"
  >
    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-accent transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium rounded"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
      <span className="flex items-center gap-1">
        <span aria-hidden="true">★</span> {stars}
      </span>
      <span className="flex items-center gap-1">
        <span aria-hidden="true">⑂</span> {forks}
      </span>
    </div>
  </Link>
);

export default ProjectCard;
