import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import { Droplets, Dumbbell, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  {
    name: 'Hydration',
    uv: 31.47,
    pv: 2400,
    fill: '#3b82f6',
  },
  {
    name: 'Fat Burn',
    uv: 26.69,
    pv: 4567,
    fill: '#8b5cf6',
  },
  {
    name: 'Muscle',
    uv: 15.69,
    pv: 1398,
    fill: '#ec4899',
  },
];

const reminders = [
  { title: "Drink Water", time: "14:00", icon: Droplets, color: "text-blue-500 bg-blue-50" },
  { title: "Afternoon Stretch", time: "15:30", icon: Dumbbell, color: "text-purple-500 bg-purple-50" },
  { title: "Meal Prep", time: "18:00", icon: Calendar, color: "text-green-500 bg-green-50" },
  { title: "Sleep Routine", time: "22:00", icon: Clock, color: "text-indigo-500 bg-indigo-50" },
];

export function RightSidebar() {
  return (
    <aside className="hidden xl:block w-80 bg-white border-l border-border/60 p-6 h-screen overflow-y-auto fixed right-0 top-0 pt-24 z-20">
      
      <div className="mb-10">
        <h3 className="font-bold text-lg mb-6 text-foreground">Body Goals</h3>
        
        <div className="bg-background rounded-3xl p-4 mb-6 shadow-inner">
           <div className="flex justify-between items-end mb-2">
              <span className="text-sm text-muted-foreground">Weight</span>
              <span className="font-bold text-foreground">64.5 <span className="text-xs text-muted-foreground font-normal">kg</span></span>
           </div>
           <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
             <div className="bg-primary h-2 rounded-full w-[70%]"></div>
           </div>
           <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>Start: 70kg</span>
              <span>Goal: 60kg</span>
           </div>
        </div>

        <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="100%" barSize={10} data={data}>
                <RadialBar
                background
                dataKey="uv"
                cornerRadius={10}
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ right: 0, top: '50%', transform: 'translate(0, -50%)', fontSize: '12px', fontWeight: 600 }} />
            </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center -ml-12 pointer-events-none">
                <div className="text-center">
                    <span className="block text-2xl font-bold">75%</span>
                    <span className="text-[10px] text-muted-foreground uppercase">Daily Goal</span>
                </div>
            </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-6 text-foreground">Schedule</h3>
        <div className="space-y-4">
            {reminders.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h5 className="font-semibold text-sm text-foreground">{item.title}</h5>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="ml-auto">
                        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-primary transition-colors"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
    </aside>
  );
}
