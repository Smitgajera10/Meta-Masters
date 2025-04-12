import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TripCard from "../components/TripCard"

function OwnerDashboard() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="grid grid-cols-3 gap-2 overflow-y-auto p-6">
                    <TripCard trip={{ _id: "5146521651wd",
                    name: "Summer Camping Trip",
                    type: "Trip",
                    startDate: "2023-07-15",
                    endDate: "2023-07-22",
                    location: "Yellowstone National Park",
                    stats: {
                        totalItems: 35,
                    itemsPacked: 18,
                    itemsPending: 14,
                    itemsDelivered: 3,
                            },
                        }}
                     />
                    <TripCard trip={{ _id: "5146521651wd",
                    name: "Summer Camping Trip",
                    type: "Trip",
                    startDate: "2023-07-15",
                    endDate: "2023-07-22",
                    location: "Yellowstone National Park",
                    stats: {
                        totalItems: 35,
                    itemsPacked: 18,
                    itemsPending: 14,
                    itemsDelivered: 3,
                            },
                        }}
                     />
                    <TripCard trip={{ _id: "5146521651wd",
                    name: "Summer Camping Trip",
                    type: "Trip",
                    startDate: "2023-07-15",
                    endDate: "2023-07-22",
                    location: "Yellowstone National Park",
                    stats: {
                        totalItems: 35,
                    itemsPacked: 18,
                    itemsPending: 14,
                    itemsDelivered: 3,
                            },
                        }}
                     />
                </main>
            </div>
        </div>
    )
}

export default OwnerDashboard