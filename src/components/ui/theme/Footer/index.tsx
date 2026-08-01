import Image from 'next/image';
import social from './social.json';
import config from 'data/config';

const Footer = () => (
  <div className="pt-20 pb-10">
    <div className="container flex items-center justify-between flex-col md:flex-row gap-4">
      <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-brand-secondary dark:text-gray-400">
        <span className="font-semibold text-brand-primary dark:text-white">{config.defaultTitle}</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-4">
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
            className="text-brand-secondary dark:text-gray-400 hover:text-brand-accent transition-colors"
          >
            <Image src={icon} alt={name} className="w-5 h-5" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
