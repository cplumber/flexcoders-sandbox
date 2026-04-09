module.exports = {
  apps: [
    {
      name: "flexcoders-sandbox",
      cwd: "/home/ubuntu/cplumber/flexcoders-sandbox",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        BASE_PATH: "/flexcoders-sandbox",
        PORT: "3002",
      },
    },
  ],
};
