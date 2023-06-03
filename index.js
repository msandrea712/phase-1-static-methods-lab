class StringUtils {
  static capitalize(str) {
    if (str === null || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    if (str === null || str.length === 0) {
      return str;
    }
    return str.replace(/[^a-zA-Z0-9-' ]/g, "");
  }

  static titleize(str) {
    if (str === null || str.length === 0) {
      return str;
    }
    const words = str.toLowerCase().split(" ");
    const excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const result = [];
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i === 0 || !excludedWords.includes(word)) {
        result.push(StringUtils.capitalize(word));
      } else {
        result.push(word);
      }
    }
    return result.join(" ");
  }
}

class Formatter {
  static capitalize(str) {
    return StringUtils.capitalize(str);
  }

  static sanitize(str) {
    return StringUtils.sanitize(str);
  }

  static titleize(str) {
    return StringUtils.titleize(str);
  }
}
