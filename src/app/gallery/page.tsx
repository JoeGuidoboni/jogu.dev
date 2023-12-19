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
    <main className="bg-zinc-950 pb-32">
      <NavBar></NavBar>
      <div className="w-full h-full font-mono flex items-center justify-center">
        <div className="max-w-5xl">
          <div className="py-6">
            Some memories.
            <br/>
            I got into film photography some time in college and bring my Canon AE-1 with me any time I travel
          </div>
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
    </main>
  );
}




