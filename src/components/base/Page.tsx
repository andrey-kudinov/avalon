import { ReactNode } from 'react';

import { Header } from '@/components/base/Header';

export const Page = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <div className="page-wrapper">{children}</div>
  </>
);
