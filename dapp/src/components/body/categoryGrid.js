import { Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Categories() {
    const CatGrid = [
        {name: "Collections", image : "/assets/Collectibles.png"},
        {name: "Signed", image : "/assets/Signed.png"},
        {name: "Rare", image : "/assets/Rare.png"},
        {name: "Other", image : "/assets/EverythingElse.png"}
    ];
    return(
        <center>
            <div>
                <h1 style={{ color: "#162d0d" }}>CATEGORIES</h1>
                {/* <h2></h2> */}
            </div>
            <div>
                <ImageList sx={{ width: 300, height: 360 }}
                    cols={2} rowHeight={170}>
                    {CatGrid.map((idx) => (
                        <ImageListItem key={idx.image} >
                            <img
                                src={`${idx.image}?w=
                                164&h=164&fit=crop&auto=format`}
                                srcSet={`${idx.image}?w=
                                164&h=164&fit=crop&auto=format&dpr=2 2x`}

                                alt={idx.name}
                            />
                            <Button style={{ background: "#162d0d", color: "#d4af37" }} variant='contained'> {idx.name} </Button>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </center>
    );
}

export default Categories;