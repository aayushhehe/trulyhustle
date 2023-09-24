import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
const Chat = () => {
  return (
    <div>
      <div className="bg-gray-700 px-4 py-6 font-light text-white">Chat</div>
      <div className="w-72 h-[80vh] bg-slate-500">.</div>
      <div>
        <div className="flex bg-slate-400 py-4 px-3">
          <input
            type="text"
            placeholder="Chat"
            className="rounded-xl border-2"
          />
          <EmojiEmotionsIcon />
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
