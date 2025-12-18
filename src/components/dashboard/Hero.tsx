import { Play, Clock, BarChart, Dumbbell } from "lucide-react";
import heroImage from "@assets/generated_images/featured_workout_video_thumbnail.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
      <img 
        src={heroImage} 
        alt="Featured Workout" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-white">
        <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-0 mb-4 px-3 py-1 text-xs font-medium tracking-wide uppercase">
          Daily Featured
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Morning Full-Body Burn</h2>
        
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-white/90 text-sm md:text-base font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> 45 min
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="w-4 h-4" /> Intermediate
          </div>
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4" /> No Equipment
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
            {["HIIT", "Strength", "Cardio"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs border border-white/20">
                    {tag}
                </span>
            ))}
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button size="lg" className="h-14 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            <Play className="w-5 h-5 mr-2 fill-primary" /> Start Workout
          </Button>
          <div className="hidden md:flex items-center gap-3 text-sm text-white/80">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Warm-up recommended
          </div>
        </div>
      </div>
    </div>
  );
}
