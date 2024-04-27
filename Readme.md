# EV Charging Slot Booking Portal

Welcome to the EV Charging Slot Booking Portal! This project aims to provide a convenient platform for EV owners to book slots for charging their vehicles. The portal includes features such as user authentication, profile management, notification settings, theme customization, and more.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript (with jQuery for frontend interactions)
  - EJS (Embedded JavaScript) for server-side rendering
  
- **Backend:**
  - Node.js
  - Express.js (web application framework for Node.js)
  
- **Database:**
  - MongoDB (for storing user data and booking information)
  
- **Map Integration:**
  - Google Maps API (for displaying charging station locations and navigation)
  
## Features

- User Authentication: Users can sign up and log in to access the portal.
- Profile Management: Users can edit their profile details, including username, email, and profile picture.
- Notification Settings: Users can manage their notification preferences, including push notifications and email notifications.
- Theme Customization: Users can choose between light and dark themes for the portal.
- Language Settings: Users can change the language of the portal interface.
- Charging Station Booking: Users can view available charging stations, book slots for charging, and view booking details.
- Google Maps Integration: Users can view charging station locations on Google Maps and navigate to the selected station.
- Security Settings: Users can manage security features such as account lock/unlock, PIN/passcode, and security questions.

## Setup Instructions

1. **Clone the Repository:**

git clone https://github.com/your-username/ev-charging-slot-booking.git
cd ev-charging-slot-booking


2. **Install Dependencies:**

npm install


3. **Set Environment Variables:**
Create a `.env` file in the root directory and add the following variables:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/ev_charging_portal
GOOGLE_MAPS_API_KEY=your_google_maps_api_key


4. **Start the Server:**

npm start


5. **Access the Portal:**
Open a web browser and navigate to `http://localhost:3000` to access the EV Charging Slot Booking Portal.

## Node.js Version

This project uses Node.js version 14.17.0. Make sure you have Node.js installed on your system.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for detail