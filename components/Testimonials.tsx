import Slider from "./Slider";

const Testimonials = () => {
  return (
    <div
      className="lg:px-24 md:px-16 px-2 mt-20 gap-y-6 flex flex-col"
      id="testimonials"
    >
      <div className="text-start">
        <h2 className="text-white text-4xl md:text-5xl text-center lg:text-start">Client Testimonials</h2>
      </div>
      <div className="flex justify-center">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonials;
