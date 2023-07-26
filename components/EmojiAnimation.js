import React from "react";
import Image from "next/image";

let emojis = new Array(20).fill('A')

const EmojiList = ({ emoji }) => {
  return (
    <div>
      {emoji && emojis.map((value, index) => (
        <div key={index} className="bubble py-2 px-3 m-2 inline-block animate-emoji-slow">
          {/* {emoji} */}
          <Image
            src={emoji}
            width={240}
            height={240}
          />
        </div>
      ))}
    </div>
  );
};

export default EmojiList;
