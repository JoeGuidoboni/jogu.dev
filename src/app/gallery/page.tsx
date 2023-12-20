import { ImageList, ImageListItem, modalClasses, Modal } from "@mui/material";
import Film from "../../assets/imglist";
import NavBar from "@/components/navbar";

export default function Gallery() {
  // const handleClose = () => {
  //   setOpen(false);
  // }

  // const handleImage = (value) => {
  //   setImage(value);
  //   setOpen(true);
  // }

  // const [open, setOpen] = useState(false);
  // const [image, setImage] = useState("false");

  return (
    <main className="bg-zinc-900 pb-32 font-mono">
      <NavBar></NavBar>
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-5xl">
          <div className="border-amber-400 border-r-2 border-b-2 p-2 text-right">
            Some memories.
            <br />I got into film photography some time in college and bring my
            Canon AE-1 with me any time I travel
          </div>
          <div className="p-6">
            <ImageList variant="masonry" cols={3} gap={10}>
              {Film.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`img/${item.img}`}
                    src={`img/${item.img}`}
                    alt={`img/${item.alt}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            {/* <Modal
            className={modalClasses}
            open={open} 
            >
          </Modal> */}
          </div>
        </div>
      </div>
    </main>
  );
}
