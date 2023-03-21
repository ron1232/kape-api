import { PriceModel } from "../models/priceModel.js";

const getPriceByBundle = (req, res) => {
  const { bundle, currency } = req.query;

  if (bundle !== "*") {
    const { discount, monthlyPrice, newPrice, oldPrice } =
      PriceModel.getPriceByBundle(bundle);

    return res.send({ oldPrice, newPrice, discount, monthlyPrice });
  }

  const result = PriceModel.getAllPrices();

  res.send(result);
};

export { getPriceByBundle };
