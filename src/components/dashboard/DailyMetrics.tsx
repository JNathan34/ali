import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { Footprints, Flame, Timer, Moon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const weeklyData = [
  { day: 'M', calories: 1200 },
  { day: 'T', calories: 1900 },
  { day: 'W', calories: 1500 },
  { day: 'T', calories: 2100 },
  { day: 'F', calories: 1800 },
  { day: 'S', calories: 2400 },
  { day: 'S', calories: 1600 },
];

function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  trend, 
  colorClass,
  iconBg
}: { 
  icon: any, 
  label: string, 
  value: string, 
  unit: string, 
  trend?: { value: string, up: boolean },
  colorClass: string,
  iconBg: string
}) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-3xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={cn("p-3 rounded-2xl", iconBg)}>
            <Icon className={cn("w-6 h-6", colorClass)} />
          </div>
          {trend && (
            <div className={cn(
              "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
              trend.up ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}>
              {trend.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {trend.value}
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-3xl font-bold tracking-tight text-foreground">{value}</h3>
            <span className="text-sm text-muted-foreground font-medium">{unit}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DailyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard 
        icon={Footprints} 
        label="Steps Today" 
        value="8,432" 
        unit="steps" 
        trend={{ value: "12%", up: true }}
        colorClass="text-blue-600"
        iconBg="bg-blue-50"
      />
      
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-3xl overflow-hidden md:col-span-1">
        <CardContent className="p-6 h-full flex flex-col justify-between">
           <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Calories Burned</p>
                <h3 className="text-2xl font-bold">1,840 <span className="text-sm font-normal text-muted-foreground">kcal</span></h3>
              </div>
              <div className="p-2 bg-orange-50 rounded-xl">
                 <Flame className="w-5 h-5 text-orange-500" />
              </div>
           </div>
           
           <div className="h-24 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={weeklyData}>
                 <defs>
                   <linearGradient id="colorCal" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                     <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    cursor={{ stroke: '#f97316', strokeWidth: 1, strokeDasharray: '4 4' }}
                 />
                 <Area 
                    type="monotone" 
                    dataKey="calories" 
                    stroke="#f97316" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorCal)" 
                 />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </CardContent>
      </Card>

      <MetricCard 
        icon={Moon} 
        label="Sleep Score" 
        value="85" 
        unit="/ 100" 
        trend={{ value: "4%", up: true }}
        colorClass="text-purple-600"
        iconBg="bg-purple-50"
      />
    </div>
  );
}
