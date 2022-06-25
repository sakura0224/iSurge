/*
 * 由@congcong0806编写
 * 原脚本地址：https://github.com/congcong0806/surge-list/blob/master/Script/ipcheck.js
 * 已删去ip信息，可在content添加IP信息：${ip}\n
 */

let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `所在地：${emoji}${country} - ${city}\n运营商：${isp}`,
    icon: "globe.asia.australia.fill",
    "icon-color":"#6EA4D2"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
