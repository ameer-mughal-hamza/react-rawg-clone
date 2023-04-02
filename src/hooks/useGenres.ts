import genres from '../data/genres';

const useGenre = () => ({data: genres, isLoading: false, error: null});

export default useGenre;