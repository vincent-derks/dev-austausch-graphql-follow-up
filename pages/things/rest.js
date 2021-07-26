import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { gfClient } from '../api/graphql/utils';

export default function ThingsRest() {
  const [things, setThings] = useState(null);

  useEffect(() => {
    const getRestThings = async () => {
      const response = await fetch('/api/things');
      const data = await response.json();
      const dataWithGifs = await Promise.all(
        data.map(async (thing) => {
          const { data: gifs } = await gfClient.search(thing.name, {
            limit: 1,
          });
          const gif = gifs.length && gifs[0];
          return {
            ...thing,
            gif,
          };
        })
      );
      setThings(dataWithGifs);
    };
    getRestThings();
  }, [setThings]);

  return (
    <>
      <Head>
        <title>Hallo jameda | Things REST</title>
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
