import backgroundimage from '/img/Landing/landing_small.png';

const Landing_small = () => {
  return (
    <div className="md:hidden block relative h-screen">
      <img 
        src={backgroundimage} 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover" 
      />
    </div>
  );
};

export default Landing_small;