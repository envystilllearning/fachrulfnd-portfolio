import config from 'data/config';
import Link from 'next/link';

const socials = [
  { name: 'GitHub', href: config.github },
  { name: 'X / Twitter', href: `https://x.com/${config.twitter.replace('@', '')}` },
  { name: 'LinkedIn', href: config.linkedin },
  { name: 'Email', href: `mailto:${config.email}` },
];

const Contact = () => (
  <div className="container py-16" id="contact">
    <h2 className="text-3xl font-bold mb-4 text-brand-primary dark:text-white typography">
      Get in touch
    </h2>
    <p className="text-brand-secondary dark:text-gray-300 text-lg mb-10 max-w-xl">
      Open for freelance projects, community consulting, or technical collaboration. Reach out via any channel below.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {socials.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-5 py-4 border border-gray-200 dark:border-zinc-800 rounded-sm text-sm font-medium text-brand-primary dark:text-gray-200 hover:border-brand-accent dark:hover:border-brand-accent hover:text-brand-accent transition-colors"
        >
          {name}
        </Link>
      ))}
    </div>
  </div>
);

export default Contact;
