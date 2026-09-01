# MachPdMAI (Machine Predictive Maintenance AI)

An industrial-grade, physics-informed Predictive Maintenance (PdM) AI web platform cloned and enhanced from Uptake.com specifications.

## Features & Highlights

- **Predictive Telemetry Console**: Real-time high-frequency 10kHz piezo-vibration FFT spectrum analysis, infrared thermal kinetics, hydraulic pressure wave modeling, and remaining useful life (RUL) estimations.
- **Dual Database Architecture**: Django SQLite ORM (`db.sqlite3`) as the primary datastore + fail-soft PyMongo cloud mirror to MongoDB Atlas Cloud (`machpdmai_db`).
- **Stripe Subscription Checkout**: Consolidated modal for $100 (Basic Fleet), $150 (Professional AI), and $200 (Enterprise Plant) monthly tiers with card validation and 30-day active validity checking.
- **Protected Subscriber Hub**: Subscriber portal (`/paid-services`) for active subscribers to submit specialized engineering requests (sensor deployment, digital twin modeling, dedicated AI engineer dispatch).
- **Executive Admin Console**: Secure admin analytics dashboard accessible strictly via `/admin` protected by header passcode (`X-Admin-Passcode: aliabbas1234578!`).
- **Mobile Responsive Design**: Full Android and iOS viewport responsiveness with sliding drawers and touch-optimized bounded modals.

## Tech Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS, Lucide Icons, HTML5 2D Canvas.
- **Backend**: Python 3.12, Django 5 REST Framework, SQLite 3, PyMongo (MongoDB Atlas).
- **Authentication & Security**: Passcode header authorization, Stripe simulation tokenization.

## Quick Start

### 1. Backend Setup
```bash
cd backend
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Visit the application at `http://localhost:5173`.
