import { useEffect, useState } from 'react';

export default function Things() {
  const [things, setThings] = useState(null);

  useEffect(() => {
    const getThings = async () => {
      const response = await fetch('/api/things');
      const data = await response.json();
      setThings(data);
    };
    getThings();
  }, [setThings]);

  return (
    <>
      {things ? (
        <ul>
          {things.map((thing) => (
            <li key={thing.id}>
              <h2>{thing.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        'Loading things...'
      )}
    </>
  );
}
