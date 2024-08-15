import fs from 'fs';

export const getMenu = (req, res) => {
  const menu = JSON.parse(fs.readFileSync('./data/menu.json'));
  res.json(menu);
};