import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { SiTypescript } from 'react-icons/si';
import { SiPrettier } from 'react-icons/si';
import { SiEslint } from 'react-icons/si';
import { LuPawPrint } from 'react-icons/lu';

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon === 'SiTypescript') return createElement(SiTypescript);
    if (icon === 'SiPrettier') return createElement(SiPrettier);
    if (icon === 'SiEslint') return createElement(SiEslint);
    if (icon === 'LuPawPrint') return createElement(LuPawPrint);

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
