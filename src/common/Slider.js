import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className="slick-carousel">
            <div>
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
                    a nihil neque earum doloremque quos provident quas iusto nostrum
                    debitis excepturi magni eius tempora aperiam asperiores blanditiis
                    cumque! Suscipit, quas? 1
                </p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ut
                    corrupti, nulla perspiciatis assumenda enim eos soluta quas dolorem,
                    voluptate eligendi dignissimos pariatur velit laborum sed officiis
                    repellendus delectus? Cumque. 2
                </p>
            </div>
            <div>
                <p>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
                    corrupti, voluptatibus culpa veritatis cumque officia dolor vitae sunt
                    nulla facilis et aut ad fugiat eligendi repellendus velit eius hic
                    optio. 3
                </p>
            </div>
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                    incidunt totam voluptatibus, ipsum dolorum eaque, voluptatum provident
                    architecto tenetur pariatur modi magni dolore ratione? Porro nisi
                    magnam illum animi sint? 4
                </p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
                    soluta alias. Pariatur assumenda maiores ipsa fugiat ipsum, eum
                    dolorum numquam tempore modi dolore. Esse officia provident, eum alias
                    iure laboriosam. 5
                </p>
            </div>
            <div>
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                    cupiditate ducimus saepe animi, molestiae natus nulla quisquam! Natus,
                    nulla consectetur. Suscipit neque officiis provident tempore ipsa
                    exercitationem deleniti aspernatur rem! 6
                </p>
            </div>
        </Slider>
    );
}

export default SimpleSlider;
