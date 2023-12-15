import { ImageList, ImageListItem } from "@mui/material";
import Film from '../assets/imglist';
export default function Gallery() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24bg-zinc-950">
      <div className="z-10 max-w-5xl max-h-screen w-full font-mono text-sm lg:flex">
        <ImageList variant="masonry" cols={3} gap={10}>
          {Film.map((item) => (
            <ImageListItem key={item.img}>
              <img
              srcSet={`img/${item.img}`}
              src={`img/${item.img}`}
              alt={`img/${item.alt}`}/>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </main>
  );
}