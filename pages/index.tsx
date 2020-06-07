import { getData } from "../services/contentful";
import styled from "@emotion/styled";
import Layout from "../shared/Layout";
import Post from "../Components/Post";

const List = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 1em;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 300px);
    min-width: 300px;
  }
`;

export default function Home({ links }) {
  return (
    <Layout>
      <List>
        {links
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((data, index) => (
            <Post key={index} {...data}></Post>
          ))}
      </List>
    </Layout>
  );
}

const getLinks = async () => {
  const { items } = await getData();
  const elems = items.map(({ fields }) => fields);

  return elems.map(({ alt, description, date, title, image }) => {
    return {
      url: `/posts/${alt}`,
      alt,
      title,
      description,
      date,
      image: image.fields.file.url,
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
