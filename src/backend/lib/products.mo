import List "mo:core/List";
import Types "../types/products";

module {
  public func seedProducts(products : List.List<Types.Product>) {
    if (products.size() > 0) { return };
    let seed : [Types.Product] = [
      {
        id = 1;
        name = "500W Monocrystalline Solar Panel";
        category = "panels";
        description = "High-efficiency 500W monocrystalline silicon solar panel with anti-reflective coating. Ideal for residential and commercial rooftop installations. 25-year power output warranty.";
        imageUrl = null;
      },
      {
        id = 2;
        name = "400W Bifacial Solar Panel";
        category = "panels";
        description = "Bifacial 400W solar panel captures sunlight from both sides for up to 30% higher energy yield. Perfect for ground-mount and rooftop with reflective surfaces. Robust aluminum frame.";
        imageUrl = null;
      },
      {
        id = 3;
        name = "3kW String Inverter";
        category = "inverters";
        description = "Reliable 3kW string inverter with 98% peak efficiency. Compatible with all major solar panel brands. Built-in WiFi monitoring and MPPT tracking for optimal performance.";
        imageUrl = null;
      },
      {
        id = 4;
        name = "5kW Hybrid Inverter";
        category = "inverters";
        description = "5kW hybrid inverter supports both on-grid and off-grid operation. Integrated battery management system, dual MPPT input, and real-time monitoring via mobile app.";
        imageUrl = null;
      },
      {
        id = 5;
        name = "10kWh LiFePO4 Battery";
        category = "batteries";
        description = "10kWh lithium iron phosphate (LiFePO4) battery storage with 6000+ cycle life. Safe, maintenance-free, wall-mountable design. Compatible with all hybrid inverters.";
        imageUrl = null;
      },
      {
        id = 6;
        name = "Rooftop Mounting Structure (Aluminum)";
        category = "mounting";
        description = "Heavy-duty anodized aluminum rooftop mounting structure for RCC and metal roofs. Adjustable tilt angle (10°–30°), corrosion-resistant, wind-load rated up to 180 km/h.";
        imageUrl = null;
      },
      {
        id = 7;
        name = "Solar Charge Controller 60A MPPT";
        category = "other";
        description = "60A MPPT solar charge controller with 99% tracking efficiency. Supports 12V/24V/48V battery systems. LCD display, multiple load control modes, and over-charge protection.";
        imageUrl = null;
      },
      {
        id = 8;
        name = "5kW On-Grid Solar System Package";
        category = "other";
        description = "Complete 5kW on-grid solar system package including panels, string inverter, mounting structure, DC/AC cables, junction box, and installation accessories. Pan-India delivery.";
        imageUrl = null;
      },
    ];
    for (p in seed.vals()) {
      products.add(p);
    };
  };

  public func getProducts(products : List.List<Types.Product>) : [Types.Product] {
    products.toArray();
  };
};
