import { ReactElement } from 'react';
import './index.less';

const ThemeToggler = (): ReactElement<HTMLDivElement> => {
  return (
    <div>
      <label className="daynight">
        <input type="checkbox" className="daynight-checkbox" />
        <span className="daynight-sky">
          <span className="daynight-stars"></span>
          <span className="daynight-morestars"></span>
          <span className="daynight-sunmoon"></span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggler;
