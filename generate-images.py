#!/usr/bin/env python3
"""
Generate sample placeholder images for ISKCON Satara website
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if it doesn't exist
os.makedirs('images', exist_ok=True)

def create_placeholder(filename, size, color, text):
    """Create a placeholder image with text"""
    img = Image.new('RGB', size, color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 30)
    except:
        font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Calculate text position (center)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((size[0] - text_width) // 2, (size[1] - text_height) // 2 - 30)
    
    # Draw text with shadow
    shadow_pos = (position[0] + 2, position[1] + 2)
    draw.text(shadow_pos, text, fill=(0, 0, 0, 128), font=font)
    draw.text(position, text, fill=(255, 255, 255), font=font)
    
    # Draw size info
    size_text = f"{size[0]}x{size[1]}"
    size_bbox = draw.textbbox((0, 0), size_text, font=small_font)
    size_width = size_bbox[2] - size_bbox[0]
    size_pos = ((size[0] - size_width) // 2, position[1] + 80)
    draw.text(size_pos, size_text, fill=(255, 255, 255, 200), font=small_font)
    
    # Save image
    img.save(f'images/{filename}', 'JPEG', quality=85)
    print(f"✓ Created: images/{filename}")

# Define images to create
images_config = [
    # Landing and Hero
    ('landing-bg.jpg', (1920, 1080), (255, 107, 53), 'ISKCON Satara'),
    ('hero-bg.jpg', (1920, 600), (247, 147, 30), 'Welcome'),
    ('temple.jpg', (800, 600), (44, 62, 80), 'Temple'),
    
    # Festivals
    ('janmashtami.jpg', (600, 400), (255, 140, 0), 'Janmashtami'),
    ('gaura-purnima.jpg', (600, 400), (255, 215, 0), 'Gaura Purnima'),
    ('rathyatra.jpg', (600, 400), (255, 69, 0), 'Rath Yatra'),
    ('radhashtami.jpg', (600, 400), (255, 105, 180), 'Radhashtami'),
    ('diwali.jpg', (600, 400), (255, 165, 0), 'Diwali'),
    ('govardhan-puja.jpg', (600, 400), (34, 139, 34), 'Govardhan Puja'),
    
    # Articles
    ('article1.jpg', (600, 400), (70, 130, 180), 'Philosophy'),
    ('article2.jpg', (600, 400), (60, 179, 113), 'Lifestyle'),
    ('article3.jpg', (600, 400), (186, 85, 211), 'Practice'),
    ('article-karma.jpg', (600, 400), (220, 20, 60), 'Karma'),
    ('article-meditation.jpg', (600, 400), (72, 61, 139), 'Meditation'),
    ('article-puja.jpg', (600, 400), (255, 140, 0), 'Puja'),
    ('article-prahlad.jpg', (600, 400), (30, 144, 255), 'Prahlad'),
    ('article-gita.jpg', (600, 400), (255, 99, 71), 'Bhagavad Gita'),
    ('article-gita-chapter2.jpg', (600, 400), (218, 112, 214), 'Gita Ch. 2'),
    
    # Gift Shop - Books
    ('bhagavad-gita.jpg', (400, 400), (139, 69, 19), 'Bhagavad Gita'),
    ('srimad-bhagavatam.jpg', (400, 400), (178, 34, 34), 'Bhagavatam'),
    ('chaitanya-charitamrita.jpg', (400, 400), (184, 134, 11), 'Chaitanya'),
    ('krishna-book.jpg', (400, 400), (25, 25, 112), 'Krishna Book'),
    
    # Gift Shop - Deities
    ('radha-krishna-deity.jpg', (400, 400), (255, 140, 0), 'Radha Krishna'),
    ('gaura-nitai-deity.jpg', (400, 400), (255, 215, 0), 'Gaura Nitai'),
    ('jagannath-deity.jpg', (400, 400), (255, 69, 0), 'Jagannath'),
    ('prabhupada-deity.jpg', (400, 400), (139, 0, 0), 'Prabhupada'),
    
    # Gift Shop - Puja Items
    ('japa-mala.jpg', (400, 400), (139, 69, 19), 'Japa Mala'),
    ('incense.jpg', (400, 400), (160, 82, 45), 'Incense'),
    ('puja-thali.jpg', (400, 400), (218, 165, 32), 'Puja Thali'),
    ('diya.jpg', (400, 400), (255, 140, 0), 'Diya'),
    
    # Gift Shop - Clothing
    ('dhoti.jpg', (400, 400), (245, 245, 220), 'Dhoti'),
    ('kurta.jpg', (400, 400), (255, 228, 196), 'Kurta'),
    ('saree.jpg', (400, 400), (255, 182, 193), 'Saree'),
    ('tilak.jpg', (400, 400), (210, 105, 30), 'Tilak'),
    
    # Gift Shop - Music
    ('kirtan-cd.jpg', (400, 400), (70, 130, 180), 'Kirtan CD'),
    ('lecture-dvd.jpg', (400, 400), (100, 149, 237), 'Lecture DVD'),
    ('harmonium.jpg', (400, 400), (139, 69, 19), 'Harmonium'),
    ('kartals.jpg', (400, 400), (218, 165, 32), 'Kartals'),
    
    # Gift Shop - Gifts
    ('wall-hanging.jpg', (400, 400), (160, 82, 45), 'Wall Hanging'),
    ('calendar.jpg', (400, 400), (70, 130, 180), 'Calendar'),
    ('keychain.jpg', (400, 400), (255, 140, 0), 'Keychain'),
    ('gift-set.jpg', (400, 400), (220, 20, 60), 'Gift Set'),
]

print("\n🎨 Generating placeholder images for ISKCON Satara website...\n")

for config in images_config:
    create_placeholder(*config)

print(f"\n✅ Successfully created {len(images_config)} placeholder images!")
print("\n📁 All images saved in: images/")
print("\n💡 Tip: Replace these with real temple photos for production\n")
