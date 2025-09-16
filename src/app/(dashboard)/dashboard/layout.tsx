import React from "react";
import { AppSidebar } from "@/_components/AppSidebar";
import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/_components/ui/sidebar";
import { Bell, User } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const DashboardLayout = ({
  children,
  title,
  description,
}: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center justify-between h-full px-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-accent" />
                {title && (
                  <div>
                    <h1 className="text-lg font-semibold text-foreground">
                      {title}
                    </h1>
                    {description && (
                      <p className="text-sm text-muted-foreground">
                        {description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    3
                  </Badge>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-background">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

// export function DashboardLayout({
//   children,
//   title,
//   description,
// }: DashboardLayoutProps) {
//   return (
//     <SidebarProvider>
//       <div className="min-h-screen flex w-full bg-background">
//         <AppSidebar />

//         <div className="flex-1 flex flex-col">
//           {/* Header */}
//           <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
//             <div className="flex items-center justify-between h-full px-4">
//               <div className="flex items-center gap-4">
//                 <SidebarTrigger className="hover:bg-accent" />
//                 {title && (
//                   <div>
//                     <h1 className="text-lg font-semibold text-foreground">
//                       {title}
//                     </h1>
//                     {description && (
//                       <p className="text-sm text-muted-foreground">
//                         {description}
//                       </p>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div className="flex items-center gap-3">
//                 <Button variant="ghost" size="icon" className="relative">
//                   <Bell className="h-4 w-4" />
//                   <Badge
//                     variant="destructive"
//                     className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
//                   >
//                     3
//                   </Badge>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <User className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </header>

//           {/* Main Content */}
//           <main className="flex-1 p-6 bg-background">{children}</main>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }
