const userLandedInPage = (req, res) => {
  req.session.userLandedPage = true;
  return res.send(true);
};

const userPressedBuyButton = (req, res) => {
  req.session.userPressedBuyButton = true;
  return res.send(true);
};

export { userLandedInPage, userPressedBuyButton };
