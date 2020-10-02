const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
    otherLanguages: ["sr"],
    localeSubpaths: {
        en: "en",
        sr: "sr",
    },
    localePath: path.resolve("./public/static/locales"),
});
