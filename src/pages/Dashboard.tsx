import {
  RefreshCw,
  Clock,
  Thermometer,
  HardDrive,
  MemoryStickIcon as Memory,
  Wifi,
  Zap,
  Battery,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Status</h1>
          <p className="text-muted-foreground">
            Device system information and status
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Clock className="h-4 w-4" />
            <span>Sync Time</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="status">
        <TabsList>
          <TabsTrigger value="status">System Status</TabsTrigger>
          <TabsTrigger value="info">System Info</TabsTrigger>
        </TabsList>
        <TabsContent value="status" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Temperature
                </CardTitle>
                <Thermometer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">71.11°C</div>
                <p className="text-xs text-muted-foreground">
                  Normal operating temperature
                </p>
                <Progress value={65} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Disk Usage
                </CardTitle>
                <HardDrive className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">115/123 GB</div>
                <p className="text-xs text-muted-foreground">93% used</p>
                <Progress value={93} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Memory</CardTitle>
                <Memory className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 GB</div>
                <p className="text-xs text-muted-foreground">47% used</p>
                <Progress value={47} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5 days</div>
                <p className="text-xs text-muted-foreground">
                  Remaining: 15 minutes
                </p>
                <Progress value={98} className="mt-2 h-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>
                  Device system details and network information
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Version
                    </p>
                    <p>1.0-D20250327T143110</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      System Time
                    </p>
                    <p>2025-04-04 14:50:07</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      IP Address
                    </p>
                    <p>192.168.1.2</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Cable IP
                    </p>
                    <p>192.168.1.202</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      GSM IP
                    </p>
                    <p className="text-muted-foreground">None</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Disk Status
                    </p>
                    <p className="text-green-500">Working</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connection Status</CardTitle>
                <CardDescription>
                  Network and power connection status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5" />
                    <span>WiFi</span>
                  </div>
                  <div className="h-2 w-16 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span>Power</span>
                  </div>
                  <div className="h-2 w-16 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Battery className="h-5 w-5" />
                    <span>Battery</span>
                  </div>
                  <div className="h-2 w-16 rounded-full bg-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="info" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed System Information</CardTitle>
              <CardDescription>
                Complete system specifications and configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Hardware Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processor</span>
                      <span>ARM Cortex-A53</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Memory</span>
                      <span>2GB DDR4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Storage</span>
                      <span>128GB eMMC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Serial Number
                      </span>
                      <span>MOV2025040412</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Network Configuration</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IP Address</span>
                      <span>192.168.1.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gateway</span>
                      <span>192.168.1.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">WiFi SSID</span>
                      <span>movita0e16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">MAC Address</span>
                      <span>00:11:22:33:44:55</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
