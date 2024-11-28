module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'box': '#151D32',
      'white': '#ffffff',
    },
    extend: {
      boxShadow:{
        'box':'0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'box': '0.3125rem',
      }
    },
  },
  plugins: [],
}
