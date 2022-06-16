import * as React from 'react';
import Typography from './components/Typography';
import './style.css';

export default function App() {
  const ref2 = React.useRef<HTMLAnchorElement | null>(null);
  const ref = React.useRef<HTMLHeadingElement | null>(null);

  React.useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Typography
        ref={ref}
        as="h1"
        color="indigo"
        style={{ backgroundColor: 'black' }}
      >
        Start editing to see some magic happen :)
      </Typography>
      {/* <Typography as={Emphasis}>
          Start editing to see some magic happen :)
        </Typography>
        <Typography style={{}}>
          Start editing to see some magic happen :)
        </Typography> */}
    </div>
  );
}

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <em style={{ backgroundColor: 'yellow', display: 'block' }}>{children}</em>
  );
};
