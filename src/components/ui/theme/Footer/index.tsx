import config from 'data/config';
import Image from 'next/image';
import Link from 'next/link';

const socials = [
  { name: 'GitHub', href: config.github, icon: '/assets/social/github.svg' },
  { name: 'X / Twitter', href: `https://x.com/${config.twitter.replace('@', '')}`, icon: '/assets/social/twitter.svg' },
  { name: 'Discord', href: config.discord, icon: '/assets/social/discord.svg' },
  { name: 'Telegram', href: config.telegram, icon: '/assets/social/telegram.svg' },
];

const Footer = () => (
  <div className="pt-20 pb-10">
    <div className="container flex items-center justify-between flex-col md:flex-row gap-4">
      <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-brand-secondary dark:text-gray-400">
        <span className="font-semibold text-brand-primary dark:text-white">{config.name}</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-4">
        {socials.map(({ name, href, icon }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
            className="text-brand-secondary dark:text-gray-400 hover:text-brand-accent transition-colors"
          >
            <Image src={icon} alt={name} className="w-5 h-5" width={20} height={20} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
