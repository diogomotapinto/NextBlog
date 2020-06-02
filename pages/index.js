import Link from "next/link";
import { getData } from "../services/contentful";

export default function Home({ links }) {
  return (
    <>
      <ul>
        {links.map((data, index) => (
          <li key={index}>
            <Link href={data.url}>
              <a>{data.alt}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const getLinks = async () => {
  const { items } = await getData();
  const elems = items.map(({ fields }) => fields);
  return elems.map(({ alt }) => {
    return {
      url: `/posts/${alt}`,
      alt,
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
