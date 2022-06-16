import * as React from 'react';
import Typography from './components/Typography';
import './style.css';

export default function App() {
  const ref = React.useRef<HTMLAnchorElement | null>(null);
  const ref2 = React.useRef<HTMLHeadingElement | null>(null);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Typography
        ref={ref2}
        as="h1"
        color="indigo"
        style={{ backgroundColor: 'black' }}
      >
        Start editing to see some magic happen :)
      </Typography>
      <Typography as={Emphasis}>
        Start editing to see some magic happen :)
      </Typography>
      <Typography style={{}}>
        Start editing to see some magic happen :)
      </Typography>
    </div>
  );
}

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <em style={{ backgroundColor: 'yellow', display: 'block' }}>{children}</em>
  );
};
