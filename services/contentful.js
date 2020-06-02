import * as contenful from "contentful";

const client = contenful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const getData = async () => {
  const data = await client.getEntries({
    content_type: "nextPost",
  });
  return data;
};

export { client, getData };
