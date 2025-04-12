import React from "react";
import { Plus } from "lucide-react";
import { Card } from "../components/Card";

const AddTripCard = () => {
  return (
    <Card className="border-dashed border-2 h-full flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Plus className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-medium text-lg mb-2">Add New Trip</h3>
      <p className="text-gray-500 text-sm text-center">
        Click to create a new trip for your group
      </p>
    </Card>
  );
};

export default AddTripCard;
