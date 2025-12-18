import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNav } from "@/components/dashboard/TopNav";
import { Hero } from "@/components/dashboard/Hero";
import { DailyMetrics } from "@/components/dashboard/DailyMetrics";
import { ExerciseTips } from "@/components/dashboard/ExerciseTips";
import { MealPlans } from "@/components/dashboard/MealPlans";
import { WellnessSection } from "@/components/dashboard/WellnessSection";
import { RightSidebar } from "@/components/dashboard/RightSidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground flex font-sans selection:bg-primary/20">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 relative">
        <TopNav />
        
        <div className="p-6 md:p-8 xl:mr-80 max-w-[1600px] mx-auto space-y-10 pb-24">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <Hero />
          </section>
          
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
             <DailyMetrics />
          </section>

          <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
             <ExerciseTips />
             <MealPlans />
          </div>

          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
             <WellnessSection />
          </section>
        </div>

        <RightSidebar />
      </main>
    </div>
  );
}
