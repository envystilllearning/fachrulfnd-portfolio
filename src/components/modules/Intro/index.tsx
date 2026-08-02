import Link from 'next/link';
import Header from 'components/ui/theme/Header';
import config from 'data/config';

const Intro = () => (
  <div className="container py-20">
    <Header />
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
      <div className="flex-1 w-full lg:w-3/5">
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary dark:text-white typography leading-tight">
          Web3 contributor & AI agent builder
        </h1>
        <p className="mb-4 text-lg md:text-xl text-brand-secondary dark:text-gray-300 leading-relaxed max-w-2xl">
          {config.name}. {config.location}.
        </p>
        <p className="mb-10 text-lg md:text-xl text-brand-secondary dark:text-gray-300 leading-relaxed max-w-2xl">
          Casual Web3 contributor. Currently building AI agents and learning in public. I help crypto teams with community, content, and growth.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#projects" className="button button-primary">
            View work
          </Link>
          <Link href="#contact" className="button button-secondary">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full lg:w-2/5 flex justify-center">
        <div className="w-full max-md aspect-square bg-brand-accent/10 rounded-full flex items-center justify-center">
          <span className="text-6xl font-bold text-brand-accent dark:text-brand-accent">R</span>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
