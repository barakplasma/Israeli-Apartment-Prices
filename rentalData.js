// housingPrices.map(ad => ({latlon: ad.coordinates.latitude + "," +  ad.coordinates.longitude, price: parseInt(ad.price.replace("₪","").replace(" ","").split(",").join("")), url: 'https://www.yad2.co.il/item/'+ad.link_token, other:""}))
let housingPrices = [
  {
    latlon: '32.0855535365854,34.8065558292683',
    price: 2790000,
    url: 'https://www.yad2.co.il/item/1h204wqo',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202202/07/2_5/o/y2_1_2rSORlXoIL_20220207.jpg\\"/>","url":"https://www.yad2.co.il/item/1h204wqo","price":"2,790,000 ₪"}'
  },
  {
    latlon: '32.077592,34.80815',
    price: 2890000,
    url: 'https://www.yad2.co.il/item/2zvqq14h',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202203/06/2_5/o/y2_1_999376_20220306.jpg\\"/>","url":"https://www.yad2.co.il/item/2zvqq14h","price":"2,890,000 ₪"}'
  },
  {
    latlon: '32.074056902439,34.817200804878',
    price: 2850000,
    url: 'https://www.yad2.co.il/item/3w0utoh9',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202202/08/2_5/o/y2_1_06046_20220208140851.jpeg\\"/>","url":"https://www.yad2.co.il/item/3w0utoh9","price":"2,850,000 ₪"}'
  },
  {
    latlon: '32.081892,34.811265',
    price: 2600000,
    url: 'https://www.yad2.co.il/item/3wyh1jnf',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202204/06/2_5/o/y2_1_ZAZnwOcHkx_20220406.jpeg\\"/>","url":"https://www.yad2.co.il/item/3wyh1jnf","price":"2,600,000 ₪"}'
  },
  {
    latlon: '32.0782863461538,34.8077630384615',
    price: 2690000,
    url: 'https://www.yad2.co.il/item/9u37x2p7',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202012/16/2_5/o/o2_5_1_07393_20201216141210.jpg\\"/>","url":"https://www.yad2.co.il/item/9u37x2p7","price":"2,690,000 ₪"}'
  },
  {
    latlon: '32.081892,34.811265',
    price: 2790000,
    url: 'https://www.yad2.co.il/item/bdeykr94',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202203/17/2_5/o/y2_1_ec_8Pdz73P_20220317.jpg\\"/>","url":"https://www.yad2.co.il/item/bdeykr94","price":"2,790,000 ₪"}'
  },
  {
    latlon: '32.0807839677419,34.8036889354839',
    price: 2850000,
    url: 'https://www.yad2.co.il/item/ca1a9zpi',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202201/04/2_5/o/y2_1_pUGg5XAG2u_20220104.jpg\\"/>","url":"https://www.yad2.co.il/item/ca1a9zpi","price":"2,850,000 ₪"}'
  },
  {
    latlon: '32.0887863333333,34.8052451111111',
    price: 2790000,
    url: 'https://www.yad2.co.il/item/huu7t92u',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202111/17/2_5/o/y2_1_3l9vLZGqEs_20211117.jpeg\\"/>","url":"https://www.yad2.co.il/item/huu7t92u","price":"2,790,000 ₪"}'
  },
  {
    latlon: '32.081422,34.804167',
    price: 2850000,
    url: 'https://www.yad2.co.il/item/iatca0mn',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202112/26/2_5/o/y2_1_01413_20211226113133.jpeg\\"/>","url":"https://www.yad2.co.il/item/iatca0mn","price":"2,850,000 ₪"}'
  },
  {
    latlon: '32.081422,34.804167',
    price: 2800000,
    url: 'https://www.yad2.co.il/item/q8axm842',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202106/29/2_5/o/y2_1_8aUKuS3NPD_20210629.jpg\\"/>","url":"https://www.yad2.co.il/item/q8axm842","price":"2,800,000 ₪"}'
  },
  {
    latlon: '32.0808449166667,34.8068744166667',
    price: 2690000,
    url: 'https://www.yad2.co.il/item/rsyd3tb7',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202112/26/2_5/o/y2_1_ukuxVegh6n_20211226.jpg\\"/>","url":"https://www.yad2.co.il/item/rsyd3tb7","price":"2,690,000 ₪"}'
  },
  {
    latlon: '32.0806729545454,34.8048565',
    price: 2690000,
    url: 'https://www.yad2.co.il/item/svzmxi',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/201909/10/2_5/o/o2_5_1_737088_20190910140900.jpg\\"/>","url":"https://www.yad2.co.il/item/svzmxi","price":"2,690,000 ₪"}'
  },
  {
    latlon: '32.0937641282051,34.7776329230769',
    price: 2750000,
    url: 'https://www.yad2.co.il/item/ty4c77',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202002/02/2_5/o/o2_5_1_02216_20200202070243.jpg\\"/>","url":"https://www.yad2.co.il/item/ty4c77","price":"2,750,000 ₪"}'
  },
  {
    latlon: '32.080739875,34.810271875',
    price: 2300000,
    url: 'https://www.yad2.co.il/item/yatr1x5q',
    other: '{"img_url":"<img src=\\"https://img.yad2.co.il/Pic/202204/13/2_5/o/y2_1_aysIvJck0o_20220413.jpeg\\"/>","url":"https://www.yad2.co.il/item/yatr1x5q","price":"2,300,000 ₪"}'
  }
]