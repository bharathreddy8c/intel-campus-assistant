import campusHero from "@/assets/campus-hero.jpg";

export const CampusHeader = () => {
  return (
    <div className="relative h-48 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${campusHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-85" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Smart Campus Assistant
        </h1>
        <p className="text-lg text-white/90 max-w-2xl">
          Your AI-powered guide to campus information, services, and administrative procedures
        </p>
      </div>
    </div>
  );
};