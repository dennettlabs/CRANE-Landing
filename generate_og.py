from PIL import Image

# Open the logo
logo_path = 'public/dennettlabslogo.png'
try:
    logo = Image.open(logo_path).convert("RGBA")
except Exception as e:
    print("Error opening logo:", e)
    exit(1)

# The target size
bg_width, bg_height = 1200, 630

# Create a black background
bg = Image.new("RGBA", (bg_width, bg_height), (0, 0, 0, 255))

# Resize logo to fit within 400x400 while preserving aspect ratio
logo.thumbnail((400, 400), Image.Resampling.LANCZOS)

# Calculate position to center the logo
logo_w, logo_h = logo.size
x = (bg_width - logo_w) // 2
y = (bg_height - logo_h) // 2

# Paste the logo onto the background using the logo's alpha channel as a mask
bg.paste(logo, (x, y), logo)

# Save the result as RGB to opengraph-image.png
bg.convert("RGB").save("src/app/opengraph-image.png")
print("Successfully generated src/app/opengraph-image.png")
