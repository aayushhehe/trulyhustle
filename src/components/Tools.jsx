import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import SquareIcon from "@mui/icons-material/Square";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import ImageIcon from "@mui/icons-material/Image";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const Tools = () => {
  return (
    <div className="grid gap-3 w-8 pl-1 bg-slate-200 rounded-xl py-1">
      <NearMeIcon />
      <SquareIcon />
      <TextFieldsIcon />
      <ShortcutIcon />
      <ImageIcon />
      <ChatBubbleIcon />
    </div>
  );
};

export default Tools;
