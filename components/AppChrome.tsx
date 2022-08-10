import { ReactNode } from 'react';
import Header from './Header';

const AppChrome = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppChrome;
