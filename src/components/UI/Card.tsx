import { ICard } from '../../interfaces';
import './Card.css';

const Card = ({ children, className }: ICard) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
