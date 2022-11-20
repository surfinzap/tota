/* 
  Set previous Google Analytics cookies as expired

  Function requires exact path and domain to successfully change the expiration date

*/
function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Domain=.app.typopo.org;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

deleteCookie('_gid')
deleteCookie('_ga')