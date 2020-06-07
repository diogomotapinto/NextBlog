import React from "react";
import { getData } from "../../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import moment from "moment";
import styled from "@emotion/styled";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1em;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #444444;
  word-wrap: break-word;
  overflow: hidden;
`;

const Title = styled.h1`
  color: cornflowerblue;
  margin: 0;
`;

const Date = styled.h4`
  opacity: 0.5;
  margin: 0;
`;

const Home = styled.a`
  font-size: 2em;
  font-weight: bold;
  &:hover {
    color: cornflowerblue;
    cursor: grab;
  }
`;

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url } = node.data.target.fields.file;
      const alt = node.data.target.fields.title;
      return <img src={url} alt={alt} />;
    },
  },
};

const Page = ({ content }) => {
  return (
    <div>
      <Head>
        <title>{content.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/">
        <Home>Home</Home>
      </Link>
      <Header>
        <Title>{content.title}</Title>
        <Date>{moment(content.date).format("MMM Do YYYY")}</Date>
      </Header>
      <Body>{documentToReactComponents(content.body, options)}</Body>
    </div>
  );
};

const getPaths = async () => {
  const { items } = await getData();
  const content = items.map(({ fields }) => fields);
  return content.map(({ alt }) => {
    return {
      params: {
        id: alt,
      },
    };
  });
};

const getContent = async (id) => {
  const { items } = await getData();
  const elems = items.map(({ fields }) => fields);
  return elems.find(({ alt }) => alt === id);
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = await getPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const content = await getContent(params.id);
  return {
    props: { params, content },
  };
};

export default Page;
