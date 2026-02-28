# SARATHI Quick Start

## 1. Install
```bash
npm install
```

## 2. Configure environment (`.env.local`)
```env
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_api_key
GROQ_API_KEY=your_groq_api_key
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/sarathi-emergency?retryWrites=true&w=majority&appName=Cluster0
```

## 3. Seed database
```bash
npx tsx scripts/seed-db.ts
```

## 4. Run app
```bash
npm run dev
```

## 5. Core routes to test
- `/public-sos`
- `/driver-login`
- `/driver/dashboard`
- `/driver/active-route`
- `/hospital-login`
- `/hospital/dashboard`
- `/police-login`
- `/police/dashboard`

## 6. Build check
```bash
npm run build
```
