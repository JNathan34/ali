import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import yogaImg from "@assets/generated_images/yoga_pose_illustration.png";

const tips = [
  { title: "Morning Stretch", duration: "5 min", level: "Beginner", image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Core Blast", duration: "10 min", level: "Intermediate", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Meditation", duration: "15 min", level: "All Levels", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Power Yoga", duration: "20 min", level: "Advanced", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D" },
];

export function ExerciseTips() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">Quick Exercises & Tips</h3>
        <button className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center">
            View Library <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-3xl p-6 flex items-center justify-between relative overflow-hidden">
        <div className="relative z-10 max-w-md">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-primary text-xs font-bold mb-3 shadow-sm">Daily Tip</span>
            <h4 className="text-xl font-bold text-foreground mb-2">Post-Workout Recovery</h4>
            <p className="text-muted-foreground mb-4">Ideally, stretch your major muscle groups for at least 10 minutes after every workout to reduce soreness.</p>
            <button className="text-sm font-bold text-primary hover:underline">Read more</button>
        </div>
        <img src={yogaImg} alt="Yoga" className="w-32 h-32 object-contain relative z-10 mix-blend-multiply opacity-90" />
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tips.map((tip, i) => (
            <Card key={i} className="group border-none shadow-none bg-transparent cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <img src={tip.image} alt={tip.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white text-xs font-medium">
                        <span className="bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">{tip.duration}</span>
                    </div>
                </div>
                <h5 className="font-bold text-foreground group-hover:text-primary transition-colors">{tip.title}</h5>
                <p className="text-xs text-muted-foreground">{tip.level}</p>
            </Card>
        ))}
      </div>
    </div>
  );
}
