import React, { FC, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
interface EditorProps {}

export const Editor: React.FC<EditorProps> = (props) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Type your text...",
    });

    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      });
    };
  }, []);
  return <div id="editor"></div>;
};
