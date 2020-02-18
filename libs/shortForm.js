module.exports = function shortForm() {
  const availableFlags = new Set();
  return function short(f, original) {
    if (!original) {
      original = f;
    }

    if (f.length === 0) {
      // default back to long form
      return original;
    } else if (!availableFlags.has(f[0])) {
      availableFlags.add(f[0]);
      return f[0].toLowerCase();
    }
    // loop until a unique flag is found
    return short(f.substring(1), original);
  };
};
