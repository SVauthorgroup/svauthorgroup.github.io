var pathname = window.location.pathname;
var useragent = navigator.userAgent
AV.init({
    appId: "EWfYXttXSfp4LeDn2jzH5Q69-gzGzoHsz",
    appKey: "EaX7T9RpmKYzYPYzHblpRlI5",
    serverURL: "https://ewfyxttx.lc-cn-n1-shared.com"
  });

const IP = AV.Object.extend('IP');
const ip = new IP();

ip.set('ip', returnCitySN["cip"]);
ip.set('cid', returnCitySN["cid"]);
ip.set('city', returnCitySN["cname"]);
ip.set('browser',useragent);
ip.set('path',pathname);

ip.save()