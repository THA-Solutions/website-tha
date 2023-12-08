export const baseToBlob = (base64: string, mimeType: string): Blob => {
  //Limpa a base 64 das imagens
  const cleanedBase = base64.replace(/\s/g, '');

  //Decodifica a base64
  const byteString = window.atob(cleanedBase);
  //Cria um array buffer
  const arrayBuffer = new ArrayBuffer(byteString.length);
  //Cria um array de 8 bits sem sinal
  const int8Array = new Uint8Array(arrayBuffer);

  //Percorre o array de 8 bits sem sinal
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: mimeType });
};

const matcher = (txt: string, regex: RegExp) => {
  let result = txt.match(regex);
  if (result) {
    return result;
  }
  return null;
};

export const imageScanner = (txt: string) => {
  const file: any = [];
  let imgTags = matcher(txt, /<img[^>]+src="data:image[^">]+">/g);

  if (imgTags) {
    imgTags.forEach((imgTag) => {
      let imgSrc = matcher(imgTag, /src="([^"]+)"/);

      if (imgSrc && imgSrc.length > 0) {
        const base64 = imgSrc[1].split(';base64,')[1];

        if (base64) {
          const type = imgSrc[1].split(';')[0].split(':')[1];
          const blob = baseToBlob(base64, type);
          const imageFile = new File(
            [blob],
            `image${Math.floor(Math.random() * 11)}`,
            { type }
          );
          file.push(imageFile);
        }
      }
    });
  }
  console.log(file);
  return file;
};

export default function txtFormat(txt: string) {
  try {
    return imageScanner(txt);
  } catch (error) {
    throw Error(`Error in formating content ${error}`);
  }
}
