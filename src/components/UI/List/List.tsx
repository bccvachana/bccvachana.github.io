import { FC } from 'react';
import { mapWithIndex } from 'utils/func';
import styles from './List.scss';

interface IListProps {
  data: string[];
  type: 'comma' | 'hash';
  className?: string;
}

const List: FC<IListProps> = ({
  data,
  type,
  className
}) => (
  <div
    className={`${styles.container} ${className || ''}`}
  >
    {mapWithIndex((
      value: string,
      i: number
    ) => (
      <div key={value}>
        {type === 'comma' && (
          i === data.length - 1 ? value : `${value},`
        )}
        {type === 'hash' && `#${value}`}
      </div>
    ), data)}
  </div>
);

export default List;
