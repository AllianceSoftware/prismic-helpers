export default {
  url(link, linkResolver) {
    if(link.link_type === 'Document') {
      return linkResolver ? linkResolver(link, link.isBroken) : '';
    } else {
      if link.url.startsWith('https://__relative__') {
        return link.url.replace('https://__relative__', '');
      }
      return link.url;
    }
  }
}
