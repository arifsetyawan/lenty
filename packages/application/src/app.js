const worldUtil = require("@pyrotag/utilities");

module.exports.appSayHello = () => {
  return `hello ${worldUtil.worldUtil.world()} ${worldUtil.worldUtil.doe()}, is in the house`;
};
