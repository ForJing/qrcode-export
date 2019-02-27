import qrcode
import json
import os
import shutil
from PIL import ImageFont, ImageDraw
font = ImageFont.truetype('arial.ttf', 28)


def generate(data):
    for vm_code, qr_url in data.items():
        img = qrcode.make(qr_url)
        draw = ImageDraw.Draw(img)
        draw.text((90, 340), vm_code, font=font)
        img.save("./result/{}.jpg".format(vm_code), 'jpeg')


with open('data.json') as f:
    data = json.load(f)
    if os.path.isdir('./result'):
        shutil.rmtree('./result')
    os.mkdir('./result')
    generate(data)
