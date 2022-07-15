import SimpleSlider from "../../common/Slider";

function Testimonial({ testimonialBg }) {
    return (
        <div
            className="testimonial-container"
            style={{ backgroundColor: testimonialBg }}
        >
            <h1>Ervaringen</h1>

            <SimpleSlider />
        </div>
    );
}

export default Testimonial;