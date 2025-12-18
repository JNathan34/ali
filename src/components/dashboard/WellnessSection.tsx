import quoteBg from "@assets/generated_images/peaceful_nature_landscape_for_quote.png";
import { Quote } from "lucide-react";

export function WellnessSection() {
  return (
    <div className="relative w-full h-64 rounded-[32px] overflow-hidden group shadow-md mt-8">
      <img 
        src={quoteBg} 
        alt="Wellness Background" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-[2px]"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full mb-6">
            <Quote className="w-6 h-6 fill-white text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif italic leading-relaxed max-w-2xl text-shadow-sm">
          "Take care of your body. It's the only place you have to live."
        </h3>
        <p className="mt-4 text-white/80 font-medium tracking-wide text-sm uppercase">— Jim Rohn</p>
      </div>
    </div>
  );
}
