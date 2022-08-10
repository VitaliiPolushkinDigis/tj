import React, { FC, useEffect } from "react";
import { Box, Button, Input } from "@material-ui/core";
import dynamic from "next/dynamic";
import { TextsmsOutlined as MessageIcon } from "@material-ui/icons";

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
      <Button style={{ height: 42 }} variant="contained" color="primary">
        <MessageIcon className="mr-10" />
        Send
      </Button>
    </Box>
  );
};
