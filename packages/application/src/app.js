const worldUtil = require("@arif/utilities");

module.exports.appSayHello = () => {
  return `hello ${worldUtil.worldUtil.world()} ${worldUtil.worldUtil.jane()}, is in the house`;
};
