// housingPrices.map(ad => ({latlon: ad.coordinates.latitude + "," +  ad.coordinates.longitude, price: parseInt(ad.price.replace("₪","").replace(" ","").split(",").join("")), url: 'https://www.yad2.co.il/item/'+ad.link_token, other:""}))
let housingPrices = [
  {
    latlon: '32.0855535365854,34.8065558292683',
    price: 2790000,
    url: 'https://www.yad2.co.il/item/1h204wqo',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/1h204wqo"}'
  },
  {
    latlon: '32.077592,34.80815',
    price: 2890000,
    url: 'https://www.yad2.co.il/item/2zvqq14h',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/2zvqq14h"}'
  },
  {
    latlon: '32.074056902439,34.817200804878',
    price: 2850000,
    url: 'https://www.yad2.co.il/item/3w0utoh9',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202202/08/2_5/o/y2_1_06046_20220208140851.jpeg\\"/>","url":"https://www.yad2.co.il/item/3w0utoh9"}'
  },
  {
    latlon: '32.081892,34.811265',
    price: 2600000,
    url: 'https://www.yad2.co.il/item/3wyh1jnf',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/3wyh1jnf"}'
  },
  {
    latlon: '32.0782863461538,34.8077630384615',
    price: 2690000,
    url: 'https://www.yad2.co.il/item/9u37x2p7',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202012/16/2_5/o/o2_5_1_07393_20201216141210.jpg\\"/>","url":"https://www.yad2.co.il/item/9u37x2p7"}'
  },
  {
    latlon: '32.081892,34.811265',
    price: 2790000,
    url: 'https://www.yad2.co.il/item/bdeykr94',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/bdeykr94"}'
  },
  {
    latlon: '32.0807839677419,34.8036889354839',
    price: 2850000,
    url: 'https://www.yad2.co.il/item/ca1a9zpi',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/ca1a9zpi"}'
  },
  {
    latlon: '32.0887863333333,34.8052451111111',
    price: 2790000,
    url: 'https://www.yad2.co.il/item/huu7t92u',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/huu7t92u"}'
  },
  {
    latlon: '32.081422,34.804167',
    price: 2850000,
    url: 'https://www.yad2.co.il/item/iatca0mn',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202112/26/2_5/o/y2_1_01413_20211226113133.jpeg\\"/>","url":"https://www.yad2.co.il/item/iatca0mn"}'
  },
  {
    latlon: '32.081422,34.804167',
    price: 2800000,
    url: 'https://www.yad2.co.il/item/q8axm842',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/q8axm842"}'
  },
  {
    latlon: '32.0808449166667,34.8068744166667',
    price: 2690000,
    url: 'https://www.yad2.co.il/item/rsyd3tb7',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/rsyd3tb7"}'
  },
  {
    latlon: '32.0806729545454,34.8048565',
    price: 2690000,
    url: 'https://www.yad2.co.il/item/svzmxi',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/201909/10/2_5/o/o2_5_1_737088_20190910140900.jpg\\"/>","url":"https://www.yad2.co.il/item/svzmxi"}'
  },
  {
    latlon: '32.0937641282051,34.7776329230769',
    price: 2750000,
    url: 'https://www.yad2.co.il/item/ty4c77',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202002/02/2_5/o/o2_5_1_02216_20200202070243.jpg\\"/>","url":"https://www.yad2.co.il/item/ty4c77"}'
  },
  {
    latlon: 'null,null',
    price: 65,
    url: 'https://www.yad2.co.il/item/xp5iivko',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202204/15/5_0/o/y2_1_03369_20220415114818.jpeg\\"/>","url":"https://www.yad2.co.il/item/xp5iivko"}'
  },
  {
    latlon: '32.080739875,34.810271875',
    price: 2300000,
    url: 'https://www.yad2.co.il/item/yatr1x5q',
    other: '{"img_url":"<img src=\\"null\\"/>","url":"https://www.yad2.co.il/item/yatr1x5q"}'
  }
]