import os
from tqdm import tqdm
from struct import unpack

marker_mapping = {
    0xffd8: "Start of Image",
    0xffe0: "Application Default Header",
    0xffdb: "Quantization Table",
    0xffc0: "Start of Frame",
    0xffc4: "Define Huffman Table",
    0xffda: "Start of Scan",
    0xffd9: "End of Image"
}

class JPEG:
    def __init__(self, image_file):
        with open(image_file, 'rb') as f:
            self.img_data = f.read()
    
    def decode(self):
        data = self.img_data
        while(True):
            marker, = unpack(">H", data[0:2])
            # print(marker_mapping.get(marker))
            if marker == 0xffd8:
                data = data[2:]
            elif marker == 0xffd9:
                return
            elif marker == 0xffda:
                data = data[-2:]
            else:
                lenchunk, = unpack(">H", data[2:4])
                data = data[2+lenchunk:]            
            if len(data)==0:
                raise TypeError("issue reading jpeg file")           


bads = []

cataract_dir = 'D:\\Kuliah\\Proyek Akhir 2022\\Dataset Source\\Cataract'
dr_dir = 'D:\\Kuliah\\Proyek Akhir 2022\\Dataset Source\\Diabetic Retinopathy'
glaucoma_dir = 'D:\\Kuliah\\Proyek Akhir 2022\\Dataset Source\\Glaucoma'
normal_dir = 'D:\\Kuliah\\Proyek Akhir 2022\\Dataset Source\\Normal'
img_dir = normal_dir

for dirName, subdirList, fileList in os.walk(img_dir):
    imagesList = fileList

    for img in tqdm(imagesList):
        image = os.path.join(img_dir, img)
        image = JPEG(image) 
        try:
            image.decode()   
        except:
            bads.append(img)


for name in bads:
#   os.remove(os.path.join(img_dir, name))
    print(name)