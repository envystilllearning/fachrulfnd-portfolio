import Link from 'next/link';
import { upworkPortfolio, services, skills } from 'data/upwork-portfolio';

const UpworkPortfolio = () => (
  <div className="container py-16" id="upwork-portfolio">
    <h2 className="text-3xl font-bold mb-2 text-brand-primary dark:text-white typography">
      Upwork Portfolio
    </h2>
    <p className="text-brand-secondary dark:text-gray-300 mb-10 text-lg max-w-xl">
      Selected client work across Web3, technical writing, and content strategy.
    </p>

    {/* Services */}
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-6 text-brand-primary dark:text-white">Services</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="p-5 border border-gray-200 dark:border-zinc-800 rounded-sm">
            <h4 className="font-semibold mb-2 text-brand-primary dark:text-white">{service.title}</h4>
            <p className="text-sm text-brand-secondary dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Projects */}
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-6 text-brand-primary dark:text-white">Published Work</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {upworkPortfolio.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="group block p-5 border border-gray-200 dark:border-zinc-800 rounded-sm hover:border-brand-accent dark:hover:border-brand-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-wider text-brand-secondary dark:text-gray-400 font-semibold">
              {item.category}
            </span>
            <h4 className="mt-2 mb-2 text-base font-semibold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors">
              {item.title}
            </h4>
            <p className="text-sm text-brand-secondary dark:text-gray-300 mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Skills */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-brand-primary dark:text-white">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm rounded-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default UpworkPortfolio;
