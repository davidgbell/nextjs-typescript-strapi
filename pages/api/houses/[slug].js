const { houses } = require('./data.json');

export default (req, res) => {
  const house = houses.filter(house => house.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(house);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
