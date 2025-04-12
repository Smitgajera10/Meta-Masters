import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TripCard from "../components/TripCard";
import axios from "axios";

function OwnerDashboard() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrips = async () => {
          try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/api/events", {
              headers: { Authorization: `Bearer ${token}` },
            });
            setTrips(response.data); // Set the fetched trips
          } catch (error) {
            console.error("Failed to fetch trips:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchTrips();
      }, []);

      if (loading) {
        return (
          <div className="flex h-screen items-center justify-center">
            <p>Loading...</p>
          </div>
        );
      }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="grid grid-cols-3 gap-2 overflow-y-auto p-6">
                    {trips.length > 0 ? (
                        trips.map((trip) => (
                            <TripCard key = {trip._id} trip={trip} />
                        ))
                    ) : (
                        <p className="text-gray-500">No trips found.</p>
                    )}
                </main>
            </div>
        </div>
    )
}

export default OwnerDashboard