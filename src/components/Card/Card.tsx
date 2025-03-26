import { useDispatch } from 'react-redux';
import { toggleLike, deleteCard } from '../../store/cards/cardsSlice';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../store/types';
import styles from './Card.module.css';

const Card = ({ character, isLiked }: { character: Character; isLiked: boolean }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div 
      className={styles.card}
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <img src={character.image} alt={character.name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{character.name}</h3>
        <p className={styles.info}>
          {character.status} - {character.species}
        </p>
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${isLiked ? styles.liked : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleLike(character.id));
            }}
          >
            ♥
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteCard(character.id));
            }}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;