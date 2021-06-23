const worldUtil = require("@pyrotag/utilities");

module.exports.appSayHello = () => {
  return `hello ${worldUtil.worldUtil.world()} ${worldUtil.worldUtil.doe()}, ${worldUtil.worldUtil.arif()} is in the house`;
};
