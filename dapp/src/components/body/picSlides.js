import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import '../../style/PicSlide.css';

// import '../../../src/assets';

function Slides() {
    const auctionPosters = [
        {image : "/assets/a1.jpg"},
        {image : "/assets/a2.jpeg"},
        {image : "/assets/a3.jpeg"}
    ];
    // const recentlyLoaded = [];

    const [activeImgNum, setCurrent] = useState(0);
    const slideLen = auctionPosters.length;

    const nextSlide = () => {
        setCurrent(
            activeImgNum === slideLen - 1 ? 0 : activeImgNum + 1
        );
    };

    const prevSlide = () => {
        setCurrent(activeImgNum === 0 ? slideLen - 1 : activeImgNum - 1);
    }

    if (!Array.isArray(auctionPosters) || auctionPosters.length <= 0) {
        return null;
    }

    return(
        <Card>
            <CardContent>
                <h2>
                    Upcoming Auctions
                </h2>
                <section className="image-slider">
                    <div class="left">
                        <ArrowBackIosIcon onClick = { prevSlide }/>
                    </div>
                    <div class="right">
                        <ArrowForwardIosIcon onClick = { nextSlide }/>
                    </div>
                    {
                        auctionPosters.map( (currentSlide , ind) => {
                            return (
                                <div
                                    className={ind === activeImgNum ? "currentSlide active" : "currentSlide"}
                                    key={ind}
                                >
                                    {ind === activeImgNum && <img src={currentSlide.image} className="image" alt="Upcoming Auctions"/>}                                </div>
                            );
                        })
                    }
                </section>

            </CardContent>
        </Card>
    );

};

export default Slides;