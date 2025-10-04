function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-green-800 to-blue-300 shadow-md hidden md:block">
        <div className="p-4 font-bold text-2xl text-white">Car Driving 🚛</div>
        <nav className="p-4 space-y-2 text-white">
          <button
            onClick={() => setActiveTab("planner")}
            className={`block w-full text-left p-2 rounded ${
              activeTab === "planner" ? "bg-blue-500" : "hover:bg-blue-600"
            }`}
          >
            Trip Planner
          </button>
          <button
            onClick={() => setActiveTab("logs")}
            className={`block w-full text-left p-2 rounded ${
              activeTab === "logs" ? "bg-blue-500" : "hover:bg-blue-600"
            }`}
          >
            Logs
          </button>
          <button onClick={() => setActiveTab("map")} className={`block w-full text-left p-2 rounded ${ activeTab === "map" ? "bg-blue-500" : "hover:bg-blue-600"}`}>
             Route Map
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-700">
            {activeTab === "planner" ? "Trip Planner" : "Driver Logs"}
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Export Logs
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
