import { Box, TextField } from "@material-ui/core";
import { NextPage } from "next";
import React, { FC } from "react";
import { WriteForm } from "../../components/WriteForm";
import { MainLayout } from "../../layouts/MainLayout";

interface Props {}

const WritePage: NextPage<Props> = ({}) => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm title="Header" />
    </MainLayout>
  );
};

export default WritePage;
