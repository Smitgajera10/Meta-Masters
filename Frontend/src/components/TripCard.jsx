import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "../components/Card";
import { Progress } from "../components/progress";
import { useNavigate } from "react-router-dom";


const TripCard = ({ trip }) => {
  const navigate = useNavigate();
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const progress = trip.stats && trip.stats.totalItems > 0
    ? Math.round((trip.stats.itemsPacked / trip.stats.totalItems) * 100)
    : 0;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-50 p-4 border-b">
        <h3 className="font-semibold text-lg">{trip.name}</h3>
        <div className="text-sm text-gray-500 mt-1">
          <p>Event Type: {trip.type}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{trip.location}</span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Packing Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center mt-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-lg font-bold">{trip.stats?.totalItems || 0}</p>
            <p className="text-xs text-gray-500">Total Items</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-lg font-bold">{trip.stats?.itemsPacked || 0}</p>
            <p className="text-xs text-gray-500">Packed</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-lg font-bold">{trip.stats?.itemsPending || 0}</p>
            <p className="text-xs text-gray-500">Pending</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-3 border-t">
        <div className="flex justify-end">
          <button className="text-primary hover:text-primary/80 text-sm font-medium"
          onClick={() => navigate(`/trip/${trip._id}`)}>
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TripCard;
