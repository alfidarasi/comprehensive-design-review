#!/usr/bin/env python3
"""Gambar penanda bernomor di screenshot untuk laporan design review.

Pemakaian:
  python3 scripts/annotate_screenshot.py <gambar> <penanda.json> [--out hasil.png] [--scale 2]

Format penanda.json (koordinat dalam piksel gambar; dengan --scale, koordinat CSS dikalikan):
  [
    {"n": 1, "x": 40, "y": 320, "w": 680, "h": 220},   # kotak di area bermasalah + nomor
    {"n": 2, "x": 512, "y": 88}                          # hanya nomor di titik itu
  ]

Untuk input URL, koordinat bisa diambil dengan Playwright: element.boundingBox() memberi x, y, width, height
dalam piksel CSS. Pakai --scale sesuai deviceScaleFactor screenshot.

Butuh Pillow: python3 -m pip install pillow
"""
import argparse
import json
import sys

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    sys.exit("Pillow belum terpasang. Jalankan: python3 -m pip install pillow")

ACCENT = (214, 40, 40)      # merah tua, kontras tinggi terhadap putih
HALO = (255, 255, 255)
TEXT = (255, 255, 255)


def load_font(size):
    for name in ("DejaVuSans-Bold.ttf", "Arial Bold.ttf", "Arial.ttf",
                 "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
                 "/System/Library/Fonts/Helvetica.ttc",
                 "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("image")
    ap.add_argument("markers")
    ap.add_argument("--out")
    ap.add_argument("--scale", type=float, default=1.0, help="pengali koordinat (misalnya 2 untuk screenshot retina)")
    args = ap.parse_args()

    img = Image.open(args.image).convert("RGB")
    W, H = img.size
    with open(args.markers, encoding="utf-8") as f:
        markers = json.load(f)

    base = max(W, H)
    radius = clamp(int(base * 0.018), 14, 40)
    stroke = clamp(int(base * 0.003), 3, 8)
    font = load_font(int(radius * 1.15))
    draw = ImageDraw.Draw(img)

    for m in markers:
        s = args.scale
        x, y = m["x"] * s, m["y"] * s
        w, h = m.get("w", 0) * s, m.get("h", 0) * s
        label = str(m["n"])

        if w and h:
            box = [x, y, x + w, y + h]
            draw.rectangle(box, outline=HALO, width=stroke + 4)
            draw.rectangle(box, outline=ACCENT, width=stroke)
            cx, cy = x, y  # nomor di sudut kiri atas kotak
        else:
            cx, cy = x, y

        cx = clamp(cx, radius + 2, W - radius - 2)
        cy = clamp(cy, radius + 2, H - radius - 2)
        draw.ellipse([cx - radius - 3, cy - radius - 3, cx + radius + 3, cy + radius + 3], fill=HALO)
        draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=ACCENT)
        bbox = draw.textbbox((0, 0), label, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        draw.text((cx - tw / 2 - bbox[0], cy - th / 2 - bbox[1]), label, font=font, fill=TEXT)

    out = args.out or args.image.rsplit(".", 1)[0] + "-penanda.png"
    img.save(out)
    print(out)


if __name__ == "__main__":
    main()
