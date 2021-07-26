import { things } from './index';

const handler = (req, res) => {
  const { id } = req.query;
  if (id) {
    const thing = things.find((thing) => thing.id === Number(id));
    if (thing) {
      return res.status(200).json(thing);
    }
    return res.status(500).json({ message: `No Thing found for ID "${id}"` });
  }
  return res.status(500).json({ message: `ID "${id}" was not found` });
};

export default handler;
