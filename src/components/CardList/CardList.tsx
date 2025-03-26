import { useMemo } from 'react';
import { Character } from '../../store/types';
import Card from '../Card/Card';
import styles from './CardList.module.css';

interface CardListProps {
  characters: Character[];
  likedCards: number[];
}

const CardList = ({ characters, likedCards }: CardListProps) => {
  const likedCardsSet = useMemo(() => new Set(likedCards), [likedCards]);

  if (characters.length === 0) {
    return <div className={styles.empty}>No characters found</div>;
  }

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Card 
          key={character.id}
          character={character}
          isLiked={likedCardsSet.has(character.id)}
        />
      ))}
    </div>
  );
};

export default CardList;