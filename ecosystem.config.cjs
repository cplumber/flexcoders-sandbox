module.exports = {
  apps: [
    {
      name: "flexcoders-sandbox",
      cwd: "/home/ubuntu/cplumber/flexcoders-sandbox",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: "3002",
      },
    },
  ],
};
