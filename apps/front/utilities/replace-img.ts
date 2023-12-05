export const replaceImages = (content: string, images: any) => {
  return content.replace(/<image(\d+)>/g, (match, pos) => {
    const image = images.find((img: any) => img.pos === parseInt(pos));
    if (image) {
      return `<img src="${image.url}"/>`;
    }
    return match;
  });
};
