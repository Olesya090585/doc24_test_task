import { useState } from 'react';
import { useGetCharactersQuery } from '../../store/api/charactersApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import CardList from '../../components/CardList/CardList';
import Layout from '../../components/Layout/Layout';
import styles from './Home.module.css';

const Home = () => {
  const { data, isLoading, error } = useGetCharactersQuery();
  const { likedCards, deletedCards } = useSelector((state: RootState) => state.cards);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  const filteredCharacters = data?.results
    ?.filter(char => !deletedCards.includes(char.id))
    ?.filter(char => showOnlyLiked ? likedCards.includes(char.id) : true);

  return (
    <Layout>
      <div className={styles.container}>
        <button 
          onClick={() => setShowOnlyLiked(!showOnlyLiked)}
          className={`${styles.filterButton} ${showOnlyLiked ? styles.active : ''}`}
        >
          {showOnlyLiked ? 'Show All' : 'Show Only Liked'}
        </button>

        {isLoading && <div>Loading...</div>}
        {error && <div>Error loading characters</div>}
        
        <CardList 
          characters={filteredCharacters || []} 
          likedCards={likedCards}
        />
      </div>
    </Layout>
  );
};
export default Home;