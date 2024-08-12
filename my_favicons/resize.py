from PIL import Image
import os

# Define the path to your original favicon image and the output directory
input_path = "my_favicons/favicon_io/android-chrome-512x512.png"  # Replace with your favicon path
output_dir = "my_favicons/processed_favicons"  # Replace with your desired output directory

# Ensure the output directory exists
os.makedirs(output_dir, exist_ok=True)

# Define the sizes you need
sizes = {
    "android-icon-36x36": (36, 36),
    "android-icon-48x48": (48, 48),
    "android-icon-72x72": (72, 72),
    "android-icon-96x96": (96, 96),
    "android-icon-144x144": (144, 144),
    "android-icon-192x192": (192, 192),
    "apple-icon-57x57": (57, 57),
    "apple-icon-60x60": (60, 60),
    "apple-icon-72x72": (72, 72),
    "apple-icon-76x76": (76, 76),
    "apple-icon-114x114": (114, 114),
    "apple-icon-120x120": (120, 120),
    "apple-icon-144x144": (144, 144),
    "apple-icon-152x152": (152, 152),
    "apple-icon-180x180": (180, 180),
    "favicon-16x16": (16, 16),
    "favicon-32x32": (32, 32),
    "favicon-96x96": (96, 96),
    "ms-icon-70x70": (70, 70),
    "ms-icon-144x144": (144, 144),
    "ms-icon-150x150": (150, 150),
    "ms-icon-310x310": (310, 310)
}

# Open the original image
with Image.open(input_path) as img:
    for name, size in sizes.items():
        # Resize the image
        resized_img = img.resize(size, Image.Resampling.LANCZOS)
        
        # Define the output path
        output_path = os.path.join(output_dir, f'{name}.png')
        
        # Save the resized image
        resized_img.save(output_path)
        print(f"Saved {output_path}")

print("All favicons have been generated successfully!")
