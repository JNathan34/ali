import { Home, PlayCircle, BookOpen, Utensils, Heart, Zap, Calendar, Settings, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: PlayCircle, label: "Workout Videos", href: "/workouts" },
  { icon: Zap, label: "Guided Exercise Tips", href: "/tips" },
  { icon: Utensils, label: "Meal Plans", href: "/meals" },
  { icon: BookOpen, label: "Nutrition Guide", href: "/nutrition" },
  { icon: Heart, label: "Wellness Tips", href: "/wellness" },
  { icon: Zap, label: "Motivation Hub", href: "/motivation" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border hidden lg:flex flex-col">
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Heart className="w-5 h-5 fill-primary" />
        </div>
        <span className="font-bold text-xl tracking-tight text-sidebar-foreground">FitWell UK</span>
      </div>

      <div className="flex-1 px-4 py-2 space-y-8 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 group",
                location === item.href 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" 
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}>
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  location === item.href ? "text-primary" : "text-sidebar-foreground/50 group-hover:text-primary/70"
                )} />
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="px-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 border border-primary/5">
                <h4 className="font-semibold text-primary mb-1 text-sm">Pro Plan</h4>
                <p className="text-xs text-muted-foreground mb-3">Get unlimited access</p>
                <button className="w-full py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg shadow-md hover:shadow-lg transition-all">Upgrade Now</button>
            </div>
        </div>
      </div>

      <div className="p-4 border-t border-sidebar-border space-y-1">
        {bottomItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground rounded-2xl transition-all">
              <item.icon className="w-5 h-5 text-sidebar-foreground/50" />
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
}
