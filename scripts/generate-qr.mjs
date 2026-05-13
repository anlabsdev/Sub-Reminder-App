import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const qrTarget = "https://subreminder.app/download";
const outputUrl = new URL("../public/assets/qr/download-qr.svg", import.meta.url);
const outputPath = fileURLToPath(outputUrl);

await mkdir(dirname(outputPath), { recursive: true });

await QRCode.toFile(outputPath, qrTarget, {
  type: "svg",
  width: 360,
  margin: 2,
  color: {
    dark: "#0d3433",
    light: "#f7faf6",
  },
});

console.log(`QR code generated for ${qrTarget}`);
