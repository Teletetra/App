// Washerman/
// ├── assets/                 # Default Expo assets (splash, icon) - replace with your blue ones
// ├── src/
// │   ├── assets/             # In-app images, illustrations (e.g., the 3D city, washing machine icons)
// │   │   ├── images/
// │   │   └── icons/
// │   │
// │   ├── components/         # Reusable UI elements (Your design system)
// │   │   ├── Button.tsx      # The big blue 'Continue' / 'Confirm' buttons
// │   │   ├── InputField.tsx  # The text inputs for phone numbers/names
// │   │   ├── ScreenHeader.tsx# The custom header with back buttons
// │   │   ├── ServiceCard.tsx # The cards for "Wash & Fold", "Ironing" (Image 6)
// │   │   └── TabBarIcon.tsx  # Bottom navigation icons
// │   │
// │   ├── navigation/         # React Navigation setup
// │   │   ├── AppNavigator.tsx     # Main stack (Auth vs Main App)
// │   │   ├── AuthNavigator.tsx    # Login -> Location -> Profile Setup
// │   │   └── BottomTabs.tsx       # Home | Bookings
// │   │
// │   ├── screens/            # Mapping directly to your screenshots
// │   │   ├── auth/
// │   │   │   ├── SplashScreen.tsx # (Image 2) Blue background, "Washerman" logo
// │   │   │   ├── LoginScreen.tsx  # (Image 3 & 4) Phone number input, image carousel
// │   │   │   └── ProfileSetup.tsx # (Image 7 & 8) "Help us know you better" form
// │   │   │
// │   │   ├── location/
// │   │   │   ├── LocationPrompt.tsx # (Image 5) 3D city illustration, "What's your location?"
// │   │   │   └── LocationSearch.tsx # (Image 9) Search bar, saved addresses
// │   │   │
// │   │   ├── main/
// │   │   │   ├── HomeScreen.tsx     # (Image 6) Location header, services grid, "Coming soon"
// │   │   │   └── BookingsScreen.tsx # (Image 10) Upcoming/Past tabs, empty state
// │   │
// │   ├── theme/              # Centralized styling to easily manage the "Blue" theme
// │   │   ├── colors.ts       # Primary blue, text colors, background colors
// │   │   ├── typography.ts   # Font sizes, weights (Pronto uses nice rounded fonts)
// │   │   └── spacing.ts      # Standardized margins and paddings
// │   │
// │   ├── types/              # TypeScript interfaces
// │   │   ├── navigation.ts   # Route params typing
// │   │   └── models.ts       # Types for User, ServiceItem, Booking
// │   │
// │   └── utils/              # Helper functions
// │       └── constants.ts    # e.g., list of dummy services, API endpoints
// │
// ├── App.tsx                 # Entry point, wraps everything in Navigation/Theme providers
// ├── app.json                # Expo config (set primaryColor here)
// ├── package.json
// └── tsconfig.json