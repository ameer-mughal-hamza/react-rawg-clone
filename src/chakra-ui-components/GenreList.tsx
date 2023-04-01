import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
