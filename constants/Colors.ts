const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const tintColorOrange = '#FFA500'; // This is just an example orange color.

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  orange: {
    text: '#FFFFFF', // White text for contrast against darker backgrounds.
    background: '#FF5722', // A deeper orange shade for backgrounds.
    tint: tintColorOrange, // Primary theme color for the app.
    tabIconDefault: '#FFCCBC', // A lighter orange for default tab icons.
    tabIconSelected: tintColorOrange, // Use the primary orange color for selected tab icons.
  },
};
