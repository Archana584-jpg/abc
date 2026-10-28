export interface IProduct {
   key: string;
   offerings: Array<IProductOfferings>;
   overview: string;
   name: string;
   overview_illustration_uri: string;
   docs_uri: string;
}

export interface IProductOfferings {
   name: string;
   title: string;
   price: string | number;
   image_uri: string;
}

export interface ISEOMetaContent {
   title: string;
   description: string;
}

export interface ICategory {
   id: string;
   name: string;
   description: string;
   image_uri: string;
}

export interface IProductByCategoryId {
   key: string;
   image_uri: string;
   name: string;
   categories: Array<ICategory>;
   description: string;
}
