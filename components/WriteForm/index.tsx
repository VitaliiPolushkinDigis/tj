import React, { FC, useEffect } from "react";
import { Box, Input } from "@material-ui/core";
import dynamic from "next/dynamic";
interface WriteFormProps {
  title: string;
}

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <Input placeholder={title} />
      <Editor />
    </Box>
  );
};
