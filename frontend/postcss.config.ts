// module.exports = {
//   content: ["./public/**/*.html", "./src/**/*.vue"],
//   defaultExtractor(content) {
//     const contentWithoutStyleBlocks = content.replace(
//       /<style[^]+?<\/style>/gi,
//       ""
//     );
//     return (
//       contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//     );
//   },
//   safelist: [
//     /-(leave|enter|appear)(|-(to|from|active))$/,
//     /^(?!(|.*?:)cursor-move).+-move$/,
//     /^router-link(|-exact)-active$/,
//     /data-v-.*/,
//   ],
// };
// import postCss from '@fullhuman/postcss-purgecss'
module.exports = {
  // parser: 'sugarss',
  map: false,
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["./public/**/*.html", "./src/**/*.vue"],
      fontFace: false,
      // defaultExtractor(content) {
      //   const contentWithoutStyleBlocks = content.replace(
      //     /<style[^]+?<\/style>/gi,
      //     ""
      //   );
      //   return (
      //     contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      //   );
      // },
      safelist: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
        //bootstrap dynamic classes
        'show'
      ],
    },
  },
};
