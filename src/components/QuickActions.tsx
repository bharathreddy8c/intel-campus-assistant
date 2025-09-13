import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calendar, 
  MapPin, 
  Phone, 
  CreditCard, 
  GraduationCap,
  Clock,
  Users
} from "lucide-react";

interface QuickActionsProps {
  onQuickAction: (action: string) => void;
}

const quickActions = [
  { icon: BookOpen, label: "Course Information", action: "Tell me about course registration and schedules" },
  { icon: Calendar, label: "Campus Events", action: "What events are happening on campus this week?" },
  { icon: MapPin, label: "Campus Map", action: "Help me find buildings and facilities on campus" },
  { icon: CreditCard, label: "Tuition & Fees", action: "I need information about tuition payments and fees" },
  { icon: Clock, label: "Office Hours", action: "What are the administrative office hours?" },
  { icon: Users, label: "Student Services", action: "I need help with student services and support" },
  { icon: GraduationCap, label: "Academic Support", action: "I need academic advising and tutoring information" },
  { icon: Phone, label: "Emergency Contacts", action: "Show me important campus contact numbers" },
];

export const QuickActions = ({ onQuickAction }: QuickActionsProps) => {
  return (
    <div className="p-6 border-t bg-muted/30">
      <h3 className="text-sm font-medium text-foreground mb-4">
        Common Questions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="h-auto p-3 flex flex-col items-center gap-2 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
            onClick={() => onQuickAction(action.action)}
          >
            <action.icon className="h-4 w-4 text-primary" />
            <span className="text-xs text-center leading-tight">
              {action.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};