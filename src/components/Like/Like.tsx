import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  setLikeState: (state: boolean) => void;
}

const Like = ({ setLikeState }: Props) => {
  const [like, setLike] = useState(false);
  return (
    <>
      {like ? (
        <AiFillHeart color="#ff6b81" size={40} onClick={() => setLike(false)} />
      ) : (
        <AiOutlineHeart
          color="#ff6b81"
          size={40}
          onClick={() => setLike(true)}
        />
      )}
    </>
  );
};

export default Like;
