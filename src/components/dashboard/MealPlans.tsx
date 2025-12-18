import { Star, Clock, Flame } from "lucide-react";
import recipeImg from "@assets/generated_images/healthy_avocado_chicken_bowl.png";
import { Button } from "@/components/ui/button";

export function MealPlans() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">Featured Recipe</h3>
      </div>

      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all">
        <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
                <img src={recipeImg} alt="Avocado Chicken Bowl" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-200" />
                    <span className="text-xs text-muted-foreground ml-2">(128 reviews)</span>
                </div>
                
                <h4 className="text-2xl font-bold mb-2 text-foreground">Avocado Chicken Bowl</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                    {["High-Protein", "Low-Carb", "Gluten-Free"].map(tag => (
                        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-green-50 text-green-700 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-100 py-4">
                    <div className="text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Calories</p>
                        <p className="font-bold text-foreground">450</p>
                    </div>
                    <div className="text-center border-l border-gray-100">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Protein</p>
                        <p className="font-bold text-foreground">32g</p>
                    </div>
                    <div className="text-center border-l border-gray-100">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Prep</p>
                        <p className="font-bold text-foreground">15m</p>
                    </div>
                </div>

                <Button className="w-full rounded-xl font-bold bg-foreground text-background hover:bg-foreground/90 h-12">
                    View Full Recipe
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
