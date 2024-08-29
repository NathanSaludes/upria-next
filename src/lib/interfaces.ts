export interface IPropertyPhotos {
   image_url: string;
   description: string;
   id: string;
}

export interface IUploadPreview {
   id: string;
   imageUrl: string;
   fileName: string;
   fileSize: number;
   uploadProgress: number;
}
