import { ImageList, ImageListItem } from "@mui/material";
import Film from '../assets/imglist';
export default function Gallery() {
  return (
    <main className="bg-zinc-950">
      <div>
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