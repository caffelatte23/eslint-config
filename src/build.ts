await Bun.build({
  entrypoints: ["src/index.ts"],
  target: "node",
  outdir: "dist",
});
