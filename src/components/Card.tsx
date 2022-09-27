import './Card.css';
import { ICard } from '../interfaces';

const Card = ({ children, className }: ICard) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
