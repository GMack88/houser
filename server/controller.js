module.exports = {
  sendHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .send_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => console.log(err));
  },
  addHouse: (req, res, next) => {
    const { name, address, city, state, zipcode } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .add_house([name, address, city, state, zipcode])
      .then(() => res.sendStatus(200).send("ok"))
      .catch(err => {
        res.status(500).send("error message");
        console.log(err);
      });
  },
  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    db.delete_house([req.id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("oopsie poopsie!");
        console.log(err);
      });
  }
};
