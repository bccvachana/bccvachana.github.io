import { FC } from 'react';
import { Link } from 'react-scroll';

const Logo: FC = () => (
  <Link
    to="Home"
    spy
    smooth
    duration={500}
  >
    <div className="text-lg font-bold">
      {'<VC/>'}
    </div>
  </Link>
);

export default Logo;
