import { IProduct, IProductOfferings } from "@/shared/interfaces";

export interface IUSPCardsProps {
   title: string;
   description: string;
}

export interface IWhyGridlinesProps {
   title: string;
   description: string;
}

export interface IFAQProps {
   label: string;
   children: string;
}
export interface IProductContentProps {
   PRODUCT_INTEGRATION_CODE: string;
   WHY_GRIDLINES_ILLUSTRATION: string;
   USP_CARDS: Array<IUSPCardsProps>;
   WHY_GRIDLINES: Array<IWhyGridlinesProps>;
   FAQ: Array<IFAQProps>;
}
export interface IProductProps {
   product: IProduct;
   selectedOfferingIndex: number;
   handleSelectedOfferingIndex: (index: number) => void;
   salesIconVisibility: boolean;
   handleChangeSalesIconVisibility: (visibility: boolean) => void;
   handleChangeRedirect: (route: string) => void;
   isMobileScreen: boolean;
   productContent: IProductContentProps;
}

export interface IProductOfferingsExpansionProps {
   product: IProduct;
   selectedOfferingIndex: number;
   handleSelectedOfferingIndex: (index: number) => void;
   productOfferings: Array<IProductOfferings>;
   handleChangeRedirect: (route: string) => void;
   isMobileScreen: boolean;
}

export interface IOfferingCardProps {
   product: IProduct;
   selectedOfferingIndex: number;
   salesIconVisibility?: boolean;
   handleChangeSalesIconVisibility?: (visibility: boolean) => void;
   handleChangeRedirect: (route: string) => void;
   productOfferings: Array<IProductOfferings>;
   isMobileScreen?: boolean;
}
