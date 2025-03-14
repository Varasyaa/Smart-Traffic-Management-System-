# Smart-Traffic-Management-System-

Sensors & Data Collection:
IoT sensors (e.g., cameras, inductive loop detectors, GPS devices) collect real-time traffic data (vehicle count, speed, congestion levels, etc.) and send it to the backend.

Backend:
A Flask-based REST API receives sensor data, processes it (and optionally runs machine learning predictions for congestion), stores it in a PostgreSQL database, and exposes endpoints for traffic statistics.

Database:
PostgreSQL stores sensor data and aggregated traffic events. We use SQLAlchemy to manage interactions.

Frontend:
A React.js dashboard that retrieves data via API calls, shows real-time charts (e.g., using Chart.js), and allows traffic managers to view and respond to events.

Optional Enhancements:
A messaging system (e.g., using WebSockets/Socket.IO) can be added for real-time push updates to the dashboard.
