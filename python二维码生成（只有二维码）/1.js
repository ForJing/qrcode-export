var source = {
  HG000004216: "https://shop.hgobox.com/shop/2018101210001920734717",
  HG000004138: "https://shop.hgobox.com/shop/2018101210001919224791",
  HG000004217: "https://shop.hgobox.com/shop/2018101210001919023859",
  HG000004220: "https://shop.hgobox.com/shop/2018101210001919023797",
  HG000004218: "https://shop.hgobox.com/shop/2018101210001919124459",
  HG000004219: "https://shop.hgobox.com/shop/2018101210001921238453",
  HG000004222: "https://shop.hgobox.com/shop/2018101210001916610017",
  HG000004221: "https://shop.hgobox.com/shop/2018101209535098410406",
  HG000004224: "https://shop.hgobox.com/shop/2018101210001920936469",
  HG000004223: "https://shop.hgobox.com/shop/2018101210001918620800",
  HG000004225: "https://shop.hgobox.com/shop/2018101210001921137863",
  HG000004229: "https://shop.hgobox.com/shop/2018101210001917514956",
  HG000004228: "https://shop.hgobox.com/shop/2018101210001917615449",
  HG000004226: "https://shop.hgobox.com/shop/2018101210001917012154",
  HG000004230: "https://shop.hgobox.com/shop/2018101210001918218784",
  HG000004231: "https://shop.hgobox.com/shop/2018101210001917715898",
  HG000004232: "https://shop.hgobox.com/shop/2018101210001918319456",
  HG000004234: "https://shop.hgobox.com/shop/2018101210001918822406",
  HG000004233: "https://shop.hgobox.com/shop/2018101210001921339038",
  HG000004235: "https://shop.hgobox.com/shop/2018101210001918822197",
  HG000004236: "https://shop.hgobox.com/shop/2018101210001918822500",
  HG000004237: "https://shop.hgobox.com/shop/2018101210001918219041",
  HG000004239: "https://shop.hgobox.com/shop/2018101210001917213338",
  HG000004238: "https://shop.hgobox.com/shop/2018101210001921238102",
  HG000004240: "https://shop.hgobox.com/shop/2018101210001917112409",
  HG000004243: "https://shop.hgobox.com/shop/2018101209535098309704",
  HG000004245: "https://shop.hgobox.com/shop/2018101210001915704532",
  HG000004246: "https://shop.hgobox.com/shop/2018101210001921943758",
  HG000004241: "https://shop.hgobox.com/shop/2018101210001920131285",
  HG000004242: "https://shop.hgobox.com/shop/2018101210001918721826",
  HG000004244: "https://shop.hgobox.com/shop/2018101210001917313562",
  HG000004227: "https://shop.hgobox.com/shop/2018101210001919023517",
  HG000004247: "https://shop.hgobox.com/shop/2018101209535097405038",
  HG000004248: "https://shop.hgobox.com/shop/2018101210001918520639"
};

// 映射

var b = {
  HG000004138: "HG000002741",
  HG000004216: "HG000002841",
  HG000004217: "HG000002732",
  HG000004218: "HG000002738",
  HG000004219: "HG000002878",
  HG000004220: "HG000002731",
  HG000004221: "HG000002478",
  HG000004222: "HG000002594",
  HG000004223: "HG000002702",
  HG000004224: "HG000002858",
  HG000004225: "HG000002872",
  HG000004226: "HG000002615",
  HG000004227: "HG000002729",
  HG000004228: "HG000002648",
  HG000004229: "HG000002643",
  HG000004230: "HG000002681",
  HG000004231: "HG000002652",
  HG000004232: "HG000002688",
  HG000004233: "HG000002884",
  HG000004234: "HG000002718",
  HG000004235: "HG000002715",
  HG000004236: "HG000002719",
  HG000004237: "HG000002684",
  HG000004238: "HG000002875",
  HG000004239: "HG000002627",
  HG000004240: "HG000002618",
  HG000004241: "HG000002806",
  HG000004242: "HG000002712",
  HG000004243: "HG000002471",
  HG000004244: "HG000002629",
  HG000004245: "HG000002539",
  HG000004246: "HG000002931",
  HG000004247: "HG000002424",
  HG000004248: "HG000002700"
};

var result = {};
Object.keys(source).forEach(key => {
  const link = source[key];
  const code = b[key];
  result[code] = link;
});

console.log(result);
