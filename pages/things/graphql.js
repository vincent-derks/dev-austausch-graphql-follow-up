import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Head from 'next/head';

import client from '../../apollo-client';

const thingsQuery = gql`
  query {
    things {
      id
      name
      gif {
        id
        images {
          downsized_medium {
            height
            url
            width
          }
        }
      }
    }
  }
`;

export default function ThingsGraphQL() {
  const [things, setThings] = useState(null);

  useEffect(() => {
    const getGraphQLThings = async () => {
      const { data } = await client.query({
        query: thingsQuery,
      });
      setThings(data.things);
    };
    getGraphQLThings();
  }, [setThings]);

  return (
    <>
      <Head>
        <title>Hallo jameda | Things GraphQL</title>
      </Head>
      {things ? (
        <ul>
          {things.map((thing) => (
            <li key={thing.id}>
              <h2>{thing.name}</h2>
              <Image
                src={thing.gif.images.downsized_medium.url}
                width={thing.gif.images.downsized_medium.width}
                height={thing.gif.images.downsized_medium.height}
                alt={thing.name}
              />
            </li>
          ))}
        </ul>
      ) : (
        'Loading things...'
      )}
    </>
  );
}
