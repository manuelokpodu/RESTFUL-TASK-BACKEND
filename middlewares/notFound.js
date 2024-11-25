const notFound = (req, res) => {
  res.Json({ message: "Routes not found" });
};

module.exports = notFound;
