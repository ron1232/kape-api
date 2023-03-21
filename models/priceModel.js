import { data } from "../data/data.js";

export class PriceModel {
  static getPriceByBundle(bundle) {
    let oldPrice = null;
    let newPrice = null;

    if (bundle !== "extended") {
      oldPrice = data.original[bundle];
      newPrice = data.offers[bundle];
    } else {
      oldPrice = {
        USD: String(
          +data.original.vpn_addon.USD + +data.original.essential.USD
        ),
      };
      newPrice = {
        USD: String(+data.offers.vpn_addon.USD + +data.offers.essential.USD),
      };
    }

    const discount = String(
      Math.round((+newPrice?.USD / +oldPrice?.USD) * 100)
    );
    const monthlyPrice = (+newPrice?.USD / 12).toFixed(2);

    return {
      oldPrice: oldPrice?.USD,
      newPrice: newPrice?.USD,
      discount,
      monthlyPrice,
    };
  }

  static getAllPrices() {
    const bundles = ["advanced", "extended", "essential"];
    const pricePerBundle = {};

    bundles.forEach((bundle) => {
      pricePerBundle[bundle] = PriceModel.getPriceByBundle(bundle);
    });

    return pricePerBundle;
  }
}
