# dinner-wheel
Spin the wheel and decide where to eat!

# Dinner Wheel

**End the "Where should we eat?" debate.**  
Dinner Wheel helps you and your family pick a restaurant by spinning a colorful wheel — and letting fate decide!

Built for simplicity, fun, and fast decisions.  
Deployed serverlessly via AWS S3 for high availability and zero maintenance.

---

## Features
- Add your own list of restaurants
- Spin a colorful, animated wheel to randomly select a winner
- Save favorite lists using browser localStorage
- Clear or reset the list anytime
- Mobile-friendly design for easy access on the go
- (Optional stretch goal: confetti effects, sound, starter lists)

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Hosting:** AWS S3 (Static Website Hosting)
- **Storage:** Browser localStorage for user restaurant lists

---

## Roadmap
- ✅ Basic app layout (header, input, spin button)
- ✅ Restaurant list management
- ✅ Dynamic spinning wheel generation
- ✅ Randomized selection animation
- ✅ Save/load lists with localStorage
- ✅ Mobile responsive styling
- ✅ AWS S3 deployment for live hosting

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/dinner-wheel.git
```

### 2. Run Locally
Open index.html directly in your browser
(or use a simple local web server if you prefer)

### 3. Deploy Serverlessly (AWS S3)
Create an S3 bucket

Enable Static Website Hosting on the bucket

Upload your HTML, CSS, and JS files

Set bucket policy for public read-only access

Access your Dinner Wheel app from your public S3 URL

## Deployment
Hosted serverlessly via AWS S3.
(Live URL will be added here after MVP launch.)

## License
This project is licensed under the MIT License.

## Future Enhancements (Post-MVP)
🎉 Confetti effects when a restaurant is selected

🔊 Sound effect on wheel spin

🗺️ Location-based restaurant suggestions

🌙 Dark mode support

📱 PWA (Progressive Web App) upgrade for offline use

## Project Status
🚀 MVP build in progress
Target Delivery: 14 Days from project start
