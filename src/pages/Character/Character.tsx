import { useParams, useNavigate } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../store/api/charactersApi';
import { RootState } from '../../store/';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import styles from './Character.module.css';

const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: character, isLoading, error } = useGetCharacterByIdQuery(Number(id));
  const { likedCards } = useSelector((state: RootState) => state.cards);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading character</div>;

  return (
    <Layout>
      <div className={styles.container}>
        <button 
          onClick={() => navigate(-1)}
          className={styles.backButton}
        >
          ← Back to List
        </button>

        {character && (
          <div className={styles.characterCard}>
            <img src={character.image} alt={character.name} className={styles.image} />
            <div className={styles.details}>
              <h1 className={styles.name}>{character.name}</h1>
              
              <div className={styles.infoSection}>
                <h2>Character Info</h2>
                <p><span>Status:</span> {character.status}</p>
                <p><span>Species:</span> {character.species}</p>
                <p><span>Gender:</span> {character.gender}</p>
                <p><span>Origin:</span> {character.origin.name}</p>
                <p><span>Location:</span> {character.location.name}</p>
              </div>

              <div className={styles.episodes}>
                <h2>Episodes ({character.episode.length})</h2>
                <div className={styles.episodeList}>
                  {character.episode.slice(0, 5).map((ep, index) => (
                    <div key={index} className={styles.episode}>
                      Episode {ep.split('/').pop()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Character;