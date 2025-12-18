import { Search, Bell, Bookmark, HelpCircle, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import avatarUrl from "@assets/generated_images/user_avatar.png";

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur-md border-b border-border/40 px-6 py-4 flex items-center justify-between gap-4">
      <div className="flex-1 max-w-xl relative hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          className="pl-10 bg-white/50 border-transparent focus:bg-white focus:border-primary/20 transition-all rounded-full shadow-sm hover:shadow-md h-10" 
          placeholder="Search workouts, recipes, tips..." 
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-colors relative">
           <Bell className="w-5 h-5" />
           <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>
        <button className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-colors hidden sm:block">
           <Bookmark className="w-5 h-5" />
        </button>
        <button className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-colors hidden sm:block">
           <HelpCircle className="w-5 h-5" />
        </button>
        
        <div className="h-6 w-px bg-border mx-2 hidden sm:block"></div>

        <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-white/60 transition-colors">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold leading-none">Sarah Jenkins</p>
            <p className="text-xs text-muted-foreground">Pro Member</p>
          </div>
          <img src={avatarUrl} alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
        </button>
      </div>
    </header>
  );
}
