import React from "react";

const ExpandableText = () => {
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ea quam vitae asperiores ex quisquam inventore tempore iure, at dignissimos consectetur labore! Ipsam, cum. Doloremque iusto neque necessitatibus placeat quos?";
  return (
    <>
      <div>
        <p>{text.length > 10 ? text.substring(0, 10) + "..." : text}</p>
        {<button>Show</button>}
      </div>
    </>
  );
};

export default ExpandableText;
