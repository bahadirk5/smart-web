import { RefreshCw, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Cameras = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Cameras</h1>
          <p className="text-muted-foreground">Camera views and controls</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Search Cameras</span>
          </Button>
        </div>
      </div>
      <div className="max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Camera Settings</CardTitle>
            <CardDescription>Configure camera behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-scan" className="font-medium">
                Automatic Camera Scanning
              </Label>
              <Switch id="auto-scan" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="audio-record" className="font-medium">
                Camera Audio Recording
              </Label>
              <Switch id="audio-record" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">CAMERA1</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Connected
              </Button>
            </div>
            <CardDescription className="text-xs">
              192.168.1.20 rtsp://192.168.1.20:554/stream1
              rtsp://192.168.1.20:554/stream2
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black flex items-center justify-center text-white">
              <div className="text-center">
                <p>CAMERA FEED</p>
                <p className="text-sm text-gray-400">2025-04-04 14:50:42</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">CAMERA2</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Connected
              </Button>
            </div>
            <CardDescription className="text-xs">
              192.168.1.21 rtsp://192.168.1.21:554/stream1
              rtsp://192.168.1.21:554/stream2
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black flex items-center justify-center text-white">
              <div className="text-center">
                <p>CAMERA FEED</p>
                <p className="text-sm text-gray-400">2025-04-04 14:50:42</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cameras;
