import { CampusHeader } from "@/components/CampusHeader";
import { ChatInterface } from "@/components/ChatInterface";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CampusHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="h-[600px] shadow-elegant border-0 overflow-hidden">
          <ChatInterface />
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Available 24/7 to help with your campus needs • Powered by AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
