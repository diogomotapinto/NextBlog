import Link from "next/link";
import { getData } from "../services/contentful";
import styled from "@emotion/styled";
import Layout from "../shared/Layout";
import moment from "moment";

const List = styled.ul`
  list-style: none;

  a {
    text-decoration: none;
    color: cornflowerblue;
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }
`;

const SmallText = styled.p`
  font-size: 0.5em;
`;

export default function Home({ links }) {
  return (
    <Layout>
      <List>
        {links.map((data, index) => (
          <li key={index}>
            <Link href={data.url}>
              <a>{data.title}</a>
            </Link>
            <SmallText>{moment(data.date).format("MMM Do YY")}</SmallText>
            <p>{data.description}</p>
          </li>
        ))}
      </List>
    </Layout>
  );
}

const getLinks = async () => {
  const { items } = await getData();
  const elems = items.map(({ fields }) => fields);
  return elems.map(({ alt, description, date, title }) => {
    return {
      url: `/posts/${alt}`,
      alt,
      title,
      description,
      date,
    };
  });
};

export async function getStaticProps() {
  // Fetch necessary data for the blog post using params.id
  const links = await getLinks();
  return {
    props: { links },
  };
}
