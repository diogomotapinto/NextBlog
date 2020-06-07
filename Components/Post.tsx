import React from "react";
import moment from "moment";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface PostProps {
  url: string;
  date: string;
  alt: string;
  title: string;
  description: string;
  image: string;
}

const PostCont = styled.div`
  overflow: hidden;
  width: 300px;
  height: 300px;
  transition: all 0.2s ease-in-out;
  img {
    width: 300px;
    height: 168px;
    object-fit: cover;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }
  hr {
    border-color: black;
    margin: 0;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  color: cornflowerblue;
  margin: 0;
`;

const Date = styled.div`
  margin: 0;
  font-size: 0.5em;
  opacity: 0.5;
`;

const Desc = styled.p`
  word-wrap: break-word;
  overflow: hidden;
  font-size: 0.7em;
  color: #444444;
`;

const Post = ({ alt, date, title, description, image, url }: PostProps) => {
  const router = useRouter();
  return (
    <div>
      <PostCont onClick={() => router.push(url)}>
        <img src={image} alt={alt}></img>
        <Title>{title}</Title>
        <Date>{moment(date).format("MMM Do YYYY")}</Date>
        <Desc>{description}</Desc>
      </PostCont>
    </div>
  );
};

export default Post;
