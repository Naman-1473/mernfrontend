export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'https://mernbackend-hbbt.onrender.com/uploads/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}