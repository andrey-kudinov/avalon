import { ReactNode } from 'react';

import { Header } from '@/components/base/Header';

export const Page = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);
