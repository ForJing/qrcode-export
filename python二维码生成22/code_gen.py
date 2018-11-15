import qrcode
from PIL import  ImageFont,ImageDraw
font = ImageFont.truetype('arial.ttf', 28)


a = {"HG000002425":"https://shop.hgobox.com/shop/2018101209535097405120", "HG000002255":"https://shop.hgobox.com/shop/2018092121131035801821"}

for vm_code, qr_url in a.items():
	img = qrcode.make(qr_url)
	draw = ImageDraw.Draw(img)
	draw.text((90, 340), vm_code, font=font)
	img.save("./result/{}.jpg".format(vm_code), 'jpeg')
