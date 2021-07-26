import thingsJSON from './things.json';
import thingsWithGifJSON from './things-with-gif.json';

export const { things } = thingsWithGifJSON;

const handler = (_, res) => {
  return res.status(200).json(things);
};

export default handler;
