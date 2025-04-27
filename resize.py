from PIL import Image

def resize_image_keep_aspect(input_path, output_path, new_height=300):
    # Open the original image
    img = Image.open(input_path)
    
    # Get original dimensions
    width, height = img.size
    
    # Calculate new width keeping the aspect ratio
    aspect_ratio = width / height
    new_width = int(new_height * aspect_ratio)
    
    # Resize the image
    resized_img = img.resize((new_width, new_height), Image.LANCZOS)
    
    # Save resized image
    resized_img.save(output_path)
    print(f"Image saved to {output_path} with size {new_width}x{new_height}")

# Example usage:
resize_image_keep_aspect("mcmaster.png", "mac.png", new_height=200)
