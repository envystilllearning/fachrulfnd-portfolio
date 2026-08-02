import config from 'data/config';
import Link from 'next/link';

const Contact = () => (
  <div className="container py-16" id="contact">
    <h2 className="text-3xl font-bold mb-4 text-brand-primary dark:text-white typography">
      Get in touch
    </h2>
    <p className="text-brand-secondary dark:text-gray-300 text-lg mb-10 max-w-xl">
      Open for freelance projects, community consulting, or just a chat about Web3 and AI agents.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Link
        href={config.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 py-4 border border-gray-200 dark:border-zinc-800 rounded-sm text-sm font-medium text-brand-primary dark:text-gray-200 hover:border-brand-accent dark:hover:border-brand-accent hover:text-brand-accent transition-colors"
      >
        GitHub
      </Link>
      <Link
        href={config.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 py-4 border border-gray-200 dark:border-zinc-800 rounded-sm text-sm font-medium text-brand-primary dark:text-gray-200 hover:border-brand-accent dark:hover:border-brand-accent hover:text-brand-accent transition-colors"
      >
        Discord
      </Link>
      <Link
        href={`https://x.com/${config.twitter.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 py-4 border border-gray-200 dark:border-zinc-800 rounded-sm text-sm font-medium text-brand-primary dark:text-gray-200 hover:border-brand-accent dark:hover:border-brand-accent hover:text-brand-accent transition-colors"
      >
        X / Twitter
      </Link>
      <Link
        href={config.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 py-4 border border-gray-200 dark:border-zinc-800 rounded-sm text-sm font-medium text-brand-primary dark:text-gray-200 hover:border-brand-accent dark:hover:border-brand-accent hover:text-brand-accent transition-colors"
      >
        Telegram
      </Link>
    </div>
  </div>
);

export default Contact;
