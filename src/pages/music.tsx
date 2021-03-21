import { Link } from "gatsby";
import React, { FC } from "react";
import FilterBar from "../components/FilterBar";
import Layout from "../components/Layout";
import MusicPlayer from "../components/MusicPlayer";

const Music: FC = () => (
  <Layout>
    <FilterBar />
    <MusicPlayer urls={["https://previews.customer.envatousercontent.com/files/316563288/preview.mp3"]}/>
  </Layout>
);


export default Music;
