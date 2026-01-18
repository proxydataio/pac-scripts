function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  // Optional: always bypass local addresses
  if (isPlainHostName(host)) return "DIRECT";
  if (host === "localhost" || host === "127.0.0.1") return "DIRECT";

  // Proxies by country
  var US = "SOCKS5 193.233.220.60:1085";
  var NL = "SOCKS5 45.148.233.62:1085";
  var RU = "SOCKS5 213.232.121.213:1085";
  var IL = "SOCKS5 45.145.131.209:1085";
  var FR = "SOCKS5 170.168.29.194:1085";
  var DE = "SOCKS5 170.168.243.38:1085";
  var TR = "SOCKS5 130.49.112.96:1085";
  var PL = "SOCKS5 157.22.46.134:1085";

  // Routing rules (selected sites)
  if (dnsDomainIs(host, "ebay.com")) return US;
  if (dnsDomainIs(host, "marktplaats.nl")) return NL;
  if (dnsDomainIs(host, "wildberries.ru")) return RU;
  if (dnsDomainIs(host, "ynet.co.il")) return IL;
  if (dnsDomainIs(host, "orange.fr")) return FR;
  if (dnsDomainIs(host, "check24.de")) return DE;
  if (dnsDomainIs(host, "hurriyet.com.tr")) return TR;
  if (dnsDomainIs(host, "olx.pl")) return PL;

  // Everything else goes directly
  return "DIRECT";
}
