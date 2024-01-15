import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  server: {
    fs: {
      allow: ["src", "public"],
    },
  },
};