"use client";

import { Sparkles, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function UpgradeModal({ isOpen, onClose, trigger = "limit" }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <DialogTitle className="text-2xl">Upgrade to Pro</DialogTitle>
          </div>
          <DialogDescription>
            {trigger === "header" && "Create Unlimited Events with Pro! "}
            {trigger === "limit" && "You've reached your free event limit. "}
            {trigger === "color" && "Custom theme colors are a Pro feature. "}
            Unlock unlimited events and premium features!
          </DialogDescription>
        </DialogHeader>

        {/* Custom Pricing Card */}
        <div className="my-6 border rounded-lg p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
            <div className="text-4xl font-bold mb-2">10 Doller</div>
            <p className="text-sm text-muted-foreground">
              Currently in development
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Unlimited events</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Custom theme colors</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Priority support</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Pro features coming soon! For now, enjoy the free plan.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Maybe Later
          </Button>
          <Button
            onClick={() => {
              // You can add upgrade logic here when billing is enabled
              window.open("https://dashboard.clerk.com", "_blank");
              onClose();
            }}
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            Learn More
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
