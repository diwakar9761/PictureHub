import ImageKit from '@imagekit/nodejs';

const imageKitClient = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'],
});

const uploadFile = async (buffer, name, type) => {
    const response = await imageKitClient.files.upload({
        file: buffer.toString('base64'),
        fileName: name,
        folder: type === "profileImage" ? "/PictureHub/users" : "/PictureHub/posts"
    });

    return response;
}

export default uploadFile;